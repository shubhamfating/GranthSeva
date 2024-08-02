import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ComplaintCard = ({ complaint }) => {
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
  <div className="ribbon bg-yellow p-3">Status</div>
  <div className="card-body">
    <h3 className="card-title mt-3">Category:{complaint.category_id}</h3>
    <h3 className="card-title mt-3">Complaint: Water supply is not</h3>
    <h3 className="card-title mt-3">Corporator: bhyghcdbuike</h3>
    <h4 className="text-title mt-3">Complaint subject:</h4>
      <p className='text-muted mt-3'>D:/Xampp/mysql/bin/my.cnf to set global options,
      # mysql-data-dir/my.cnf to set server-specific options in this
      # installation this directory is D:/Xampp/mysql/data or
      # ~/.my.cnf to set user-specific options.</p>
    
  </div>
  <div className="card-footer">
  <button className="btn btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#modal-scrollable">
                                            View
                                        </button>
                                        <div className="modal modal-blur fade" id="modal-scrollable" tabindex="-1" role="dialog" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Scrollable modal</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                                                            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                                                            laoreet rutrum faucibus dolor auctor.</p>
                                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                                                            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                                                            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                                                            laoreet rutrum faucibus dolor auctor.</p>
                                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                                                            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                                                            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                                                            laoreet rutrum faucibus dolor auctor.</p>
                                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                                                            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                                                            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                                                            laoreet rutrum faucibus dolor auctor.</p>
                                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                                                            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                                                            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                                                            laoreet rutrum faucibus dolor auctor.</p>
                                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                                                            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                                                            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                                                            laoreet rutrum faucibus dolor auctor.</p>
                                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                                                            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
  </div>

  );
};

export default ComplaintCard;