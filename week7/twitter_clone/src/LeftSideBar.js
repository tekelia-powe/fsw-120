import React from "react"
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom"



function LeftSideBar() {

    return (
        <div className="left">
        
        <FontAwesomeIcon icon={['fab', 'twitter']} color="blue"/><br></br>
        <a href=""><FontAwesomeIcon icon={['far', 'building']} /> Home </a><br></br>
        <a href=""><FontAwesomeIcon icon={['far', 'eye']} /> Explore </a><br></br>
        <a href=""><FontAwesomeIcon icon={['far', 'bell']} /> Notifications </a><br></br>
        <a href=""><FontAwesomeIcon icon={['far', 'envelope']} /> Messages </a><br></br>
        <a href=""><FontAwesomeIcon icon={['far', 'bookmark']} /> Bookmarks </a><br></br>
        <a href=""><FontAwesomeIcon icon={['far', 'file-alt']} /> List </a><br></br>
        <a href=""><FontAwesomeIcon icon={['far', 'user']} /> Profile </a><br></br>
        <Button variant="primary">Tweet</Button>{' '}
    
  
    
    </div>
    )}
export default LeftSideBar