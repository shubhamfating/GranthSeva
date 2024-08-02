import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'
import { useNavigate } from 'react-router-dom'
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import { uiRoutes } from '../../../routes/ui/uiRoutes';
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { apiRoutes } from '../../../routes/api/apiRoutes';
import PaginationBar from '../../../components/admin/PaginationBar';

function ComplaintShowPage() {
  const navigate = useNavigate();
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
  const onClickEdit = (slug) => {
    navigate(uiRoutes.user.complaint.update.replace(':slug',slug))
  }
  const [isDeleted,setIsDeleted]=useState();
  const onClickDelete =(id)=>{
    setIsDeleted(false)
    callAPI('delete', 'complaints/'+id);
   
   }
   if(responce && responce.status ==="deleted" && !isDeleted){
    callAPI('get', 'complaints', "");
    setIsDeleted(true)
   }
   const [content, setContent] = useState({})
   useEffect(() => {
       let lang = localStorage.getItem('language')
       if (lang === "english") {
           setContent(english)
       } else if (lang === "hindi") {
           setContent(hindi)
       } else if (lang === "marathi") {
           setContent(marathi)
       }
   })

      // Calculate current records
      const indexOfLastRecord = currentPage * recordsPerPage;
      const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
      const currentRecords = complaint.slice(indexOfFirstRecord, indexOfLastRecord);
  
      const handlePageChange = (pageNumber) => {
          setCurrentPage(pageNumber);
      };
  return (
    <AdminAppBody
      loading={loading}
      heading={"Complaint Table"}
      content={
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-cards">
              <div className="col-12 card">
                <div className="card-header">
                  <h3 className="card-title text-info">
                   {content.complaint_table} </h3>
                </div>
                <div className="card-body border-bottom py-3">
                  <div className="d-flex">

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
                <div className="table-responsive">
                  <table className="table card-table table-vcenter text-nowrap datatable">
                    <thead>
                      <tr>
                        <th>{content.ward_no}</th>
                        <th>{content.full_name}</th>
                        <th>{content.complaint_about}</th>
                        <th>{content.complaint_date}</th>
                        <th>{content.complaint_status}</th>
                        {/* <th>Area Comes Under / क्षेत्र अंतर्गत येते</th> */}
                        <th className='text-center'>{content.action}</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {complaint.map((data, i) => (
                        <tr>
                          <td>{data.ward_no}</td>
                          <td>{data.first_name} {data.middle_name} {data.last_name} </td>
                          <td>{data.complaint}</td>
                          <td>{data.date} </td>
                          <td>{data.start_date}</td>
                          <div className="btn-list flex-nowrap">
                            <button className="btn btn-purple w-100 " title='Edit'
                              onClick={() => onClickEdit(data.slug)}>
                              <i style={{ fontSize: "24px" }} class="fa">&#xf044;</i>
                            </button>
                            <button className="btn btn-red  w-100 " title='Delete'
                              onClick={()=>onClickDelete(data.id)}>
                              <i style={{ fontSize: 24 }} className="fa"></i>
                            </button>
                          </div>
                        </tr>
                      ))}

                    </tbody>

                  </table>
                </div>
                <div className="card-footer d-flex align-items-center ">
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

export default ComplaintShowPage