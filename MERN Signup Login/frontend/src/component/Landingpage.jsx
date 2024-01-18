import { Link,Outlet, useNavigate } from "react-router-dom";
const Landingpage=()=>{
    const name=window.localStorage.getItem("userName");
    const email=window.localStorage.getItem("userEmail");
    const navigate=useNavigate();
    const back=()=>{
        window.localStorage.clear();
        navigate("/");
    }
    return(
        <>
            <div id="landingnav">
                <ul>
                    <li>
                        <Link to="home">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="services">Services</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                    <li>
                        <button onClick={back} id="logout">Logout</button>
                    </li>
                </ul>
            </div>
            <div id="landingname">
               <h1>Wellcome {name}</h1>
            </div>
            <div id="landingContent">
                <Outlet/>
            </div>
        </>
    );
};
export default Landingpage