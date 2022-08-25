import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import Home from '../home/Home'
import Trash from '../trash/Trash'
import Archive from '../archive/Archive'
import {NoteProvider} from "../../context/Notecontext"
import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
function Dashboard() {
  return (
    <div>
    <Router>
        <NoteProvider>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/trash' element={<Trash/>}/>
            <Route path='/archive'element={<Archive/>}/>
          </Routes>
        </NoteProvider>
      </Router>
    </div>
  )
}

export default Dashboard