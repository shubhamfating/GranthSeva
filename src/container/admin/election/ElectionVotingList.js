import React, { useEffect, useState } from 'react';
import AdminAppBody from '../../../components/admin/AdminAppBody';
import { useNavigate } from 'react-router-dom';
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import { uiRoutes } from '../../../routes/ui/uiRoutes';
import marathi from '../../../translationData/marathi.json';
import hindi from '../../../translationData/hindi.json';
import english from '../../../translationData/english.json';
import { apiRoutes } from "../../../routes/api/apiRoutes";
import PaginationBar from '../../../components/admin/PaginationBar';
import SearchBar from '../../../components/admin/SearchBar';


const ElectionVotingList = () => {
    const [isDeleted, setIsDeleted] = useState(false);
    const navigate = useNavigate();
    const [responce, loading, error, callAPI, statusCode] = useApiCallHooks();
    const [voters, setVoter] = useState([]);
    const [toggledVoters, setToggledVoters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const recordsPerPage = 10;

    useEffect(() => {
        callAPI('get', "get-voting-voter-list", "");
        callAPI('get', "voter-toggles");
    }, []);

    useEffect(() => {
        if (responce?.data?.data && responce?.data?.message === "VoterList") {
            setVoter(responce.data.data);
        }

        if (responce?.data && Array.isArray(responce.data)) {
            setToggledVoters(responce.data.map(toggle => toggle.voter_id));
        }
    }, [responce]);

    useEffect(() => {
        if (responce && responce.status === "deleted" && !isDeleted) {
            callAPI('get', apiRoutes.admin.election.getVotingVoterList, "");
            setIsDeleted(true);
        }
    }, [responce, isDeleted, callAPI]);

    const handleToggle = async (voterId) => {
        const isToggled = !toggledVoters.includes(voterId);

        setToggledVoters(prevState => {
            if (isToggled) {
                return [...prevState, voterId];
            } else {
                return prevState.filter(id => id !== voterId);
            }
        });

        await callAPI('post', "/api/voter-toggles/update", { voter_id: voterId, is_toggled: isToggled });
    };

    const handleVotedButtonClick = () => {
        navigate(uiRoutes.admin.election.voted);
    };
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
    // Language content setup
    const [content, setContent] = useState({});
    useEffect(() => {
        let lang = localStorage.getItem('language');
        if (lang === "english") {
            setContent(english);
        } else if (lang === "hindi") {
            setContent(hindi);
        } else if (lang === "marathi") {
            setContent(marathi);
        }
    }, []);

    return (
        <AdminAppBody
            loading={loading}
            heading={"Voter Voting List "}
            content={
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title text-info">{"Voter Voting List"}</h3>
                                    </div>
                                    <div className="card-body border-bottom py-3">
                                        <div className="d-flex">
                                            <span className="d-none d-sm-inline">
                                                <button className="btn btn-blue w-100" onClick={handleVotedButtonClick}>
                                                    {"Voted"}
                                                    <i style={{ fontSize: 16 }} className="fa"></i>
                                                </button>
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
                                                    <th>{"Check"}</th>
                                                    <th>{content.voting_no}</th>
                                                    <th>{content.voter_name}</th>
                                                    <th>{content.date_of_birth}</th>
                                                    <th>{content.gender}</th>
                                                    <th>{content.constituency}</th>
                                                    <th />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentRecords.length > 0 && currentRecords.map((data, i) => (
                                                    <tr key={data.id}>
                                                        <th>{indexOfFirstRecord + i + 1}</th>
                                                        <td className='form-check form-switch'>
                                                            <input 
                                                                type='checkbox' 
                                                                className="form-check-input" 
                                                                role="switch" 
                                                                checked={toggledVoters.includes(data.id)} 
                                                                onChange={() => handleToggle(data.id)} 
                                                            />
                                                        </td>
                                                        <td>{data.voting_no}</td>
                                                        <td>{data.voter_name}</td>
                                                        <td>{data.date_of_birth}</td>
                                                        <td>{data.gender}</td>
                                                        <td>{data.constituency}</td>
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
    );
};

export default ElectionVotingList;