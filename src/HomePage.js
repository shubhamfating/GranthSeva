import React, { useEffect, useState } from "react";
import AdminAppBody from "./components/admin/AdminAppBody";
import SimpleChart from "./graphs/SimpleChart";
import marathi from '../src/translationData/marathi.json'
import hindi from '../src/translationData/hindi.json'
import english from '../src/translationData/english.json'




const HomePage = () => {
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
      loading={false}
      heading={"Home"}
      content={
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-deck row-cards">
              <div className="col-sm-6 col-lg-3">
                {/* <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">Sales</div>
                      <div className="ms-auto lh-1">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle text-muted"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Last 7 days
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item active" href="#">
                              Last 7 days
                            </a>
                            <a className="dropdown-item" href="#">
                              Last 30 days
                            </a>
                            <a className="dropdown-item" href="#">
                              Last 3 months
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h1 mb-3">75%</div>
                    <div className="d-flex mb-2">
                      <div>Conversion rate</div>
                      <div className="ms-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          7%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-primary"
                        style={{ width: "75%" }}
                        role="progressbar"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="75% Complete"
                      >
                        <span className="visually-hidden">75% Complete</span>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader sub-h1">{content.total_voter}</div>
                      {/* <div className="ms-auto lh-1">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle text-muted"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Last 7 days
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item active" href="#">
                              Last 7 days
                            </a>
                            <a className="dropdown-item" href="#">
                              Last 30 days
                            </a>
                            <a className="dropdown-item" href="#">
                              Last 3 months
                            </a>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-0 me-2">4,300</div>
                      <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          8%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                
                </div>
                
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader sub-h1">
                       {content.eligible_for_voter}</div>
                     
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-0 me-2">4,300</div>
                      <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          8%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                {/* <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">New clients</div>
                      <div className="ms-auto lh-1">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle text-muted"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Last 7 days
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item active" href="#">
                              Last 7 days
                            </a>
                            <a className="dropdown-item" href="#">
                              Last 30 days
                            </a>
                            <a className="dropdown-item" href="#">
                              Last 3 months
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-3 me-2">6,782</div>
                      <div className="me-auto">
                        <span className="text-yellow d-inline-flex align-items-center lh-1">
                          0%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div id="chart-new-clients" className="chart-sm" />
                  </div>
                </div> */}
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader sub-h1">{content.female}</div>
                      
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-0 me-2">4,300</div>
                      <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          8%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader sub-h1">{content.male}</div>
                     
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-0 me-2">4,300</div>
                      <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          8%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader sub-h1">{content.total_work}</div>
                     
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-0 me-2">4,300</div>
                      <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          8%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader sub-h1"> {content.work_in_progress}</div>
                      
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-0 me-2">4,300</div>
                      <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          8%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader sub-h1">{content.complated_work}</div>
                     
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-0 me-2">4,300</div>
                      <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          8%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader sub-h1"> {content.future_work}</div>
                    
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-0 me-2">4,300</div>
                      <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          8%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader sub-h1"> {content.todays_complaint}</div>
                     
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-0 me-2">4,300</div>
                      <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          8%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader sub-h1"> {content.complated_complaint}</div>
                      <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          8%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-0 me-2">4,300</div>
                     
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader sub-h1"> {content.processing_complaint}</div>
                      
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 ">4,300</div>
                      <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          8%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                {/* <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">Active users</div>
                      <div className="ms-auto lh-1">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle text-muted"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Last 7 days
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item active" href="#">
                              Last 7 days
                            </a>
                            <a className="dropdown-item" href="#">
                              Last 30 days
                            </a>
                            <a className="dropdown-item" href="#">
                              Last 3 months
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-3 me-2">2,986</div>
                      <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          4%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div id="chart-active-users" className="chart-sm" />
                  </div>
                </div> */}
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader sub-h1">{content.total_complate}</div>
                     
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-0 me-2">$4,300</div>
                      <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          8%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              {/* <div className="col-12">
                <div className="row row-cards">
                  <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="bg-primary text-white avatar">
                            
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                                <path d="M12 3v3m0 12v3" />
                              </svg>
                            </span>
                          </div>
                          <div className="col">
                            <div className="font-weight-medium">132 Sales</div>
                            <div className="text-muted">
                              12 waiting payments
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="bg-green text-white avatar">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M17 17h-11v-14h-2" />
                                <path d="M6 5l14 1l-1 7h-13" />
                              </svg>
                            </span>
                          </div>
                          <div className="col">
                            <div className="font-weight-medium">78 Orders</div>
                            <div className="text-muted">32 shipped</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="bg-twitter text-white avatar">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                              </svg>
                            </span>
                          </div>
                          <div className="col">
                            <div className="font-weight-medium">623 Shares</div>
                            <div className="text-muted">16 today</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="bg-facebook text-white avatar">
                             
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                              </svg>
                            </span>
                          </div>
                          <div className="col">
                            <div className="font-weight-medium">132 Likes</div>
                            <div className="text-muted">21 today</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <h1>{content.chart}</h1>
              <div><SimpleChart /></div>

            </div>
            
          </div>
        </div>
      }
    />
  );
};

export default HomePage;
