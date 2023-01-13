import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function DashboardAPI() {
    let navigate=useNavigate()
   let [data,setData]=useState([])
    let getData=async()=>{
        try{
            let res= await axios.get('https://6350df033e9fa1244e4f268b.mockapi.io/users')
            if(res.status===200){
                console.log(res.data)
                setData(res.data)
            }
        }
        catch(err){
            console.log(err)
        }

    }
    useEffect(()=>{
        getData()
    },[])
    let handleDelete= async(id)=>{
        try{
        let res= await axios.delete(`https://6350df033e9fa1244e4f268b.mockapi.io/users/${id}`)
        if(res.status===200){
            getData()
        }
    }catch(err){
        console.log(err)
    }


    }
  return <div className='container-fluid'>
    <div className='row'>
          <Table striped bordered hover>

            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>DOB</th>
                <th>Batch</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((e) => {
                  return <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.firstname}</td>
                    <td>{e.lastname}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.dob}</td>
                    <td>{e.batch}</td>
                    <td>
              <Button variant='primary' 
               onClick={()=>navigate(`/add-user/${e.id}`)}>
                 <i className="fas fa-fw fa-pen"></i>
                Edit
                </Button>
                &nbsp;&nbsp;
                <Button variant='danger' onClick={()=>handleDelete(e.id)}>
                <i className="fas fa-fw fa-trash"></i> Delete
                </Button>
              
            </td>
                  </tr>
                })
              }
            </tbody>
          </Table>
        </div>
  </div>
}

export default DashboardAPI
