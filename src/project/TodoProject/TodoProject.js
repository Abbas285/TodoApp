import React, { useState } from 'react'
import './TodoProject.css';
import Component from './Component'
import CancelPresentationSharpIcon from '@material-ui/icons/CancelPresentationSharp';
import DeleteIcon from '@material-ui/icons/Delete';
function TodoProject() {
    const [number ,setnumber] =useState("");
    const [rec,setrec]=useState([])
    const [line,setlog]=useState(true)
    const adddata=()=>{
        if(number==""){
            alert("plsease enter first")
        }
        else{
            if(rec.length==3){
                alert("lenth over")
            }
            else{
                setrec((prev)=>{
                    return [...prev,number];
                })
                setnumber("")
            }
           
        }
       
    }
    const deletedata=(ids)=>{
    setrec((olddata)=>{
        return olddata.filter((val,index)=>{
            return index!=ids
        })
    })
    }
const deletes=(ind)=>{
    setrec((olddata)=>{
        return olddata.filter((val,index)=>{
            return index!=ind
        })
    })
}
const toggle=()=>{
    if(line===false){
        setlog(true)
    }
    else {
        setlog(false)
    }
    

}

    return (
        <div className="main_Div">
            <div className="Center_Div">
                <h1>TODO LIST</h1>
                <br/>
                <div className="forms">
                    <input className="inputs" type="text" placeholder="AdSd a Items"
                     value={number} onChange={(e)=>setnumber(e.target.value)}/>
                   <button className="buttons" onClick={adddata}>+</button>
                </div>
                <br/>
                <ul>
                    {/* {
                        rec.map((val,ind)=>{
                            return (
                                <div className="liststyle">
                                    <CancelPresentationSharpIcon 
                        className="Close"
                        onClick={()=>{
                            deletes(ind)
                        }}/>
                        <span onClick={toggle} >
                        <DeleteIcon className="deleteicon" />
                        </span>
                         <li  style={{textDecoration:line?"none":"line-through"}}>{val}</li>
                                </div>
                            
                            )
                        })
                    } */}
                       
                    {/* // 
                    {<div className="liststyle">
                        {/* <CancelPresentationSharpIcon 
                        className="Close"
                        onClick={()=>{
                            deletes(ind)
                        }}/> }
                        {/* <span onClick={toggle} >
                        <DeleteIcon className="deleteicon" />
                        </span>
                    <li  style={{textDecoration:line?"none":"line-through"}}>
                        {val}</li>
                    </div> */} 
                    
                       {
                           rec.map((val,ind)=>{
                         return      <Component
                               values={val}
                               index={ind}
                               deletedata={deletes}
                               toggledata={toggle}
                               />
                           })
                       }
                       
                    
                </ul>

            </div>
        </div>
    )
}

export default TodoProject
