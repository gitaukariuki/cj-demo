function Agenda(){


let items=[

"Agriculture Support",
"Youth Opportunities",
"Better Roads",
"Healthcare Access"

];


return (

<section>

<h2>
Key Priorities
</h2>


<div style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"20px"
}}>


{

items.map(x=>

<div className="card" key={x}>

<h3>
{x}
</h3>

<p>
Building a stronger community.
</p>

</div>

)

}


</div>


</section>

)

}


export default Agenda;