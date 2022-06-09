import React, { useState } from 'react'
import Card from './Card'
import Form from './Form'

const CreditCard = () => {
    const [data,setData] = useState({month:"01",
    year:"2022",
    name:"Punk",
    cardnumber:1234123412341234,
    cvv:123});
    const [form,setForm] = useState({});
    const handleChange = (e)=>{
        console.log(e.target.value)
        const {name,value} = e.target;
        setForm(
            {...form,
            [name]:value
            }
        )
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(e);
        console.log(form);
        setData(form);
    }
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",alignContent:"center"}}>
    <Card data={data} />
    <Form handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  )
}

export default CreditCard