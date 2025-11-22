import React from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import PersonalInfo from './StudentPanel/PersonalInfo'
import AcademicScores from './StudentPanel/AcadamicScore'
import FeesInfo from './FeesPanel/FeesInfo'
import TermCondition from './StudentPanel/T&C'
import Sucess from './StudentPanel/success'
import DiplomaScores from './StudentPanel/DiplomaScores'
import AdminDashboard from "./AdminPanel/AdminDashboard";




function App() {


  return (
    <>
    <Routes>
      {/* StudentPanel */}
      <Route path='/studentInfo' element={<PersonalInfo/>}/>
      <Route path='/SSLCInfo' element={<AcademicScores/>}/>
      <Route path='/feesInfo' element={<FeesInfo/>}/>
      <Route path='/t&q' element={<TermCondition/>}/>
      <Route path='/success' element={<Sucess/>}/>
      <Route path='/diplomaInfo' element={<DiplomaScores/>}/>

      {/* AdminPanel */}
   
      <Route path='/admindashboard' element={<AdminDashboard/>}/>
     
      
    </Routes>
     
    </>
  )
}

export default App
