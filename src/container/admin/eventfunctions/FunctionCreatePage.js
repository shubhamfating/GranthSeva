import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { useNavigate } from 'react-router-dom';
import { uiRoutes } from '../../../routes/ui/uiRoutes';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { apiRoutes } from '../../../routes/api/apiRoutes';

function FunctionCreatePage() {
    const [responce, loading, error, callAPI] = useApiCallHooks();
    const [content, setContent] = useState({})
    const navigate=useNavigate();
    const [data, setData] = useState({
        function_name: "",
        corporator_id: "",
        ward_id: "",
        organizer_name: "",
        date: "",
        time: "",
        address: ""
    })
    const onClickSubmit = () => {
        callAPI('post', apiRoutes.admin.functionsevent.add, data) 
    }

    useEffect(() => {
        if (responce && responce.status === 201) {
            toast.success("Added Successfully");
            setTimeout(() => {
                navigate(uiRoutes.admin.events.show);
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
            heading={"Function & Events Create Page"}
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
                                <div className="row row-cards">
                                    <div className="col-12">
                                        <form className="card">
                                            <div className="card-body">
                                                <h3 className="card-title text-info mb-0 ">
                                                    {content.event_heading} </h3>
                                                <hr class="my-15" />

                                                <>
                                                    <div className="box-body">
                                                        <div className="form-group">
                                                            <label className="form-label">
                                                                <span class="required">*</span>
                                                                {content.name_function}
                                                                
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder={content.name_function}
                                                                onChange={(e) => setData({ ...data, function_name: e.target.value })}
                                                            /><span class="validation-message">{error && error.function_name && error.function_name}</span>
                                                        </div>
                                                        <br />
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        <span class="required">*</span>
                                                                        {content.organizer_name}
                                                                       </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder={content.organizer_name}
                                                                        onChange={(e) => setData({ ...data, organizer_name: e.target.value })}
                                                                    />
                                                                    <span class="validation-message">{error && error.organizer_name && error.organizer_name}</span>
                                                                </div>
                                                            </div>
                                                            <br />
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        <span class="required">*</span>
                                                                        {content.event_date}
                                                                        
                                                                    </label>
                                                                    <input type="date" className="form-control"
                                                                        onChange={(e) => setData({ ...data, date: e.target.value })} />
                                                                    <span class="validation-message">{error && error.date && error.date}</span>
                                                                </div>
                                                            </div>
                                                            <br />
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        {" "}
                                                                        <span class="required">*</span>
                                                                        {content.event_time}
                                                                       
                                                                    </label>
                                                                    <input type="time" className="form-control"
                                                                        onChange={(e) => setData({ ...data, time: e.target.value })} />
                                                                    <span class="validation-message">{error && error.time && error.time}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="form-group">
                                                            <label className="form-label">
                                                                <span class="required">*</span>
                                                               {content.address}</label>
                                                            <textarea
                                                                className="form-control"
                                                                rows={3}
                                                                placeholder={content.address}
                                                                defaultValue={""}
                                                                onChange={(e) => setData({ ...data, address: e.target.value })}
                                                            />
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
                                                </>
                                            </div>
                                        </form>
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

export default FunctionCreatePage
