import './App.css';
import React, { Component } from 'react'
import { Navigation } from './components/Navigation/Navigation';
import { LoginForm } from './components/LoginForm/LoginForm';


export default class App extends Component {
  render () {
    return (
      <>
      <Navigation/>
      <LoginForm/>      
      </>

    )
  }
}