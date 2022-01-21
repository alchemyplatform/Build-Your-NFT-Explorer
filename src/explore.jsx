
import { useState } from 'react';
import NftCard from './components/nftcard';
import { useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';



// compiler: "FrankenPunks Generator"
// description: "We're a community-based collectibles project featuring art by 3D Punks. 3D FrankenPunks come in an evil array of shapes, traits, and sizes with a few surprises along the way. The collection size is 10,000. Each FrankenPunk allows its owner to vote on creating experiences and influencing project developments which are paid for by the Punksville Community Treasury."
// edition: 3406
// image: "ipfs://QmQYa6JwYnecVr1JZ3EMug5hrgcoegSAZaBR2pvc8P9ZUi/3406.png"
// name: "#3406"



const Explore = () => {

    // const [blockchain, setBlockchain] = useState() NOT IMPLEMENTED
    const [owner, setOwner] = useState()
    const [contractAddress, setContractAddress] = useState()
    const [NFTs, setNFTs] = useState()
    const [{ data: accountData }, disconnect] = useAccount()
    const navigate = useNavigate()

    const fetchNFTS = async () => {
        console.log("fetching nfts")
        if (owner) {
            let data;
            if (contractAddress) {
                data = await fetch(`https://eth-mainnet.alchemyapi.io/L9_nj7QcxFpgM9N-6EGfuUowlpWmA9py/v1/getNFTs?owner=${owner}&contractAddresses%5B%5D=${contractAddress}`).then(data => data.json())

            } else {
                data = await fetch(`https://eth-mainnet.alchemyapi.io/L9_nj7QcxFpgM9N-6EGfuUowlpWmA9py/v1/getNFTs?owner=${owner}`).then(data => data.json())
            }
            if (data.ownedNfts.length) {
                const NFTs = await Promise.all(data.ownedNfts.map(async (NFT) => {
                    const metadata = await fetch(`https://eth-mainnet.alchemyapi.io/L9_nj7QcxFpgM9N-6EGfuUowlpWmA9py/v1/getNFTMetadata?contractAddress=${NFT.contract.address}&tokenId=${NFT.id.tokenId}&tokenType=erc721`).then(data => data.json())
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
                setNFTs(NFTs)
            } else {
                setNFTs(null)
            }

        }
    }



    if (accountData && !owner) {
        console.log(accountData.address)
        setOwner(accountData.address)
        fetchNFTS()
    }

    return (
        <div>
            <div className=' py-10  mb-12 w-full   bg-blue-600 '>
                <div className='flex-grow flex justify-end mr-12 mb-12'>
                    {accountData ?
                        <div>
                            <p className='text-white'>{`${[...accountData.address].splice(0, 6).join("")}...${[...accountData.address].splice(37).join("")}`}</p>
                            <button className=" py-2 px-4 rounded-lg bg-white" onClick={() => disconnect()}>Disconnect</button>
                        </div>
                        
                        : <button className=" py-2 px-4 bg-white" onClick={() => navigate("/")}>Connect</button>} 
                </div>
                <div className='flex flex-col items-center mb-12'>
                    <div className='mb-16 text-white text-center'>
                        <h1 className='text-5xl  font-bold mb-2'>
                            Alchemy NFT Explorer
                        </h1>

                        <p>Lorem ipsum dolor sit amet your wallet address</p>
                    </div>
                    <div className='flex justify-center mb-4 w-3/5 '>
                        <input className="border rounded-sm focus:outline-none py-2 px-3 mr-2 w-2/6" value={owner} onChange={(e) => setOwner(e.target.value)} placeholder='Insert your wallet address'></input>
                        <input className="focus:outline-none rounded-sm py-2 px-3 w-2/6" onChange={(e) => setContractAddress(e.target.value)} placeholder='Insert NFT address (optional)'></input>

                    </div>
                    <div className='w-3/5 flex justify-center'>
                        <button className='py-3 bg-white rounded-sm w-4/6 hover:bg-slate-100' onClick={fetchNFTS}>Search</button>
                    </div>
                </div>

                

            </div>

            <div className='flex flex-wrap justify-center'>
                    {NFTs ? NFTs.map(NFT => {
                        return (
                            <>
                                {
                                    NFT.image && <NftCard image={NFT.image} id={NFT.id} title={NFT.title} description={NFT.description} address={NFT.contractAddress} attributes={NFT.attributes}></NftCard>

                                }
                            </>
                        )
                    }) : <div>No NFTs found</div>}
                </div>
        </div>
    )
}


export default Explore