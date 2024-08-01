import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { uiRoutes } from '../../../routes/ui/uiRoutes'
import useApiCallHooks from '../../../hooks/useApiCallHooks'
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { apiRoutes } from '../../../routes/api/apiRoutes'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SavingGroupListPage = () => {
  const [responce, loading, error, callAPI] = useApiCallHooks(); // assuming callAPI is returned by useApiCallHooks
  const [isDeleted, setIsDeleted] = useState();
  const [content, setContent] = useState({})
  const [savingGroup, setSavingGroup] = useState([])
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    callAPI('get',apiRoutes.admin.savinggroup.list,"");
  }, []);
 
  const onClickDelete = (slug) => {
    setIsDeleted(true)
    callAPI('delete',apiRoutes.admin.savinggroup.delete + slug);
}
const onClickEdit = (slug) => {
  navigate(uiRoutes.admin.bachatgat.update.replace(':slug',slug) )
}

if (responce?.data?.data?.length > 0 && responce?.data?.message === "savingGroupList" && savingGroup.length === 0) {
  setSavingGroup(responce.data.data);
}

const onClickWorkEdit =(slug)=>{
  navigate(uiRoutes.admin.bachatgat.work.show.replace(':slug',slug))
}

useEffect(() => {
  if (isDeleted && responce && responce.status === 200) {
    toast.success("Deleted Successfully");
    setSavingGroup([]);
    callAPI('get', apiRoutes.admin.savinggroup.list, "");
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
      heading={"Registrated BachatGat Form"}
      content={
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-cards">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title text-info">{content.savingGroup_title} </h3>
                  </div>
                  <div className="card-body border-bottom py-3">
                    <div className="d-flex">
                    <span className="d-none d-sm-inline">
                                            <a className="btn btn-blue w-100"
                                                onClick={() => navigate(uiRoutes.admin.bachatgat.add)} >
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
                          <th>{content.sr_no }</th>
                          <th>{content.group_name}</th>
                          <th>{content.chairman_name}</th>
                          <th>{content.date}</th>
                          <th >{content.email}</th>
                          <th>{content.no_of_member}</th>
                          <th > {content.action}</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {savingGroup.map((data, i) => (
                          <tr>
                            <th>{i+1}</th>
                            <td>{data.group_name}</td>
                            <td>{data.chairman_name}</td>
                            <td>{data.date} </td>
                            <td>{data.email}</td>
                            <td>{data.no_of_member}</td>
                            <td>
                              <div className="btn-list flex-nowrap">
                                <button className="btn btn-lime w-100" title='Member' onClick={() => navigate(uiRoutes.admin.bachatgat.member)}>
                                  <i style={{ fontSize: 24 }} className="fa"></i>
                                </button>
                                <button className="btn btn-orange w-100" title='Work'
                                onClick={() => onClickWorkEdit(data.slug)}
                                  >
                                  <i style={{ fontSize: 24 }} className="fa"></i>
                                </button>
                                <button className="btn btn-purple w-100 " title='Edit' onClick={() => onClickEdit(data.slug)}>
                                  <i style={{ fontSize: "24px" }} class="fa">&#xf044;</i>
                                </button>
                                <button className="btn btn-red  w-100 " title='Delete'
                                 onClick={()=>onClickDelete(data.slug)}>
                                  <i style={{ fontSize: 24 }} className="fa"></i>
                                </button>
                                
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
        </div>
      }
    />
  )
}

export default SavingGroupListPage