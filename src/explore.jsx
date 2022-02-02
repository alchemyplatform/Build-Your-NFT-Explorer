
import { useState } from 'react';
import NftCard from './components/nftcard';
import {fetchNFTs} from './utils/fetchNFTs';
// compiler: "FrankenPunks Generator"
// description: "We're a community-based collectibles project featuring art by 3D Punks. 3D FrankenPunks come in an evil array of shapes, traits, and sizes with a few surprises along the way. The collection size is 10,000. Each FrankenPunk allows its owner to vote on creating experiences and influencing project developments which are paid for by the Punksville Community Treasury."
// edition: 3406
// image: "ipfs://QmQYa6JwYnecVr1JZ3EMug5hrgcoegSAZaBR2pvc8P9ZUi/3406.png"
// name: "#3406"



const Explore = () => {

    // const [blockchain, setBlockchain] = useState() NOT IMPLEMENTED
    const [owner, setOwner] = useState("")
    const [contractAddress, setContractAddress] = useState("")
    const [NFTs, setNFTs] = useState("")
    const [chain, setBlockchain] = useState("Ethereum")
  

    

    return (
        <div>
            <header className=' py-14  mb-12 w-full   bg-blue-600 '>
                <div className='flex-grow flex justify-end mr-12 mb-12'>
                   
                </div>
                <div className='flex flex-col items-center mb-12'>
                    <div className='mb-16 text-white text-center'>
                        <h1 className='text-5xl  font-bold mb-2'>
                            Alchemy NFT Explorer
                        </h1>
                        <p>Multichain inspector to find NFTs by owner and contract address </p>
                    </div>
                    <div className='flex flex-col items-center justify-center mb-4 w-2/6 gap-y-2 '>
                        <input className="border rounded-sm focus:outline-none py-2 px-3 w-full" value={owner} onChange={(e) => setOwner(e.target.value)} placeholder='Insert your wallet address'></input>
                        <input className="focus:outline-none rounded-sm py-2 px-3 w-full" value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} placeholder='Insert NFT address (optional)'></input>
                        <div className='flex gap-12 items-center text-white my-4'>
                            <div>
                                <input onChange={(e) => setBlockchain(e.target.value)} className='mr-1' type="radio" name='blockchain' value="Ethereum" checked={chain == "Ethereum"} />
                                <label htmlFor="Eth">Ethereum</label>
                            </div>
                            <div>
                                <input onChange={(e) => setBlockchain(e.target.value)} className='mr-1' type="radio" name='blockchain' value="Rinkeby" checked={chain == "Rinkeby"} disabled/>
                                <label htmlFor="Rinkeby">Rinkeby</label>
                            </div>

                            <div>
                                <input onChange={(e) => setBlockchain(e.target.value)}  className='mr-1' type="radio" name='blockchain' value="Polygon" checked={chain == "Polygon"}/>
                                <label htmlFor="Polygon">Polygon</label>
                            </div>
                            <div>
                                <input onChange={(e) => setBlockchain(e.target.value)} className='mr-1' type="radio" name='blockchain' value="Mumbai" checked={chain == "Mumbai"} disabled/>
                                <label htmlFor="Mumbai">Mumbai</label>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/6 flex justify-center'>
                        <button className='py-3 bg-white rounded-sm w-full hover:bg-slate-100' onClick={() => {fetchNFTs(owner, setNFTs, chain, contractAddress)}}>Search</button>
                    </div>
                </div>
            </header>

            <section className='flex flex-wrap justify-center'>
                {
                    NFTs ? NFTs.map(NFT => {
                        
                        return (
                           <NftCard  image={NFT.image} id={NFT.id} title={NFT.title} description={NFT.description} address={NFT.contractAddress} attributes={NFT.attributes}></NftCard>
                        )
                    }) : <div>No NFTs found</div>
                }
            </section>
        </div>
    )
}


export default Explore