import React from 'react';
import './Style.css'; 

function State() {
  return (
    <div className="TechStack">
  <div className="tshead">
    <h1>Yes. We cover your tech stack<span>.</span></h1>
  </div>
  <div className="tspara">
    <p>Our 4,000+ team has expertise in almost every programming language.</p>
  </div>
  
  <div className="tspl-container">
    {/* First line scrolling left-to-right */}
    <div className="tspl tspl-line1">
      <h1>JAVA</h1>
      <h1>PHP</h1>
      <h1>PYTHON</h1>
      <h1>REACT</h1>
      <h1>NODE</h1>
      <h1>ANGULAR</h1>
      <h1>JAVASCRIPT</h1>
      <h1>SWIFT</h1>
      <h1>C</h1>
    </div>

    {/* Second line scrolling right-to-left */}
    <div className="tspl tspl-line2">
      <h1>GO</h1>
      <h1>SQL</h1>
      <h1>HTML</h1>
      <h1>C++</h1>
      <h1>.NET</h1>
      <h1>PERL</h1>
      <h1>SCALA</h1>
      <h1>RUBY</h1>
      <h1>Android</h1>
      <h1>IOS</h1>
    </div>
  </div>
  <div className="tsbutton">
    <button>View All <ion-icon name="chevron-forward-outline"></ion-icon></button>
  </div>
</div>
  );
}

export default State;