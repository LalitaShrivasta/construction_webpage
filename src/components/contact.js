import React from "react";
import "./contact.css";
import { Layout, Button } from "antd";
import{Link} from 'react-router-dom';
const { Header } = Layout;

class Contact extends React.Component {
  render() {
    return (
      <div>
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

        <div className="main">
          <h1 style={{ fontFamily: "'Lobster Two', cursive" }}>Contact Us</h1>
          <div className="box">
            <div>
              <img
                src="https://www.freeiconspng.com/uploads/address-building-company-home-house-office-real-estate-icon--10.png"
                alt="images"
                className="imag"
              />
              <p className="about">Royal Construction company</p>
              <p className="about">Kamta chinhat Lucknow</p>
              <p className="about">Uttar Pradesh -226028</p>
              <p className="about">INDIA</p>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/52/Mail_iOS.svg"
                alt="images"
                className="imag"
              />
              <p className="about">Email: constructionroyal90@gmail.com</p>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZ2vabz5-CB4BDN1bVpXqMZ8xPln_b6sm5_Ssg9GlRAJ8qwiR-Q"
                alt="images"
                className="imag"
              />
              <p className="about">Call us: +91 9554830855</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
