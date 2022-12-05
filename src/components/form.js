import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';

function Form({setInfo, setisSubmitted}) {

    const [city, setCity] =  useState('');
    

    const  handleChange = async () => {

        const api = "5bad73357860c9d130c561c422c4ee9e"
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`      
        await axios(baseURL).then(res => setInfo(res.data));
        setisSubmitted(true);    
    }
  return (
    <div>
        <h1>Weather Forecast</h1>
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                handleChange();
                
            }
        }
        >
            <div className='form'>
                <input 
                value={city}
                 className='inputText'
                 type="text" 
                 placeholder='Please Enter The City'
                 onChange={(e) => setCity(e.target.value)}  />
            </div>
            <div className='btnDiv'>
                <button className='btn' type='submit'>Show the results</button>
            </div>
        </form>
    </div>
  )
}

export default Form;