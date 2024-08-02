import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'
import { useNavigate } from 'react-router-dom';
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { apiRoutes } from '../../../routes/api/apiRoutes';

function PersonalTablePage() {
    const navigate = useNavigate();
    const [responce, loading, error, callAPI] = useApiCallHooks(); // assuming callAPI is returned by useApiCallHooks
    const [resident, setResident] = useState([]);
    
    
    useEffect(() => {
        callAPI('get', apiRoutes.admin.rasidant.list, "");
        //setScheme(responce)

    }, []); // Include callAPI and scheme in the dependency array


    if (responce?.data?.data?.length > 0 && responce?.data?.message === "ResidentLists" && resident.length === 0) {
        setResident(responce.data.data);
    }
    const onClickEdit = (id) => {
        navigate('/admin-scheme-uppdate/' + id)
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
    return (
        <AdminAppBody
            loading={loading}
            heading={"Public Data"}
            content={
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title text-info">{content.personal_detail_table} </h3>
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
                                                <th>{content.sr_no}</th>
                                                {/* <th>Ward No. / प्रभाग क्र.</th> */}
                                                <th>{content.full_name}</th>
                                                <th>{content.occupation}</th>
                                                <th>{content.cast}</th>
                                                <th>{content.religion}</th>
                                                <th>{content.annual_income}</th>
                                                <th>{content.action}</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {resident.map((data, i) => (
                                                <tr>

                                                    <td>{i+1}</td>
                                                    <td>{data.first_name} {data.middle_name} {data.last_name}</td>
                                                    <td>{data.occupation} </td>
                                                    <td>{data.caste}</td>
                                                    <td>{data.religion}</td>
                                                    <td>{data.annual_income}</td>
                                                  
                                                  



                                                    <div className="btn-list flex-nowrap">
                                                        <button className="btn btn-purple w-100 " title='Edit'
                                                            onClick={() => onClickEdit(data.id)}>
                                                            <i style={{ fontSize: "24px" }} class="fa">&#xf044;</i>
                                                        </button>
                                                        <button className="btn btn-red  w-100 " data-bs-toggle="modal" data-bs-target="#modal-small" title='Delete'>
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
                                                                            type="button"
                                                                            className="btn btn-danger"
                                                                            data-bs-dismiss="modal"
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
            }
        />
    )
}

export default PersonalTablePage
