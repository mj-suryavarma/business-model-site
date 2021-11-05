import React,{useState} from 'react'
import './homebody.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Input,Label } from 'reactstrap';
import {Modal ,Form,
    FormControl,FormGroup,
} from 'react-bootstrap';


function HomeBody() {
   
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () =>{
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

  
    return (
        <div className="home_body container" id="HOME">
            <h2>A New Way</h2>
            <h2>To Start Business</h2>
            <p>I will provide a landing page, fully functional with resposive design and high quality website for your business.</p>
             <Button style={{color:' rgba(0, 9, 31, 0.8)'
                            ,background:'white',
                            fontWeight:'bolder',
                            font:'1.5rem'}} onClick={openModal}>Get Started</Button> 
               <Modal show={isOpen} onHide={closeModal} >
               <Modal.Header closeButton >
                </Modal.Header>
                <Modal.Body> 
                    <h3 className="text-center font-weight-bolder " style={{color:'#211f30',textShadow:"0.5px 0.5px #211f30"}}>CONTACT ME</h3>

                    <Form >
                        <Label for="userName">
                            Name
                        </Label>
                        <Input type="text" name="userName" id="userName" style={{backgroundColor:'lightgray'}}></Input>
                        <Label for="userEmail">
                            Email
                        </Label>
                        <Input type="email" name="userEmail" id="userEmail"  style={{backgroundColor:'lightgray'}}></Input>
                        <Label for="userMessage">
                            Message
                        </Label>
                        <Input type="textarea" name="userMessage" id="userMessage" style={{backgroundColor:'lightgray'}}></Input>
                        <Button type="submit" className="btn btn-primary m-2 mt-4" style={{backgroundColor:'#1c06bd'}}>Submit</Button>
                        <button type="button" className="btn btn-danger m-2 mt-4" onClick={closeModal}>Cancel</button>
                    </Form>
                      
                 </Modal.Body>   

            </Modal>             
        </div>
    )
}

export default HomeBody
