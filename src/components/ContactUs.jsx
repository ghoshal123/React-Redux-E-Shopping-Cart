import React from 'react'
import {Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
const ContactUs = () => {
    return (
        <div>
        <h1 className='text-center'>Contact Us</h1>
        <div className='container mt-5' style={{width:400,height:400, boxShadow:'0 0 5px 2px rgba(0, 0, 0, 0.5)'}}>
        <div className='row d-flex justify-content-center align-items-center'>
            <Form style={{margin:"auto"}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group><br/><br/>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group><br/><br/>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group><br/><br/>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        </div>
        </div>
    )
}

export default ContactUs