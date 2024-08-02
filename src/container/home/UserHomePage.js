import React from 'react'
import UIAppBody from '../../components/ui/UIAppBody'
import { uiRoutes } from '../../routes/ui/uiRoutes'
import { Link } from 'react-router-dom'

const UserHomePage = () => {
  return (
    <UIAppBody
      loading={false}
      heading={"Home"}
      content={

        <div className=''>
          <section className='nav-bg-color'>
            <div className='container'>
              <div className=' row'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <h1 className=' nav-text-style text-color-p'> Enterprise-ready. Reach out for a custom quote.Enterprise-ready. Reach out for a custom quote.</h1>
                  <p className='text-color-p'>Tabler is a perfect solution if you want to create an interface
                    which is not only user-friendly but also fully responsive.
                    Thanks to the big choice of ready-made components, you can customize your design and adapt
                    it to the needs of even the most demanding users. On top of that, Tabler is an open source solution,
                    continuously developed and improved by the open source community.</p>
                  <h3 className='mini-header-h3'>
                    <b>  Our Vision</b>
                  </h3>

                  <ul className='color-text-wh'>
                    <li className='mt-1'> <b>Reach out for a custom quote.Enterprise-ready </b></li>
                    <li className='mt-1'> <b>On top of that, Tabler is an open source solution </b></li>
                    <li className='mt-1'> <b> which is not only user-friendly but also fully responsive. </b></li>
                  </ul>

                  <div className='text-center mt-4 mb-4'>
                    <Link to={uiRoutes.register} className='btn btn-light '><b>Register Now</b></Link>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='m-4'>
                    <div id="carousel-captions" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img class="d-block w-100" alt="" src="./static/photos/coffee-on-a-table-with-other-items.jpg" />
                          <div class="carousel-caption-background d-none d-md-block"></div>
                          <div class="carousel-caption d-none d-md-block">
                            <h3>Slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" alt="" src="./static/photos/young-entrepreneur-working-from-a-modern-cafe-2.jpg" />
                          <div class="carousel-caption-background d-none d-md-block"></div>
                          <div class="carousel-caption d-none d-md-block">
                            <h3>Slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" alt="" src="./static/photos/soft-photo-of-woman-on-the-bed-with-the-book-and-cup-of-coffee-in-hands.jpg" />
                          <div class="carousel-caption-background d-none d-md-block"></div>
                          <div class="carousel-caption d-none d-md-block">
                            <h3>Slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" alt="" src="./static/photos/fairy-lights-at-the-beach-in-bulgaria.jpg" />
                          <div class="carousel-caption-background d-none d-md-block"></div>
                          <div class="carousel-caption d-none d-md-block">
                            <h3>Slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" alt="" src="./static/photos/woman-working-on-laptop-at-home-office.jpg" />
                          <div class="carousel-caption-background d-none d-md-block"></div>
                          <div class="carousel-caption d-none d-md-block">
                            <h3>Slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </div>
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#carousel-captions" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carousel-captions" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='mt-2'>
            <div className='card'>
              <div className='container'>
              <h2 className='text-center card-heading-h2 mt-4'> This features that help you </h2>
              <div className='card mt-2'>
              <div className='row '>              
                <div className='col-md-6 col-sm-6 mt-6 '>
                  <div className='m-3'>
                  <h4 className=' card-heading-h2'>Heading 1</h4>
                  <hr className='my-15'/>
                  <p>Tabler is a perfect solution if you want to create an interface
                    which is not only user-friendly but also fully responsive.
                    Thanks to the big choice of ready-made components, you can customize your design</p>
                    </div>
                </div>
                <div className='col-md-6 col-sm-6'>
                      <div class=" m-3 ">
                        <div class="carousel-item active">
                          <img class="d-block w-100" alt="" src="https://img-corp.com/images/about/Financial-101.png" />
                        </div>
                    </div>
                </div>
              </div>
              </div>
              <div className='card mt-2'>
              <div className='row'>
                
                <div className='col-md-6 col-sm-6'>
                      <div class=" m-3 ">
                        <div class="">
                          <img class="d-block w-100" alt="" src="https://img-corp.com/images/about/Financial-101.png" />
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-sm-6 mt-6 '>
                  <div className='m-3'>
                  <h4 className=' card-heading-h2'>Heading 2</h4>
                  <hr className='my-15'/>
                  <p>Tabler is a perfect solution if you want to create an interface
                    which is not only user-friendly but also fully responsive.
                    Thanks to the big choice of ready-made components, you can customize your design</p>
                    </div>
                </div>
              </div>
              </div>
              <div className='card mt-2'>
              <div className='row'>
                <div className='col-md-6 col-sm-6 mt-6 '>
                  <div className='m-3'>
                  <h4 className=' card-heading-h2'>Heading 3</h4>
                  <hr className='my-15'/>
                  <p>Tabler is a perfect solution if you want to create an interface
                    which is not only user-friendly but also fully responsive.
                    Thanks to the big choice of ready-made components, you can customize your design</p>
                    </div>
                </div>
                <div className='col-md-6 col-sm-6'>
                      <div class=" m-3 ">
                        <div class="carousel-item active">
                          <img class="d-block w-100" alt="" src="https://img-corp.com/images/about/Financial-101.png" />
                        </div>
                    </div>
                </div>
              </div>
              </div>
             
              </div>
            </div>
          </section>
          <section className='nav-bg-color'>
            <div className='container'>
              <div className=' row'>
                
                  <h1 className=' nav-text-style text-center text-color-p'> Enterprise-ready. Reach out for a custom quote.Enterprise-ready. Reach out for a custom quote.</h1>
                  <div className='text-center mt-4 mb-4'>
                  <Link to={uiRoutes.register} className='btn btn-light '><b>Register Now</b></Link>
                  </div>
               
                
              </div>
            </div>
          </section>
          <section>

          </section>
        </div>
      }
    />
  )
}

export default UserHomePage