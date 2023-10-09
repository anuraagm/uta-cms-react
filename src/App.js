// Router.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Student from './pages/Student/Student';

function AppRouter() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home></Home>}></Route>
            <Route path="student" element={<Student></Student>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
