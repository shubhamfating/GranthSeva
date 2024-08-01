import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminAppBody from "../../../components/admin/AdminAppBody";
import useApiCallHooks from "../../../hooks/useApiCallHooks";
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { uiRoutes } from "../../../routes/ui/uiRoutes";


const CorporatorList = () => {
    const [isDeleted, setIsDeleted] = useState();

    const navigate = useNavigate();
    const [responce, loading, error, callAPI] = useApiCallHooks(); // assuming callAPI is returned by useApiCallHooks
    useEffect(() => {
        callAPI('get', 'corporator', "");
        //setScheme(responce)
        
    }, []); // Include callAPI and scheme in the dependency array


    const onClickEdit = (slug) => {
       navigate(uiRoutes.admin.corporator.update.replace(':slug',slug))
    }
    const onClickDelete = (slug) => {
        setIsDeleted(false)
        callAPI('delete', 'corporator/' + slug);

    }
    const onclickPermission =()=>{
        navigate("/corporator-prmission-page")
    }
    if (responce && responce.status === "deleted" && !isDeleted) {
        callAPI('get', 'corporator', "");
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
    console.log(responce);
  return (
    <AdminAppBody
            loading={loading}
            heading={"Corporator Lists"}
            content={
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title text-info">{content.operator_list}</h3>
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
                                                <th> {content.full_name}</th>
                                                <th>{content.contact}</th>
                                               
                                                <th className='text-center'> {content.action}</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {responce   && responce.length > 0 && responce.map((data, i) => (
                                                <tr key={i + 1}>
                                                    <td >{i + 1}</td>
                                                    <td>{data.first_name}</td>
                                                    <td>{data.contact}</td>
                                                   
                                                    <td>
                                                        <div className="btn-list flex-nowrap">
                                                            <button type='button' className='btn btn-primary'
                                                            onClick={() => onclickPermission()}><b>{content.permition}</b></button>
                                                            <button className="btn btn-purple w-100 " title='Edit'
                                                                onClick={() => onClickEdit(data.slug)}>
                                                                <i style={{ fontSize: "24px" }} class="fa">&#xf044;</i>
                                                            </button>

                                                            <button type='button' className="btn btn-red  w-100 " data-bs-toggle="modal" data-bs-target="#modal-small" title='Delete'
                                                           >
                                                                <i style={{ fontSize: 24 }} className="fa"></i>
                                                            </button>

                                                        </div>
                                                        <div
                                                            className="modal modal-blur fade"
                                                            id={"modal-small"}
                                                            tabIndex={-1}
                                                            role="dialog"
                                                            aria-hidden="true"
                                                            show={false}
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
                                                                            onClick={() => alert(data.slug)}>
                                                                            Yes, delete all data
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
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
            }
        />
  )
}

export default CorporatorList