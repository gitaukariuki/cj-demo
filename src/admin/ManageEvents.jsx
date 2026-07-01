import {useState} from "react";


function ManageEvents(){


const [events,setEvents]=useState([]);


function add(){


setEvents([
...events,
"Tebere Ward Meeting"
]);

}



return (

<div>


<h2>
Campaign Events
</h2>


<button onClick={add}>
Add Event
</button>



{

events.map(
(e,i)=>
<p key={i}>
{e}
</p>
)

}


</div>

)

}


export default ManageEvents;