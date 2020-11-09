import React from "react"
import "./App.css"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import pic from './images/sidebar_pic2.PNG';

function RightSideBar() {

    return (
        <div className="right">
        <Form>
        <Form.Group>
        <Form.Control size="sm" type="text" placeholder="Search Twitter" id="search"/>
        </Form.Group>
        </Form>
        <img src={pic} id="side_image"></img>
    </div>
    )}

export default RightSideBar