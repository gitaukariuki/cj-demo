import {useState} from "react";


function ManageManifesto(){


const [items,setItems]=useState([]);


function add(){


setItems([
...items,
"New development priority"
]);

}



return (

<div>


<h2>
Manage Manifesto
</h2>


<button onClick={add}>
Add Priority
</button>


{

items.map(
(i,n)=>
<p key={n}>
{i}
</p>
)

}


</div>

)

}


export default ManageManifesto;