import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Agenda from "./components/Agenda";
import News from "./components/News";
import Events from "./components/Events";
import Join from "./components/Join";
import Footer from "./components/Footer";


import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";



function PublicSite(){

return (

<>
<Navbar/>
<Hero/>
<About/>
<Agenda/>
<News/>
<Events/>
<Join/>
<Footer/>
</>

)

}





function App(){

return (

<BrowserRouter>


<Routes>


<Route
path="/"
element={<PublicSite/>}
/>


<Route
path="/admin"
element={<AdminLogin/>}
/>


<Route
path="/dashboard"
element={<AdminDashboard/>}
/>


</Routes>


</BrowserRouter>


)

}


export default App;