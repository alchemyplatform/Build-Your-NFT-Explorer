import { BrowserRouter, Routes, Route, Switch } from "react-router-dom"
import Explore from "../explore"
import Login from "../login"


const Nav = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/explore" element={<Explore/>}/>
                </Routes>
            </BrowserRouter>
    )
}

export default Nav