import React, { useState } from 'react'
import AdminAppBody from '../../../../components/admin/AdminAppBody'
import useApiCallHooks from '../../../../hooks/useApiCallHooks';

const UpdateBachatgatWorkRegistrationWork = () => {
    const [responce, loading, error, callAPI] = useApiCallHooks();
    const [data, setData] = useState({
        work_name: "",
        start_date: "",
        due_date: "",
        work_budget: ""
    })
  return (
    <AdminAppBody
    loading={loading}
    heading={"Update Saving Groups Work "}
    content={
        <div className="page-body">
            <div className="container-xl">
                <div className="row row-cards">
                    <div className="col-12">
                        <form className="card">
                            <div className="card-body">
                                <h2 className="card-title text-info mb-0"> <i class="ti-user me-15"></i>
                                   Update Work Assiging Form</h2>
                                <hr class="my-15"></hr>
                                <div className="row row-cards">
                                    <div className="mb-3">
                                        <label className="form-label"><span class="required">*</span>
                                            Name Of Work</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            disabled=""
                                            placeholder="Project Name"
                                            onChange={(e) => setData({ ...data, workname: e.target.value })} required
                                        />
                                        <span class="validation-message">{error && error.first_name}</span>
                                    </div>
                                </div>
                                <br />
                                <div className="row row-cards">
                                    <div className="mb-3">
                                        <label className="form-label"><span class="required">*</span>
                                            Work Budget</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            disabled=""
                                            placeholder="Work Budget"
                                            onChange={(e) => setData({ ...data, workbudget: e.target.value })} required
                                        />
                                        <span class="validation-message">{error && error.first_name}</span>
                                    </div>
                                </div>
                                <br />

                                <div className="row row-cards">
                                    <div className=" col-md">
                                        <div className="mb-3">
                                            <label className="form-label"> <span class="required">*</span>
                                                Starting Date</label>
                                            <input
                                                type="Date"
                                                className="form-control"
                                                onChange={(e) => setData({ ...data, startdate: e.target.value })} required />

                                            <span class="validation-message">{error && error.first_name}</span>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="row row-cards">
                                    <div className=" col-md">
                                        <div className="mb-3">
                                            <label className="form-label"> <span class="required">*</span>
                                                Due Date of Project / प्रकल्पाची देय तारीख</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                onChange={(e) => setData({ ...data, duedate: e.target.value })} required />

                                            <span class="validation-message">{error && error.first_name}</span>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                {/* /.box-body */}
                                <div className="box-footer text-end">
                                    <button type="button" className="btn btn-warning me-1">
                                        <i className="ti-trash" /> Cancel / रद्द करा
                                    </button>
                                    <button type="button" className="btn btn-primary"
                                      >
                                        <i className="ti-save-alt" /> Save / जतन करा
                                    </button>
                                </div>
                                {/* /.box */}


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

export default UpdateBachatgatWorkRegistrationWork