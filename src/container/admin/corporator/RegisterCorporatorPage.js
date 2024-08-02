import React, { useEffect, useState } from "react";
import AdminAppBody from "../../../components/admin/AdminAppBody";
import useApiCallHooks from "../../../hooks/useApiCallHooks";
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { useNavigate } from "react-router-dom";
import { uiRoutes } from "../../../routes/ui/uiRoutes";


const RegisterCorporatorPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    contact: "",
    political_party: "",
    date_of_birth: "",
    caste: "",
    office_email: "",
    office_address: "",
    party_website: "",
    office_contact: "",
    pincode: "",
    city: "",
    state: "",
    religion: "",
    description: "",
    ward_id: ""
  })
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

  const [responce, loading, error, callAPI] = useApiCallHooks();
  const submitCorporatorData = () => {
    callAPI("post", "corporator", formData);
  };
  if (responce && responce.status === 'created') {
    navigate(uiRoutes.admin.corporator.profile);
  } else if (error) {
    console.error("Error occurred:", error);
    // Handle error condition, possibly show an error message to the user
  }


  return (
    <AdminAppBody
      loading={loading}
      heading={"Register Corporator"}
      content={
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-cards">
              <div className="col-12">
                <form className="card" method="get" action="./">
                  <div className="card-body">
                    <h3 className="card-title text-info">{content.corporator_heading}</h3>

                    <>
                      <hr className="my-15" />
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label"><span class="required">*</span>{content.first_name}
                            </label>
                            <input type="text" className="form-control" placeholder={content.first_name}
                              onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} />
                            <span class="validation-message">{error && error.first_name && error.first_name}</span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label"><span class="required">*</span>{content.middle_name} </label>
                            <input type="text" className="form-control" placeholder={content.middle_name} onChange={(e) => setFormData({ ...formData, middle_name: e.target.value })} />
                            <span class="validation-message">{error && error.middle_name && error.middle_name}</span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label"><span class="required">*</span> {content.last_name} </label>
                            <input type="text" className="form-control" placeholder={content.last_name}
                              onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} />
                            <span class="validation-message">{error && error.last_name && error.last_name}</span>
                          </div>
                        </div>
                      </div>
                    </>
                    <br />
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label"><span class="required">*</span>{content.email}
                          </label>
                          <input type="text" className="form-control" placeholder={content.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                          <span class="validation-message">{error && error.email && error.email}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label"><span class="required">*</span>{content.contact}</label>
                          <input type="text" className="form-control" placeholder={content.contact}
                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })} />
                          <span class="validation-message">{error && error.contact && error.contact}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label"><span class="required">*</span>
                            {content.political_party}

                          </label>
                          <input type="text" className="form-control" placeholder={content.political_party}
                            onChange={(e) => setFormData({ ...formData, political_party: e.target.value })} />
                          <span class="validation-message">{error && error.political_party && error.political_party}</span>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label"><span class="required">*</span>{content.ward_no}</label>
                          <input type="text" className="form-control" placeholder={content.ward_no}
                            onChange={(e) => setFormData({ ...formData, ward_id: e.target.value })} />
                          <span class="validation-message">{error && error.ward_id && error.ward_id}</span>
                        </div>
                      </div>
                    </div>
                    <br />

                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label">{content.date_of_birth}</label>
                          <input type="date" className="form-control"
                            onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })} />
                          <span class="validation-message">{error && error.date_of_birth && error.date_of_birth}</span>

                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label"><span class="required">*</span>{content.caste}
                          </label>
                          <select className="form-select"
                            onChange={(e) => setFormData({ ...formData, caste: e.target.value })}>
                            <span class="validation-message">{error && error.caste && error.caste}</span>
                            <option>{content.select_caste}</option>
                            <option>{content.open}</option>
                            <option>{content.obc}</option>
                            <option>{content.sc}</option>
                            <option>{content.nt}</option>
                            <option>{content.other}</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label">{content.religion}</label>
                          <select className="form-select"
                            onChange={(e) => setFormData({ ...formData, religion: e.target.value })}>
                            <span class="validation-message">{error && error.religion && error.religion}</span>

                            <option>{content.select_religion}</option>
                            <option>{content.hindu}</option>
                            <option>{content.buddhisht}</option>
                            <option>{content.muslim}</option>
                            <option>{content.christ}</option>
                            <option>{content.other}</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <br />
                    <>
                      <h4 className="box-title text-info mb-0 mt-20">
                        <i className="ti-envelope me-15" />{content.office_info} 
                      </h4>
                      <hr className="my-15" />
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label"><span class="required">*</span> {content.office_email} </label>
                            <input className="form-control" type="email" placeholder={content.office_email}
                              onChange={(e) => setFormData({ ...formData, office_email: e.target.value })} />
                            <span class="validation-message">{error && error.office_email && error.office_email}</span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label"><span class="required">*</span>
                            {content.party_website}
                              
                            </label>
                            <input className="form-control" type="url" placeholder={content.party_website} onChange={(e) => setFormData({ ...formData, party_website: e.target.value })} />
                            <span class="validation-message">{error && error.party_website && error.party_website}</span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label">
                              {" "}<span class="required">*</span>
                              {content.office_contact}
                                                          </label>
                            <input className="form-control" type="tel" placeholder={content.office_contact}
                              onChange={(e) => setFormData({ ...formData, office_contact: e.target.value })} />
                            <span class="validation-message">{error && error.office_contact && error.office_contact}</span>
                          </div>
                        </div>
                      </div>
                    </>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label"><span class="required">*</span>{content.pincode}
                          </label>
                          <input type="number" className="form-control" placeholder={content.pincode}
                            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })} />
                          <span class="validation-message">{error && error.pincode && error.pincode}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label"><span class="required">*</span>{content.city}</label>
                          <input type="text" className="form-control" placeholder={content.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                          <span class="validation-message">{error && error.city && error.city}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-label">{content.state} </label>
                          <input type="text" className="form-control" placeholder={content.state}
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })} />
                          <span class="validation-message">{error && error.state && error.state}</span>

                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="form-group">
                      <label className="form-label"> <span class="required">*</span> {content.office_address}</label>
                      <textarea
                        rows={2}
                        className="form-control"
                        type="textarea"
                        placeholder={content.office_address}
                        onChange={(e) => setFormData({ ...formData, office_address: e.target.value })}
                      /><span class="validation-message">{error && error.office_address && error.office_address}</span>
                    </div>

                    <>
                      <div className="form-group">
                        <label className="form-label">
                          {content.party_info}
                          
                        </label>
                        <textarea
                          rows={4}
                          className="form-control"
                          defaultValue={""}
                          placeholder=  {content.party_info}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                      </div>
                      <br />
                      {/* /.box-body */}
                      <div className="box-footer text-end">
                      <button type="button" className="btn btn-primary me-2"
                          onClick={() => submitCorporatorData()}>
                          <i className="ti-save-alt" /> {content.save}
                        </button>
                        <button type="button" className="btn btn-warning me-1">
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
      }
    />
  );
};

export default RegisterCorporatorPage;
