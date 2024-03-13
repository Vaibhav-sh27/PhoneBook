import React, { useEffect, useState } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

const Show = () => {
    let [d, setD] = useState([]);
    useEffect(()=>{
        axios.get(`${window.API_URL}/all`).then((data)=>{
        console.log(data);
        setD(data.data);
    })
    }, [d])

    function handleDelete() {
        
    }
  return (
    <MDBTable align='middle' style={{color:"white"}}>
      <MDBTableHead >
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Phone No 1</th>
          <th scope='col'>Phone No 2</th>
          <th scope='col'>Address</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {d.map((item, index)=>{
            return(
                <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{item.first_name} {item.middle_name} {item.last_name}</p>
                <p className='text-muted mb-0'>{item.email}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>+91 {item.ph_no1}</p>
            
          </td>
          <td>
          <p className='fw-normal mb-1'>+91 {item.ph_no2}</p>
          </td>
          <td>{item.address}</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
            <MDBBtn color='danger' rounded size='sm' onClick={handleDelete}>
              Delete
            </MDBBtn>
          </td>
        </tr>
            )
        })}
        
      </MDBTableBody>
    </MDBTable>
  )
}

export default Show