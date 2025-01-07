import axios from "axios";
import { useState ,useEffect } from "react";
// import axios from "axios";
import Table from 'react-bootstrap/Table';

const CustomerDetails=()=>{
    const [mydata,setMydata]=useState([]);

    const loadData = ()=>{
        let api ="http://localhost:8000/users/showuserdata";
        axios.get(api).then((res)=>{
            // console.log(res.data);
            setMydata(res.data);
        });
    };

    useEffect(()=>{
        loadData();
    },[]);

    const ans = mydata.map((key)=>{
        return(
            <>
             <tbody>
            <tr key={key.id}>
            <th>{key.name}</th>
            <th>{key.city}</th>
            <th>{key.address}</th>
            <th>{key.pin}</th>
            <th>{key.mobile}</th>
            <th>{key.product}</th>
            <th>{key.price}</th>
            </tr>
            </tbody>
            </>
        )
    })

    return(
        <>
        <h3 
         style={{
          backgroundColor: "#ff9999",
          color: "#fff",
          textAlign: "center",
          padding: "15px 30px",
          borderRadius: "12px",
          marginBottom: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textTransform:"uppercase"
        }}
      >
       Display User Details 
      </h3>
         <Table 
        striped bordered hover 
        style={{
          width: '80%', 
          margin: '0 auto', 
          border: '2px solid #ccc', 
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
      >
        <thead style={{ backgroundColor: '#f7f7f7', color: '#333' }}>
          <tr style={{ fontSize: '1.1rem', fontFamily: "'Roboto', sans-serif", fontWeight: '500' }}>
          <th>Name</th>
          <th> City</th>
          <th>Address</th>
          <th>Pin Code</th>
          <th>MobileNumber</th>
          <th>PerChessProducts</th>
          <th>Amount</th>
        </tr>
      </thead>
      {ans}
      </Table>
        </>
    )
}
export default CustomerDetails;