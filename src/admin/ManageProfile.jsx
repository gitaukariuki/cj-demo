import {useState} from "react";


function ManageProfile(){


const [name,setName]=useState(
"Hon. Candidate Name"
);



return (

<div>


<h2>
Update Candidate Profile
</h2>


<input

value={name}

onChange={
e=>setName(e.target.value)
}

/>


<textarea
placeholder="Biography"
/>


<button>

Save Profile

</button>


</div>

)

}


export default ManageProfile;