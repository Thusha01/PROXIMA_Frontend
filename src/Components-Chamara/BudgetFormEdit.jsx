import React from 'react'
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState,useEffect } from 'react';
import { useLocation,Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';


function BudgetFormEdit() {
  const [description , setDescription] = useState('');
  const [selectionprosessCost , setSelectionProcessCost] = useState('');
  const [serversCost , setServersCost] = useState('');
  const [hardwareCost, setHardwareCost] = useState('');
  const [connectionCost , setConnectionCost] = useState('');
  const [developerCost , setDeveloperCost] = useState('');
  const [otherExpenses , setOtherExpenses] = useState('');
  const [licenseCost , setLicenseCost] = useState('');
  const [totalValue ,   setTotalValue] = useState('');
  const [date ,setDate] = useState('')
  
  const location = useLocation();
  const projectId = location.state.projectId ;
  

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }
  
  const handleSelectionprocessCostChange = (event) => {
    setSelectionProcessCost(event.target.value);
  }
  
  const handleLicenseCostChange = (event) => {
    setLicenseCost(event.target.value);
  }
  
  const handleServersCostChange = (event) => {
    setServersCost(event.target.value);
  }
  
  const handleHardwareCostChange = (event) => {
    setHardwareCost(event.target.value);
  }
  
  const handleConnectionCostChange = (event) => {
    setConnectionCost(event.target.value);
  }
  
  const handleDeveloperCostChange = (event) => {
    setDeveloperCost(event.target.value);
  }
  
  const handleOtherExpensesChange = (event) => {
    setOtherExpenses(event.target.value);
  }

  const currentDate = new Date().toISOString().split('T')[0];

  


  useEffect(() => {
    const budgetdata=[
      selectionprosessCost,
      serversCost,
      hardwareCost,
      connectionCost,
      developerCost,
      otherExpenses,
      licenseCost
      ];
  
    const total = budgetdata.reduce((acc, currentValue) => acc + parseFloat(currentValue || 0), 0);
    setTotalValue(total);
}, [connectionCost, developerCost, hardwareCost, licenseCost, otherExpenses, selectionprosessCost, serversCost]);


  
const handleSubmit = async () => {
  const budgetdata = {
    Objectives: description,
    SelectionprocessCost: selectionprosessCost,
    LicenseCost: licenseCost,
    ServersCost: serversCost,
    HardwareCost: hardwareCost,
    ConnectionCost: connectionCost,
    DeveloperCost: developerCost,
    OtherExpenses: otherExpenses,
    TotalCost: totalValue,
    Date: date
  };

  const url = `https://localhost:44377/api/Budget/Projects/${projectId}`;

  try {
    const response = await axios.post(url, budgetdata);
    alert('Data inserted');
  } catch (error) {
    alert(error);
  }
};

  return (
    <div>
        <Form>
        
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Budget Description</Form.Label>
            <Form.Control placeholder="Enter budget description" onChange={handleDescriptionChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Selection Process Cost</Form.Label>
            <Form.Control placeholder="Enter budget selection process cost" onChange={handleSelectionprocessCostChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>LicenseCost</Form.Label>
            <Form.Control placeholder="Enter budget licenseCost" onChange={handleLicenseCostChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Servers Cost</Form.Label>
            <Form.Control placeholder="Enter budget server cost" onChange={handleServersCostChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Hardware Cost</Form.Label>
            <Form.Control placeholder="Enter budget Hardware Cost" onChange={handleHardwareCostChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Connection Cost</Form.Label>
            <Form.Control placeholder="Enter budget Connection Cost" onChange={handleConnectionCostChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Developer Cost</Form.Label>
            <Form.Control placeholder="Enter budget Developer Cost" onChange={handleDeveloperCostChange} />
          </Form.Group>
        </Row>

        <Row className="Other">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Other Expenses</Form.Label>
            <Form.Control placeholder="Enter budget Other Expenses" onChange={handleOtherExpensesChange} />
          </Form.Group>
        </Row>
        <Row className="Datepicker">
        
              < TextField
             autoFocus
             margin="dense"
             id="last_updated"
             type="date"
             fullWidth
             value={date}
             onChange={(e) => setDate(e.target.value)}
             style={{ backgroundColor: "white", width: "200px" }} // Adjust the width as needed
             />


         </Row>
       

        <Row className="Total" >
        <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Total Estimation</Form.Label>
            <Form.Control value={totalValue} />
          </Form.Group>
         
        </Row>

                  <Row>
        <Link to={'/budget'}> 
        <Form.Group className="print-btn" controlId="formGridAddress1">
          <Button variant="primary" type="submit" id="Print" >
            Report
          </Button>
        </Form.Group></Link>
        

        <Form.Group className="submit-btn" controlId="formGridAddress1">
        <Button variant="primary" type="button" id="usubmit" onClick={handleSubmit}>
          Submit
        </Button>
        </Form.Group>
        </Row>
           
        
      </Form>
    </div>
  )
}

export default BudgetFormEdit