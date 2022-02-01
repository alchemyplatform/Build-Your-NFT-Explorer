import { useAccount } from 'wagmi';
import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { fetchNFTs, getAddressNFTs } from './utils/fetchNFTs';

const MyProfile = () => {
    const [{ data: accountData, loading }, disconnect] = useAccount()
    const [NFTs, setNFTs] = useState()

    useEffect(async () => {
        if (accountData) {
            const data = await fetchNFTs(accountData.address, setNFTs)
        }
        console.log(NFTs)
    }, [accountData])
    // if (accountData) {
    //     return (
    //         <div>
    //             <h1>Hello</h1>
    //         </div>
    //     )
    // } else {

    // }

    return (
        <div>
            {
                loading ?
                    <div><h1>Loading...</h1></div> :
                    accountData ?
                        <header className=' py-40  mb-12 w-full flex flex-col items-center justify-center bg-blue-600 text-white '>
                            <img src='https://via.placeholder.com/200'></img>
                            <div><h3 className='mt-4 text-xl'>{accountData.address}</h3>
                                <div className='mt-4'>
                                    <p>NFTs:<span>{NFTs ? NFTs.length : 0}</span></p>
                                </div>
                            </div>


                        </header>
                        :
                        <div>

                        </div>


            }
        </div>


    )




}

export default MyProfile