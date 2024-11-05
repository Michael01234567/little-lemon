

import React, { useState} from 'react'

const BookingForm = ({availableTimes, SubmitForm, dispatch}) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        SubmitForm(e.target.value);
    }

    const handlerChange = (e) => {
        setDate(e);
        dispatch(e.target.value);
    }

  return (
    <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='book-date'>Choose Date:</label>
                        <input id='book-date' value={date} onChange={(e) => handlerChange(e.target.value)} type='date' required/>
                    </div>
                    <div>
                        <label htmlFor='book-time'>Choose Time:</label>
                        <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)} required>
                            <option value="">Select a Time</option>
                            {
                                availableTimes.availableTimes.map(availableTimes => {
                                    return <option key={availableTimes}>{availableTimes}</option>;
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor='book-guests'>Number of Guests:</label>
                        <input id='book-guests' value={guests} min='1' onChange={(e) => setGuests(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor='book-occasion'>Occasion:</label>
                        <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                        <option >Birthday</option> 
                        <option >Anniversary</option> 
                        </select>
                    </div>
                    <div className='btnReceive' >
                        <input aria-label='On click' type='submit' value="Make your Reservation"/>
                    </div>
                </fieldset>
            </form>
        </section>
    </header>
    
  )
}

export default BookingForm
