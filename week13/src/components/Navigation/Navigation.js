import React, { Component } from "react";
import Styles from './Navigation.module.css'

export class Navigation extends Component {
  render() {
    return (
   
    <nav>
      <ul className={Styles.navBar}>
        <li>Nav</li>
        <li>Home</li>
        <li>About Me</li>
        <li>Media</li>
      </ul>
    </nav>
   
    )
  }
}

 