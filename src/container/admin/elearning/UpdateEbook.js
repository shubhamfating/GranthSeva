import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'
import { useNavigate, useParams } from 'react-router-dom'
import useApiCallHooks from '../../../hooks/useApiCallHooks'
import { uiRoutes } from '../../../routes/ui/uiRoutes'
import { apiRoutes } from '../../../routes/api/apiRoutes'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function UpdateEBook() {
    const [responce, loading, error, callAPI] = useApiCallHooks();
    const [categoryData, setcategoryData] = useState([]);
    const [content, setContent] = useState({})
    const [isSet, isSetData] = useState(false);
    const { slug } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        book_name: "",
        book_link: "",
        author_name: "",
        publication: "",
        book_details: "",
        category_id: "",
        corporator_id: "",
        status: ""
    })

    useEffect(() => {
        callAPI("get", apiRoutes.admin.ebook.get + slug);
    }, []);

    const onClickSubmit = () => {
        callAPI('post', apiRoutes.admin.ebook.update.replace("slug", slug), data);
    }

    useEffect(() => {
        callAPI('get', apiRoutes.admin.category.show, "");
    }, []);

    if (
        responce?.data?.lists &&
        responce?.data?.lists.length > 0 &&
        categoryData.length === 0 &&
        responce?.data?.message === "categoryLists"
    ) {
        setcategoryData(responce.data.lists);
    }


    if (responce?.data?.lists && !isSet) {
        setData({ ...responce.data.lists });
        isSetData(true)
    }

    useEffect(() => {
        if (responce && responce.status === 202) {
            toast.success("Updated Successfully");
            setTimeout(() => {
                navigate(uiRoutes.admin.ebook.show);
            }, 1000);
        }
    }, [responce, navigate]);


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
            heading={"Update E-Books"}
            content={
                <>
                    <ToastContainer
                        position="top-center"
                        autoClose={500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <div className="page-body">
                        <div className="container-xl">
                            <div className="row row-cards">
                                <form className="card">
                                    <div className="card-body">
                                        <h3 className="card-title text-info mb-0 ">
                                            {content.book_heading} </h3>
                                        <hr class="my-15" />

                                        <div >
                                            <div className="row">
                                                <div className='col-md-6'>
                                                    <div className="form-group">
                                                        <label className="form-label"><span class="required">*</span> {content.book_name} </label>
                                                        <input type="name" className="form-control" placeholder={content.book_name}
                                                        value={data.book_name}
                                                            onChange={(e) => setData({ ...data, book_name: e.target.value })} />
                                                        <span class="validation-message">{error && error.book_name && error.book_name}</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">
                                                            <span class="required">*</span>
                                                            <b>{content.category}</b>
                                                        </label>
                                                        <select
                                                            className="form-control"
                                                            value={data.category_id}
                                                            onChange={(e) =>
                                                                setData({ ...data, category_id: e.target.value })
                                                            }
                                                        >
                                                            <option>Select Category</option>
                                                            {categoryData.length > 0 && categoryData.map((list, i) => (
                                                                <option value={list.id}>{list.name}</option>
                                                            ))}
                                                        </select>
                                                        <span class="text-danger">
                                                            {error?.data &&
                                                                error?.message === "ValidationError" &&
                                                                error?.data.corporator_id}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='col-md-6 mt-3'>
                                                    <div className="form-group">
                                                        <label className="form-label"><span class="required">*</span>
                                                            {content.book_link}
                                                        </label>
                                                        <input className="form-control" type="url" value={data.book_link} placeholder={content.book_link} onChange={(e) => setData({ ...data, book_link: e.target.value })} />
                                                        <span class="validation-message">{error && error.book_link && error.book_link}</span>
                                                    </div></div>

                                                <div className="col-md-6 mt-3">
                                                    <div className="form-group">
                                                        <label className="form-label"><span class="required">*</span>
                                                            {content.author_name}
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder={content.author_name}
                                                            value={data.author_name}
                                                            onChange={(e) => setData({ ...data, author_name: e.target.value })}
                                                        /><span class="validation-message">{error && error.author_name && error.author_name}</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mt-3">
                                                    <div className="form-group">
                                                        <label className="form-label"><span class="required">*</span>
                                                            {content.publication}

                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder={content.publication}
                                                            value={data.publication}
                                                            onChange={(e) => setData({ ...data, publication: e.target.value })}
                                                        /><span class="validation-message">{error && error.publication && error.publication}</span>
                                                    </div>
                                                </div>
                                                <div className='col-md-6 mt-3'>
                                                    <div className="form-group">
                                                        <label className="form-label">
                                                            <span class="required">*</span>
                                                            {content.status}
                                                        </label>
                                                        <select className="form-select"
                                                        value={data.status}
                                                            onChange={(e) => setData({ ...data, status: e.target.value })}>
                                                            <option value="">{content.select_status}</option>
                                                            <option value="0">{content.active}</option>
                                                            <option value="1">{content.inactive}</option>
                                                        </select>
                                                        <span class="validation-message">{error && error.status && error.work_status}</span>
                                                    </div>
                                                </div>
                                                <div className="form-group mt-3">
                                                    <label className="form-label">
                                                        {content.book_details}
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        rows={3}
                                                        placeholder={content.book_details}
                                                        defaultValue={""}
                                                        value={data.book_details}
                                                        onChange={(e) => setData({ ...data, book_details: e.target.value })}
                                                    />
                                                </div>


                                                {/* /.box-body */}
                                                <div className="box-footer text-end mt-3">
                                                    <button type="button" className="btn btn-primary me-2"
                                                        onClick={() => onClickSubmit()}>
                                                        <i className="ti-save-alt" />{content.update}
                                                    </button>
                                                    <button type="button" className="btn btn-warning me-1">
                                                        <i className="ti-trash" /> {content.cancel}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            }
        />
    )
}

export default UpdateEBook
