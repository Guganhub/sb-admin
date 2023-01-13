import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';



function AddUserAPI() {
    let navigate = useNavigate()

    let [firstname, setFName] = useState("")
    let [lastname, setLName] = useState("")

    let [email, setEmail] = useState("")
    let [mobile, setMobile] = useState("")
    let [dob, setDob] = useState("")

    let [batch, setBatch] = useState("")
    let handleSubmit = async() => {
        let data={
            firstname,
            lastname,
            email,
            mobile,
            dob,
            batch
        }
        try{
            let res= await axios.post('https://6350df033e9fa1244e4f268b.mockapi.io/users',data)
            if(res===200){
                navigate('/all-users')
            }


        }
        catch(err){
            console.log(err)
        }
       
        // toast.success("Data Added")

    }







    return (
        <div className='container-fluid'>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(e) => setFName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(e) => setLName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="number" placeholder="Enter mobile" onChange={(e) => setMobile(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>DOB</Form.Label>
                    <Form.Control type="date" placeholder="Enter DOB" onChange={(e) => setDob(e.target.value)} />
                </Form.Group>
                
                <Form.Group className="mb-3" >
                    <Form.Label>Batch</Form.Label>
                    <Form.Control type="text" placeholder="Enter batch" onChange={(e) => setBatch(e.target.value)} />
                </Form.Group>

                <Button variant="primary" onClick={() => handleSubmit()}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddUserAPI
