const ChainSelector = ({setBlockchain, chain}) => {
    return (
        <div className='flex gap-12 items-center text-white my-4'>
            <div>
                <input onChange={(e) => setBlockchain(e.target.value)} className='mr-1' type="radio" name='blockchain' value="Ethereum" id="chain-eth" checked={chain == "Ethereum"} />
                <label htmlFor="chain-eth">Ethereum</label>
            </div>
            <div>
                <input onChange={(e) => setBlockchain(e.target.value)} className='mr-1' type="radio" name='blockchain' value="Rinkeby" id="chain-rinkeby" checked={chain == "Rinkeby"} disabled />
                <label htmlFor="chain-rinkeby">Rinkeby</label>
            </div>

            <div>
                <input onChange={(e) => setBlockchain(e.target.value)} className='mr-1' type="radio" name='blockchain' value="Polygon" id="chain-polygon" checked={chain == "Polygon"} />
                <label htmlFor="chain-polygon">Polygon</label>
            </div>
            <div>
                <input onChange={(e) => setBlockchain(e.target.value)} className='mr-1' type="radio" name='blockchain' value="Mumbai" id="chain-mumbai" checked={chain == "Mumbai"} />
                <label htmlFor="chain-mumbai">Mumbai</label>
            </div>
        </div>
    )
}

export default ChainSelector