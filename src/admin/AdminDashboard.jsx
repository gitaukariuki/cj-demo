import "./admin.css";
import ManageProfile from "./ManageProfile";
import ManageManifesto from "./ManageManifesto";
import ManageNews from "./ManageNews";
import ManageEvents from "./ManageEvents";


function AdminDashboard(){


return (

<div className="admin-layout">


{/* SIDEBAR */}

<aside className="sidebar">

<h2>
Tebere Campaign
</h2>


<a>Dashboard</a>
<a>Candidate</a>
<a>Manifesto</a>
<a>News</a>
<a>Events</a>
<a>Supporters</a>


</aside>





{/* MAIN */}

<main className="admin-main">


<header className="topbar">

<h1>
Campaign Dashboard
</h1>


<div>
Admin
</div>


</header>





<div className="stats">


<div className="stat-card">

<h3>
Supporters
</h3>

<h1>
2,540
</h1>

</div>



<div className="stat-card">

<h3>
Events
</h3>

<h1>
18
</h1>

</div>



<div className="stat-card">

<h3>
Updates
</h3>

<h1>
34
</h1>

</div>



</div>





<div className="panel">


<ManageProfile/>


</div>


<div className="panel">


<ManageManifesto/>


</div>



<div className="panel">


<ManageNews/>


</div>



<div className="panel">


<ManageEvents/>


</div>



</main>



</div>


)


}


export default AdminDashboard;