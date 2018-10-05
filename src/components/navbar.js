import React, { Component } from "react";
import "./navbar.css";
import {Link}  from 'react-router-dom';
import Slider from "../components/slider.js";
import Footer from "../components/footer.js";
import { Layout, Button } from "antd";
const { Header } = Layout;

class Navbar extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <h2>Royal Construction</h2>
          <div className="button1">
            <Link to="/">
              <Button type="danger" style={{ width: "100px" }}>
                Home
              </Button>
            </Link>
            <Link to ='/about'><Button type="danger">About Us</Button></Link>
            <Link to= '/contact'><Button type="danger">Contact Us</Button></Link>
          </div>
        </Header>
        <Slider />
        <Footer />
      </Layout>
    );
  }
}

export default Navbar;
