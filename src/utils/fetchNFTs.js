
const getAddressNFTs = async (owner, contractAddress) => {
    console.log("contract address", contractAddress)
    if (owner) {
        let data;
        if (contractAddress) {
            data = await fetch(`${process.env.REACT_APP_ALCHEMY_ETHEREUM_ENDPOINT}/v1/getNFTs?owner=${owner}&contractAddresses%5B%5D=${contractAddress}`).then(data => data.json())

        } else {
            data = await fetch(`${process.env.REACT_APP_ALCHEMY_ETHEREUM_ENDPOINT}/v1/getNFTs?owner=${owner}`).then(data => data.json())
        }
        console.log("data", data)
        return data
    }
}

const fetchNFTs = async (owner, setNFTs, contractAddress) => {
    const data = await getAddressNFTs(owner, contractAddress)
        
        if (data.ownedNfts.length) {
            const NFTs = await Promise.all(data.ownedNfts.map(async (NFT) => {
                const metadata = await fetch(`${process.env.REACT_APP_ALCHEMY_ETHEREUM_ENDPOINT}/v1/getNFTMetadata?contractAddress=${NFT.contract.address}&tokenId=${NFT.id.tokenId}&tokenType=erc721`).then(data => data.json())
                console.log(metadata)
                return {
                    id: NFT.id.tokenId,
                    contractAddress: NFT.contract.address,
                    image: metadata.metadata ? metadata.alternateMedia[0].uri : "https://via.placeholder.com/500",
                    title: metadata.metadata.name,
                    description: metadata.metadata.description,
                    attributes: metadata.metadata.attributes
                }
            }))
            console.log("NFTS", NFTs)
            setNFTs(NFTs)
        } else {
            setNFTs(null)
        }

    }


export {fetchNFTs, getAddressNFTs}
