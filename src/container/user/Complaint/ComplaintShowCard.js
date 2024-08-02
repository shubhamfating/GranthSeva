import React, { useEffect, useState } from 'react'
import { apiRoutes } from '../../../routes/api/apiRoutes';
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import { Row, Col } from 'react-bootstrap';
import ComplaintCard from '../../../components/admin/ComplaintCard';

import AdminAppBody from '../../../components/admin/AdminAppBody'
import PaginationBar from '../../../components/admin/PaginationBar'

const ComplaintShowCard = (props) => {
    const [complaint, setComplaint] =useState([]);
  const [responce, loading, error, callAPI] = useApiCallHooks(); // assuming callAPI is returned by useApiCallHooks

  const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
  useEffect(() => {
    callAPI('get', apiRoutes.user.complaint.list, "");
    //setScheme(responce)

  }, []); // Include callAPI and scheme in the dependency array

  if (responce?.data?.data?.length > 0 && responce?.data?.message === "ComplaintList" && complaint.length === 0) {
    setComplaint(responce.data.data);
}

const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
const currentRecords = complaint.slice(indexOfFirstRecord, indexOfLastRecord);

const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
};
    return (
        <AdminAppBody
            loading={false}
            heading={"All Complaint Detail's "}
            content={
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards">
                        <div className='card'>
                                <div className="card-header">
                                    <h3 className="card-title text-info">
                                      Complaints / तक्रारी  </h3>
                                </div>
                                <div className="card-body border-bottom py-3">
                                    <div className="d-flex">
                                    <div className="form-group">
                                                    <select className="form-select">
                                                        <option>Select Catergory</option>
                                                        <option>Water</option>
                                                        <option>City cleaning management</option>
                                                        <option>Road</option>
                                                        <option>Electricity</option>
                                                        <option>OTHER</option>
                                                    </select>
                                                    
                                                </div>

                                        <div className="ms-auto text-muted">
                                            Search:
                                            <div className="ms-2 d-inline-block">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-sm"
                                                    aria-label="Search invoice"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <Row className="row-cards">
              {currentRecords.map((complaint, index) => (
                <Col key={index} sm={12} md={6} lg={4} xl={3}>
                  <ComplaintCard complaint={complaint} />
                </Col>
              ))}
            </Row>

          
                    <div className="card-footer d-flex align-items-center mt-2">
                                    <div className='page m-0 ms-auto'>
                                        <PaginationBar
                                            totalRecords={complaint.length}
                                            recordsPerPage={recordsPerPage}
                                            currentPage={currentPage}
                                            onPageChange={handlePageChange}
                                        />
                                        </div>
                                    </div>
                                    
          </div>
                        </div>
                        
                    </div>
                </div>
            }
        />
    )
}

export default ComplaintShowCard