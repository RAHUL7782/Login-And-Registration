import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";
import Registration from "./Registration";
import Landingpage from "./Landingpage";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
const App=()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Login/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Registration/>}/>
                    </Route>
                    <Route path="landingpage" element={<Landingpage/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/landingpage/home" element={<Home/>}/>
                        <Route path="/landingpage/about" element={<About/>}/>
                        <Route path="/landingpage/services" element={<Services/>}/>
                        <Route path="/landingpage/contact" element={<Contact/>}/>
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default App;