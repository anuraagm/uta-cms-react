import React, { useState } from 'react';
import fileimg from './file.png';


function InstructorCourse({ courseName }) {

  const [current, setCurrent] = useState("Overview");

  const chooseOption = (option) => {
    setCurrent(option);
  }

  const handleFileUpload = (e) => {
    console.log(e.name);
  }

  return (
    <div className="InstructorCourse ml-16">
      <div className="PageTitle text-xl">{courseName}</div>
      <div className="SectionNavigation mt-12">
        <button
          className="p-1 px-20 bg-gray-200 text-black text-xl sm:text-md hover:bg-gray-300 border border-gray-300 mb-2"
          onClick={() => chooseOption("Overview")}
        >
          Overview
        </button>
        <button
          className="p-1 px-20 bg-gray-200 text-black text-xl sm:text-md hover:bg-gray-300 border border-gray-300 mb-2"
          onClick={() => chooseOption("Syllabus")}
        >
          Syllabus
        </button>
        <button
          className="p-1 px-20 bg-gray-200 text-black text-xl sm:text-md hover-bg-gray-300 border border-gray-300 mb-2"
          onClick={() => chooseOption("Assignments")}
        >
          Assignments
        </button>
        <button
          className="p-1 px-20 bg-gray-200 text-black text-xl sm:text-md hover:bg-gray-300 border border-gray-300 mb-2"
          onClick={() => chooseOption("Tests")}
        >
          Tests
        </button>
        <button
          className="p-1 px-20 bg-gray-200 text-black text-xl sm:text-md hover:bg-gray-300 border border-gray-300 mb-2"
          onClick={() => chooseOption("Modules")}
        >
          Modules
        </button>
      </div>
      <div className='ContentSection bg-gray-200 m-12 ml-0 p-12'>
        <div className='SelectionTitle text-xl font-bold sm:text-md text-center mb-12'>
            {
                current == "Overview" && <span>Overview</span>
                ||
                current == "Syllabus" && <span>Syllabus</span>
                ||
                current == "Assignments" && <span>Assignments</span>
                ||
                current == "Tests" && <span>Tests</span>
                ||
                current == "Modules" && <span>Modules</span>
            }
        </div>
        <div className='SelectionBody text-lg sm:text-md text-center' style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {
                current == "Overview" && <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</span>
                ||
                current == "Syllabus" && <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                1. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo. 
                <br />
                <br />
                2. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                <br />
                <br />
                3. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut 
                aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
                quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                <table class="w-full border mt-12 table-auto">
                  <tr>
                    <td class="border p-2">Topic 1</td>
                    <td class="border p-2">01-01-2024</td>
                  </tr>
                  <tr>
                    <td class="border p-2">Topic 2</td>
                    <td class="border p-2">11-01-2024</td>
                  </tr>
                  <tr>
                    <td class="border p-2">Topic 3</td>
                    <td class="border p-2">01-02-2024</td>
                  </tr>
                  <tr>
                    <td class="border p-2">Topic 4</td>
                    <td class="border p-2">21-02-2024</td>
                  </tr>
                  <tr>
                    <td class="border p-2">Topic 5</td>
                    <td class="border p-2">01-03-2024</td>
                  </tr>
                </table>
                </span>
                ||
                current == "Assignments" && 
                <span>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => handleFileUpload(e.target.files[0])}
                  />
                    <div className="file-upload-container flex justify-between">
                    <p className="flex-grow text-left p-2 w-1/4">
                      Upload your assignment:<br /><br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                      in culpa qui officia deserunt mollit anim id est laborum.
                      <br /><br />
                      Current Submission :<br/>
                      <a href="" className='font-bold'>Submission 4</a><br /><br />
                      Past Submissions : <br />
                      <a href="" className='font-bold'>Submission 1</a><br />
                      <a href="" className='font-bold'>Submission 2</a><br />
                      <a href="" className='font-bold'>Submission 3</a><br />
                    </p>
                    <div className="relative">
                      <button className="file-upload-button">
                        <img src={fileimg} alt="Upload File" />
                      </button>
                      <div className="absolute top-0 left-0 w-full h-full flex text-xl items-start justify-center bg-transparent text-black font-bold opacity-70 transition-opacity cursor-pointer" onClick={() => document.getElementById("fileInput").click()}>
                        Click to Upload File
                      </div>
                    </div>
                  </div>
                </span>
                ||
                current == "Tests" && 
                <span>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => handleFileUpload(e.target.files[0])}
                  />
                    <div className="file-upload-container flex justify-between">
                    <p className="flex-grow text-left p-2 w-1/4">
                      Upload your test submission:<br /><br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat.
                      <br /><br />
                      View Submission :<br/>
                      <a href="" className='font-bold'>Submission</a><br /><br />
                    </p>
                    <div className="relative">
                      <button className="file-upload-button">
                        <img src={fileimg} alt="Upload File" />
                      </button>
                      <div className="absolute top-0 left-0 w-full h-full flex text-xl items-start justify-center bg-transparent text-black font-bold opacity-70 transition-opacity cursor-pointer" onClick={() => document.getElementById("fileInput").click()}>
                        Click to Upload File
                      </div>
                    </div>
                  </div>
                </span>
                ||
                current == "Modules" && <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
                <br /><br />
                <div className='ModuleContent text-center'>
                  <p className="flex-grow text-center p-2">
                    Download all modules  :<br/>
                    <a href="" className='font-bold'>Download All</a><br /><br />
                    Download all modules  :<br/>
                    <a href="" className='font-bold'>Download Module 1</a><br />
                    <a href="" className='font-bold'>Download Module 2</a><br />
                    <a href="" className='font-bold'>Download Module 3</a><br />
                    <a href="" className='font-bold'>Download Module 4</a><br />
                  </p>
                </div>
                </span>
            }
        </div>
      </div>
    </div>
  );
}

export default InstructorCourse;
