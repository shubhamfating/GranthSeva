import React from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'

const ShowBookCards = () => {
    
    return (
        <AdminAppBody
            loading={false}
            heading={"All Book Detail's "}
            content={
                <div className="page-body">

                    <div className="container-xl">
                        <div className="row row-cards">
                            <div className='card'>
                                <div className="card-header">
                                    <h3 className="card-title text-info">
                                        Function & Eevent Tables / कार्य आणि कार्यक्रम सारण्या</h3>
                                </div>
                                <div className="card-body border-bottom py-3">
                                    <div className="d-flex">
                                    <div className="form-group">
                                                    <select className="form-select">
                                                        <option>Select Catergory</option>
                                                        <option>Water</option>
                                                        <option>City cleaning management</option>
                                                        <option>Road</option>
                                                        <option>Electricity</option>
                                                        <option>OTHER</option>
                                                    </select>
                                                    
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
                            </div>

                            <div className='col-md-3'>
                                <div class="card">

                                    <img src='https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg' height={200} width={400} />

                                    <div class="card-body">
                                        <h3 class="card-title">Book Heading</h3>
                                        <button className="btn btn-outline-primary w-100">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="card">

                                    <img src='https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg' height={200} width={400} />

                                    <div class="card-body">
                                        <h3 class="card-title">Book Heading</h3>
                                        <button className="btn btn-outline-primary w-100">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="card">

                                    <img src='https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg' height={200} width={400} />

                                    <div class="card-body">
                                        <h3 class="card-title">Book Heading</h3>
                                        <button className="btn btn-outline-primary w-100">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="card">

                                    <img src='https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg' height={200} width={400} />

                                    <div class="card-body">
                                        <h3 class="card-title">Book Heading</h3>
                                        <button className="btn btn-outline-primary w-100">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="card">

                                    <img src='https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg' height={200} width={400} />

                                    <div class="card-body">
                                        <h3 class="card-title">Book Heading</h3>
                                        <button className="btn btn-outline-primary w-100">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="card">

                                    <img src='https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg' height={200} width={400} />

                                    <div class="card-body">
                                        <h3 class="card-title">Book Heading</h3>
                                        <button className="btn btn-outline-primary w-100">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="card">

                                    <img src='https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg' height={200} width={400} />

                                    <div class="card-body">
                                        <h3 class="card-title">Book Heading</h3>
                                        <button className="btn btn-outline-primary w-100">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="card">

                                    <img src='https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg' height={200} width={400} />

                                    <div class="card-body">
                                        <h3 class="card-title">Book Heading</h3>
                                        <button className="btn btn-outline-primary w-100">
                                            View
                                        </button>
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

export default ShowBookCards