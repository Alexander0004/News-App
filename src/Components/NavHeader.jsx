import React from 'react'

const NavHeader = ({setCategory}) => {
  return (
    <>    
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">NewsMag App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")}><span className="badge text-bg-light">Technology</span></div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("health")}><span className="badge text-bg-light">Health</span></div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("science")}><span className="badge text-bg-light">Science</span></div>
        </li>
        <li className="nav-item">
          <div className="nav-link"><span className="badge text-bg-light" onClick={()=>setCategory("sports")}>Sports</span></div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("Entertainment")}><span className="badge text-bg-light">Entertainment</span></div>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}

export default NavHeader