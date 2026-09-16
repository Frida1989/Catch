import { createContext, useState } from "react";
function Login() {
  const [logIn, setLoggedIn] = useState([false]);
  return(
    <div className="login">
        {logIn ? "Hello Beauifull": "Please Login"};
        <button onClick={()=>setLoggedIn{!logIn}>{logIn ?"Logout" : "Login"}</button>
    </div>
    )
}
