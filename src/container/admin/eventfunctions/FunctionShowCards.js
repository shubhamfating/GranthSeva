import React from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody'

const FunctionShowCards = () => {
    return (
        <AdminAppBody
            loading={false}
            heading={"Event "}
            content={
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards">
                            <div className='card'>
                                <div className="card-header">
                                    <h3 className="card-title text-info">
                                        Event</h3>
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
                                    <div class="card-body">
                                        <div className='mb-2'>
                                            <h3 class="card-title"><b>Dance Function</b></h3>
                                            <label className='form-lable'>Organizer Name : Akshay Aher</label><br></br>
                                            <label className='form-lable'>Start Date : 29/02/2024</label><br></br>
                                            <label className='form-lable'>End Date : 02/03/2024</label><br></br>
                                            <label className='form-lable'>Details :</label><br></br>
                                        </div>
                                        <button className="btn btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#modal-simple">
                                            View More
                                        </button>
                                        <div class="modal modal-blur fade" id="modal-simple" tabindex="-1" role="dialog" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title">Dance Function</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <label className='form-lable'>Organizer Name : Akshay Aher</label><br></br>
                                                        <label className='form-lable'>Start Date : 29/02/2024</label><br></br>
                                                        <label className='form-lable'>End Date : 02/03/2024</label><br></br>
                                                        <label className='form-lable'>Details :</label><br></br>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit tempora totam unde.
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn me-auto btn-outline-red" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="card">
                                    <div class="card-body">
                                        <div className='mb-2'>
                                            <h3 class="card-title"><b>Dance Function</b></h3>
                                            <label className='form-lable'>Organizer Name : Akshay Aher</label><br></br>
                                            <label className='form-lable'>Start Date : 29/02/2024</label><br></br>
                                            <label className='form-lable'>End Date : 02/03/2024</label><br></br>
                                            <label className='form-lable'>details :</label><br></br>
                                        </div>
                                        <button className="btn btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#modal-simple">
                                            View More
                                        </button>
                                        <div class="modal modal-blur fade" id="modal-simple" tabindex="-1" role="dialog" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title">Dance Function</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <label className='form-lable'>Organizer Name : Akshay Aher</label><br></br>
                                                        <label className='form-lable'>Start Date : 29/02/2024</label><br></br>
                                                        <label className='form-lable'>End Date : 02/03/2024</label><br></br>
                                                        <label className='form-lable'>Details :</label><br></br>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit tempora totam unde.
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn me-auto btn-outline-red" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="card">
                                    <div class="card-body">
                                        <div className='mb-2'>
                                            <h3 class="card-title"><b>Dance Function</b></h3>
                                            <label className='form-lable'>Organizer Name : Akshay Aher</label><br></br>
                                            <label className='form-lable'>Start Date : 29/02/2024</label><br></br>
                                            <label className='form-lable'>End Date : 02/03/2024</label><br></br>
                                            <label className='form-lable'>details :</label><br></br>
                                        </div>
                                        <button className="btn btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#modal-simple">
                                            View More
                                        </button>
                                        <div class="modal modal-blur fade" id="modal-simple" tabindex="-1" role="dialog" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title">Dance Function</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <label className='form-lable'>Organizer Name : Akshay Aher</label><br></br>
                                                        <label className='form-lable'>Start Date : 29/02/2024</label><br></br>
                                                        <label className='form-lable'>End Date : 02/03/2024</label><br></br>
                                                        <label className='form-lable'>Details :</label><br></br>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit tempora totam unde.
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn me-auto btn-outline-red" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="card">
                                    <div class="card-body">
                                        <div className='mb-2'>
                                            <h3 class="card-title"><b>Dance Function</b></h3>
                                            <label className='form-lable'>Organizer Name : Akshay Aher</label><br></br>
                                            <label className='form-lable'>Start Date : 29/02/2024</label><br></br>
                                            <label className='form-lable'>End Date : 02/03/2024</label><br></br>
                                            <label className='form-lable'>details :</label><br></br>
                                        </div>
                                        <button className="btn btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#modal-simple">
                                            View More
                                        </button>
                                        <div class="modal modal-blur fade" id="modal-simple" tabindex="-1" role="dialog" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title">Dance Function</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <label className='form-lable'>Organizer Name : Akshay Aher</label><br></br>
                                                        <label className='form-lable'>Start Date : 29/02/2024</label><br></br>
                                                        <label className='form-lable'>End Date : 02/03/2024</label><br></br>
                                                        <label className='form-lable'>Details :</label><br></br>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit tempora totam unde.
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn me-auto btn-outline-red" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="card">
                                    <div class="card-body">
                                        <div className='mb-2'>
                                            <h3 class="card-title"><b>Dance Function</b></h3>
                                            <label className='form-lable'>Organizer Name : Akshay Aher</label><br></br>
                                            <label className='form-lable'>Start Date : 29/02/2024</label><br></br>
                                            <label className='form-lable'>End Date : 02/03/2024</label><br></br>
                                            <label className='form-lable'>details :</label><br></br>
                                        </div>
                                        <button className="btn btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#modal-simple">
                                            View More
                                        </button>
                                        <div class="modal modal-blur fade" id="modal-simple" tabindex="-1" role="dialog" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title">Dance Function</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <label className='form-lable'>Organizer Name : Akshay Aher</label><br></br>
                                                        <label className='form-lable'>Start Date : 29/02/2024</label><br></br>
                                                        <label className='form-lable'>End Date : 02/03/2024</label><br></br>
                                                        <label className='form-lable'>Details :</label><br></br>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit tempora totam unde.
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn me-auto btn-outline-red" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="card">
                                    <div class="card-body">
                                        <div className='mb-2'>
                                            <h3 class="card-title"><b>Dance Function</b></h3>
                                            <label className='form-lable'>Organizer Name : Akshay Aher</label><br></br>
                                            <label className='form-lable'>Start Date : 29/02/2024</label><br></br>
                                            <label className='form-lable'>End Date : 02/03/2024</label><br></br>
                                            <label className='form-lable'>details :</label><br></br>
                                        </div>
                                        <button className="btn btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#modal-simple">
                                            View More
                                        </button>
                                        <div class="modal modal-blur fade" id="modal-simple" tabindex="-1" role="dialog" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title">Dance Function</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <label className='form-lable'>Organizer Name : Akshay Aher</label><br></br>
                                                        <label className='form-lable'>Start Date : 29/02/2024</label><br></br>
                                                        <label className='form-lable'>End Date : 02/03/2024</label><br></br>
                                                        <label className='form-lable'>Details :</label><br></br>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit tempora totam unde.
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn me-auto btn-outline-red" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="card">
                                    <div class="card-body">
                                        <div className='mb-2'>
                                            <h3 class="card-title"><b>Dance Function</b></h3>
                                            <label className='form-lable'>Organizer Name : Akshay Aher</label><br></br>
                                            <label className='form-lable'>Start Date : 29/02/2024</label><br></br>
                                            <label className='form-lable'>End Date : 02/03/2024</label><br></br>
                                            <label className='form-lable'>details :</label><br></br>
                                        </div>
                                        <button className="btn btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#modal-simple">
                                            View More
                                        </button>
                                        <div class="modal modal-blur fade" id="modal-simple" tabindex="-1" role="dialog" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title">Dance Function</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <label className='form-lable'>Organizer Name : Akshay Aher</label><br></br>
                                                        <label className='form-lable'>Start Date : 29/02/2024</label><br></br>
                                                        <label className='form-lable'>End Date : 02/03/2024</label><br></br>
                                                        <label className='form-lable'>Details :</label><br></br>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit tempora totam unde.
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn me-auto btn-outline-red" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="card">
                                    <div class="card-body">
                                        <div className='mb-2'>
                                            <h3 class="card-title"><b>Dance Function</b></h3>
                                            <label className='form-lable'>Organizer Name : Akshay Aher</label><br></br>
                                            <label className='form-lable'>Start Date : 29/02/2024</label><br></br>
                                            <label className='form-lable'>End Date : 02/03/2024</label><br></br>
                                            <label className='form-lable'>details :</label><br></br>
                                        </div>
                                        <button className="btn btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#modal-simple">
                                            View More
                                        </button>
                                        <div class="modal modal-blur fade" id="modal-simple" tabindex="-1" role="dialog" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title">Dance Function</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <label className='form-lable'>Organizer Name : Akshay Aher</label><br></br>
                                                        <label className='form-lable'>Start Date : 29/02/2024</label><br></br>
                                                        <label className='form-lable'>End Date : 02/03/2024</label><br></br>
                                                        <label className='form-lable'>Details :</label><br></br>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit tempora totam unde.
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn me-auto btn-outline-red" data-bs-dismiss="modal">Close</button>
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
            }
        />
    )
}

export default FunctionShowCards