import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'
import { useNavigate, useParams } from 'react-router-dom';
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import { uiRoutes } from '../../../routes/ui/uiRoutes';
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { apiRoutes } from '../../../routes/api/apiRoutes';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CorporatorWorkTable = () => {
    const [responce, loading, error, callAPI] = useApiCallHooks(); // assuming callAPI is returned by useApiCallHooks
    const [isDeleted, setIsDeleted] = useState(false);
    const [content, setContent] = useState({})
    const navigate = useNavigate();
    const { slug } = useParams();
    const [works, setWorks] = useState([]);

    useEffect(() => {
        callAPI('get', apiRoutes.admin.work.list, "");
    }, []); // Include callAPI and scheme in the dependency array

    const onClickDelete = (slug) => {
        setIsDeleted(true)
        callAPI('delete', apiRoutes.admin.work.delete + slug);
    }
    const onClickEdit = (slug) => {
        navigate(uiRoutes.admin.work.edit.replace(':slug', slug))
    }

    if (responce?.data?.data?.length > 0 && responce?.data?.message === "WorkList" && works.length === 0) {
        setWorks(responce.data.data);
    }

    useEffect(() => {
        if (isDeleted && responce && responce.status === 200) {
            toast.success("Deleted Successfully");
            setWorks([]);
            callAPI('get', apiRoutes.admin.work.list, "");
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
    return (
        <AdminAppBody
            loading={loading}
            heading={" Corporater Work Table"}
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
                                            {content.corporator_work_table}   </h3>

                                        <div className="card-body border-bottom py-3">
                                            <div className="d-flex">
                                            <span className="d-none d-sm-inline">
                                            <a className="btn btn-blue w-100"
                                                onClick={() => navigate(uiRoutes.admin.corporator.create)} >
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
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table card-table table-vcenter text-nowrap datatable">
                                            <thead>
                                                <tr>
                                                    {/* <th>Work Area /कार्यक्षेत्र</th> */}
                                                    <th>{content.sr_no}</th>
                                                    <th>{content.project_name}</th>
                                                    <th>{content.work_status}</th>
                                                    <th>{content.start_date}</th>
                                                    <th>{content.end_on}</th>
                                                    <th>{content.work_budget}</th>
                                                    <th>{content.action}/ </th>
                                                    <th />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {works.map((data, i) => (
                                                    <tr>
                                                        <td>{i + 1}</td>
                                                        <td>{data.work_name}</td>
                                                        <td>{data.work_status} </td>
                                                        <td>{data.start_date}</td>
                                                        <td>{data.end_date}</td>
                                                        <td>{data.budget}</td>
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

export default CorporatorWorkTable