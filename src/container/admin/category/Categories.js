import React, { useEffect, useState } from 'react';
import AdminAppBody from '../../../components/admin/AdminAppBody';
import { useNavigate } from 'react-router-dom';
import useApiCallHooks from '../../../hooks/useApiCallHooks';
import { uiRoutes } from '../../../routes/ui/uiRoutes';
import marathi from '../../../translationData/marathi.json';
import hindi from '../../../translationData/hindi.json';
import english from '../../../translationData/english.json';
import { apiRoutes } from "../../../routes/api/apiRoutes";

const ShowCategoriesPage = () => {
    const [isDeleted, setIsDeleted] = useState(false);
    const navigate = useNavigate();
    const [response, loading, error, callAPI, statusCode] = useApiCallHooks();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        callAPI('get', apiRoutes.admin.category.show, "");
    }, []);

    useEffect(() => {
        if (response?.data?.lists ) {
            console.log('Setting categories with:', response.data.lists);
            setCategories(response.data.lists);
        }
    }, [response, categories]);
    useEffect(() => {
        console.log('Categories state updated:', categories);
    }, [categories]);

    console.log('API response:', categories);

    const onClickEdit = (slug) => {
        navigate(uiRoutes.admin.category.update.replace(':slug', slug));
    }

    const onClickDelete = (id) => {
        setIsDeleted(false);
        callAPI('delete', apiRoutes.admin.category.delete.replace(':id', id));
    }

    useEffect(() => {
        if (response && response.status === 204 && !isDeleted) {
            callAPI('get', apiRoutes.admin.category.list, "");
            setIsDeleted(true);
        }
    }, [response, isDeleted, callAPI]);

    const [content, setContent] = useState({});

    useEffect(() => {
        let lang = localStorage.getItem('language');
        if (lang === "english") {
            setContent(english);
        } else if (lang === "hindi") {
            setContent(hindi);
        } else if (lang === "marathi") {
            setContent(marathi);
        }
    }, []);

    return (
        <AdminAppBody
            loading={loading}
            heading={content.category_list || "Category List"}
            content={
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title text-info">{content.category_details || "Category Details"}</h3>
                                    </div>
                                    <div className="card-body border-bottom py-3">
                                        <div className="d-flex">
                                            <span className="d-none d-sm-inline">
                                                <a href="#" className="btn btn-blue w-100"
                                                    onClick={() => navigate(uiRoutes.admin.category.add)}>
                                                    {content.add_new || "Add New"}
                                                    <i style={{ fontSize: 16 }} className="fa"></i>
                                                </a>
                                            </span>
                                            <div className="ms-auto text-muted">
                                                {content.search || "Search"}:
                                                <div className="ms-2 d-inline-block">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        aria-label="Search category"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table card-table table-vcenter text-nowrap datatable">
                                            <thead>
                                                <tr>
                                                    <th>{content.sr_no || "Sr. No"}</th>
                                                    <th>{content.name || "Name"}</th>
                                                    <th>{content.slug || "Slug"}</th>
                                                    <th>{content.type || "Type"}</th>
                                                    <th className='text-center'> {content.action || "Action"}</th>
                                                    <th />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                { categories.map((data, i) => (
                                                    <tr key={i}>
                                                        <th>{i + 1}</th>
                                                        <td>{data.name}</td>
                                                        <td>{data.slug}</td>
                                                        <td>{data.type ? content.true || "True" : content.false || "False"}</td>
                                                        <td>
                                                            <div className="btn-list flex-nowrap">
                                                                <button className="btn btn-purple w-100" title='Edit'
                                                                    onClick={() => onClickEdit(data.id)}>
                                                                    <i style={{ fontSize: "24px" }} className="fa">&#xf044;</i>
                                                                </button>

                                                                <button className="btn btn-red w-100" title='Delete' onClick={() => onClickDelete(data.id)}>
                                                                    <i style={{ fontSize: 24 }} className="fa"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="card-footer d-flex align-items-center">
                                        <ul className="pagination m-0 ms-auto">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">
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
                                                        <path d="M15 6l-6 6l6 6" />
                                                    </svg>
                                                    {content.prev || "Prev"}
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">
                                                    2
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    4
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    5
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    {content.next || "Next"}
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
                                                        <path d="M9 6l6 6l-6 6" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    )
}

export default ShowCategoriesPage;
