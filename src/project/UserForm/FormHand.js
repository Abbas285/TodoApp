import React, { useState } from 'react'
import './FormHand.css';
function FormHand() {
    const [number,setnumber]=useState({
        firstname:'',
        secondname:'',
        email:'',
        phone:'',
        qualification:''
    })
    const [data,setdeta]=useState({
        firstname:'',
        secondname:'',
        email:'',
        phone:'',
        qualification:''
    })
    const submits=()=>{
        setdeta(
  {
      firstname:number.firstname,
      secondname:number.secondname,
      email:number.email,
      phone:number.phone,
      qualification:number.qualification

  }
        )

    }
    return (
        <div className="main_div">
            <div className="center_div">
          <input className="inputs" type="text" placeholder="Enter First Name" value={number.firstname} onChange={(e)=>{setnumber({...number,firstname:e.target.value})}}/>
          <input className="inputs" type="text" placeholder="Enter Last Name" value={number.secondname} onChange={(e)=>{setnumber({...number,secondname:e.target.value})}}/>
          <input className="inputs" type="email" placeholder="Enter Email Address" value={number.email} onChange={(e)=>{setnumber({...number,email:e.target.value})}}/>
          <input className="inputs" type="text" placeholder="Enter Your Phone" value={number.phone} onChange={(e)=>{setnumber({...number,phone:e.target.value})}}/>
          <input className="inputs" type="text" placeholder="Enter Your Qulification" value={number.qualification} onChange={(e)=>{setnumber({...number,qualification:e.target.value})}}/>
          <button className="buttons" onClick={submits}>Submit</button><br/>
            </div>
            <br/>
            <div className="table_div">
                {
                    data.map((val,id)=>{

                        return(<>
                          <h1>{val.firstname}</h1>
                        {/* <table className="tables">
                    <thead>
                       <tr>
                           <th>First Name</th><th>Second Name</th><th>Emai Address</th><th>Phone Number</th><th>Qulification</th>
                       </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{val.firstname}</td> 
                        <td>{val.secondname}</td>
                        <td>{val.email}</td>
                        <td>{val.phone}</td>
                        <td>{val.qualification}</td>
                        </tr>
                    </tbody>
                </table> */}
                        
                        </>)
                    })
                }
                
            </div>
            
        </div>
        
    )
}

export default FormHand
