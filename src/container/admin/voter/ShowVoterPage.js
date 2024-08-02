import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'
import { useNavigate } from 'react-router-dom';
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import { uiRoutes } from '../../../routes/ui/uiRoutes';
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { apiRoutes } from "../../../routes/api/apiRoutes";
import PaginationBar from '../../../components/admin/PaginationBar';
import SearchBar from '../../../components/admin/SearchBar';

const ShowVoterPage = () => {

    const [isDeleted, setIsDeleted] = useState();
    const navigate = useNavigate();
    const [responce, loading, error, callAPI, statusCode] = useApiCallHooks();
    const [voters, setVoter] = useState([]);
    const [toggledVoters, setToggledVoters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    useEffect(() => {
        callAPI('get', apiRoutes.admin.voter.list, "");
    }, []);

    if (responce?.data?.data.length > 0 && responce?.data?.message === "VoterList" && voters.length === 0) {
        setVoter(responce.data.data);
    }


    const onClickEdit = (slug) => {
        navigate(uiRoutes.admin.voter.update.replace(':slug', slug))
    }


    const handleSearch = (term) => {
        setSearchTerm(term);
        setCurrentPage(1); // Reset to first page on search
    };

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const filteredRecords = voters.filter(record =>
        record.voting_no.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const currentRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const onClickDelete = (slug) => {
        setIsDeleted(false)
        callAPI('delete', uiRoutes.admin.voter.delete + slug);
    }

    if (responce && responce.status === "deleted" && !isDeleted) {
        callAPI('get', 'voters', "");
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
            heading={"Voter List "}
            content={
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title text-info">{content.voter_details}</h3>
                                    </div>
                                    <div className="card-body border-bottom py-3">
                                        <div className="d-flex">
                                            <span className="d-none d-sm-inline">
                                                <a href="#" className="btn btn-blue w-100"
                                                    onClick={() => navigate(uiRoutes.admin.voter.add)}>
                                                    {content.add_new}
                                                    <i style={{ fontSize: 16 }} className="fa"></i>
                                                </a>
                                            </span>
                                            <div className="ms-auto text-muted">
                                            Search:
                                            <SearchBar onSearch={handleSearch} />
                                                {/* <div className="ms-2 d-inline-block">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        aria-label="Search invoice"
                                                    />
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table card-table table-vcenter text-nowrap datatable">
                                            <thead>
                                                <tr>
                                                    <th>{content.sr_no}</th>
                                                    <th>{content.voting_no}</th>
                                                    <th>{content.voter_name}</th>
                                                    <th>{content.date_of_birth}</th>
                                                    <th>{content.gender}</th>
                                                    <th>{content.constitueny}</th>
                                                    <th className='text-center'> {content.action}</th>
                                                    <th />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {voters.length > 0 && voters.map((data, i) => (
                                                    <tr>
                                                        <th>{i + 1}</th>
                                                        <td>{data.voting_no}</td>
                                                        <td>{data.voter_name} </td>
                                                        <td>{data.date_of_birth}</td>
                                                        <td>{data.gender} </td>
                                                        <td>{data.constituency} </td>
                                                        <td>
                                                            <div className="btn-list flex-nowrap">
                                                                <button className="btn btn-purple w-100 " title='Edit'
                                                                    onClick={() => onClickEdit(data.slug)}>
                                                                    <i style={{ fontSize: "24px" }} class="fa">&#xf044;</i>
                                                                </button>

                                                                <button className="btn btn-red  w-100 " title='New Delete' onClick={() => onClickDelete(data.slug)}>
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
                                    <div className='page m-0 ms-auto'>
                                        <PaginationBar
                                            totalRecords={voters.length}
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
                </div>
            }
        />
    )
}

export default ShowVoterPage