import {useState} from "react";
import {useNavigate} from "react-router-dom";


function AdminLogin(){


const [user,setUser]=useState("");
const [pass,setPass]=useState("");

const navigate=useNavigate();



function login(e){

e.preventDefault();


if(
user==="admin" &&
pass==="admin123"
){

navigate("/dashboard");

}

else{

alert("Demo login: admin / admin123");

}

}



return (

<div className="login-page">

<h1>
Campaign Admin Login
</h1>


<form onSubmit={login}>


<input

placeholder="Username"

onChange={
e=>setUser(e.target.value)
}

/>


<br/><br/>


<input

type="password"

placeholder="Password"

onChange={
e=>setPass(e.target.value)
}

/>


<br/><br/>


<button>

Login

</button>


</form>


</div>

)

}


export default AdminLogin;