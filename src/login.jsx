import { useConnect } from "wagmi"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const [{ data, error }, connect] = useConnect()
    const navigate = useNavigate()
    return (
        <div className="alchemy h-screen flex flex-col items-center justify-center gap-2 ">
            <h1 className="text-white text-3xl -mt-24 font-bold mb-12">
                Login
            </h1>
            {data.connectors.map((x) => (
                <div className="w-2/6">
                    <button className="py-3 w-full bg-white rounded-sm hover:bg-slate-100" disabled={!x.ready} key={x.id} onClick={() => {
                        connect(x)
                        navigate("/myprofile", {replace: true})
                    }}>
                        {x.name}
                        {!x.ready && ' (unsupported)'}
                    </button>
                </div>

            ))}
            {error && <div>{error?.message ?? 'Failed to connect'}</div>}
            <div className="text-white text-center mt-8 ">
                <p>or continue without</p>
                <Link className="font-bold" to={"/explore"}> logging in</Link>
            </div>

        </div>
    )
}
export default Login