import React, { Fragment, useState, useEffect } from "react";
import Form from './components/Form';
import Quote from "./components/Quote";



function App() {

  
  //Quotes on local storage
  let initialQuotes = JSON.parse(localStorage.getItem('quotes'));
  if(!initialQuotes) { 
    initialQuotes = [];
  }

  //array of quotes
  const [quotes, saveQuotes] = useState([initialQuotes]);

  //"use Effect" for make various operations when the "state" change
  useEffect( () => {
    if(initialQuotes) {  
      localStorage.setItem('quotes', JSON.stringify(quotes))
    } else {
      localStorage.setItem('quotes', JSON.stringify([]))
    }
  }, [quotes]);

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

  //message conditional
  const title = quotes.length === 0 ? 'There are not quotes' : 'Manage your appointments';


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
              <h2>{title}</h2>   
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
