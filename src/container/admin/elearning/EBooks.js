import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'
import { useNavigate } from 'react-router-dom'
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import { uiRoutes } from '../../../routes/ui/uiRoutes';
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { apiRoutes } from '../../../routes/api/apiRoutes';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PaginationBar from '../../../components/admin/PaginationBar';
export default function EBooks() {
    const [responce, loading, error, callAPI] = useApiCallHooks(); // assuming callAPI is returned by useApiCallHooks
    const [isDeleted, setIsDeleted] = useState(false);
    const navigate = useNavigate();
    const [eBook, setEbook] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;


    useEffect(() => {
        callAPI('get',apiRoutes.admin.ebook.list, "");
    }, []); // Include callAPI and scheme in the dependency array
    const onClickDelete = (slug) => {
        setIsDeleted(true)
        callAPI('delete',apiRoutes.admin.ebook.delete+ slug);
    }
    const onClickEdit = (slug) => {
        navigate(uiRoutes.admin.ebook.update.replace(':slug', slug))
    }
    if (responce?.data?.data?.length > 0 && responce?.data?.message === "eBookLists" && eBook.length === 0) {
        setEbook(responce.data.data);
    }
    useEffect(() => {
        if (isDeleted && responce && responce.status === 200) {
            toast.success("Deleted Successfully");
            setEbook([]);
            callAPI('get', apiRoutes.admin.ebook.list, "");
            // navigate(uiRoutes.admin.work.show)
            setTimeout(() => {
                window.location.reload();
            }, 2000);
            setIsDeleted(false);
        }
    }, [isDeleted, responce, callAPI]);
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

    
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <AdminAppBody
            loading={loading}
            heading={" E-Books"}
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
                            <div className="col-12 card">
                                <div className="card-header">
                                    <h3 className="card-title text-info">
                                        {content.book_table}  </h3>
                                </div>
                                <div className="card-body border-bottom py-3">
                                    <div className="d-flex">
                                        <span className="d-none d-sm-inline">
                                            <a className="btn btn-blue w-100"
                                                onClick={() => navigate(uiRoutes.admin.ebook.add)}>
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
                                                <th>{content.book_name}</th>
                                                <th>{content.author_name}</th>
                                                <th>{content.publication}</th>
                                                <th>{content.status}</th>
                                                <th>{content.categoryid}</th>
                                                <th className='text-center'>{content.link}</th>
                                                <th>{content.book_detail}</th>
                                                {/* <th>Subject / विषय</th> */}
                                                <th className='text-center'>{content.action}</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {eBook.map((data, i) => (
                                                <tr>
                                                    <th>{i + 1}</th>
                                                    <td>{data.book_name}</td>
                                                    <td>{data.author_name}</td>
                                                    <td>{data.publication}</td>
                                                    <td>{data.status}</td>
                                                    <td>{data.category_id}</td>
                                                    <td>{data.book_link}</td>
                                                    <td>{data.book_details}</td>
                                                    <td>
                                                        <div className="btn-list flex-nowrap">
                                                            <button className="btn btn-purple w-100 " title='Edit'
                                                                onClick={() => onClickEdit(data.slug)}>
                                                                <i style={{ fontSize: "24px" }} class="fa">&#xf044;</i>
                                                            </button>
                                                            <button className="btn btn-red  w-100 " title='Delete'
                                                                onClick={() => onClickDelete(data.slug)}>
                                                                <i style={{ fontSize: 24 }} className="fa"></i>
                                                            </button>
                                                        </div></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
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
                </>
            }
        />
    )
}