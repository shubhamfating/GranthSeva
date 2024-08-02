import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ComplaintCard = ({ complaint }) => {
  return (
                                 
                                     <div className="card mt-1 mb-0 text-center" style={{ height: 'auto' }} >
                                    <div className="ribbon bg-yellow p-3 ">{complaint.status}</div>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">{complaint.category_id}</h3>
                                        <h3 className="card-title text-center">{complaint.last_name}</h3>

                                        <p className="text-muted text-center">{complaint.email}</p>
                                        <button className="btn btn-outline-primary w-100">
                                            View
                                        </button>  
</div>
</div>
  );
};

export default ComplaintCard;