import {Link,Outlet}from "react-router-dom";
const Layout=()=>{
    return(
        <>
            <div id="navbar">
                <ul>
                    <li>
                    <Link to="login" style={{color:"green"}}>Login</Link>
                    </li>
                    <li>
                    <Link to="register" style={{color:"green"}}>Register</Link>
                    </li>
                </ul>
            </div>
            <div id="content">
                <Outlet/>
            </div>
        </>
    );
};
export default Layout