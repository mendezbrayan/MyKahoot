import { BrowserRouter,Routes, Route } from "react-router-dom";
import LayoutAdmin from "../pages/LayoutAdmin/LayoutAdmin";
import LayoutCliente from "../pages/LayoutCliente/LayoutCliente";
import CreateTest from "../pages/CreateTest/CreateTest";
import StartGame from "../pages/StartGame/StartGame";
import { KahootProvider } from "../context";

const RoutesKahoot = () => {
    return (
        <>
<KahootProvider>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LayoutAdmin/>}/>          
            <Route path="/create" element={<CreateTest/>}/>
            <Route path="/game/:codigo" element={<LayoutCliente/>}/>
            
            <Route path="/game/:codigo/start" element={<StartGame/>}/>
        </Routes>
        </BrowserRouter>
</KahootProvider>

        </>
    );
}

export default RoutesKahoot;