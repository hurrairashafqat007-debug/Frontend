import React from 'react'
import './App.css'
import Nav from './assets/Nav.jsx'
import Home from './assets/Home.jsx'
import Home2 from './assets/Home2.jsx'
import Home3 from './assets/Home3.jsx'
import Home4 from './assets/Home4.jsx'
import Home5 from './assets/Home5.jsx'
import Home6 from './assets/Home6.jsx'
import Home7 from './assets/Home7.jsx'
import {BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
 

  return (
    <>
    {/* <Nav/>
  <BrowserRouter>
    <div className='bg-slate-300 h-[100vh]'>
    
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<Home2/>}/>
      <Route path='/service' element = {<Home3/>}/>
      <Route path='/career' element = {<Home4/>}/>
      <Route path='/contact' element = {<Home5/>}/>
      <Route path='/contact' element = {<Home6/>}/>
      <Route path='/contact' element = {<Home7/>}/>
    </Routes>
    </div>
    </BrowserRouter> */}



      {/* <Nav/>
      <Home/>
    <Home2/>
    <Home3/>
    <Home4/>
   <Home5/>
   <Home6/>
   <Home7/> */}
   <details className="dropdown">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
   <button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button>
 
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>


    </>
    
  )
}

export default App


