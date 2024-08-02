import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { useNavigate, useParams } from 'react-router-dom'
import useApiCallHooks from '../../../hooks/useApiCallHooks'
import { uiRoutes } from '../../../routes/ui/uiRoutes'

function UpdateComplaintPage() {
    const navigate = useNavigate();
    const [responce, loading, error, callAPI] = useApiCallHooks();
    const [data, setData] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        contact: "",
        date: "",
        ward_no: "",
        constituetion_area: "",
        complaint_about: ""
    })
    const [isSet, isSetData] = useState();
    const { slug } = useParams();
    useEffect(() => {
        callAPI("get", "complaints/" + slug);

    }, []);
    const onClickSubmit = () => {

        callAPI("put", `complaints/${slug}`, data);

    
    }

    if (responce && responce.first_name && !isSet) {
        setData({ ...responce });
        isSetData(true)

    }
    if (responce && responce.status === 'updated') {



        navigate(uiRoutes.user.complaint.show)
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
    console.log(responce);
    return (
        <AdminAppBody
            loading={loading}
            heading={"Update Complaint Form"}
            content={
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards">
                            <div className="col-12">
                                <form className="card">
                                    <div className="card-body">
                                        <h3 className="card-title text-info">
                                            {content.complaint_form_heading}
                                        </h3>
                                        <hr className="my-15" />
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.first_name} </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={content.first_name}
                                                        value={data.first_name}
                                                        onChange={(e) => setData({ ...data, first_name: e.target.value })}
                                                    />
                                                    <span class="validation-message">{error && error.first_name && error.first_name}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.middle_name} </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={content.middle_name}
                                                        value={data.middle_name}
                                                        onChange={(e) => setData({ ...data, middle_name: e.target.value })}
                                                    /><span class="validation-message">{error && error.middle_name && error.middle_name}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.last_name} </label>
                                                    <input type="text" className="form-control" placeholder={content.last_name}
                                                    value={data.last_name}
                                                        onChange={(e) => setData({ ...data, last_name: e.target.value })} />
                                                    <span class="validation-message">{error && error.last_name && error.last_name}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.email}
                                                    </label>
                                                    <input type="text" className="form-control" placeholder={content.email}
                                                    value={data.email}
                                                        onChange={(e) => setData({ ...data, email: e.target.value })} />
                                                    <span class="validation-message">{error && error.email && error.email}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.contact} </label>
                                                    <input type="text" className="form-control"
                                                      value={data.contact}
                                                       placeholder={content.contact}
                                                  
                                                        onChange={(e) => setData({ ...data, contact: e.target.value })} />
                                                    <span class="validation-message">{error && error.contact && error.contact}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>
                                                        {content.location}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={content.location}
                                                        value={data.location}
                                                        onChange={(e) => setData({ ...data, location: e.target.value })}
                                                    />
                                                    <span class="validation-message">{error && error.location && error.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.date}</label>
                                                    <input className="form-control" type="date"
                                                    value={data.date}
                                                        onChange={(e) => setData({ ...data, date: e.target.value })} />
                                                    <span class="validation-message">{error && error.date && error.date}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <br />
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>
                                                        {content.complaint_about}</label>
                                                    <select className="form-select"
                                                    value={data.complaint_about}
                                                        onChange={(e) => setData({ ...data, complaint_about: e.target.value })}>
                                                        <option>{content.select_category}</option>
                                                        <option>{content.water}</option>
                                                        <option>{content.city_cleaning}City cleaning management</option>
                                                        <option>{content.road}</option>
                                                        <option>{content.electricity}</option>
                                                        <option>{content.other}</option>
                                                    </select>
                                                    <span class="validation-message">{error && error.complaint_about && error.complaint_about}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        <span class="required">*</span>
                                                        {content.word_no}


                                                    </label>
                                                    <select className="form-select"
                                                        onChange={(e) => setData({ ...data, ward_no: e.target.value })}
                                                        value={data.select_area}
                                                    >
                                                        <option>{content.select_area}</option>
                                                        <option>Ward-1</option>
                                                        <option>Ward-2</option>
                                                        <option>Ward-3</option>
                                                        <option>Ward-4</option>
                                                        <option>{content.other}</option>
                                                    </select>
                                                    <span class="validation-message">{error && error.ward_no && error.ward_no}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className=" row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">{content.written_complaint}</label>
                                                    <input className="form-control" type="file"
                                                    value={data.write_complaint}
                                                        onChange={(e) => setData({ ...data, written_complaint: e.target.value })} />
                                                    <span class="validation-message">{error && error.written_complaint && error.written_complaint}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">{content.photo}</label>
                                                    <input className="form-control" type="file"
                                                    value={data.photo}
                                                        onChange={(e) => setData({ ...data, photo: e.target.value })} />
                                                    <span class="validation-message">{error && error.photo && error.photo}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <label className="form-label">
                                                <span class="required">* </span>
                                                {content.write_complaint}

                                            </label>
                                            <textarea rows={4} className="form-control" 
                                            value={data.write_complaint}
                                            defaultValue={""} placeholder={content.write_complaint}
                                                onChange={(e) => setData({ ...data, discription: e.target.value })} />
                                            <span class="validation-message">{error && error.discription && error.discription}</span>
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <label className="form-label"> {content.written_declaration}</label>
                                            <input className="form-control" type="file"
                                            value={data.written_declaration}
                                                onChange={(e) => setData({ ...data, written_declaration: e.target.value })} />
                                            <span class="validation-message">{error && error.written_declaration && error.written_declaration}</span>

                                        </div>
                                        <br />
                                        {/* /.box-body */}
                                        <div className="box-footer text-end">
                                            <button type="button" className="btn btn-primary me-2"
                                              onClick={()=>onClickSubmit()} >
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
            }
        />
    )
}

export default UpdateComplaintPage
