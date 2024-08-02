import React, { useState, useEffect } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import PaginationBar from '../../../components/admin/PaginationBar';
import axios from 'axios';

const CorporatorListPage = () => {

  const [responce, loading, error, callAPI, statusCode] = useApiCallHooks();
  const [list, setList] = useState([]);
  const [isStatus, setIsStatus] = useState(false);
  const [profile, setProfile] = useState({});


  useEffect(() => {
    callAPI('post', 'corporator-list', "");
    //setScheme(responce)
    //axios.get("http://sugar.cg-it.in/api/sugarcane-type-list").then((res)=>console.log(res)).catch((error)=>console.log(error))
  }, []);

  if (responce?.data?.data.length > 0 && responce?.data?.message === "CorporatorActiveList" && list.length === 0) {
    setList(responce.data.data);
  }

  const confimCorporatorStatus = (status, slug) => {
    callAPI('post', 'approved-status', { status: status, slug: slug });
  }

  if (responce?.data?.message === "StatusUpdated" && !isStatus) {
    setIsStatus(true)
    callAPI('post', 'corporator-list', "");
    window.location.reload();
  }

  const viewCorporatorProfile = (li) => {
    setProfile(li)
  }
  return (
    <AdminAppBody
      loading={loading}
      heading={"Corporator List"}
      permission 
      content={
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-cards">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Corporator List</h3>
                  </div>
                  <div className="card-body border-bottom py-3">
                    <div className="d-flex">
                      <div className="text-muted">
                        Show
                        <div className="mx-2 d-inline-block">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            defaultValue={8}
                            size={3}
                            aria-label="Invoices count"
                          />
                        </div>
                        entries
                      </div>
                      <div className="ms-auto text-muted">
                        Search:
                        <div className="ms-2 d-inline-block">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            aria-label="Search invoice"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter text-nowrap datatable">
                      <thead>
                        <tr>
                          <th>Sr.no</th>
                          <th>Name</th>
                          <th>Corporation Name</th>
                          <th>Ward Name</th>
                          <th>Status</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {list.length > 0 && list.map((li, i) => (
                          <tr>
                            <td><span className="text-muted">{i + 1}</span></td>
                            <td><span className="text-muted">{li.first_name + " " + li.last_name}</span></td>
                            <td><span className="text-muted">{li.corporation.name}</span></td>
                            <td><span className="text-muted">{li.ward.ward_name}</span></td>
                            <td><span className="text-muted">{li.status === 0 ? "Register" : li.status === 1 ? "Accept" : "Reject"}</span></td>

                            <td className="text-end">
                              <button className="btn btn-purple" title='Profile'
                                onClick={() => viewCorporatorProfile(li)}>
                                <i style={{ fontSize: "24px" }} class="fa fa-user"></i>
                              </button>
                              <span className="dropdown">
                                <button
                                  className="btn dropdown-toggle align-text-top"
                                  data-bs-boundary="viewport"
                                  data-bs-toggle="dropdown"
                                >
                                  Status
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">

                                  <a className="dropdown-item" onClick={() => confimCorporatorStatus(0, li.slug)}>
                                    Inactive
                                  </a>
                                </div>
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <PaginationBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  )
}

export default CorporatorListPage