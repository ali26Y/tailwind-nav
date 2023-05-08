/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Navbar } from "./components/Navbar";

import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../icons/bolt.svg";

import "./FacebookNavbar.css";

import { CSSTransition } from "react-transition-group";

export function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

export function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

export function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    console.log(
      "dropdownRef.current?.firstChild.offsetHeight",
      dropdownRef.current?.firstChild.offsetHeight
    );
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calculateHeight(el) {
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calculateHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>

          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calculateHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>

          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>

          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>

          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>

          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>

          <DropdownItem leftIcon="🦘" goToMenu="animals">
            Animals!
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-tertiary"
        unmountOnExit
        onEnter={calculateHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals 2</h2>
          </DropdownItem>

          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>

          <DropdownItem leftIcon="🐸">Frog</DropdownItem>

          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>

          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition> */}

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calculateHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>

          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>

          <DropdownItem leftIcon="🐸">Frog</DropdownItem>

          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>

          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
