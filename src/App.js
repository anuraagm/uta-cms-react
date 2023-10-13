// Router.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Student from './pages/Student/Student';
import QualityAssurance from './pages/QA/QualityAssurance';
import Instructor from './pages/Instructor/Instructor';

function AppRouter() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home></Home>}></Route>
            <Route path="student" element={<Student></Student>}></Route>
            <Route path="qa" element={<QualityAssurance></QualityAssurance>}></Route>
            <Route path="programcoordinator" element={<QualityAssurance></QualityAssurance>}></Route>
            <Route path="instructor" element={<Instructor></Instructor>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
