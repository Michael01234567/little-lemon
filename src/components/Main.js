import React, { useReducer } from "react"
import {Route, Routes, useNavigate} from 'react-router-dom'
import Header from "./Header"
import Booking from "./Booking"
import ConfirmedBooking from "./ConfirmedBooking"

const Main = () => {

    const seedRandon = (seed) => {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return () => {
            return (s = s * a % m) /m;
        }
    }

    const fetchAPI = (date) => {
        let result = [];
        let random = seedRandon(date.getDate());
        for (let i = 17; i <= 23; i++) {
            if(random() < 0.5){
                result.push(i + ':00')
            }
            if(random() > 0.5){
                result.push(i + ':30')
            }  
        }
        return result;
    }

    const submitAPI = (formData) => {
        return true;
    }

    const updateTimes = (state, date) =>{
        return {availableTimes: fetchAPI(new Date())}
    }

    const initialState = {availableTimes: fetchAPI(new Date())};

    const [state, dispatch] = useReducer(updateTimes, initialState)


    const navigate = useNavigate();

    const submitForm = (formData) => {
        if(submitAPI(formData)) {
            navigate("/confirmed");
        }
    }    
     
    return (
        <main>
            <Routes>
                <Route path='/' element={<Header/>}/>
                <Route path='/booking' element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}/>
                <Route path='/confirmed' element={<ConfirmedBooking/>}/> 
            </Routes>
        </main>
    )
}


export default Main