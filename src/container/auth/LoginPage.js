import React, { useState } from 'react'
import UIAppBody from '../../components/ui/UIAppBody';
import useApiCallHooks from '../../hooks/useApiCallHooks';
import { Navigate, useNavigate } from 'react-router-dom';
import { uiRoutes } from '../../routes/ui/uiRoutes';

function LoginPage() {
  const [responce, loading, error, callAPI, statusCode] = useApiCallHooks();

  const [data, setData] = useState({
    aadhar_no: "123456",
    password: "123456",
    loginWith: 1
  })
  const navigate = useNavigate();

  const onClickSubmit = () => {
    //setLoading(true);
    setData(data)
    // e.preventDefault();
    callAPI('post', 'login', data)
    // navigate("/login/");
    // console.log(data);
  }

  if (error && error.Unauthorised) {
    console.log(error.data.error)
  }

  console.log(data);

  if (responce && responce?.data?.data?.token) {
    sessionStorage.setItem('udata', btoa(JSON.stringify(responce.data)));
    // return <Navigate to={uiRoutes.authHome} />
    //console.log(responce);
    window.location.href = uiRoutes.authHome;
    //return navigate(uiRoutes.authHome)      
  }
  return (
    <UIAppBody
      loading={loading}
      heading={"Home"}
      content={
        <div className="page page-center">
          <div className="container container-tight py-4">
            <div className="card card-md">
              <div className="card-body">
                <h2 className="h2 text-center mb-4">Login to your account</h2>
                {error && error.message === "Other" &&
                  <span className='text-danger'>{error.data.error}</span>
                }                
                {statusCode === 500 &&
                  <span className='text-danger'>{"Internal Server Error"}</span>
                }
                <input type='radio' className='form-radio-input' name='login' value={1} checked={data.loginWith === 1} onChange={(e) => setData({ ...data, loginWith: 1})} />   <label>Corporator </label>    
                <input type='radio' className='form-radio-input' name='login' value={2} checked={data.loginWith === 2} onChange={(e) => setData({ ...data, loginWith: 2 })} />   <label>Voter/Resident </label>

                <form action="./" method="get" autocomplete="off" novalidate>
                  <div className="mb-3">
                    <label className="form-label">Aadhar/Voting Card No:</label>
                    <input type="email" className="form-control" placeholder="your adhar nomber" autocomplete="off"
                      onChange={(e) => setData({ ...data, aadhar_no: e.target.value })} value={data.aadhar_no} />
                    <span className='text-danger'>  {error && error.message === "ValidationError" && error.data.aadhar_no}</span>

                  </div>
                  <div className="mb-2">
                    <label className="form-label">
                      Password
                    </label>
                    <div className="input-group input-group-flat">
                      <input type="password" className="form-control" placeholder="Your password" autocomplete="off"
                        onChange={(e) => setData({ ...data, password: e.target.value })} value={data.password} />
                    </div>
                    <span className='text-danger'>{error && error.message == "ValidationError" && error.data.password}</span>

                  </div>
                  <div className="mb-2">
                    <span className="form-label-description">
                      <a href="./forgot-password.html">I forgot password</a>
                    </span>
                    <label className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <span className="form-check-label">Remember me on this device</span>
                    </label>
                  </div>
                  <div className="form-footer">
                    <button type="button" className="btn btn-primary w-100"
                      onClick={() => onClickSubmit()}>Login</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="text-center text-muted mt-3">
              Don't have account yet? <a href="./sign-up.html" tabindex="-1">Sign up</a>
            </div>
          </div>
        </div>
      }
    />
  )
}

export default LoginPage
