import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from '../pages/signUpPage/signUp';
import HomePage from '../pages/homePage/homePage';


function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/home' element={<HomePage/>}></Route>


    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
