import './App.css'
// import { Route } from 'react-router-dom';
//import './index.css';

import Sidebar from './components/sidebar'
import Dashboard from './components/dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import { Navigate } from 'react-router-dom';
import NestedRoute from './components/NestedRoute';
import Profile from './components/Profile';
import Account from './components/Account';
import { useState } from "react";
import DashboardAPI from './components/CRUDAPI/DashboardAPI';
import AddUserApi from './components/CRUDAPI/AddUserApi';

function App() {
  let data={
    earningsMonthly:"40,000",
    earningsAnnual:"2,40,000",
    taskCompletion:"40",
    pendingRequests:"18"
  }
  let [students,setStudents]=useState([
    {
      name:"Gugan",
      email:"guganesh12345@gmail.com",
      mobile:"123456",
      sessionTime:"10am to 12pm",
      batch:"B40WE"
  },{
    name:"rahul",
      email:"rahul12345@gmail.com",
      mobile:"1234567",
      sessionTime:"10am to 12pm",
      batch:"B40WE"
  },{
    name:"praveen",
      email:"praveen12345@gmail.com",
      mobile:"12345678",
      sessionTime:"10am to 12pm",
      batch:"B40WE"
  },{
    name:"mohan",
      email:"mohan12345@gmail.com",
      mobile:"12345678",
      sessionTime:"10am to 12pm",
      batch:"B40WE"
  }
  
  ])


return <div id='wrapper'>


    <BrowserRouter>
    <Sidebar />

    <Routes>

      <Route path='/dashboard' element={<Dashboard data={data} students={students} setStudents={setStudents} />}/>
      <Route path='/add-user' element={<AddUser students={students} setStudents={setStudents}/>}/>
      <Route path='/edit-user/:id' element={<EditUser students={students} setStudents={setStudents}/>}/>
      {/* <Route path='/*' element={<AddUser/>}/> */}
      <Route path='*' element={<Navigate to={'/dashboard'}/>}/>
      <Route path='/nested-route-example' element={<NestedRoute/>}>
        <Route path='profile' element={<Profile/>}/>
        <Route path='account' element={<Account/>}/>
        </Route>

        {/* API Related Routes */}
        <Route path='/all-users' element={<DashboardAPI/>}/>
        <Route path='/add-users' element={<AddUserApi/>}/>
        <Route path='/add-users/:id' element={<AddUserApi/>}/>
        <Route path='*' element={<Navigate to={'/dashboard'}/>}/>




    </Routes>
    </BrowserRouter>
  </div>


}

export default App;
