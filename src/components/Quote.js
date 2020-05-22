import React from 'react';

const Quote = ({quote}) => (
    <div className="cita">
        <p>Pet: <span>{quote.pet}</span></p>
        <p>Owner: <span>{quote.owner}</span></p>
        <p>Date: <span>{quote.date}</span></p>
        <p>Time: <span>{quote.hour}</span></p>
        <p>Symptoms: <span>{quote.symptoms}</span></p>
    </div>
);
 
export default Quote;