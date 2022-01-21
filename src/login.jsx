import { useConnect } from "wagmi"
import {useNavigate}   from "react-router-dom"

const Login = () => {
    const [{ data, error }, connect] = useConnect()
    const navigate = useNavigate()
    return (
        <div>
            {data.connectors.map((x) => (
                <button disabled={!x.ready} key={x.id} onClick={() => {
                    connect(x)
                    navigate("/explore")
                }}>
                    {x.name}
                    {!x.ready && ' (unsupported)'}
                </button>
            ))}

            {error && <div>{error?.message ?? 'Failed to connect'}</div>}
        </div>
    )
}


export default Login