import React, { useEffect, useState } from 'react'
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import AdminAppBody from '../../../components/admin/AdminAppBody';
import { useNavigate, useParams } from 'react-router-dom';
import { uiRoutes } from '../../../routes/ui/uiRoutes';
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { apiRoutes } from '../../../routes/api/apiRoutes';
import PaginationBar from '../../../components/admin/PaginationBar';

const ShcemeTable = () => {
    const [responce, loading, error, callAPI] = useApiCallHooks(); // assuming callAPI is returned by useApiCallHooks
    const [isDeleted, setIsDeleted] = useState();
    const [content, setContent] = useState({})
    const navigate = useNavigate();
    const {slug}=useParams();
    const [schemes, setSchemes] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;

    useEffect(() => {
        callAPI('get',apiRoutes.admin.scheme.list, "");
    }, []); // Include callAPI and scheme in the dependency array

    const onClickDelete = (slug) => {
        setIsDeleted(true)
        callAPI('delete',apiRoutes.admin.scheme.delete + slug);

    }
    const onClickEdit = (slug) => {
        navigate(uiRoutes.admin.scheme.update.replace(':slug', slug))
    }
    if (responce?.data?.data?.length > 0 && responce?.data?.message === "schemeList" && schemes.length === 0) {
        setSchemes(responce.data.data);
    }
    
    useEffect(() => {
        if (isDeleted && responce && responce.status === 200) {
            toast.success("Deleted Successfully");
            setSchemes([]);
            callAPI('get', apiRoutes.admin.scheme.list, "");
            // navigate(uiRoutes.admin.work.show)
            setTimeout(() => {
                window.location.reload();
            }, 2000);
            setIsDeleted(false);
        }
    }, [isDeleted, responce, callAPI]);

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
       const currentRecords = schemes.slice(indexOfFirstRecord, indexOfLastRecord);
   
       const handlePageChange = (pageNumber) => {
           setCurrentPage(pageNumber);
       };
   
    return (
        <AdminAppBody
            loading={loading}
            heading={"Government Schemes"}
            content={
                <>
                <ToastContainer
                        position="top-center"
                        autoClose={500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title text-info">
                                        {content.government_scheme_heading} </h3>
                                </div>
                                <div className="card-body border-bottom py-3">
                                    <div className="d-flex">

                                        <span className="d-none d-sm-inline">
                                            <a className="btn btn-blue w-100"
                                                onClick={() => navigate(uiRoutes.admin.scheme.add)} >
                                                {content.add_new}
                                                <i style={{ fontSize: 14 }} className="fa"></i>
                                            </a>
                                        </span>
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
                                                <th>{content.sr_no}</th>
                                                <th>{content.name_of_scheme}</th>
                                                <th>{content.come_under}</th>
                                                <th>{content.start_date}</th>
                                                <th>{content.end_date}</th>
                                                <th> {content.action}</th>
                                                <th/>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {schemes.map((data, i) => (
                                                <tr>

                                                    <td>{i + 1}</td>
                                                    <td>{data.scheme_name}</td>
                                                    <td>{data.come_under} </td>
                                                    <td>{data.start_date}</td>
                                                    <td>{data.end_date}</td>
                                                    <div className="btn-list flex-nowrap">
                                                        <button className="btn btn-purple w-100 " title='Edit'
                                                            onClick={() => onClickEdit(data.slug)}>
                                                            <i style={{ fontSize: "24px" }} class="fa">&#xf044;</i>
                                                        </button>
                                                        <button className="btn btn-red  w-100 " data-bs-toggle="modal" data-bs-target="#modal-small" title='Delete'
                                                        >
                                                            <i style={{ fontSize: 24 }} className="fa"></i>
                                                        </button>
                                                        <div
                                                            className="modal modal-blur fade"
                                                            id="modal-small"
                                                            tabIndex={-1}
                                                            role="dialog"
                                                            aria-hidden="true"
                                                        >
                                                            <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                                                                <div className="modal-content">
                                                                    <div className="modal-body">
                                                                        <div className="modal-title">Are you sure?</div>
                                                                        <div>If you proceed, you will lose all your data.</div>
                                                                    </div>

                                                                    <div className="modal-footer">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-link link-secondary me-auto"
                                                                            data-bs-dismiss="modal"
                                                                        >
                                                                            Cancel
                                                                        </button>
                                                                        <button
                                                                            type="submit"
                                                                            className="btn btn-danger"
                                                                            data-bs-dismiss="modal"
                                                                            onClick={() => onClickDelete(data.slug)}
                                                                        >
                                                                            Yes, delete all data
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </tr>

                                            ))}

                                        </tbody>

                                    </table>
                                </div>
                                <div className="card-footer d-flex align-items-center">
                                    <div className='page m-0 ms-auto'>
                                        <PaginationBar
                                            totalRecords={schemes.length}
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
                </>
            }
        />
    )
}

export default ShcemeTable