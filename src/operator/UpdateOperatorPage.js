import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useApiCallHooks from '../hooks/useApiCallHooks';
import AdminAppBody from '../components/admin/AdminAppBody';
import marathi from '../translationData/english.json'
import hindi from '../translationData/hindi.json'
import english from '../translationData/english.json'

const UpdateOperatorPage = () => {
    const navigate = useNavigate();
    const [responce, loading, error, callAPI] = useApiCallHooks();
    const [data, setData] = useState({
        full_name: "",
        contact: "",
        adhar_no: "",
        pan_card: "",
        join_date: "",
        c_password: "",
        password: "",
        address: ""
    })
    const {slug}= useParams()
    const[isSet,isSetData]=useState();
    useEffect(() => {
        callAPI("get", "operators/" + slug);

    }, []); 
    const onClickSubmit = () => {
        callAPI("put", `operators/${slug}`, data);
        console.log(data);
    }
    if(responce && responce.full_name && !isSet){
        setData({...responce});
        isSetData(true)
    }
    if (responce && responce.status === 'updated') {

        navigate("/operator-list")
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
    heading={"Create Operator Page"}
    content={
        <div className="page-body">
            <div className="container-xl">
                <div className="row row-cards">
                    <form className="card">
                        <div className="card-body">
                            <h2 className="card-title text-info mb-0"> <i class="ti-user me-15"></i>
                                {content.operator}</h2>
                            <hr class="my-15"></hr>
                            <div className="row row-cards">
                                <div className="mb-3">
                                    <label className="form-label"><span class="required">*</span>
                                        {content.full_name} </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        disabled=""
                                        placeholder={content.full_name}
                                        value={data.full_name}
                                        onChange={(e) => setData({ ...data, full_name: e.target.value })} required
                                    />
                                    <span class="validation-message">{error && error.full_name}</span>
                                </div>
                            </div>
                            


                            <div className="row row-cards">
                                <div className=" col-md-6">
                                    <div className="form-group mb-3">
                                        <label className="form-label"><span class="required">*</span> {content.contact}</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            disabled=""
                                            placeholder={content.contact}
                                            value={data.contact}
                                            onChange={(e) => setData({ ...data, contact: e.target.value })} required
                                        />
                                        <span class="validation-message">{error && error.contact}</span>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <label className="form-label"><span class="required">*</span> {content.pan_card}</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            disabled=""
                                            placeholder={content.pan_card}
                                            value={data.pan_card}
                                            onChange={(e) => setData({ ...data, pan_card: e.target.value })} required
                                        />
                                        <span class="validation-message">{error && error.pan_card}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label"> <span class="required">*</span>
                                            {content.password}</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder={content.password}
                                            value={data.password}
                                            onChange={(e) => setData({ ...data, password: e.target.value })} required />

                                        <span class="validation-message">{error && error.password}</span>
                                    </div>
                                    
                                </div>

                                <div className=" col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label"> <span class="required">*</span>
                                            {content.adhar}</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder={content.adhar}
                                            value={data.adhar_no}
                                            onChange={(e) => setData({ ...data, adhar_no: e.target.value })} required />

                                        <span class="validation-message">{error && error.adhar_no}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label"> <span class="required">*</span>
                                            {content.start_date}</label>
                                        <input
                                            type="Date"
                                            className="form-control"
                                            value={data.start_date}
                                            onChange={(e) => setData({ ...data, start_date: e.target.value })} required />

                                        <span class="validation-message">{error && error.start_date}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label"> <span class="required">*</span>
                                            {content.c_password}</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder={content.c_password}
                                            value={data.password}
                                            onChange={(e) => setData({ ...data, c_password: e.target.value })} required />

                                        <span class="validation-message">{error && error.c_password}</span>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div className="row row-cards">
                                <div className="mb-3">
                                    <label className="form-label"><span class="required">*</span>
                                        {content.address}</label>
                                    <textarea rows="7" className='form-control'
                                        placeholder={content.address}
                                        value={data.address}
                                        onChange={(e) => setData({ ...data, address: e.target.value })} />
                                    <span class="validation-message">{error && error.address}</span>
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
    }
/>
  )
}

export default UpdateOperatorPage