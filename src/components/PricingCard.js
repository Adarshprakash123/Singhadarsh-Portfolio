import "./PricingCardStyles.css"
import { Link } from "react-router-dom"

import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
       <div className="card-container">
          <div className="card">
             <h3>- Basic -</h3>
             <span className="bar"></span>
             <p className="btc">$ 100</p>
             <p>- 3 days -</p>
             <p> Responsive design</p>
             <Link to="/contact" className="btn">Purchase Now</Link>
          </div>

          <div className="card">
             <h3>- Basic -</h3>
             <span className="bar"></span>
             <p className="btc">$ 100</p>
             <p>- 3 days -</p>
             <p> Responsive design</p>
             <Link to="/contact" className="btn">Purchase Now</Link>
          </div>

          <div className="card">
             <h3>- Basic -</h3>
             <span className="bar"></span>
             <p className="btc">$ 100</p>
             <p>- 3 days -</p>
             <p> Responsive design</p>
             <Link to="/contact" className="btn">Purchase Now</Link>
          </div>
          
       </div>
      
    </div>
  )
}

export default PricingCard
