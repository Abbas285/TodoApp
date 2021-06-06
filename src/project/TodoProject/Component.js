import React,{useState} from 'react'
import CancelPresentationSharpIcon from '@material-ui/icons/CancelPresentationSharp';
import DeleteIcon from '@material-ui/icons/Delete';
function Component(props) {
    const [line,setlog]=useState(true)
const {values,index,deletedata,toggledata} = props
const toggled=()=>{
   if(line===false){
        setlog(true)
    }
    else {
        setlog(false)
    }
}
    return (
        <div className="liststyle">
                 <CancelPresentationSharpIcon 
                        className="Close"
                        onClick={()=>{
                            deletedata(index)
                        }}/>
           <span  onClick={toggled}>
           <DeleteIcon className="deleteicon"/>
           </span>
        <li key={index} style={{textDecoration:line?"none":"line-through"}}>{values}</li>
        </div>
    )
}

export default Component
