import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import { apiRoutes } from '../../../routes/api/apiRoutes';
import BookCard from '../../../components/admin/BookCard';
import { Row, Col } from 'react-bootstrap';

import PaginationBar from '../../../components/admin/PaginationBar';



const ShowBookCards = (props) => {
   const [responce, loading, error, callAPI] = useApiCallHooks(); // assuming callAPI is returned by useApiCallHooks
    const [eBook, setEbook] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 9;

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        callAPI('get',apiRoutes.admin.ebook.list, "");
    }, []); 

     if (responce?.data?.data?.length > 0 && responce?.data?.message === "eBookLists" && eBook.length === 0) {
        setEbook(responce.data.data);
    }


    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = eBook.slice(indexOfFirstRecord, indexOfLastRecord);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    
    return (
        <AdminAppBody
            loading={false}
            heading={"All Book Detail's "}
            content={
                <div className="page-body">

                    <div className="container-xl">
                        <div className="row row-cards">
                            <div className='card'>
                                <div className="card-header">
                                    <h3 className="card-title text-info">
                                        Function & Eevent Tables / कार्य आणि कार्यक्रम सारण्या</h3>
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
{currentRecords.map((eBook, index) => (
  <Col key={index} sm={12} md={6} lg={4} xl={3}>
    <BookCard eBook={eBook} />
  </Col>
))}
</Row>


      
                       
                        
                    <div className="card-footer d-flex align-items-center">
                                    <div className='page m-0 ms-auto'>
                                        <PaginationBar
                                            totalRecords={eBook.length}
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

export default ShowBookCards