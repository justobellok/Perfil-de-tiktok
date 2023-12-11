import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Like from "./Like";
import Private from "./Private";
import NoPage from "./NoPage"


const Principal = ()=>{
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Like />} />
                <Route path="private" element={<Private />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
}

export default Principal;