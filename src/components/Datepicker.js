import React, {useState} from 'react'
import { Form } from 'semantic-ui-react'
import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from 'semantic-ui-calendar-react';

const Datepicker = props => {
  const [date, setDate] = useState('')

  const handleChange = (event, {name, value} ) => {
    if (name === 'date') {
      setDate(value)
      console.log(date)
      
    }
  }

  return (
    <>
      <Form>
        <DateInput
          name="date"
          placeholder="Date"
          value={date}
          iconPosition="left"
          onChange={handleChange}
        />
      </Form>
    </>
  )
}

export default Datepicker