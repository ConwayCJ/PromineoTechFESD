import React, { Component } from "react";
import Styles from './LoginForm.module.css'

export class LoginForm extends Component {
  render() {  
    return (
      <div className={Styles.informationForm}>
        <h3>Log In</h3>
        <form>
          <div>
            <label>Username:</label>
            <input placeholder="Enter Username"></input>
          </div>
          <div>
            <label>Password:</label>
            <input placeholder="Enter Password"></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

    )

  }
}

