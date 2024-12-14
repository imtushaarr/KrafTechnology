import React from 'react'
import './Style.css';


function FeatureSections() {
  return (
    <div className="fsMain">
      <div className="rigthFs">
        <img src='https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZyUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D' alt="" />
      </div>

      <div className="lFs">
        <div className="fssmall">
        <i class="fa-solid fa-square"></i> <p>About #krafTechnology</p>
        </div>
        <div className="fsHead">
          <h1>Transform Business to Technology</h1>
        </div>
        <div className="fssub">
        <p>looking for affordable web designing company in India?</p>
        </div>
        <div className="fspara">
        <p>Kraf Technolofy is a software products and custom solutions development company with its primary development center in Mohali. Over the last 18 years, we have been providing value-added IT services to small, medium and large scale clients all over India. Along with the development of custom solutions, our extensive research in various emerging technologies has empowered us to build a portfolio of products catering to a very wide range of users.
        <br />
        <br />
        Our work ethics are guided by our extensive experience in international business and our methodologies are backed by our customer-centric quality policy which is to deliver quality solutions and services driven by effective processes, path-breaking technology, a team that strives for excellence and the continuous effort to maximize customer benefits.</p>
        </div>
        <div className="fsbutton">
          <button>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default FeatureSections