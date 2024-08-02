import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../../components/admin/AdminAppBody'
import { useNavigate, useParams } from 'react-router-dom'
import useApiCallHooks from '../../../../hooks/useApiCallHooks';
import { uiRoutes } from '../../../../routes/ui/uiRoutes';
import marathi from '../../../../translationData/marathi.json'
import hindi from '../../../../translationData/hindi.json'
import english from '../../../../translationData/english.json'
const BachatgatWorkTable = () => {
    const {slug} =useParams();
    const navigate = useNavigate();
    const [responce, loading, error, callAPI] = useApiCallHooks();
   
    useEffect(() => {
        callAPI('get', 'saving-group-work', {slug:slug});
        //setScheme(responce)
    }, []);
    const onClickEdit = (slug) => {
        navigate(uiRoutes.admin.bachatgat.work.update.replace(':slug',slug) )
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
    const onClickAddNew =()=>{
        navigate(uiRoutes.admin.bachatgat.work.add.replace(':slug',slug) )
    console.log(slug);
    }
    return (
        <AdminAppBody
            loading={loading}
            heading={"Saving Group Work Show"}
            content={
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title text-info">
                                           {content.organization_work_data_table}</h3>
                                    </div>
                                    <div className="card-body border-bottom py-3">
                                        <div className="d-flex">

                                            <span className="d-none d-sm-inline">
                                                <a href="#" className="btn btn-blue w-100"
                                                    onClick={()=>onClickAddNew(slug)}>
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
                                                    <th>{content.project_name}</th>
                                                    {/* <th>Work Status</th> */}
                                                    <th>{content.start_date}</th>
                                                    <th>{content.end_date}</th>
                                                    <th>{content.work_budget}</th>
                                                    <th className='text-center'> {content.action}</th>
                                                    <th />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {responce.map((data, i) => (
                                                    <tr>
                                                        <th>{i + 1}</th>
                                                        <td>{data.work_name}</td>
                                                        <td>{data.start_date} </td>
                                                        <td>{data.due_date}</td>
                                                        <td>{data.work_budget} </td>

                                                        <div className="btn-list flex-nowrap">
                                                            <button className="btn btn-purple w-100 " title='Edit'
                                                                onClick={() => onClickEdit(data.slug)}>
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
                                                        WorkBox="0 0 24 24"
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
                                                        WorkBox="0 0 24 24"
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
                </div>
            }
        />
    )
}

export default BachatgatWorkTable