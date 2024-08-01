import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../../components/admin/AdminAppBody'
import useApiCallHooks from '../../../../hooks/useApiCallHooks';
import marathi from '../../../../translationData/marathi.json'
import hindi from '../../../../translationData/hindi.json'
import english from '../../../../translationData/english.json'
import { uiRoutes } from '../../../../routes/ui/uiRoutes';
import { useNavigate } from 'react-router-dom';


const MemberRegistrationPage = () => {
    const navigate = useNavigate();
    const [responce, loading, error, callAPI] = useApiCallHooks();
    const [data, setData] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        mother_name: "",
        spouse_name: "",
        date_of_birth: "",
        contact: "",
        email: "",
        gender: "",
        adhar: "",
        pan_card: "",
        voter_id: "",
        address: "",
        pincode: "",
        city: "",
        state: "",
        current_status: ""

    })
    const onClickSubmit = () => {
        setData(data)
        callAPI('post', 'members', data)
        // navigate("/login/");
        console.log(data);
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
    if (responce && responce.status === 'created') {

        navigate(uiRoutes.admin.bachatgat.member)
    }

    return (
        <AdminAppBody
            loading={loading}
            heading={"Member Registration Form"}
            content={
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards">
                            <div className="col-12">
                                <form className="card">
                                    <div className="card-body">
                                        <h2 className="card-title text-info mb-0"> <i class="ti-user me-15"></i>
                                            {content.member_info_heading}   </h2>
                                        <hr class="my-15"></hr>

                                        <div className="row row-cards">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span> {content.first_name}
                                                    </label>
                                                    <input type="text" className="form-control" placeholder={content.first_name}
                                                        onChange={(e) => setData({ ...data, first_name: e.target.value })} required />
                                                    <span class="validation-message">{error && error.first_name && error.first_name}</span>
                                                </div>_
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.middle_name} </label>
                                                    <input type="text" className="form-control" placeholder={content.middle_name}
                                                        onChange={(e) => setData({ ...data, middle_name: e.target.value })} />
                                                    <span class="validation-message">{error && error.middle_name}</span>

                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.last_name}</label>
                                                    <input type="text" className="form-control" placeholder={content.last_name}
                                                        onChange={(e) => setData({ ...data, last_name: e.target.value })} />
                                                    <span class="validation-message">{error && error.last_name}</span>

                                                </div>

                                            </div>
                                        </div>
                                        <br />
                                        <div className="row row-cards">
                                        <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"> <span class="required">*</span>
                                                    {content.home_address}                                                     </label>
                                                    <input type="textarea" className="form-control" placeholder={content.home_address} 
                                                        onChange={(e) => setData({ ...data, address: e.target.value })} />
                                                    <span class="validation-message">{error && error.address}</span>
                                                </div>
                                            </div>
                                           
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label">{content.date_of_birth}</label>
                                                    <input type="date" className="form-control"
                                                        onChange={(e) => setData({ ...data, date_of_birth: e.target.value })} />
                                                </div>
                                            </div>
                                        </div>
                                        <br />

                                        <br />
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span> {content.email}</label>
                                                    <input type="text" className="form-control" placeholder="E-mail"
                                                        onChange={(e) => setData({ ...data, email: e.target.value })} />
                                                    <span class="validation-message">{error && error.email}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span> {content.contact}</label>
                                                    <input type="text" className="form-control" placeholder="Phone"
                                                        onChange={(e) => setData({ ...data, contact: e.target.value })} />
                                                    <span class="validation-message">{error && error.contact}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"> {content.gender}</label>
                                                    <select className="form-select"
                                                        onChange={(e) => setData({ ...data, gender: e.target.value })}>
                                                        <option>{content.select_gender} </option>
                                                        <option>{content.female} </option>
                                                        <option>{content.male} </option>
                                                        <option>{content.other} </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>
                                                    {content.adhar}
                                                        
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder= {content.adhar}
                                                        onChange={(e) => setData({ ...data, adhar: e.target.value })}
                                                    />
                                                    <span class="validation-message">{error && error.adhar}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label">  {content.pan_card} </label>
                                                    <input type="text" className="form-control" placeholder= {content.pan_card}
                                                        onChange={(e) => setData({ ...data, pan_card: e.target.value })} />
                                                    <span class="validation-message">{error && error.pan_card}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        <span class="required">*</span>
                                                        {content.voter_id} 
                                                    </label>
                                                    <input type="number" className="form-control" placeholder= {content.voter_id}
                                                        onChange={(e) => setData({ ...data, voter_id: e.target.value })} />
                                                    <span class="validation-message">{error && error.voter_id}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <br />

                                        <br />
                                       
                                       

                                        <>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label className="form-label">{content.current_status}</label>
                                                        <select className="form-select"
                                                            onChange={(e) => setData({ ...data, current_status: e.target.value })}>
                                                            <option>{content.select_status} </option>
                                                            <option>{content.working}</option>
                                                            <option>{content.housewife}</option>
                                                            <option>{content.seeker}</option>
                                                            <option>{content.studing}</option>
                                                            <option>{content.other}</option>
                                                        </select>
                                                        <span class="validation-message">{error && error.current_status}</span>
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

export default MemberRegistrationPage