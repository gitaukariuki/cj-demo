import ManageProfile from "./ManageProfile";
import ManageManifesto from "./ManageManifesto";
import ManageNews from "./ManageNews";
import ManageEvents from "./ManageEvents";


function AdminDashboard(){


return (

<div style={{
padding:"40px"
}}>


<h1>
Campaign Management Dashboard
</h1>


<div className="card">

<h2>
Supporters
</h2>

<h1>
2,540
</h1>

</div>



<ManageProfile/>

<hr/>


<ManageManifesto/>

<hr/>


<ManageNews/>

<hr/>


<ManageEvents/>


</div>

)

}


export default AdminDashboard;