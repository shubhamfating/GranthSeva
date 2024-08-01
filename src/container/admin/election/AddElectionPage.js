import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { uiRoutes } from '../../../routes/ui/uiRoutes';
import { useNavigate } from 'react-router-dom';
import { apiRoutes } from '../../../routes/api/apiRoutes';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function AddElectionPage() {
    const navigate = useNavigate();
    const [responce, loading, error, callAPI, statusCode] = useApiCallHooks();
    const d = new Date();
    const [data, setData] = useState({
        election_name: "",
        year: d.getFullYear(),
    })

    const onClickSubmit = () => {
        setData(data)
        callAPI('post',apiRoutes.admin.election.add, data)
    }
    
    useEffect(() => {
        if (responce && responce.status === 201) {
            toast.success("Added Successfully");
            setTimeout(() => {
                navigate(uiRoutes.admin.election.show);
            }, 1000);
        }
    }, [responce, navigate]);

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
            heading={" Add ELection"}
            content={
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards">
                            <div className="col-12">
                                <form className="card">
                                    <div className="card-body">
                                        <h3 className="card-title text-info">
                                            {"Add ELection"}
                                        </h3>
                                        <hr className="my-15" />

                                        <>
                                            <div className="box-body">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        <span class="required">*</span>
                                                        {"Election Name"}

                                                    </label>
                                                    <input type="text" className="form-control" placeholder={"Add Election"}
                                                        onChange={(e) => setData({ ...data, election_name: e.target.value })} />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.election_name}</span>
                                                </div>
                                                <br />
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="form-label">
                                                                <span class="required">*</span>
                                                                {"Year eg.2024,2025"}
                                                            </label>
                                                            <input type="text" className="form-control"
                                                                onChange={(e) => setData({ ...data, year: e.target.value })} value={data.year} readOnly />
                                                            <span className="text-danger">{error && error.message === "ValidationError" && error.data.year}</span>

                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                            </div>
                                            {/* /.box-body */}
                                            <div className="box-footer text-end">
                                                <button type="button" className="btn btn-primary me-2"
                                                    onClick={() => onClickSubmit()}>
                                                    <i className="ti-save-alt" /> {content.save}
                                                </button>
                                                <button type="button" className="btn btn-warning ">
                                                    <i className="ti-trash" /> {content.cancel}
                                                </button>
                                            </div>
                                        </>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    )
}

export default AddElectionPage
