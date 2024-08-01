import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import { useNavigate, useParams } from 'react-router-dom';
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { uiRoutes } from '../../../routes/ui/uiRoutes';

const UpdateVoterPage = () => {
    const navigate = useNavigate();
    const [responce, loading, error, callAPI] = useApiCallHooks();
    const [data, setData] = useState({
        voting_no: "",
        voter_name: "",
        father_name: "",
        age: "",
        date_of_birth: "",
        gender: "",
        address: "",
        pincode: "",
        date: "",
        constituency: "",
    })
    const [isSet, isSetData] = useState();
    const { slug } = useParams();
    useEffect(() => {
        callAPI("get", "voters/" + slug);

    }, []);
    const onClickSubmit = () => {

        callAPI("put", `voters/${slug}`, data);

        console.log(data);
    }

    if (responce && responce.voter_name && !isSet) {
        setData({ ...responce });
        isSetData(true)

    }
    if (responce && responce.status === 'updated') {



        navigate(uiRoutes.admin.voter.show)
    }
    console.log(data);
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
            heading={"Update Voter Detail's"}
            content={
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards">
                            <form className="card">
                                <div className="card-body">
                                    <h3 className="card-title text-info mb-0 ">{content.voter_heading2} </h3>
                                    <hr class="my-15" />

                                    <div className="row">

                                        <div className='col-md-4'>
                                            <div className="form-group">
                                                <label className="form-label"><span class="required">*</span>{content.voting_no}</label>
                                                <input type="name" className="form-control" placeholder={content.voting_no} value={data.voting_no}
                                                    onChange={(e) => setData({ ...data, voting_no: e.target.value })} />
                                                <span class="validation-message">{error && error.voting_no && error.voting_no}</span>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="form-group">
                                                <label className="form-label"><span class="required">*</span>{content.voter_name}</label>
                                                <input type="name" className="form-control" placeholder={content.voting_name} value={data.voter_name}
                                                    onChange={(e) => setData({ ...data, voter_name: e.target.value })} />
                                                <span class="validation-message">{error && error.voter_name && error.voter_name}</span>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="form-group">
                                                <label className="form-label"><span class="required">*</span>{content.father_name}</label>
                                                <input type="name" className="form-control" placeholder={content.father_name} value={data.father_name}
                                                    onChange={(e) => setData({ ...data, father_name: e.target.value })} />
                                                <span class="validation-message">{error && error.father_name && error.father_name}</span>
                                            </div>
                                        </div>

                                        <div className='col-md-4 mt-3'>
                                            <div className="form-group">
                                                <label className="form-label"><span class="required">*</span>{content.age}</label>
                                                <input type="number" className="form-control" placeholder={content.age} value={data.age}
                                                    onChange={(e) => setData({ ...data, age: e.target.value })} />
                                                <span class="validation-message">{error && error.age && error.age}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-3">
                                            <div className="form-group">
                                                <label className="form-label">
                                                    <span class="required">*</span>{content.gender}</label>
                                                <select className="form-select" value={data.gender}
                                                    onChange={(e) => setData({ ...data, gender: e.target.value })}>
                                                    <option>{content.select_gender} </option>
                                                    <option>{content.female} </option>
                                                    <option>{content.male} </option>
                                                    <option>{content.other} </option>
                                                </select>
                                                <span class="validation-message">{error && error.gender}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-3">
                                            <div className="form-group">
                                                <label className="form-label">
                                                    <span class="required">*</span>{content.date_of_birth}</label>
                                                <input type="date" className="form-control" value={data.date_of_birth}
                                                    onChange={(e) => setData({ ...data, date_of_birth: e.target.value })} />
                                                <span class="validation-message">{error && error.date_of_birth}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-3">
                                            <div className="form-group">
                                                <label className="form-label"><span class="required">*</span> {content.pincode}</label>
                                                <input type="number" className="form-control" value={data.pincode} placeholder={content.date_of_birth}
                                                    onChange={(e) => setData({ ...data, pincode: e.target.value })} />
                                                <span class="validation-message">{error && error.pincode}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-3">
                                            <div className="form-group">
                                                <label className="form-label">
                                                    <span class="required">*</span>{content.date} </label>
                                                <input type="date" className="form-control" value={data.date}
                                                    onChange={(e) => setData({ ...data, date: e.target.value })} />
                                                <span class="validation-message">{error && error.date
                                                }</span>
                                            </div>
                                        </div>
                                        <div className='col-md-4 mt-3'>
                                            <div className="form-group">
                                                <label className="form-label"><span class="required">*</span>{content.constitueny}</label>
                                                <input type="name" className="form-control" placeholder={content.constitueny} value={data.constituency}
                                                    onChange={(e) => setData({ ...data, constituency: e.target.value })} />
                                                <span class="validation-message">{error && error.constituency && error.constituency}</span>
                                            </div>
                                        </div>


                                        <div className="form-group mt-3">
                                            <label className="form-label">
                                                <span class="required">*</span>
                                                {content.address}
                                            </label>

                                            <textarea
                                                className="form-control"
                                                rows={3}
                                                placeholder={content.address}
                                                value={data.address}
                                                onChange={(e) => setData({ ...data, address: e.target.value })}
                                            />
                                            <span class="validation-message">{error && error.address && error.address}</span>
                                        </div>

                                        {/* /.box-body */}
                                        <div className="box-footer text-end mt-3">
                                        <button type="button" className="btn btn-primary me-2"
                                                onClick={() => onClickSubmit()}>
                                                <i className="ti-save-alt" /> {content.save}
                                            </button>
                                            <button type="button" className="btn btn-warning ">
                                                <i className="ti-trash" /> {content.cancel}
                                            </button>
                                        </div>

                                    </div>





                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        />
    )
}

export default UpdateVoterPage