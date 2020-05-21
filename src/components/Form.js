import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Form = () => {

    //create "State" of quotes
    const [quote, updateQuote] = useState({
        pet: '',
        owner: '',
        date: '',
        hour: '',
        symptoms: ''
    });

    const [error, updateError] = useState(false);


    //function that execute every that an user write in a input
    const updateState = e => {
         updateQuote({
             ...quote,
             [e.target.name]: e.target.value
         })
    }

    //extract the values
    const { pet, owner, date, hour, symptoms } = quote;

    //when the user press button "Add Quotes"
    const submitQuote = e => {
        e.preventDefault(); //para prevenir la accion por default
        

        //validate
        if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || hour.trim() === '' ||
            symptoms.trim() === '' ) {
            updateError(true);
            return; //para que no continue ejecutando el codigo 
        }
        //delete the previous message
        updateError(false);

        //assign an id
        quote.id = uuidv4();

        //create a list

        //restart the form
    }

  return (
    <Fragment>
      <h2>Create quote</h2>
       
      { error ? <p className="alert-error">All the fields are mandatory</p>     
        : null }

      <form 
        onSubmit = {submitQuote}    
      >
        <label>Pet's name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet's name"
          onChange={updateState}
          value={pet}
        />

        <label>Owner's name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner's name"
          onChange={updateState}
          value={owner}
        />

        <label>Date</label>
        <input 
            type="date" 
            name="date" 
            className="u-full-width" 
            onChange={updateState}
            value={date}
        />

        <label>Time</label>
        <input 
            type="time" 
            name="hour" 
            className="u-full-width" 
            onChange={updateState}
            value={hour}
        />

        <label>Symptoms</label>
        <textarea
            className="u-full-width"
            name="symptoms"
            onChange={updateState}
            value={symptoms}
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
