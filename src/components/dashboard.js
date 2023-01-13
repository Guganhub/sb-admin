import React from 'react'
import BasicCard, { ProgressCard } from './Card'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import{ToastContainer,toast} from 'react-toastify';


function Dashboard({ data, students, setStudents }) {
   let navigate = useNavigate()
   let handleDelete=(i)=>{
    toast.error(` Data Deleted Successfully`)
    let newArray=[...students]//deep copy the state
    newArray.splice(i,1) //delete the element in array
    setStudents(newArray)//update the state with new Array
   }
  // let handleDelete={i}=>{
  //let newArray = [...students]
  // newArray.splice(i,1)
  // setstude 

  return <div id="content-wrapper" className="d-flex flex-column">

    <div id="content">


      <div className="container-fluid">

        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>
        <div className="row">
          <BasicCard data={{ value: data.earningsMonthly, icon: 'fa-calendar', cardBorder: 'primary' }} />
          <BasicCard data={{ value: data.earningsAnnual, icon: 'fa-calendar', cardBorder: 'success' }} />
          <ProgressCard value={data.taskCompletion} icon={'fa-clipboard-list'} cardBorder={'info'} />
          <BasicCard data={{ value: data.pendingRequests, icon: 'fa-comments', cardBorder: 'warning' }} />
        </div>
        <div className='row'>
          <Table striped bordered hover>

            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>SessionTime</th>
                <th>Batch</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((e, i) => {
                  return <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.sessionTime}</td>
                    <td>{e.batch}</td>
                    <td>
              <Button variant='primary' 
               onClick={()=>navigate(`/edit-user/${i}`)}>
                 <i className="fas fa-fw fa-pen"></i>
                Edit
                </Button>
                &nbsp;&nbsp;
                <Button variant='danger' onClick={()=>handleDelete(i)}>
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
    </div>
    <ToastContainer/>
  </div>


}

export default Dashboard;
