import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { uiRoutes } from "../../routes/ui/uiRoutes";
import marathi from '../../translationData/marathi.json'
import hindi from '../../translationData/hindi.json'
import english from '../../translationData/english.json'
import { getUserPermissions, getUserToken, getUserRoles } from "../../config/user";

const AdminSiteBar = ({ Current_User }) => {
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

//   console.log(getUserRoles());
//  if(getUserRoles())

  return (
    <aside
      className="navbar navbar-vertical navbar-expand-lg"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebar-menu"
          aria-controls="sidebar-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <h1 className="navbar-brand navbar-brand-autodark">
          <a href=".">
            <h2>CPP</h2>
            {/* <img
              src="./static/logo.svg"
              width={110}
              height={32}
              alt="Tabler"
              className="navbar-brand-image"
            /> */}
          </a>
        </h1>
        <div className="navbar-nav flex-row d-lg-none">
          <div className="nav-item d-none d-lg-flex me-3">
            <div className="btn-list">
              <a
                href="https://github.com/tabler/tabler"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                {/* Download SVG icon from http://tabler-icons.io/i/brand-github */}
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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
                Source code
              </a>
              <a
                href="https://github.com/sponsors/codecalm"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon text-pink"
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
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
                Sponsor
              </a>
            </div>
          </div>
          <div className="d-none d-lg-flex">
            <a
              href="?theme=dark"
              className="nav-link px-0 hide-theme-dark"
              title="Enable dark mode"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
            >
              {/* Download SVG icon from http://tabler-icons.io/i/moon */}
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
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
              </svg>
            </a>
            <a
              href="?theme=light"
              className="nav-link px-0 hide-theme-light"
              title="Enable light mode"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
            >
              {/* Download SVG icon from http://tabler-icons.io/i/sun */}
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
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
              </svg>
            </a>
            <div className="nav-item dropdown d-none d-md-flex me-3">
              <a
                href="#"
                className="nav-link px-0"
                data-bs-toggle="dropdown"
                tabIndex={-1}
                aria-label="Show notifications"
              >
                {/* Download SVG icon from http://tabler-icons.io/i/bell */}
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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
                <span className="badge bg-red" />
              </a>
              <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Last updates</h3>
                  </div>
                  <div className="list-group list-group-flush list-group-hoverable">
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="status-dot status-dot-animated bg-red d-block" />
                        </div>
                        <div className="col text-truncate">
                          <a href="#" className="text-body d-block">
                            Example 1
                          </a>
                          <div className="d-block text-muted text-truncate mt-n1">
                            Change deprecated html tags to text decoration
                            classes (#29604)
                          </div>
                        </div>
                        <div className="col-auto">
                          <a href="#" className="list-group-item-actions">
                            {/* Download SVG icon from http://tabler-icons.io/i/star */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon text-muted"
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
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="status-dot d-block" />
                        </div>
                        <div className="col text-truncate">
                          <a href="#" className="text-body d-block">
                            Example 2
                          </a>
                          <div className="d-block text-muted text-truncate mt-n1">
                            justify-content:between ⇒
                            justify-content:space-between (#29734)
                          </div>
                        </div>
                        <div className="col-auto">
                          <a href="#" className="list-group-item-actions show">
                            {/* Download SVG icon from http://tabler-icons.io/i/star */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon text-yellow"
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
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="status-dot d-block" />
                        </div>
                        <div className="col text-truncate">
                          <a href="#" className="text-body d-block">
                            Example 3
                          </a>
                          <div className="d-block text-muted text-truncate mt-n1">
                            Update change-version.js (#29736)
                          </div>
                        </div>
                        <div className="col-auto">
                          <a href="#" className="list-group-item-actions">
                            {/* Download SVG icon from http://tabler-icons.io/i/star */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon text-muted"
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
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="status-dot status-dot-animated bg-green d-block" />
                        </div>
                        <div className="col text-truncate">
                          <a href="#" className="text-body d-block">
                            Example 4
                          </a>
                          <div className="d-block text-muted text-truncate mt-n1">
                            Regenerate package-lock.json (#29730)
                          </div>
                        </div>
                        <div className="col-auto">
                          <a href="#" className="list-group-item-actions">
                            {/* Download SVG icon from http://tabler-icons.io/i/star */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon text-muted"
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
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link d-flex lh-1 text-reset p-0"
              data-bs-toggle="dropdown"
              aria-label="Open user menu"
            >
              <span
                className="avatar avatar-sm"
                style={{
                  backgroundImage: "url(./static/avatars/000m.jpg)",
                }}
              />
              <div className="d-none d-xl-block ps-2">
                <div>Paweł Kuna</div>
                <div className="mt-1 small text-muted">UI Designer</div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <a href="#" className="dropdown-item">
                Status
              </a>
              <a href="./profile.html" className="dropdown-item">
                Profile
              </a>
              <a href="#" className="dropdown-item">
                Feedback
              </a>
              <div className="dropdown-divider" />
              <a href="./settings.html" className="dropdown-item">
                Settings
              </a>
              <a href="./sign-in.html" className="dropdown-item">
                Logout
              </a>
            </div>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="sidebar-menu">
          <ul className="navbar-nav pt-lg-3">

            <li className="nav-item">

              <Link className="nav-link" to={uiRoutes.authHome}>
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  {/* Download SVG icon from http://tabler-icons.io/i/home */}
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                  </svg>
                </span>
                <span className="nav-link-title"> {content.home}</span>
              </Link>

            </li>

            {getUserToken() && getUserRoles().includes("admin") &&
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={uiRoutes.super_admin.corporator.list}>
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      {/* Download SVG icon from http://tabler-icons.io/i/home */}
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                      </svg>
                    </span>
                    <span className="nav-link-title"> {"Corporator List"}</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={uiRoutes.super_admin.corporator.inactiveList}>
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      {/* Download SVG icon from http://tabler-icons.io/i/home */}
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                      </svg>
                    </span>
                    <span className="nav-link-title"> {"Corporator Request"}</span>
                  </Link>
                </li>
              </>
            }


            {getUserToken() && getUserPermissions().includes(uiRoutes.admin.voter.show.replace("/", "")) &&
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"
                  href="#navbar-forms"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="false"
                  role="button"
                  aria-expanded="false"
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/checkbox */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                  </span>
                  <span className="nav-link-title">{content.voter}</span>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                      <Link className="dropdown-item" to={uiRoutes.admin.voter.add}>
                        {content.add_voter}
                      </Link>
                      <Link className="dropdown-item" to={uiRoutes.admin.voter.show}>
                        {content.show_voter}
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            }

            {/* {getUserToken() && getUserPermissions().includes(uiRoutes.admin.election.show.replace("/", "")) && */}

            {getUserToken() && getUserRoles().includes("corporator") &&
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"
                  href="#navbar-forms"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="false"
                  role="button"
                  aria-expanded="false"
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/checkbox */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                  </span>
                  <span className="nav-link-title">{"Election"}</span>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                      <Link className="dropdown-item" to={uiRoutes.admin.election.add}>
                        {"Add Election"}
                      </Link>
                      <Link className="dropdown-item" to={uiRoutes.admin.election.show}>
                        {"Election List"}
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            }




            {getUserToken() && getUserRoles().includes("corporater") &&
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"
                  href="#navbar-forms"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="false"
                  role="button"
                  aria-expanded="false"
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/checkbox */}
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 11l3 3l8 -8" />
                      <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                    </svg>
                  </span>
                  <span className="nav-link-title"> {content.corporator}</span>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                      {getUserToken() && getUserPermissions().includes(uiRoutes.admin.corporator.update.replace("/", "")) &&
                        <Link className="dropdown-item" to={uiRoutes.admin.corporator.create}>
                          {content.register_corporeter}
                        </Link>
                      }
                      <Link className="dropdown-item" to={uiRoutes.admin.corporator.profile}>
                        {content.corporator_profile}
                      </Link>

                    </div>
                  </div>
                </div>
              </li>

            }

            {getUserToken() && getUserPermissions().includes(uiRoutes.admin.ebook.show.replace("/", "")) &&

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"
                  href="#navbar-forms"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="false"
                  role="button"
                  aria-expanded="false"
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/checkbox */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12.5 17h-8.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8.5" /><path d="M3 13h13" /><path d="M8 21h4.5" /><path d="M10 17l-.5 4" /><path d="M19 16v6" /><path d="M22 19l-3 3l-3 -3" /></svg>
                  </span>
                  <span className="nav-link-title">{content.e_learning}</span>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                      {getUserToken() && getUserPermissions().includes(uiRoutes.admin.ebook.add.replace("/", "")) &&
                        <Link className="dropdown-item" to={uiRoutes.admin.ebook.add}>
                          {content.add_book}
                        </Link>
                      }
                      {getUserToken() && getUserPermissions().includes(uiRoutes.admin.ebook.show.replace("/", "")) &&
                        <Link className="dropdown-item" to={uiRoutes.admin.ebook.show}>
                          {content.e_books}
                        </Link>
                      }

                      <Link className="dropdown-item" to={uiRoutes.user.eBooks.card}>
                        {content.ebook_cards}
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            }

            {getUserToken() && getUserPermissions().includes(uiRoutes.user.complaint.show.replace("/", "")) &&
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"
                  href="#navbar-forms"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="false"
                  role="button"
                  aria-expanded="false"
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/checkbox */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 9h8" /><path d="M8 13h6" /><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" /></svg>
                  </span>
                  <span className="nav-link-title">{content.complaint}</span>
                </a>


                <div className="dropdown-menu">
                  <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                      {getUserToken() && getUserPermissions().includes(uiRoutes.user.complaint.add.replace("/", "")) &&
                        <Link className="dropdown-item" to={uiRoutes.user.complaint.add}>
                          {content.add_complaint}
                        </Link>
                      }
                      {getUserToken() && getUserPermissions().includes(uiRoutes.user.complaint.show.replace("/", "")) &&
                        <Link className="dropdown-item" to={uiRoutes.user.complaint.show}>
                          {content.show_complaint}
                        </Link>
                      }

                      {getUserToken() && getUserPermissions().includes(uiRoutes.user.complaint.show.replace("/", "")) &&
                        <Link className="dropdown-item" to={uiRoutes.user.complaint.card}>
                          {content.complaint_card}
                        </Link>
                      }
                    </div>
                  </div>
                </div>
              </li>

            }

            {getUserToken() && getUserPermissions().includes(uiRoutes.admin.events.show.replace("/", "")) &&
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"
                  href="#navbar-forms"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="false"
                  role="button"
                  aria-expanded="false"
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/checkbox */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M16 3l0 4" /><path d="M8 3l0 4" /><path d="M4 11l16 0" /><path d="M8 15h2v2h-2z" /></svg>
                  </span>
                  <span className="nav-link-title"> {content.events}</span>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                      {getUserToken() && getUserPermissions().includes(uiRoutes.admin.events.create.replace("/", "")) &&
                        <Link className="dropdown-item" to={uiRoutes.admin.events.create}>
                          {content.add_event}
                        </Link>
                      }
                      {getUserToken() && getUserPermissions().includes(uiRoutes.admin.events.show.replace("/", "")) &&
                        <Link className="dropdown-item" to={uiRoutes.admin.events.show}>
                          {content.show_event}
                        </Link>
                      }

                      <Link className="dropdown-item" to={uiRoutes.admin.events.view}>
                        {content.event_card}
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            }

            {getUserToken() && getUserPermissions().includes(uiRoutes.admin.work.show.replace("/", "")) &&
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"
                  href="#navbar-forms"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="false"
                  role="button"
                  aria-expanded="false"
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/checkbox */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />
                      <path d="M11 3h5a3 3 0 0 1 3 3v11" />
                    </svg>
                  </span>
                  <span className="nav-link-title"> {content.works}</span>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                      {getUserToken() && getUserPermissions().includes(uiRoutes.admin.work.add.replace("/", "")) &&
                        <Link className="dropdown-item" to={uiRoutes.admin.work.add}>
                          {content.add_corporator_work}
                        </Link>
                      }
                      {getUserToken() && getUserPermissions().includes(uiRoutes.admin.work.show.replace("/", "")) &&
                        <Link className="dropdown-item" to={uiRoutes.admin.work.show}>
                          {content.show_corporator_work}
                        </Link>
                      }
                    </div>
                  </div>
                </div>
              </li>
            }

            {getUserToken() && getUserPermissions().includes(uiRoutes.admin.bachatgat.show.replace("/", "")) &&
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"
                  href="#navbar-forms"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="false"
                  role="button"
                  aria-expanded="false"
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/checkbox */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users-group" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                      <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                      <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
                    </svg>
                  </span>
                  <span className="nav-link-title"> {content.saving_group}</span>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                      <Link className="dropdown-item" to={uiRoutes.admin.bachatgat.add}>
                        {content.add_saving_group}
                      </Link>
                      <Link className="dropdown-item" to={uiRoutes.admin.bachatgat.show}>
                        {content.show_saving_group}
                      </Link>

                    </div>
                  </div>
                </div>
              </li>

            }

            {getUserToken() && getUserPermissions().includes(uiRoutes.admin.residents.show.replace("/", "")) &&
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"
                  href="#navbar-forms"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="false"
                  role="button"
                  aria-expanded="false"
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/checkbox */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                      <path d="M16 19h6" />
                      <path d="M19 16v6" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                    </svg>
                  </span>
                  <span className="nav-link-title"> {content.residents}</span>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                      <Link className="dropdown-item" to={uiRoutes.admin.residents.add}>
                        {content.add_residents}
                      </Link>
                      <Link className="dropdown-item" to={uiRoutes.admin.residents.show}>
                        {content.show_residents}
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            }
            {getUserToken() && getUserPermissions().includes(uiRoutes.admin.scheme.show.replace("/", "")) &&
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"
                  href="#navbar-forms"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="false"
                  role="button"
                  aria-expanded="false"
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/checkbox */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-multiple" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                      <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
                    </svg>
                  </span>
                  <span className="nav-link-title"> {content.scheme}</span>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                      <Link className="dropdown-item" to={uiRoutes.admin.scheme.add}>
                        {content.add_scheme}
                      </Link>
                      <Link className="dropdown-item" to={uiRoutes.admin.scheme.show}>
                        {content.show_scheme}
                      </Link>

                    </div>
                  </div>
                </div>
              </li>
            }

            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#navbar-help"
                data-bs-toggle="dropdown"
                data-bs-auto-close="false"
                role="button"
                aria-expanded="false"
              >
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                 
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M15 15l3.35 3.35" />
                    <path d="M9 15l-3.35 3.35" />
                    <path d="M5.65 5.65l3.35 3.35" />
                    <path d="M18.35 5.65l-3.35 3.35" />
                  </svg>
                </span>
                <span className="nav-link-title"> {content.help}</span>
              </a>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  href="https://tabler.io/docs"
                  target="_blank"
                  rel="noopener"
                >
                  Documentation
                </a>
                <a className="dropdown-item" href="./changelog.html">
                  Changelog
                </a>
                <a
                  className="dropdown-item"
                  href="https://github.com/tabler/tabler"
                  target="_blank"
                  rel="noopener"
                >
                  Source code
                </a>
                <a
                  className="dropdown-item text-pink"
                  href="https://github.com/sponsors/codecalm"
                  target="_blank"
                  rel="noopener"
                >
                
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-inline me-1"
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
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                  Sponsor project!
                </a>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default AdminSiteBar;
