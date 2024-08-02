import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { useNavigate } from 'react-router-dom';
import { uiRoutes } from '../../../routes/ui/uiRoutes';
import { apiRoutes } from '../../../routes/api/apiRoutes';
import { useForm } from "react-hook-form";

function ComplaintPage() {
    const [responce, loading, error, callAPI] = useApiCallHooks();
    const [categoryData, setcategoryData] = useState([]);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const [data, setData] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        category_id: "",
        email: "",
        contact: "",
        date: "",
        location: "",
        complaint: "",
        status: "",
        link: "",
        remark: "",
        written_complaint: "",
        discription: "",
        written_declaration: "",
        photo: null, // Add state for photo
        document: null, 
    })

    const onClickSubmit = () => {
      callAPI('post', apiRoutes.user.complaint.add, data)      
    }

    if (responce && responce.status === 201) {
        navigate(uiRoutes.user.complaint.show)
    }

    useEffect(() => {
        callAPI('get', apiRoutes.admin.category.show, "");
    }, []);

    if (
        responce?.data?.lists &&
        responce?.data?.lists.length > 0 &&
        categoryData.length === 0 &&
        responce?.data?.message === "categoryLists"
    ) {
        setcategoryData(responce.data.lists);
        
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
            heading={"Add Complaint Form"}
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
                                                        onChange={(e) => setData({ ...data, first_name: e.target.value })}
                                                    />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.first_name}</span>


                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.middle_name} </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={content.middle_name}
                                                        onChange={(e) => setData({ ...data, middle_name: e.target.value })}
                                                    />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.middle_name}</span>

                                                    <span class="validation-message">{error && error.middle_name && error.middle_name}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.last_name} </label>
                                                    <input type="text" className="form-control" placeholder={content.last_name}
                                                        onChange={(e) => setData({ ...data, last_name: e.target.value })} />
                                                    <span class="validation-message">{error && error.last_name && error.last_name}</span>
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.last_name}</span>

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
                                                        onChange={(e) => setData({ ...data, email: e.target.value })} />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.email}</span>

                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.contact} </label>
                                                    <input type="text" className="form-control" placeholder={content.contact}
                                                        onChange={(e) => setData({ ...data, contact: e.target.value })} />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.contact}</span>

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
                                                        onChange={(e) => setData({ ...data, location: e.target.value })}
                                                    />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.location}</span>

                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.date}</label>
                                                    <input className="form-control" type="date"
                                                        onChange={(e) => setData({ ...data, date: e.target.value })} />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.date}</span>

                                                </div>
                                            </div>
                                     

                                        <br />
                                        <div className="col-md-4">
                                                            <div className="form-group">

                                                                <label className="form-label">
                                                                    <span class="required">*</span>
                                                                    <b>{content.category}</b>
                                                                </label>
                                                                <select
                                                                    className="form-control"
                                                                    onChange={(e) =>
                                                                        setData({ ...data, category_id: e.target.value })
                                                                    }
                                                                >
                                                                    <option>Select Category</option>
                                                                    {categoryData.length > 0 && categoryData.map((list, i) => (
                                                                        <option value={list.id}>{list.name}</option>
                                                                    ))}
                                                                </select>
                                                                <span class="text-danger">
                                                                    {error?.data &&
                                                                        error?.message === "ValidationError" &&
                                                                        error?.data.category_id}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>
                                                        {content.complaint}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={content.complaint}
                                                        onChange={(e) => setData({ ...data, complaint: e.target.value })}
                                                    />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.complaint}</span>

                                                </div>
                                            </div>
                                                        </div>

                                        {/* <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>
                                                        {content.complaint_about}</label>
                                                    <select className="form-select"
                                                        onChange={(e) => setData({ ...data, complaint: e.target.value })}>
                                                        <option>{content.select_category}</option>
                                                        <option>{content.water}</option>
                                                        <option>{content.city_cleaning}City cleaning management</option>
                                                        <option>{content.road}</option>
                                                        <option>{content.electricity}</option>
                                                        <option>{content.other}</option>
                                                    </select>
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.complaint}</span>

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
                                                    >
                                                        <option>{content.select_area}</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>{content.other}</option>
                                                    </select>
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.ward_no}</span>

                                                </div>
                                            </div>
                                        </div> */}
                                        <br />
                                        <div className=" row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">{content.written_complaint}</label>
                                                    <input className="form-control" type="file"
                                                        onChange={(e) => setData({ ...data, written_complaint: e.target.files[0] })} />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.written_complaint}</span>

                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">{content.photo}</label>
                                                    <input className="form-control" type="file"
                                                    accept="image/jpeg,image/png,image/jpg,image/gif"
                                                        onChange={(e) => setData({ ...data, photo: e.target.files[0] })} />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.photo}</span>

                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <label className="form-label">
                                                <span class="required">* </span>
                                                {content.write_complaint}

                                            </label>
                                            <textarea rows={4} className="form-control" defaultValue={""} placeholder={content.write_complaint}
                                                onChange={(e) => setData({ ...data, discription: e.target.value })} />
                                            <span className="text-danger">{error && error.message === "ValidationError" && error.data.discription}</span>

                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <label className="form-label"> {content.written_declaration}</label>
                                            <input className="form-control" type="file"
                                                onChange={(e) => setData({ ...data, written_declaration: e.target.files[0] })} />
                                            <span className="text-danger">{error && error.message === "ValidationError" && error.data.written_declaration}</span>


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

export default ComplaintPage
