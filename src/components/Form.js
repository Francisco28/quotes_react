import React, { Fragment, useState } from "react";

const Form = () => {

    //create "State" of quotes
    const [quote, updateQuote] = useState({
        pet: '',
        owner: '',
        date: '',
        hour: '',
        symptoms: ''
    });

    //function that execute every that an user write in a input
    const updateState = () => {
        console.log('writing...');
    }

  return (
    <Fragment>
      <h2>Create quote</h2>

      <form>
        <label>Pet's name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet's name"
          onChange={updateState}
        />

        <label>Owner's name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner's name"
          onChange={updateState}
        />

        <label>Date</label>
        <input 
            type="date" 
            name="date" 
            className="u-full-width" 
            onChange={updateState}
        />

        <label>Time</label>
        <input 
            type="time" 
            name="hour" 
            className="u-full-width" 
            onChange={updateState}
        />

        <label>Symptoms</label>
        <textarea
            className="u-full-width"
            name="symptoms"
            onChange={updateState}
        ></textarea>

        <button
            type="submit"
            className="u-full-width button-primary"
        >Add Quote</button>
      </form>
    </Fragment>
  );
};

export default Form;
