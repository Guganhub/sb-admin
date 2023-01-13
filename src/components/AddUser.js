import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import{toast} from 'react-toastify';
import {  useNavigate } from 'react-router-dom'



function AddUser({students,setStudents}) {
    let navigate=useNavigate()
    
    let [name,setName]=useState("")
    let [email,setEmail]=useState("")
    let [mobile,setMobile]=useState("")
    let [batch,setBatch]=useState("")
    let [sessionTime,setSessionTime]=useState("")
  let handleSubmit=()=>{
    let newArray=[...students]
    newArray.push({
      name,
      email,
      mobile,
      sessionTime,
      batch
    })
    setStudents(newArray)
    navigate('/dashboard')
    toast.success("Data Added")
    
  }
  






  return (
    <div className='container-fluid'>
       <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" placeholder="Enter mobile"onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" onChange={(e)=>setSessionTime(e.target.value)} defaultValue="0">
      <Form.Select id="disabledSelect">
            <option value={"10am-12pm"}>10am-12pm</option>
            <option value={"12pm-2pm"}>12pm-2pm</option>
            <option value={"2pm-4pm"}>2pm-4pm</option>
            <option value={"4pm-6pm"}>4pm-6pm</option>



          </Form.Select>
          </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter batch"onChange={(e)=>setBatch(e.target.value)} />
      </Form.Group>
     
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default AddUser
