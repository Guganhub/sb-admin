import React, { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function EditUser({students,setStudents}) {
    let paramas=useParams()
    let navigate=useNavigate()
    let [name,setName]=useState("")
    let [email,setEmail]=useState("")
    let [mobile,setMobile]=useState("")
    let [batch,setBatch]=useState("")
    let [sessionTime,setSessionTime]=useState("")

    let getData=()=>{
      setName(students[paramas.id].name)
      setEmail(students[paramas.id].email)
      setMobile(students[paramas.id].mobile)
      setBatch(students[paramas.id].batch)
      setSessionTime(students[paramas.id].sessionTime)
    }

    useEffect(()=>{
      getData()
    },[])

    let handleSubmit=()=>{
      let newArray=[...students]
      newArray.splice(paramas.id,1,{
        name,
        email,
        mobile,
        sessionTime,
        batch
      })
      setStudents(newArray)
      navigate('/dashboard')
    }
   
    
  
  
  return <div className='container-fluid'>
       <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" placeholder="Enter mobile" value={mobile}onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" value={sessionTime} onChange={(e)=>setSessionTime(e.target.value)} defaultValue="0">
      <Form.Label>SessionTime</Form.Label>
      <Form.Select id="disabledSelect">
        <Form.Label>SessionTime</Form.Label>
            <option value={"10am-12pm"}>10am-12pm</option>
            <option value={"12pm-2pm"}>12pm-2pm</option>
            <option value={"2pm-4pm"}>2pm-4pm</option>
            <option value={"4pm-6pm"}>4pm-6pm</option>



          </Form.Select>
          </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter batch" value={batch}onChange={(e)=>setBatch(e.target.value)} />
      </Form.Group>
     
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
    </div>
  
  }
export default EditUser
