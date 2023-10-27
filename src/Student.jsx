import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios';
import {Link} from 'react-router-dom'
import './Student.css'

import { useEffect,useState } from "react";



export default function Student() {


  const [student, setStudent] = useState([])
  React.useEffect(() => {
    axios.get('http://localhost:8081/')
    // .then(res=> console.log(res.data))
    .then(res=> setStudent(res.data))
    .catch(err=>console.log(err));
    
  }, []);

  return (

    <>
  <Link to="/create"> <button>ADD+</button></Link>
 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            
            
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {student.map((data,id) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              
        
        {console.log(data.name)}
              <TableCell align="right">{data.ID}</TableCell>
              <TableCell align="right">{data.name}</TableCell>
              <TableCell align="right">{data.email}</TableCell>
              <TableCell align="right">
               <Link to={`update/${data.id}`}><button className='btn'>Update</button></Link> 
              <button className='btn'>Delete</button>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
