import React, { useEffect, useState } from "react";
import AdminAppBody from "../../../components/admin/AdminAppBody";
import useApiCallHooks from "../../../hooks/useApiCallHooks";
import { useParams } from "react-router-dom";

const CoroporatorProfilePage = () => {
  const [responce, loading, error, callAPI] = useApiCallHooks();
  const {slug} = useParams()
  useEffect(() => {
    callAPI('get', 'corporator/'+ slug);
    //setScheme(responce)

}, []);
console.log(slug);
  return (
    <AdminAppBody
    loading={false}
    heading={"Government Schemes"}
      content={
        <div className="page-wrapper">
          <div className="page-header">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-auto">
                  <span
                    className="avatar avatar-lg rounded"
                    style={{ backgroundImage: "url(./static/avatars/003m.jpg)" }}
                  />
                </div>
                <div className="col">
                  <h1 className="fw-bold">R.Parshuram</h1>
                  <div className="my-2">
                    Public Policy and Rural Development Professional, Senior Fellow, World Resources Institute (India)
                  </div>
                  <div className="list-inline list-inline-dots text-muted">
                    <div className="list-inline-item">
                      {/* Download SVG icon from http://tabler-icons.io/i/map */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-inline"
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
                        <path d="M3 7l6 -3l6 3l6 -3l0 13l-6 3l-6 -3l-6 3l0 -13" />
                        <path d="M9 4l0 13" />
                        <path d="M15 7l0 13" />
                      </svg>
                      Atal Bihari Vajpayee Institute of Good Governance and Policy Analysis (AIGGPA)
                    </div>
                    <div className="list-inline-item">
                      {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-inline"
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
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                      </svg>
                      <a href="#" className="text-reset">
                        rparshuram03@ind.gov
                      </a>
                    </div>
                    <div className="list-inline-item">
                      {/* Download SVG icon from http://tabler-icons.io/i/cake */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-inline"
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
                        <path d="M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8z" />
                        <path d="M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197" />
                        <path d="M12 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z" />
                      </svg>
                      10-5-1988
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          {/* Page body */}
          <div className="page-body">
            <div className="container-xl">
              <div className="row g-3">
                <div className="col-lg">
                  <div className="row row-cards">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title">Basic info</div>
                        <div className='row'>
                          <div className='col-6'>
                            <div className="mb-2 mt-3">
                              <lable>  <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon me-2 text-muted"
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
                                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                <path d="M3 6l0 13" />
                                <path d="M12 6l0 13" />
                                <path d="M21 6l0 13" />
                              </svg>
                                Went to: </lable> <br /><strong>Delhi University</strong>
                            </div>
                            <div className="mb-2">
                              <label><svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon me-2 text-muted"
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
                                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                                <path d="M12 12l0 .01" />
                                <path d="M3 13a20 20 0 0 0 18 0" />
                              </svg>
                                Worked at:</label> <br /> <strong>Chief Secretary, Government of Madhya Pradesh</strong>
                            </div>

                            <div className="mb-2">
                              {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
                              <lable><svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon me-2 text-muted"
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
                                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                                <path d="M16 3v4" />
                                <path d="M8 3v4" />
                                <path d="M4 11h16" />
                                <path d="M11 15h1" />
                                <path d="M12 15v3" />
                              </svg>
                                Birth date: </lable><br /><strong>10-5-1988</strong>
                            </div>
                          </div>

                          <div className="col-6">
                            <div >
                              <div className="card-body">

                                <div className="mb-2">
                                  <lable>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon me-2 text-muted"
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
                                      <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                                    </svg>
                                    Lives in:</lable><br /> <strong>Bhopal, Madhya Pradesh</strong>
                                </div>
                                <div className="mb-2">
                                  <lable>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon me-2 text-muted"
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
                                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                    </svg>
                                    From:{" "}</lable><br />
                                  <strong>
                                    <span className="flag flag-country-in" />
                                    India
                                  </strong>
                                </div>

                                <div>
                                  <lable>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon me-2 text-muted"
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
                                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                      <path d="M12 7v5l3 3" />
                                    </svg>
                                    Time zone:</lable><br /> <strong>UTC+05:30, Indian Standard Time</strong>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="card">
                        <div className="card-body">
                          <h2 className="card-title">About Me</h2>
                          <div>
                            <p>
                              R. Parasuram is a Senior Fellow with the Sustainable Landscapes and Restoration team at WRI India.

                              Parasuram retired from the IAS in 2013, as Chief Secretary, Government of Madhya Pradesh. After that for over five years he served as the State Election Commissioner.
                              Following this, for a year-and-half he was Director General of the Atal Bihari Vajpayee Institute of Good Governance and Policy Analysis (AIGGPA), Bhopal. It is an autonomous institute set up by the Government of M.P. to serve as a consultancy and public policy formulation agency.
                              He is an electrical engineering graduate and has spent a year at IDRC, Ottawa, Canada, as a Fellow in the public policy area.

                              While living in small towns across Madhya Pradesh during his formative years he developed an abiding interest in issues and challenges faced by the rural population in developing countries like India. He is of the view that eliminating rural poverty continues to be a major challenge. He believes in the capacity and willingness of India’s rural population to overcome the adversarial economic circumstances in which large numbers continue to live. This can be achieved through sustainable livelihood opportunities, in agriculture and through non-farm employment. Improved physical connectivity, access to digital technologies and strong grassroots level institutions can help achieve this. Over the years, as the realization and sensitivity around concerns relating to the environment, biodiversity and climate change have grown, he has also become appreciative of the inextricable link between rural livelihoods and the sustainable management of natural resources
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>


      } />
  );
};

export default CoroporatorProfilePage;
