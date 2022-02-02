import NftCard from "../components/nftcard";

const getAddressNFTs = async (endpoint, owner, contractAddress) => {
    if (owner) {
        let data;
        try {
            if (contractAddress) {
                data = await fetch(`${endpoint}/v1/getNFTs?owner=${owner}&contractAddresses%5B%5D=${contractAddress}`).then(data => data.json())
    
            } else {
                // data = await fetch(`${endpoint}/v1/getNFTs?owner=${owner}`).then(data => data.json())
                data = await fetch(`${endpoint}/v1/getNFTs?owner=${owner}`).then(data => data.json())
                
            }
            console.log(data)
        } catch (e) {
            getAddressNFTs(endpoint, owner, contractAddress)
        }
        
        return data
    }
}

const getEndpoint = (chain) => {
    switch (chain) {
        case "Ethereum":
            return process.env.REACT_APP_ALCHEMY_ETHEREUM_ENDPOINT
            break;
        case "Polygon":
            return process.env.REACT_APP_ALCHEMY_POLYGON_ENDPOINT
            break;
        case "Mumbai":
            return process.env.REACT_APP_ALCHEMY_MUMBAI_ENDPOINT
            break;
        case "Rinkeby":
            return process.env.REACT_APP_ALCHEMY_RINKEBY_ENDPOINT
            break;
    }
}

const fetchNFTs = async (owner, setNFTs, chain, contractAddress) => {
    let endpoint = getEndpoint(chain)
    const data = await getAddressNFTs(endpoint, owner, contractAddress)
    if (data.ownedNfts.length) {
        const NFTs = await Promise.allSettled(data.ownedNfts.map(async (NFT) => {
                const metadata = await fetch(`${endpoint}/v1/getNFTMetadata?contractAddress=${NFT.contract.address}&tokenId=${NFT.id.tokenId}&tokenType=erc721`,).then(data => data.json())
                let image;

                if (metadata.media[0].uri.gateway.length) {
                    image = metadata.media[0].uri.gateway
                } else {
                    image = "https://via.placeholder.com/500"
                }

                return {
                    id: NFT.id.tokenId,
                    contractAddress: NFT.contract.address,
                    image,
                    title: metadata.metadata.name,
                    description: metadata.metadata.description,
                    attributes: metadata.metadata.attributes
                }
            
        }))
        let fullfilledNFTs = NFTs.filter(NFT => NFT.status == "fulfilled")
        console.log(fullfilledNFTs)
        setNFTs(fullfilledNFTs)
    } else {
        setNFTs(null)
    }

}


export { fetchNFTs, getAddressNFTs }
