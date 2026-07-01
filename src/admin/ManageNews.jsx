import {useState} from "react";


function ManageNews(){


const [news,setNews]=useState([]);


function add(){


setNews([
...news,
"New campaign update"
])

}


return (

<div>


<h2>
News Updates
</h2>


<button onClick={add}>
Publish News
</button>


{

news.map(
(n,i)=>
<p key={i}>
{n}
</p>
)

}


</div>

)

}


export default ManageNews;