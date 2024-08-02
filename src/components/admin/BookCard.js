import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BookCard = ({ eBook }) => {
  return (
   
<div
  className="card mt-3 mb-0"
  style={{
    height: '400px',
    width: '280px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', // Darker shadow
    borderRadius: '8px', // Optional: adds rounded corners
    overflow: 'hidden' // Optional: ensures that shadow doesn't overflow the card
  }}
>
  
  <div className="card-body">
    <h3 className="card-heading mt-3">{eBook.book_name}</h3>
    <img className="card-img-top" src="https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg"/>
  </div>
  <div className="card-footer d-dlex-auto">
    <a href={eBook.book_link}  className="btn btn-primary">View</a>
  </div>
</div>

  );
};

export default BookCard;