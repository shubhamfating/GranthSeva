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

export default function EBooks() {
    const [responce, loading, error, callAPI] = useApiCallHooks(); // assuming callAPI is returned by useApiCallHooks
    const [isDeleted, setIsDeleted] = useState(false);
    const navigate = useNavigate();
    const [eBook, setEbook] = useState([]);
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
                                                <th>{content.link}</th>
                                                <th>{content.bookdetails}</th>
                                                {/* <th>Subject / विषय</th> */}
                                                <th>{content.action}</th>


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
                                    <ul className="pagination m-0 ms-auto">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">
                                                {/* Download SVG icon from http://tabler-icons.io/i/chevron-left */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M15 6l-6 6l6 6" />
                                                </svg>
                                                prev
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                4
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                5
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                next{" "}
                                                {/* Download SVG icon from http://tabler-icons.io/i/chevron-right */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M9 6l6 6l-6 6" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
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
