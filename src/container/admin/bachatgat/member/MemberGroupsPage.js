import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../../components/admin/AdminAppBody'
import { useNavigate } from 'react-router-dom'
import useApiCallHooks from '../../../../hooks/useApiCallHooks';
import { uiRoutes } from '../../../../routes/ui/uiRoutes';
import marathi from '../../../../translationData/marathi.json'
import hindi from '../../../../translationData/hindi.json'
import english from '../../../../translationData/english.json'

const MemberGroupsPage = () => {
    const navigate = useNavigate();
    const [responce, loading, error, callAPI] = useApiCallHooks(); // assuming callAPI is returned by useApiCallHooks
    useEffect(() => {
        callAPI('get', 'members', responce);
        //setScheme(responce)

    }, []);
   
    
   const onClickEdit=(slug)=>{
    navigate(uiRoutes.admin.member.updateMember.replace(':slug',slug))
   }
   const [isDeleted, setIsDeleted] = useState();

   const onClickDelete = (id) => {
     setIsDeleted(false)
     callAPI('delete', 'members/' + id);
 }
 if (responce && responce.status === "deleted" && !isDeleted) {
     callAPI('get', 'members', "");
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
    return (
        <AdminAppBody
            loading={loading}
            heading={"Members List  "}
            content={
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title text-info">{content.bachatgat_member_heading}</h3>
                                    </div>
                                    <div className="card-body border-bottom py-3">
                                        <div className="d-flex">

                                            <span className="d-none d-sm-inline">
                                                <a href="#" className="btn btn-blue w-100"
                                                    onClick={() => navigate("/new-member-registration")}>
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
                                                <tr >
                                                    <th>{content.sr_no}</th>
                                                    <th>{content.full_name}</th>
                                                    {/* <th>Role</th> */}
                                                    {/* <th>Joining Date</th> */}
                                                    <th >{content.email}</th>
                                                    <th>{content.content}</th>
                                                    <th className='text-center'> {content.action}</th>
                                                    <th />
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {responce.map((data, i) => (
                                                <tr>

                                                    <th>{i+1}</th>
                                                    <td>{data.first_name} {data.middle_name} {data.last_name}</td>
                                                    <td>{data.email} </td>
                                                    <td>{data.contact}</td>
                                                   



                                                    <div className="btn-list flex-nowrap">
                                                        <button className="btn btn-purple w-100 " title='Edit'
                                                            onClick={() =>onClickEdit(data.slug)}>
                                                            <i style={{ fontSize: "24px" }} class="fa">&#xf044;</i>
                                                        </button>
                                                        <button className="btn btn-red  w-100 "  title='Delete'
                                                         onClick={()=>onClickDelete(data.id)}>
                                                            <i style={{ fontSize: 24 }} className="fa"></i>
                                                        </button>
                                                      
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

export default MemberGroupsPage