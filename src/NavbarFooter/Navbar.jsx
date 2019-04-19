import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import MenuItem from "./MenuItem";
import Menu from "./Menu";
import MenuButton from "./MenuButton";

import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleMenuClick() {
    console.log('coucou');
    
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    const styles = {
      container: {
        position: "relative",
        top: 0,
        left: 0,
        zIndex: "99",
        opacity: 0.9,
        display: "flex",
        alignItems: "center",
        background: "#FEFCFB",
        width: "100%",
        color: "#000000",
        fontFamily: "Lobster"
      },
      logo: {
        margin: "0 auto"
      },
      body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        filter: this.state.menuOpen ? "blur(2px)" : null,
        transition: "filter 0.5s ease"
      }
    };
    const menu = [{
      name: "Home",
      link: '/',
    }, {
      name: "Search",
      link: '/Search',
    }];
    const menuItems = menu.map((item, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
        >
          <NavLink to={item.link} className="navlink">{item.name}</NavLink>
        </MenuItem>
      );
    });

    return (
      <div className="Navbar">
        <div style={styles.container}>
          <MenuButton
            className="menubtn"
            onClick={() => this.handleMenuClick()}
            color="white"
          />
          <img src="images/yoshi orange.png" className="Logo" alt="logo" />
          <img src="images/yoshi green.png" className="Logo" alt="logo" />
          <img src="images/Yoshi Red.png" className="Logo" alt="logo" />
          <h1 className="Homepage">Easter and Co.</h1>
        </div>

        <Menu open={this.state.menuOpen}>{menuItems}</Menu>
        <div style={styles.body} />
      </div>
    );
  }
}

export default Navbar;
