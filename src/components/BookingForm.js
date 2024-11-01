import React, { useState } from 'react'

const BookingForm = () => {
    const [date, setDate] = useState("")
    const handlerChange = (e) => {
        setDate(e)
    }

  return (
    <div>
        <header>
            <section>
                <form>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} onChange={(e) => handlerChange(e.target.value)} type='date' required/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    </div>
  )
}

export default BookingForm
