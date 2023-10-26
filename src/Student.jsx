import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios';

import { useEffect } from "react";

export default function Student() {
  React.useEffect(() => {
    axios.get('http://localhost:8081/')
    .then(res=> console.log(res))
    .catch(err=>console.log(err));
    
  }, []);

  return (

    <div></div>
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
          
            
            
    //         <TableCell align="right">Fat&nbsp;(g)</TableCell>
    //         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
    //         <TableCell align="right">Protein&nbsp;(g)</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {res.map((s) => (
    //         <TableRow
    //           key="s"
    //           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row">
                
    //           </TableCell>
        
        
    //           <TableCell align="right">s</TableCell>
    //           <TableCell align="right">u</TableCell>
    //           <TableCell align="right">v</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
}
