import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Add = ({setD, d, setShow, show, item, setItem}) => {
    
    const [fname, setFname] = useState('');
    const [mname, setMname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phno1, setPhno1] = useState('');
    const [phno2, setPhno2] = useState('');
    const [address, setAddress] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let navigate = useNavigate();

    function handleSubmit() {
        console.log("l");
        let item = {
            id: uuidv4(),
            first_name: fname, 
            middle_name: mname, 
            last_name: lname, 
            email: email, 
            ph_no1: phno1, 
            ph_no2: phno2, 
            address: address
        }

        //axios
        axios.post(`${window.API_URL}/add`, item)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        setFname('')
        setMname('')
        setLname('')
        setEmail('')
        setPhno1('')
        setPhno2('')
        setAddress('')
        handleClose();
        setD((t)=>[...t, item]);
    }

    function handleEdit(id) {
      let item = {
        id: id,
        first_name: fname, 
        middle_name: mname, 
        last_name: lname, 
        email: email, 
        ph_no1: phno1, 
        ph_no2: phno2, 
        address: address
    }

    //axios
    axios.patch(`${window.API_URL}/update/${item.id}`, item)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      let updatedList = d.map(i => 
        {
          if (i.id == item.id){
            return item; 
          }
          return i; 
        });
        setD(updatedList);

    setFname('')
    setMname('')
    setLname('')
    setEmail('')
    setPhno1('')
    setPhno2('')
    setAddress('')
    setItem({
      id: '',
      first_name: '',
      middle_name: '',
      last_name: '', 
      email:'', 
      ph_no1:'', 
      ph_no2: '', 
      address: ''
})
    handleClose();
     
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add
        </Button>
  
        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>Contact Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Jhon"
                  value={fname? fname: item.first_name}
                  onChange={(e)=>setFname(e.target.value)}
                  autoFocus
                />
                
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="san"
                  value={mname? mname: item.middle_name}
                  onChange={(e)=>setMname(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Deo"
                  value={lname? lname: item.last_name}
                  onChange={(e)=>setLname(e.target.value)}
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email? email: item.email}
                  onChange={(e)=>setEmail(e.target.value)}
                  autoFocus
                />
              </Form.Group>

              <div style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput5" style={{width:'30%'}}>
                <Form.Label>Phone No1</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="1234567890"
                  value={phno1? phno1: item.ph_no1}
                  onChange={(e)=>setPhno1(e.target.value)}
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput6" style={{width:'30%'}}>
                <Form.Label>Phone No2</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="1234567890"
                  value={phno2? phno2: item.ph_no2}
                  onChange={(e)=>setPhno2(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              </div>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Mathura UP"
                  value={address? address: item.address}
                  onChange={(e)=>setAddress(e.target.value)}
                  autoFocus
                />
              </Form.Group>

              
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {item.id?
              <Button variant="primary" onClick={()=> handleEdit(item.id)}>
              Save Changes
            </Button> :
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
            }
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Add