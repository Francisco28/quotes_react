import React, { Fragment, useState } from "react";
import Form from './components/Form';



function App() {

  //array of quotes
  const [quotes, saveQuotes] = useState([]);

  //function que tome las citas acutales y agregue la nueva
  const createQuote = quote => {
    saveQuotes([
      ...quotes,
      quote
    ])
  }

  return (
    <Fragment>
      <h1>Patient Manager</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Form 
                createQuote = { createQuote }
              />
          </div>
          <div className="one-half column">
              2   
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
