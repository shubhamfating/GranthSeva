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
import PaginationBar from '../../../components/admin/PaginationBar';

const ElectionListPage = () => {
    const [responce, loading, error, callAPI, statusCode] = useApiCallHooks();
    const [isDeleted, setIsDeleted] = useState();
    const [content, setContent] = useState({})
    const navigate = useNavigate();
    const {slug}=useParams();
    const [list, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    
    useEffect(() => {
        callAPI('get', apiRoutes.admin.election.list, "");
    }, []); // Include callAPI and scheme in the dependency array

    const onClickDelete = (slug) => {
        setIsDeleted(true)
        callAPI('delete', apiRoutes.admin.election.delete + slug);
    }
    const onClickEdit = (slug) => {
        navigate(uiRoutes.admin.election.edit.replace(':slug', slug))
    }

    if (responce?.data?.data?.length > 0 && responce?.data?.message === "ElectionList" && list.length === 0) {
        setList(responce.data.data);
    }    

    useEffect(() => {
        if (isDeleted && responce && responce.status === 200) {
            toast.success("Deleted Successfully");
            setList([]);
            callAPI('get', apiRoutes.admin.election.delete, "");
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

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <AdminAppBody
            loading={loading}
            heading={"Election List"}
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
                                        {"Election List"}</h3>

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
                                </div>
                                <div className="table-responsive">
                                    <table className="table card-table table-vcenter text-nowrap datatable">
                                        <thead>
                                            <tr>
                                                {/* <th>Work Area /कार्यक्षेत्र</th> */}
                                                <th>{content.sr_no}</th>
                                                <th>{"Election Name"}</th>
                                                <th>{"Year"}</th>
                                                <th >{content.action} </th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {list.length > 0 && list.map((data, i) => (
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{data.election_name}</td>
                                                    <td>{data.year} </td>
                                                    <td>
                                                        <div className="btn-list flex-nowrap">
                                                            <button className="btn btn-purple" title='Edit'
                                                                onClick={() => onClickEdit(data.slug)}>
                                                                <i style={{ fontSize: "24px" }} class="fa">&#xf044;</i>
                                                            </button>
                                                            <button className="btn btn-red"
                                                                title='Delete'
                                                                onClick={() => onClickDelete(data.slug)}>
                                                                <i style={{ fontSize: 24 }} className="fa"></i>
                                                            </button>
                                                            <button className="btn btn-purple"
                                                                title='Voters'
                                                                onClick={() => navigate(uiRoutes.admin.election.voting.replace(':slug', data.slug))}>
                                                                Voting
                                                                {/* <i style={{ fontSize: 24 }} className="fa"></i> */}
                                                            </button>

                                                            <button className="btn btn-warning"
                                                                title='Voters'
                                                                onClick={() => navigate(uiRoutes.admin.election.voted.replace(':slug', data.slug))}>
                                                                Voted
                                                                {/* <i style={{ fontSize: 24 }} className="fa"></i> */}
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>

                                    </table>
                                </div>
                                <div className="card-footer d-flex align-items-center">
                                        <div className='page m-0 ms-auto'>
                                        <PaginationBar
                                            totalRecords={list.length}
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

export default ElectionListPage