
import React, { useState } from 'react'
import './Form2.css'
import DeleteIcon from '@material-ui/icons/Delete';
function Form2() {
    const [number,setnumber]=useState({
        username:'',
        email:'',
        phone:'',
        password:''
    })
    const [getData,setdata]=useState([])
    const getdata=(e)=>{
        const value=e.target.value;
        const name=e.target.name;
        setnumber({
            ...number,
            [name]:value
        })
    }
    const submitdata=(e)=>{

e.preventDefault();
const {username,email,phone,password}=number;
if(username==""||email==""||phone==""||password==""){
    alert("enter data first then submit")
}
else{
    if(getData.length==4){
        alert("maximum length is 4 and now table length is over")
    }
    else{
        setdata((prev)=>{
            return  [...prev,number]
          
          })
          setnumber({
              username:'',
                  email:'',
                  phone:'',
                  password:''
          
          })
    }
   
}

    }

    const deletes=(id)=>{
        setdata((old)=>{
            return  old.filter((val,index)=>{
                return index!=id
               })
        })
       

    }
    return (
       <>
       <div className="main_div">
           <div className="center_div">
       <form onSubmit={submitdata}>
<div>
    <label htmlFor="username">UserName</label>
    <input type="text" autoComplete="off" name="username" id="username" value={number.username} onChange={getdata} />
</div>
<div>
    <label htmlFor="email">Email</label>
    <input type="text" autoComplete="off" name="email" id="email" value={number.email} onChange={getdata}/>
</div>
<div>
    <label htmlFor="phone">phone</label>
    <input type="number" autoComplete="off" name="phone" id="phone " value={number.phone} onChange={getdata}/>
</div>
<div>
    <label htmlFor="password">Password</label>
    <input type="password" autoComplete="off" name="password" id="password" value={number.password} onChange={getdata}/>
</div>
  <button type="submit">Registration</button>
</form>
</div>


<br/>
<div className="center2">

{ getData.map((val,id)=>{
    return(<>
      <table className="tables">
                    <thead>
                       <tr>
                           <th>User  Name</th><th>Email</th><th>Phone Number</th><th>Password</th><th>Operation</th>
                       </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td key={id}>{val.username}</td> 
                        <td key={id}>{val.email}</td>
                        <td key={id}>{val.phone}</td>
                        <td key={id}>{val.password}</td>
                        <td key={id}><DeleteIcon className="deleteicon" onClick={()=>deletes(id)}/></td>
                        </tr>
                    </tbody>
                </table> 
    </>)
})

}
</div>
</div>
       </>
    )
}

export default Form2
