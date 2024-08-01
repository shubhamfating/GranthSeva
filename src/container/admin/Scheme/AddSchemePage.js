import React, { useEffect, useState } from 'react'
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import AdminAppBody from '../../../components/admin/AdminAppBody';
import { useNavigate } from 'react-router-dom';
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { uiRoutes } from '../../../routes/ui/uiRoutes';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { apiRoutes } from '../../../routes/api/apiRoutes';

const AddSchemePage = () => {
    const navigate = useNavigate();
    const [responce, loading, error, callAPI] = useApiCallHooks();
    const [content, setContent] = useState({})
    const [data, setData] = useState({
        scheme_name: "",
        start_date: "",
        corporator_id: "",
        end_date: "",
        come_under: "",
        description: ""
    })
    const onClickSubmit = () => {
        callAPI('post', apiRoutes.admin.scheme.add, data);
        console.log(data);
    }
    useEffect(() => {
        if (responce && responce.status === 201) {
            toast.success("Added Successfully");
            setTimeout(() => {
                navigate(uiRoutes.admin.scheme.show);
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
            heading={"Add Scheme"}
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
                            <form className="card">
                                <div className="card-body">
                                    <h2 className="card-title text-info mb-0"> <i class="ti-user me-15"></i>
                                        {content.scheme_form}</h2>
                                    <hr class="my-15"></hr>
                                    <div className="row row-cards">
                                        <div className="mb-3">
                                            <label className="form-label"><span class="required">*</span>
                                                {content.name_scheme} </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                disabled=""
                                                placeholder={content.scheme_name}
                                                onChange={(e) => setData({ ...data, scheme_name: e.target.value })} required
                                            />
                                            <span class="validation-message">{error && error.scheme_name}</span>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="form-group">
                                        <label className="form-label"><span class="required">*</span> {content.come_under}</label>
                                        <select className="form-select"
                                            onChange={(e) => setData({ ...data, come_under: e.target.value })}>
                                            <option> {content.select} </option>
                                            <option>{content.central_government} </option>
                                            <option>{content.state_govenment} </option>
                                            <option>MNC</option>
                                            <option>{content.other}</option>
                                        </select>
                                        <span class="validation-message">{error && error.come_under}</span>
                                    </div>
                                    <br />

                                    <div className="row row-cards">
                                        <div className=" col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label"> <span class="required">*</span>
                                                    {content.start_date}</label>
                                                <input
                                                    type="Date"
                                                    className="form-control"
                                                    onChange={(e) => setData({ ...data, start_date: e.target.value })} required />

                                                <span class="validation-message">{error && error.start_date}</span>
                                            </div>
                                        </div>

                                        <div className=" col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label"> <span class="required">*</span>
                                                    {content.end_date}</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    onChange={(e) => setData({ ...data, end_date: e.target.value })} required />

                                                <span class="validation-message">{error && error.end_date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row row-cards">
                                        <div className="mb-3">
                                            <label className="form-label"><span class="required">*</span>
                                                {content.description}</label>
                                            <textarea rows="7" className='form-control'
                                                placeholder={content.description}
                                                onChange={(e) => setData({ ...data, description: e.target.value })} />
                                            <span class="validation-message">{error && error.description}</span>
                                        </div>
                                    </div>
                                    <br />
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
                                    {/* /.box */}


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </>
            }
        />
    )
}

export default AddSchemePage