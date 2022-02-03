import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import { fetchNFTs } from './utils/fetchNFTs';
import NftCard from './components/nftcard';
import Login from './login';
import ChainSelector from './components/chainSelector';
import ProfileImage from './utils/profileImages';
import { ClipboardIcon } from "@heroicons/react/outline"

const MyProfile = () => {
    const [{ data: accountData, loading }, disconnect] = useAccount()
    const [chain, setBlockchain] = useState("Ethereum")

    const [NFTs, setNFTs] = useState()
    useEffect(async () => {
        if (accountData) {
            const data = await fetchNFTs(accountData.address, setNFTs, chain)
        }
    }, [accountData, chain])


    return (
        <div>
            {
                loading ?
                    <div><h1>Loading...</h1></div> :
                    accountData ?
                        <div>
                            <header className=' py-40  mb-12 w-full flex flex-col items-center justify-center alchemy text-white '>
                                <ProfileImage width={"250"} />
                                <div className='flex flex-col items-center'>
                                    <div className='flex items-center'>
                                        <h3 className='mt-4 text-l'>{accountData.address}</h3>
                                        <ClipboardIcon onClick={() => navigator.clipboard.writeText(accountData.address)} className="h-4 w-4 -mt-2 text-slate-200 cursor-pointer"></ClipboardIcon>
                                    </div>

                                    <div className='mt-4'>
                                        <p>NFTs:<span>{NFTs ? NFTs.length : 0}</span></p>
                                    </div>
                                    <ChainSelector setBlockchain={setBlockchain} chain={chain} />
                                </div>
                            </header>
                            <div className='flex flex-wrap justify-center'>
                                {
                                    NFTs ? NFTs.map(NFT => {

                                        return (
                                            <NftCard key={NFT.value.id + NFT.value.contractAddress} image={NFT.value.image} id={NFT.value.id} title={NFT.value.title} description={NFT.value.description} address={NFT.value.contractAddress} attributes={NFT.value.attributes}></NftCard>
                                        )
                                    }) : <div>No NFTs found</div>
                                }
                            </div>
                        </div>
                        :
                        <div>
                            <Login />
                        </div>


            }
        </div>


    )




}

export default MyProfile