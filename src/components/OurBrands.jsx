import React from 'react'
import './Style.css'
import logo from '../assets/logo.png'

function OurBrands() {
  return (
    <div className="obcon">
        <div className="obleft">
            <img src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="obright">
            <div className="obtext">
                <h1>We've stopped counting. Over 500 brands count on us.</h1>
                <h6>1,200+ projects executed successfully and an average relationship of over 3 years.</h6>
            </div>
            <div className="obbasecon">
                <div className="obbase">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="obdes">
                        <p>"We were recognized by Financial Times in the America's Fastest-growing Companies list of 2024, showcasing significant revenue growth between 2019 and 2022."</p>
                    </div>
                    <div className="obbutton">
                        <button>Read More</button>
                    </div>
                </div>

                <div className="obbase">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="obdes">
                        <p>"We were recognized by Financial Times in the America's Fastest-growing Companies list of 2024, showcasing significant revenue growth between 2019 and 2022."</p>
                    </div>
                    <div className="obbutton">
                        <button>Read More</button>
                    </div>
                </div>

                <div className="obbase">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="obdes">
                        <p>"We were recognized by Financial Times in the America's Fastest-growing Companies list of 2024, showcasing significant revenue growth between 2019 and 2022."</p>
                    </div>
                    <div className="obbutton">
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurBrands