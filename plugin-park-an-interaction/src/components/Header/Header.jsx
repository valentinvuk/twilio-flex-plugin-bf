import {ParkButton} from "../ParkButton/ParkButton";

export const Header = (props) => {
   return (
       <div style={{display:"flex", width:"100%", flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
           <h1 style={{fontSize:"18px"}}>{props.task.attributes.customerName}</h1>
            <ParkButton task={props.task}/>
        </div>
   )
}