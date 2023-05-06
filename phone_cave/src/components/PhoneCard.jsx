import React, { useEffect, useState } from 'react'
/* import phoneData from "../phones.json" */
import axios from 'axios'

function PhoneCard({phoneId}) {
  const API_URL = 'http://localhost:5005' 

  /* const [phoneId, setPhoneId] = useState(null) */
  const [name, setName] = useState(null)
  const [manufacturer, setManufacturer] = useState(null)
  const [description, setDescription] = useState(null)
  const [imageFileName, setImageFileName] = useState(null)
  const [screen, setScreen] = useState(null)
  const [processor, setProcessor] = useState(null)
  const [color, setColor] = useState(null)
  const [price, setPrice] = useState(null)

  const getData = () => {
    const response = axios.get(`${API_URL}/api/phones`)
    /* const phoneId = response.data.id */

    axios.get(`${API_URL}/api/phones/${phoneId}`)
    .then((response) => {
      const phoneInfo = response.data
      console.log("keys of the object", Object.keys(phoneInfo))
      console.log("phone info ", phoneInfo.name)
      console.log(response.data)
    })
    .then((response) => {
      const phoneInfo = response.data
      console.log(phoneInfo)
      
      setName(phoneInfo.name)
      setManufacturer(phoneInfo.manufacturer)
      setDescription(phoneInfo.description)
      setImageFileName(phoneInfo.imageFileName)
      setScreen(phoneInfo.screen)
      setProcessor(phoneInfo.processor)
      setColor(phoneInfo.color)
      setPrice(phoneInfo.price)
    })
    .catch((error) => console.error("the error is ", error)) 
  }

  useEffect(()=>{
    getData()
  },[])
  return (

    <div>
    <h1> phonecard</h1>
      <img src={imageFileName}/>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <h6>{manufacturer}</h6>
      <h6>{description}</h6>

        <div>
          <p>{color}</p>
          <p>{processor}</p>
          <p>{screen}</p>
        </div>
    </div>
  )
}

export default PhoneCard