import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../../components/admin/AdminAppBody'
import useApiCallHooks from '../../../../hooks/useApiCallHooks';
import { useNavigate } from 'react-router-dom';
import { uiRoutes } from '../../../../routes/ui/uiRoutes';
import marathi from '../../../../translationData/marathi.json'
import hindi from '../../../../translationData/hindi.json'
import english from '../../../../translationData/english.json'

const BachatgatWorkRegistrationPage = () => {
    const navigate = useNavigate();
    const [responce, loading, error, callAPI] = useApiCallHooks();
    const [data, setData] = useState({
        work_name: "",
        start_date: "",
        due_date: "",
        work_budget: ""
    })
    const onClickSubmit = () => {
        setData(data)
        callAPI('post', 'saving-group-work', data)
        // navigate("/login/");
        console.log(data);
    }
    if (responce && responce.status === 'created') {

        navigate(uiRoutes.admin.bachatgat.work.show)
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
            heading={"Add Saving Groups Work "}
            content={
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards">
                            <div className="col-12">
                                <form className="card">
                                    <div className="card-body">
                                        <h2 className="card-title text-info mb-0"> <i class="ti-user me-15"></i>
                                         {content.work_assiging_form}   </h2>
                                        <hr class="my-15"></hr>
                                        <div className="row row-cards">
                                            <div className="mb-3">
                                                <label className="form-label"><span class="required">*</span>
                                                {content.name_of_work}   </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    disabled=""
                                                    placeholder={content.project_name}
                                                    onChange={(e) => setData({ ...data, work_name: e.target.value })} required
                                                />
                                                <span class="validation-message">{error && error.work_name}</span>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row row-cards">
                                            <div className="mb-3">
                                                <label className="form-label"><span class="required">*</span>
                                                 {content.work_budget}  </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    disabled=""
                                                    placeholder="Work Budget"
                                                    onChange={(e) => setData({ ...data, work_budget: e.target.value })} required
                                                />
                                                <span class="validation-message">{error && error.work_budget}</span>
                                            </div>
                                        </div>
                                        <br />

                                        <div className="row row-cards">
                                            <div className=" col-md">
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
                                        </div>
                                        <br />
                                        <div className="row row-cards">
                                            <div className=" col-md">
                                                <div className="mb-3">
                                                    <label className="form-label"> <span class="required">*</span>
                                                     {content.end_date}</label>
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        onChange={(e) => setData({ ...data, due_date: e.target.value })} required />

                                                    <span class="validation-message">{error && error.due_date}</span>
                                                </div>
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
                </div>
            }
        />
    )
}

export default BachatgatWorkRegistrationPage