import React, { useEffect, useState } from 'react'
import UIAppBody from '../../components/ui/UIAppBody'
import useApiCallHooks from '../../hooks/useApiCallHooks'
import { useNavigate } from 'react-router-dom';
import { uiRoutes } from '../../routes/ui/uiRoutes';

function RegisrationPage() {
    const [responce, loading, error, callAPI, statusCode] = useApiCallHooks();
    const [corporations, setCorporations] = useState([]);
    const [wards, setWards] = useState([]);
    const navigate = useNavigate();

    const [data, setData] = useState(
        {
            first_name: "",
            last_name: "",
            mobile_no: "",
            aadhar_no: "",
            password: "",
            c_password: "",
            municipal_corporation: "",
            ward: ""
        }
    )

    useEffect(() => {
        callAPI('get', 'get-corporations', "")
    }, []);


    const onClickSubmit = () => {
        setData(data)
        callAPI('post', 'register-corporator', data)
     }


    if (responce?.data?.data && responce?.data?.message === "Corporation List" && corporations.length === 0) {
        setWards([]);
        setCorporations(responce.data.data);
    }

    if (responce?.data?.data && responce?.data?.message === "Ward List" && wards.length === 0) {
        setWards(responce.data.data);
    }

    if(responce?.status===201){
        navigate(uiRoutes.login);
    }
   
    return (
        <UIAppBody
            loading={loading}
            heading={"Home"}
            content={
                <div className="page page-center">
                    <div className="container container-tight container-width  py-4">
                        <div className="card card-md">
                            <div className="card-body">
                                <h2 className="h2 text-center mb-4">Register Corporator Account</h2>

                                {statusCode === 500 &&
                                    <div className="alert alert-danger">
                                        <strong>{"Internal Server Error"}</strong>
                                    </div>
                                }
                                <form method="get" autocomplete="off" novalidate>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className="mb-3">
                                                <label className="form-label">First name</label>
                                                <input type="text" className="form-control" placeholder="Enter First Name" autocomplete="off"
                                                    onChange={(e) => setData({ ...data, first_name: e.target.value })} />
                                                <span className="text-danger">{error && error.message === "ValidationError" && error.data.first_name}</span>
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="mb-2">
                                                <label className="form-label">
                                                    Last Name:
                                                </label>
                                                <input type="text" className="form-control" placeholder="Last Name"
                                                    onChange={(e) => setData({ ...data, last_name: e.target.value })} />
                                                <span className="text-danger">{error && error.message === "ValidationError" && error.data.last_name}</span>

                                            </div>
                                        </div>

                                        <div className='col-lg-6'>
                                            <div className="mb-2">
                                                <label className="form-label">
                                                    Mobile No:
                                                </label>
                                                <input type="nomber" className="form-control" placeholder="Your mobile no"
                                                    onChange={(e) => setData({ ...data, mobile_no: e.target.value })} />
                                                <span className="text-danger">{error && error.message === "ValidationError" && error.data.mobile_no}</span>

                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="mb-2">
                                                <label className="form-label">
                                                    Aadhar No:
                                                </label>
                                                <input type="nomber" className="form-control" placeholder="Your aadhar no"
                                                    onChange={(e) => setData({ ...data, aadhar_no: e.target.value })} />
                                                <span className="text-danger">{error && error.message === "ValidationError" && error.data.aadhar_no}</span>

                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div class="mb-3">
                                                <label class="form-label">Municipal Corporation</label>
                                                <select type="text" className="form-select"
                                                    onChange={(e) => {
                                                        setWards([]);
                                                        callAPI('post', 'corporation-wise-ward-list', { slug: e.target.value })
                                                        setData({ ...data, municipal_corporation: e.target.value })
                                                    }}>
                                                    <option value="">Select Municipal Corporation</option>
                                                    {corporations.length > 0 && corporations.map(option => (
                                                        <option key={option.slug} value={option.slug}>{option.name}</option>
                                                    ))}
                                                </select>
                                                <span className="text-danger">{error && error.message === "ValidationError" && error.data.municipal_corporation}</span>


                                            </div>
                                            <div className="mb-2 mt-3">
                                                <label className="form-label">
                                                    Password:
                                                </label>
                                                <div className="input-group input-group-flat">
                                                    <input type="password" className="form-control" placeholder="Your password" autocomplete="off"
                                                        onChange={(e) => setData({ ...data, password: e.target.value })} />
                                                    <span className="input-group-text">
                                                        <a href="#" className="link-secondary" title="Show password" data-bs-toggle="tooltip">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                                                        </a>
                                                    </span>
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.password}</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="mb-2">
                                                <label className="form-label">
                                                    Select Ward:
                                                </label>
                                                <div className="input-group input-group-flat">
                                                    <select type="text" class="form-select" id="select-users"
                                                        onChange={(e) => setData({ ...data, ward: e.target.value })}>
                                                        <option >Select Ward</option>
                                                        {wards.length > 0 && wards && wards.map((ward, i) => (
                                                            <option value={ward.slug}>{ward.ward_name}</option>
                                                        ))}
                                                    </select>
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.ward}</span>
                                                </div>
                                            </div>


                                            <div className="mb-2 mt-3">
                                                <label className="form-label">
                                                    Conform Password:
                                                </label>
                                                <div className="input-group input-group-flat">
                                                    <input type="password" className="form-control" placeholder="Your password" autocomplete="off"
                                                        onChange={(e) => setData({ ...data, c_password: e.target.value })} />
                                                    <span className="input-group-text">
                                                        <a href="#" className="link-secondary" title="Show password" data-bs-toggle="tooltip">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                                                        </a>
                                                    </span>
                                                    <span className="text-danger">{error && error.message === "ValidationError" && error.data.c_password}</span>

                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    {/* <div className="mb-2">
                                        <label className="form-check">
                                            <input type="checkbox" className="form-check-input" />
                                            <span className="form-check-label">Remember me on this device</span>
                                        </label>
                                    </div> */}
                                    <div className="form-footer">
                                        <button type="button" className="btn btn-primary w-100"
                                            onClick={() => onClickSubmit()}>Register</button>
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

export default RegisrationPage
