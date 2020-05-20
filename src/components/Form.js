import React, { Fragment } from "react";

const Form = () => {
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
        />

        <label>Owner's name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner's name"
        />

        <label>Date</label>
        <input 
            type="date" 
            name="date" 
            className="u-full-width" 
        />

        <label>Time</label>
        <input 
            type="time" 
            name="hour" 
            className="u-full-width" 
        />

        <label>Symptoms</label>
        <textarea
            className="u-full-width"
            name="symptoms"
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
