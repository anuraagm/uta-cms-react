// Router.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Student from './pages/Student/Student';
import QualityAssurance from './pages/QA/QualityAssurance';
import Instructor from './pages/Instructor/Instructor';
import ProgramCoordinator from './pages/ProgramCoordinator/ProgramCoordinator';
import ChatBot from './templates/CommonTemplates/ChatBot';
import Admin from './pages/Admin/Admin';

function AppRouter() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home></Home>}></Route>
            <Route path="student" element={<Student></Student>}></Route>
            <Route path="qa" element={<QualityAssurance></QualityAssurance>}></Route>
            <Route path="coordinator" element={<ProgramCoordinator></ProgramCoordinator>}></Route>
            <Route path="instructor" element={<Instructor></Instructor>}></Route>
            <Route path="admin" element={<Admin></Admin>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ChatBot></ChatBot>
    </div>
  );
}

export default AppRouter;
