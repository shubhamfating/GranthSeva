import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody';
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'


function PersonalAddPage() {
  const [response, loading, error, callAPI] = useApiCallHooks();
  const [data, setData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    mother_name: "",
    annual_income: "",
    date_of_birth: "",
    house_no: "",
    house_name: "",
    street_name: "",
    email: "",
    contact: "",
    gender: "",
    adhar: "",
    pan_card: "",
    voter_id: "",
    occupation: "",
    working_dpt: "",
    office_name: "",
    address: "",
    work_status: "",
    pincode: "",
    city: "",
    state: "",
    caste: "",
    religion: "",
    voting_area: "",
    education: "",
    current_status: "",
    passport_photo: ""
  })
  const onClickSubmit = () => {

    callAPI('post', 'residents', data)
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
  return (
    <AdminAppBody
      loading={loading}
      heading={"Add Personal Details"}
      content={
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-cards">
              <div className="col-12">
                <form className="card">
                  <div className="card-body">
                    <h2 className="card-title text-info mb-0"> <i class="ti-user me-15"></i> {content.personal_info} </h2>
                    <hr class="my-15"></hr>

                    <div className="row row-cards">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label"><span class="required">*</span>  {content.first_name}
                          </label>
                          <input type="text" className="form-control" placeholder={content.first_name}
                            onChange={(e) => setData({ ...data, first_name: e.target.value })} required />
                          <span class="validation-message">{error && error.first_name}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label"><span class="required">*</span>{content.middle_name} </label>
                          <input type="text" className="form-control" placeholder={content.middle_name}
                            onChange={(e) => setData({ ...data, middle_name: e.target.value })} />
                          <span class="validation-message">{error && error.middle_name}</span>

                        </div>_
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
                          <label className="form-label">{content.mother_name} </label>
                          <input type="text" className="form-control" placeholder={content.mother_name}
                            onChange={(e) => setData({ ...data, mother_name: e.target.value })} />
                          <span class="validation-message">{error && error.mother_name}</span>


                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label">{content.annual_income} </label>
                          <input type="text" className="form-control" placeholder={content.annual_income}
                            onChange={(e) => setData({ ...data, annual_income: e.target.value })} />
                          <span class="validation-message">{error && error.annual_income}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label">{content.date_of_birth}</label>
                          <input type="date" className="form-control"
                            onChange={(e) => setData({ ...data, date_of_birth: e.target.value })} />
                          <span class="validation-message">{error && error.date_of_birth}</span>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row row-cards">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label">{content.house_no}</label>
                          <input type="text" className="form-control" placeholder={content.house_no}
                            onChange={(e) => setData({ ...data, house_no: e.target.value })} />
                          <span class="validation-message">{error && error.house_no}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label">{content.house_name} </label>
                          <input type="text" className="form-control" placeholder={content.house_name}
                            onChange={(e) => setData({ ...data, house_name: e.target.value })} />
                          <span class="validation-message">{error && error.house_name}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label">{content.street_name} </label>
                          <input type="text" className="form-control" placeholder={content.street_name}
                            onChange={(e) => setData({ ...data, street_name: e.target.value })} />
                          <span class="validation-message">{error && error.street_name}</span>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label"><span class="required">*</span> {content.email}</label>
                          <input type="text" className="form-control" placeholder={content.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })} />
                          <span class="validation-message">{error && error.email}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label"><span class="required">*</span>{content.contact} </label>
                          <input type="text" className="form-control" placeholder={content.contact}
                            onChange={(e) => setData({ ...data, contact: e.target.value })} />
                          <span class="validation-message">{error && error.contact}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label">{content.gender} </label>
                          <select className="form-select"
                            onChange={(e) => setData({ ...data, gender: e.target.value })}>
                            <option>{content.select_gender} </option>
                            <option>{content.female} </option>
                            <option>{content.male} </option>
                            <option>{content.other} </option>
                          </select>
                          <span class="validation-message">{error && error.gender}</span>
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
                            placeholder={content.adhar}
                            onChange={(e) => setData({ ...data, adhar: e.target.value })}
                          />
                          <span class="validation-message">{error && error.adhar}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label"> <span class="required">*</span> {content.pan_card} </label>
                          <input type="text" className="form-control" placeholder={content.pan_card}
                            onChange={(e) => setData({ ...data, pan_card: e.target.value })} />
                          <span class="validation-message">{error && error.pan_card}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label">
                            <span class="required">*</span> {content.voter_id}                        </label>
                          <input type="number" className="form-control" placeholder={content.voter_id}
                            onChange={(e) => setData({ ...data, voter_id: e.target.value })} />
                          <span class="validation-message">{error && error.voter_id}</span>
                        </div>
                      </div>
                    </div>

                    <br />
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label">{content.occupation}</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={content.occupation}
                            onChange={(e) => setData({ ...data, occupation: e.target.value })}
                          />
                          <span class="validation-message">{error && error.occupation}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label">{content.working_dpt}</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={content.working_dpt}
                            onChange={(e) => setData({ ...data, working_dpt: e.target.value })}
                          />
                          <span class="validation-message">{error && error.working_dpt}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label">{content.office_name}</label>
                          <input type="text" className="form-control" placeholder={content.office_name}
                            onChange={(e) => setData({ ...data, office_name: e.target.value })} />
                        </div>
                        <span class="validation-message">{error && error.office_name}</span>
                      </div>
                    </div>

                    <br />
                    <div className="row">
                      <div className="col-md-9">
                        <div className="form-group">
                          <label className="form-label"> <span class="required">*</span> {content.address}
                          </label>
                          <input type="textarea" className="form-control" placeholder={content.address}
                            onChange={(e) => setData({ ...data, address: e.target.value })} />
                          <span class="validation-message">{error && error.address}</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label className="form-label">
                            {content.work_status}

                          </label>
                          <select className="form-select" onChange={(e) => setData({ ...data, work_status: e.target.value })}>
                            <option>  {content.select_status}</option>
                            <option> {content.retire}</option>
                            <option>{content.working}</option>
                            <option>{content.un_employed}</option>
                            <option>{content.job_seeker}</option>
                            <option>{content.other}</option>
                          </select>
                          <span class="validation-message">{error && error.work_status}</span>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label"><span class="required">*</span> {content.pincode}</label>
                          <input type="number" className="form-control" placeholder={content.pincode}
                            onChange={(e) => setData({ ...data, pincode: e.target.value })} />
                          <span class="validation-message">{error && error.pincode}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label"> <span class="required">*</span>{content.city}</label>
                          <input type="text" className="form-control" placeholder={content.city}
                            onChange={(e) => setData({ ...data, city: e.target.value })} />
                          <span class="validation-message">{error && error.city}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label"> {content.state}</label>
                          <input type="text" className="form-control" placeholder={content.state}
                            onChange={(e) => setData({ ...data, state: e.target.value })} />
                          <span class="validation-message">{error && error.state}</span>
                        </div>
                      </div>
                    </div>
                    <br />

                    <>
                      <div className="row">
                        <div className='col-md-4'>
                          <div className="form-group">
                            <label className="form-label">{content.caste} </label>
                            <select className="form-select" onChange={(e) => setData({ ...data, caste: e.target.value })}>
                              <option>{content.select_caste}</option>
                              <option>{content.open}</option>
                              <option>{content.obc}</option>
                              <option>{content.sc}</option>
                              <option>{content.nt}</option>
                              <option>{content.other}</option>
                            </select>
                            <span class="validation-message">{error && error.caste}</span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label">{content.religion} </label>
                            <select className="form-select" onChange={(e) => setData({ ...data, religion: e.target.value })}>
                              <option>{content.select_religion}</option>
                              <option>{content.hindu}</option>
                              <option>{content.religion}</option>
                              <option>{content.religion}</option>
                              <option>{content.religion}</option>
                              <option>{content.other}</option>
                            </select>
                            <span class="validation-message">{error && error.religion}</span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label"><span class="required">*</span> {content.voting_area}</label>
                            <select className="form-select" onChange={(e) => setData({ ...data, voting_area: e.target.value })}>
                              <option> {content.select_area} </option>
                              <option>Ward-1</option>
                              <option>Ward-2</option>
                              <option>Ward-3</option>
                              <option>Ward-4</option>
                              <option>OTHER</option>
                            </select>
                            <span class="validation-message">{error && error.voting_area}</span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <h4 className="box-title text-info mb-0 mt-20">
                        <i className="ti-save me-15" /> {content.qualification_details}
                      </h4>
                      <hr className="my-15" />
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label">{content.education} </label>
                            <select className="form-select" onChange={(e) => setData({ ...data, education: e.target.value })}>
                              <option>{content.select_education} </option>
                              <option>UG</option>
                              <option>PG</option>
                              <option>12th</option>
                              <option>10th</option>
                              <option>{content.other}</option>
                            </select>
                            <span class="validation-message">{error && error.education}</span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label">{content.passport_photo} </label>
                            <label className="file">
                              <input type="file" id="file"
                                onChange={(e) => setData({ ...data, passport_photo: e.target.value })} />
                            </label>
                            <span class="validation-message">{error && error.passport_photo}</span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label">{content.current_status} </label>
                            <select className="form-select"
                              onChange={(e) => setData({ ...data, current_status: e.target.value })}>
                              <option>{content.select_current_status} </option>
                              <option> {content.retire}</option>
                              <option>{content.working}</option>
                              <option>{content.un_employed}</option>
                              <option>{content.job_seeker}</option>
                              <option>{content.other}</option>
                            </select>
                            <span class="validation-message">{error && error.current_status}</span>
                          </div>
                        </div>
                      </div>

                      <br />
                      {/* /.box-body */}
                      <div className="box-footer text-end">
                      <button onClick={() => onClickSubmit()} type="button" className="btn btn-primary me-2">
                          <i className="ti-save-alt" /> {content.save}
                        </button>
                        <button type="button" className="btn btn-warning ">
                          <i className="ti-trash" />  {content.cancel}
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

export default PersonalAddPage
