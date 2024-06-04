export default function Button(props){
  
  
    return <button
     className = "buttton"
     onClick = {props.onclick}
     style ={{border:"solid var(--color2) 1px",width:"175px", height:"30px",backgroundColor:props.bg,}}
    >{props.sourceName}</button>

    
}