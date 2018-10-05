import React, { Component } from 'react';
import './about.css'
import { Layout, Button } from "antd";
import{Link} from 'react-router-dom';
const { Header } = Layout;

class About extends Component {
  render() {
    return (
      <container>
                  <Layout>
          <Header>
            <h2>Royal Construction</h2>
            <div className="button1">
              <Link to="/">
                <Button type="danger" style={{ width: "100px" }}>
                  Home
                </Button>
              </Link>
              <Link to="/about">
                <Button type="danger">About Us</Button>
              </Link>
              <Link to="/contact">
                <Button type="danger">Contact Us</Button>
              </Link>
            </div>
          </Header>
        </Layout>

         <div className='contain'>
            <h1 className="heading">About Us</h1>
         </div> 
         <div className="contain">
             <p className="about">Royal Construction  company started its business operations in the year 2017 as a 
                Sole Partrnership business venture at  Lucknow Uttar Pradesh, India. Since inception,we have emerged 
                as one of the leading Residential Interior Designing Services, Wooden Flooring Service, Interior Painting
                Services and Exterior Designing Services,
                False Ceiling Works, Shed Fabrication Works and Highway work, Earth Work, Structure Work, 
                All type of Building Work.</p>
            <p className="about">Our services are highly revered across the major national markets for reliability, 
                timed execution, professional approach and flexibility. On the other hand, 
                our products are known for termite resistant, durability, superior quality, 
                and accuracy. Our products can be availed in varied specifications to meet the 
                varied needs and demands of our clients.</p>
            <p className="about">Being led by <span className="bold"> Er. Pankaj Sharma & Er. Vijay Verma (Managing Director) </span>, 
            we are able to incorporate a high degree of professionalism in our business practices.
             Our products and services can be availed at market leading rates via smooth modes of 
             payment.</p>        
         </div>
         <br></br>
         <div className='contain'>
            <h1 className="heading">Project Business Partner</h1>
         </div>
         <div className='contain'>
         <ul>
             <li>CMR Construction Co.</li>
             <li>Shalimar corp. Ltd</li>
             <li>NCC</li>
             <li>L&T construction ltd</li>
         </ul>
         </div>
      </container>
    );
  }
}

export default About;




