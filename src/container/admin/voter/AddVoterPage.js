import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import { useNavigate } from 'react-router-dom';
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { uiRoutes } from '../../../routes/ui/uiRoutes';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const AddVoterPage = () => {
    const navigate = useNavigate();
    const [responce, loading, error, callAPI, statusCode] = useApiCallHooks();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [data, setData] = useState({
        first_name: "Voter",
        last_name: "Demo",
        voting_no: "",
        voter_name: "Voter Demo",
        father_name: "Demo",
        age: "30",
        date_of_birth: "",
        gender: "",
        address: "Nashik",
        pincode: "422202",
        date: "",
        constituency: "Maha",
    })
    const onClickSubmit = () => {
        callAPI('post', 'add-voter', data)
    }
    useEffect(() => {
        if (responce && responce.status === 201) {
            toast.success("Added Successfully");
            setTimeout(() => {
                navigate(uiRoutes.admin.voter.show);
            }, 1000);
        }
    }, [responce, navigate]);
    // if (responce && responce.status === 201) {
    //     navigate(uiRoutes.admin.voter.show)
    // }
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);
        callAPI('post', 'upload-voter-sheet', formData)
    };
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
            heading={"Add Voter Detail's"}
            permission={"add-voter"}
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
                            <div className='card'>
                                <div className="card-body">
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        enctype="multipart/form-data"
                                    >
                                        <h3 className="card-title text-info mb-0 "> {content.voter_heading1} </h3>
                                        {statusCode === 500 &&
                                            <div className="alert alert-danger">
                                                <strong>{"Internal Server Error"}</strong>
                                            </div>
                                        }
                                        <div className='mt-3 row'>
                                            <div className='col-md-4 col-sm-4 mt-3'>
                                                <input
                                                    type="file"
                                                    accept=".xls, .xlsx"
                                                    {...register("file", { required: true })}
                                                    className='form-control '
                                                />
                                                {/* {excelData && <pre>{excelData}</pre>} */}
                                            </div>
                                            <div className='col-md-4 col-sm-4 mt-3'>
                                                <div className="box-footer  ">
                                                    <button type="button" className="btn btn-warning me-1">
                                                        <i className="ti-trash" /> {content.download_templet}
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='col-md-4 col-sm-4 mt-3'>
                                                <div className="box-footer text-end">
                                                    <button type="submit" className="btn btn-primary">
                                                        <i className="ti-save-alt" />{content.upload}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <form>
                                        <hr class="my-15" />
                                        <h3 className="card-title text-info mb-0 "> {content.voter_heading2}</h3>
                                        <hr class="my-15" />
                                        <div className="row">
                                            {error && error.message === "Other" &&
                                                <div className="alert alert-danger">
                                                    <strong>{error.data.error}</strong>
                                                </div>
                                            }
                                            <div className='col-md-6  mt-3'>
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.first_name}</label>
                                                    <input type="name" className="form-control" placeholder={content.first_name}
                                                        onChange={(e) => setData({ ...data, first_name: e.target.value })} value={data.first_name} />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.first_name}</span>
                                                </div>
                                            </div>
                                            <div className='col-md-6  mt-3'>
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.last_name}</label>
                                                    <input type="name" className="form-control" placeholder={content.last_name}
                                                        onChange={(e) => setData({ ...data, last_name: e.target.value })} value={data.last_name} />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.last_name}</span>
                                                </div>
                                            </div>
                                            <div className='col-md-4  mt-3'>
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.voting_no}</label>
                                                    <input type="name" className="form-control" placeholder={content.voting_no}
                                                        onChange={(e) => setData({ ...data, voting_no: e.target.value })} value={data.voting_no} />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.voting_no}</span>
                                                </div>
                                            </div>
                                            <div className='col-md-4  mt-3'>
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.voter_name}</label>
                                                    <input type="name" className="form-control" placeholder={content.voter_name}
                                                        onChange={(e) => setData({ ...data, voter_name: e.target.value })} value={data.voter_name} />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.voter_name}</span>
                                                </div>
                                            </div>
                                            <div className='col-md-4  mt-3'>
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.father_name}</label>
                                                    <input type="name" className="form-control" placeholder={content.father_name}
                                                        onChange={(e) => setData({ ...data, father_name: e.target.value })} value={data.father_name} />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.father_name}</span>
                                                </div>
                                            </div>
                                            <div className='col-md-4 mt-3'>
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.age}</label>
                                                    <input type="number" className="form-control" placeholder={content.age}
                                                        onChange={(e) => setData({ ...data, age: e.target.value })} value={data.age} />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.age}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mt-3">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        <span class="required">*</span>{content.gender}</label>
                                                    <select className="form-select"
                                                        onChange={(e) => setData({ ...data, gender: e.target.value })}>
                                                        <option>{content.select_gender} </option>
                                                        <option>{content.female} </option>
                                                        <option>{content.male} </option>
                                                        <option>{content.other} </option>
                                                    </select>
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.gender}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mt-3">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        <span class="required">*</span>{content.date_of_birth}</label>
                                                    <input type="date" className="form-control"
                                                        onChange={(e) => setData({ ...data, date_of_birth: e.target.value })} />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.date_of_birth}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mt-3">
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span> {content.pincode}</label>
                                                    <input type="number" className="form-control" placeholder={content.pincode}
                                                        onChange={(e) => setData({ ...data, pincode: e.target.value })} value={data.pincode} />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.pincode}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mt-3">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        <span class="required">*</span>{content.date} </label>
                                                    <input type="date" className="form-control"
                                                        onChange={(e) => setData({ ...data, date: e.target.value })} />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.date}</span>
                                                </div>
                                            </div>
                                            <div className='col-md-4 mt-3'>
                                                <div className="form-group">
                                                    <label className="form-label"><span class="required">*</span>{content.constitueny}</label>
                                                    <input type="name" className="form-control" placeholder={content.constitueny}
                                                        onChange={(e) => setData({ ...data, constituency: e.target.value })} value={data.constituency} />
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.constituency}</span>
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
                                                    defaultValue={""}
                                                    onChange={(e) => setData({ ...data, address: e.target.value })}
                                                    value={data.address}
                                                />
                                                <span className="text-danger">{error && error.message === "ValidationError" && error.data.address}</span>
                                            </div>
                                            {/* /.box-body */}
                                            <div className="box-footer text-end mt-3">
                                                <button type="button" className="btn btn-primary me-2"
                                                    onClick={() => onClickSubmit()} >
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
                </div>
                </>
            }
        />
        
    )
}
export default AddVoterPage