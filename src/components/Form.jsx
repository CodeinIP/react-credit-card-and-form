import React from "react";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
const Form = ({ handleChange, handleSubmit }) => {
  return (
    <div style={{border:"2px solid grey",padding:"20px",width:"400px"}}>
      Form
      <h2>Payment details</h2>
      <FormControl>
        <FormLabel htmlFor="">CARDHOLDER NAME</FormLabel>
        <br />
        <Input
          required
          onChange={(e) => handleChange(e)}
          name="name"
          type="text"
        />
        <br />
        <hr />
        <FormLabel htmlFor="">CARD NUMBER</FormLabel>
        <br />
        <Input
          required
          onChange={(e) => handleChange(e)}
          name="cardnumber"
          type="tel"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          maxLength="16"
          placeholder="xxxx xxxx xxxx xxxx"
        ></Input>
        <br />
        <hr />
        <FormLabel>Select MONTH & YEAR</FormLabel>
        <Select required onChange={(e) => handleChange(e)} name="month">
          <option value="01">January</option>
          <option value="02">February </option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </Select>
        <Select required onChange={(e) => handleChange(e)} name="year">
          <option value="22"> 2022</option>
          <option value="23"> 2023</option>
          <option value="24"> 2024</option>
          <option value="25"> 2025</option>
          <option value="26"> 2026</option>
          <option value="27"> 2027</option>
        </Select>
        <FormLabel htmlFor="">CVV:</FormLabel>
        <Input
          minLength={3}
          required
          onChange={(e) => handleChange(e)}
          type="tel"
          inputMode="numeric"
          maxLength="3"
          name="cvv"
        />
        <br />
        <h3>Payment amount:___</h3>
        <Button colorScheme="blue" onClick={(e)=>handleSubmit(e)} >
          SUBMIT
        </Button>
      </FormControl>
    </div>
  );
};

export default Form;
