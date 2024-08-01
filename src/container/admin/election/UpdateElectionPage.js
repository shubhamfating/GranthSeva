import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { uiRoutes } from '../../../routes/ui/uiRoutes';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { apiRoutes } from '../../../routes/api/apiRoutes';

const UpdateElectionPage = () => {
    const [isSet, isSetData] = useState(false);
    const [content, setContent] = useState({})
    const navigate = useNavigate();
    const { slug } = useParams();
    const [responce, loading, error, callAPI] = useApiCallHooks();
    const [data, setData] = useState({
        project_name: "",
        start_date: "",
        budget: "",
        work_status: "",
        work_details: "",
    })
    useEffect(() => {
        callAPI('get',apiRoutes.admin.election.get  + slug);
    }, []);
    const onClickSubmit = () => {
        callAPI('post',apiRoutes.admin.election.update.replace("slug",slug), data)
    }

    if (responce?.data?.lists && !isSet) {
        setData({ ...responce.data.lists });
        isSetData(true)
    }

    useEffect(() => {
        if (responce && responce.status === 202) {
          toast.success("Updated Successfully");
          setTimeout(() => {
            navigate(uiRoutes.admin.election.show);
          }, 1000);
        }
      }, [responce, navigate]);

    if (responce && responce.scheme_name && !isSet) {
        setData({ ...responce });
        isSetData(true)

    }
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
            heading={" Corporator Works"}
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
                                        <h3 className="card-title text-info">
                                            {content.work_heading}
                                        </h3>
                                        <hr className="my-15" />

                                        <>
                                            <div className="box-body">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        <span class="required">*</span>
                                                        {content.project_name}

                                                    </label>
                                                    <input type="email" className="form-control" placeholder={content.project_name}
                                                        value={data.project_name}
                                                        onChange={(e) => setData({ ...data, project_name: e.target.value })} />
                                                    <span class="validation-message">{error && error.project_name && error.project_name}</span>
                                                </div>
                                                <br />
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">
                                                                <span class="required">*</span>
                                                                {content.start_date}
                                                            </label>
                                                            <input type="date" className="form-control"
                                                                value={data.start_date}
                                                                onChange={(e) => setData({ ...data, start_date: e.target.value })} />
                                                            <span class="validation-message">{error && error.start_date && error.start_date}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">
                                                                <span class="required">*</span>
                                                                {content.end_date}</label>
                                                            <input type="date" className="form-control"
                                                                value={data.end_date}
                                                                onChange={(e) => setData({ ...data, end_date: e.target.value })} />
                                                            <span class="validation-message">{error && error.end_date && error.end_date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className="form-group">
                                                            <label className="form-label">
                                                                <span class="required">*</span>
                                                                {content.budget}
                                                            </label>
                                                            <input type="text" className="form-control" placeholder={content.budget}
                                                                value={data.budget}
                                                                onChange={(e) => setData({ ...data, budget: e.target.value })} />
                                                            <span class="validation-message">{error && error.budget && error.budget}</span>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className="form-group">
                                                            <label className="form-label">
                                                                <span class="required">*</span>
                                                                {content.work_status}
                                                            </label>
                                                            <select className="form-select"
                                                                value={data.work_status}
                                                                onChange={(e) => setData({ ...data, work_status: e.target.value })}>
                                                                <option>{content.select_status} </option>
                                                                <option>{content.starting_point}</option>
                                                                <option>{content.work_progress} </option>
                                                                <option>{content.work_completed}</option>
                                                                <option>{content.work_stop}</option>
                                                                <option>{content.not_start}</option>
                                                            </select>
                                                            <span class="validation-message">{error && error.work_status && error.work_status}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <br />
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        {content.work_details}

                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        rows={3}
                                                        placeholder={content.work_details}
                                                        value={data.work_details}
                                                        defaultValue={""}
                                                        onChange={(e) => setData({ ...data, work_details: e.target.value })}
                                                    />
                                                </div>
                                                <br />
                                            </div>
                                            {/* /.box-body */}
                                            <div className="box-footer text-end">
                                                <button type="button" className="btn btn-primary me-2"
                                                    onClick={() => onClickSubmit()}>
                                                    <i className="ti-save-alt" /> {content.update}
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
                </>
            }
        />
    )
}

export default UpdateElectionPage