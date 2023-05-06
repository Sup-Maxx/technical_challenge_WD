import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"

import PhoneCard from "../components/PhoneCard"

function PhoneList({phoneId}) {
  const API_URL = 'http://localhost:5005' 

  const [phones, setPhones] = useState([])

  useEffect(()=>{
    axios.get(`${API_URL}/api/phones`)
      .then(response => {
        console.log(response.data)
        setPhones(response.data)
      })
      .catch(error => console.error("the error is ", error)) 
  },[])

  return (
    <div>
    <h1>test</h1>
  
        {phones.map(phone => (
          <PhoneCard
          
          key={phone.id}
          phoneId={phone.id}
          name={phone.name}
          manufacturer={phone.manufacturer}
          description={phone.description}
          imageFileName={phone.imageFileName}
          screen={phone.screen}
          processor={phone.processor}
          color={phone.color}
          price={phone.price}
          />
        ))}
    </div>
  )
}

export default PhoneList

/* .then((response) => {
  const phoneInfo = response.data
  console.log(phoneInfo[1])

  for (let i = 0; i < phoneInfo.length; i++) {
  setPhoneId(phoneInfo[i].id)
  setName(phoneInfo[i].name)
  setManufacturer(phoneInfo[i].manufacturer)
  setDescription(phoneInfo[i].description)
  setImageFileName(phoneInfo[i].imageFileName)
  setScreen(phoneInfo[i].screen)
  setProcessor(phoneInfo[i].processor)
  setColor(phoneInfo[i].color)
  setPrice(phoneInfo[i].price)
  }
  
}) */