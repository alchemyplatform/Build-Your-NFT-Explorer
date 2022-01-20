import './App.css';
import { useState } from 'react';

function App() {
  const [blockchain, setBlockchain] = useState()
  const [owner, setOwner] = useState()
  const [contractAddress, setContractAddress] = useState()
  const [NFTs, setNFTs] = useState()

  const fetchNFTS = async () => {
    if (owner) {
      let data;
      if (contractAddress) {
        data = await fetch(`https://eth-mainnet.alchemyapi.io/L9_nj7QcxFpgM9N-6EGfuUowlpWmA9py/v1/getNFTs?owner=${owner}&contractAddresses%5B%5D=${contractAddress}`).then(data => data.json())

      } else {
        data = await fetch(`https://eth-mainnet.alchemyapi.io/L9_nj7QcxFpgM9N-6EGfuUowlpWmA9py/v1/getNFTs?owner=${owner}`).then(data => data.json())
      }

      const NFTs = await Promise.all(data.ownedNfts.map(async (NFT) => {
        const image = await fetch(`https://eth-mainnet.alchemyapi.io/L9_nj7QcxFpgM9N-6EGfuUowlpWmA9py/v1/getNFTMetadata?contractAddress=${NFT.contract.address}&tokenId=${NFT.id.tokenId}&tokenType=erc721`).then(data => data.json())
        return {
          contractAddress: NFT.contract.address,
          id: NFT.id.tokenId,
          image: image.media.uri ? image.media.uri : "https://via.placeholder.com/500",
        }
      }))
      setNFTs(NFTs)
    }
  }

  return (
    <div className="App py-5 flex flex-col justify-center items-center">
      <div className='mb-12 text-white'>
        <h1 className='text-5xl  font-bold mb-2'>
          Alchemy NFT Explorer
        </h1>

        <p>Lorem ipsum dolor sit amet your wallet address</p>
      </div>
      <div className='flex justify-center mb-4 w-3/5'>
        <input className="border rounded-sm focus:outline-none py-2 px-3 mr-2 w-2/6" onChange={(e) => setOwner(e.target.value)} placeholder='Insert your wallet address'></input>
        <input className="focus:outline-none rounded-sm py-2 px-3 w-2/6"  onChange={(e) => setContractAddress(e.target.value)} placeholder='Insert NFT address (optional)'></input>

      </div>
      <div className='w-3/5'>
        <button className='py-2 px-6 bg-white rounded-sm w-2/3 hover:bg-slate-100' onClick={fetchNFTS}>Search</button>

      </div>
      <div>
        {NFTs && NFTs.map(NFT => {
          console.log(NFT)
          return (
            <div>
              {NFT.image && <img key={NFT.id} src={NFT.image}></img>}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
