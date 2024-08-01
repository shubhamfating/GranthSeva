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

const BachatgatRegistrationPage = () => {

    const navigate = useNavigate();
    const [responce, loading, error, callAPI] = useApiCallHooks();
    const [content, setContent] = useState({})

    const [data, setData] = useState({
        group_name: "",
        chairman_name: "",
        date: "",
        email: "",
        contact: "",
        address: "",
        no_of_member: "",
        description: ""
    })
    const onClickSubmit = () => {
        callAPI('post', apiRoutes.admin.savinggroup.add, data)
    }
    useEffect(() => {
        if (responce && responce.status === 201) {
            toast.success("Added Successfully");
            setTimeout(() => {
                navigate(uiRoutes.admin.bachatgat.show);
            }, 1000);
        }
    }, [responce, navigate]);

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
            heading={"Saving Groups"}
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
                                <div className="col-12">
                                    <form className="card">
                                        <div className="card-body">
                                            <h1 className="card-title text-info">
                                                {content.saving_group_heading}</h1>

                                            <div className="col-md">
                                                <div className="mb-3">
                                                    <label className="form-label"><span class="required">*</span>
                                                        {content.group_name} </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        disabled=""
                                                        placeholder={content.group_name}
                                                        onChange={(e) => setData({ ...data, group_name: e.target.value })} required
                                                    />
                                                    <span class="validation-message">{error && error.group_name && error.group_name}</span>
                                                </div>
                                            </div>
                                            <div className=" col-md">
                                                <div className="mb-3">
                                                    <label className="form-label"> <span class="required">*</span>
                                                        {content.chairman_name}</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={content.chairman_name}
                                                        onChange={(e) => setData({ ...data, chairman_name: e.target.value })} required />

                                                    <span class="validation-message">{error && error.chairman_name && error.chairman_name}</span>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row row-cards">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className="form-label"> <span class="required">*</span>
                                                                {content.date_of_establish}</label>
                                                            <input onChange={(e) => setData({ ...data, date: e.target.value })} type="date" className="form-control" />
                                                            <span class="validation-message">{error && error.date && error.date}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className="form-label"><span class="required">*</span>{content.email}</label>
                                                            <input type="email" className="form-control" placeholder={content.email}
                                                                onChange={(e) => setData({ ...data, email: e.target.value })} />
                                                            <span class="validation-message">{error && error.email && error.email}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className="form-label"><span class="required">*</span>{content.contact}</label>
                                                            <input type="text" className="form-control" placeholder={content.contact}
                                                                onChange={(e) => setData({ ...data, contact: e.target.value })} />
                                                            <span class="validation-message">{error && error.contact && error.contact}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label"> {content.address} </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            onChange={(e) => setData({ ...data, address: e.target.value })}
                                                            placeholder={content.address}
                                                        />
                                                        <span class="validation-message">{error && error.address && error.address}</span>

                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label"> {content.no_of_member} </label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            onChange={(e) => setData({ ...data, no_of_member: e.target.value })}
                                                            placeholder={content.no_of_member}
                                                        />
                                                        <span class="validation-message">{error && error.no_of_member && error.no_of_member}</span>

                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="mb-3 mb-0">
                                                        <label className="form-label"><span class="required">*</span>{content.description_organisation} / तुमच्या संस्थेबद्दल आम्हाला सांगा</label>
                                                        <textarea
                                                            rows={5}
                                                            className="form-control"
                                                            placeholder={content.description_organisation}
                                                            onChange={(e) => setData({ ...data, description: e.target.value })}
                                                        />
                                                        <span class="validation-message">{error && error.description && error.description}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-footer text-end">
                                                <button type="button" className="btn btn-primary me-2"
                                                    onClick={() => onClickSubmit()}>
                                                    <i className="ti-save-alt" /> {content.save}
                                                </button>
                                                <button type="button" className="btn btn-warning ">
                                                    <i className="ti-trash" /> {content.cancel}
                                                </button>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        />
    )
}

export default BachatgatRegistrationPage