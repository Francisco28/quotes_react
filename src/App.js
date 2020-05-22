import React, { Fragment, useState } from "react";
import Form from './components/Form';
import Quote from "./components/Quote";



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

  //function that removes an quote by its "id"
  const deleteQuote = id => {
      const newQuotes = quotes.filter(quote => quote.id !== id);
      saveQuotes(newQuotes);
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
              <h2>Manage your appointments</h2>   
              {quotes.map(quote => (
                <Quote 
                  key = {quote.id}
                  quote = {quote}
                  deleteQuote = {deleteQuote}
                />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
