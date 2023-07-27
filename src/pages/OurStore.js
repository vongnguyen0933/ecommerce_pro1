import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";




const OurStore = () => {
    return (
        <>
            <Meta title="Our Store" />
            <BreadCrumb title="Our Store" />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Shop By Categories</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Filter By</h3>
                                <div>
                                    <h5 className="sub-title">Availablity</h5>
                                    <div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" />
                                        <label htmlFor="" className="form-check-label">
                                            In Stock (1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input"  checked/>
                                        <label htmlFor="" className="form-check-label">
                                            Out of Stock
                                        </label>
                                    </div>
                                    </div>
                                    <h5 className="sub-title">Price</h5>
                                    <div className='d-flex align-items-center gap-15'>
                                        <div class="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="From"/>
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="To"/>
                                            <label htmlFor="floatingInput">To</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" />
                                        <label htmlFor="" className="form-check-label">
                                            L (1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input"  checked/>
                                        <label htmlFor="" className="form-check-label">
                                            M (2)
                                        </label>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Product Tags</h3>
                                <div>
                                    <div className="product-tag d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Headphone
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Laptops
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Speaker
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Watch
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Random Product</h3>
                                <div>
                                    <div className="random-products mb-3 d-flex">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Watch for kid </h5>
                                            <ReactStars
                                            count={5}
                                            size={24}
                                            value='4'
                                            edit={false}
                                            activeColor="#ffd700"
                                        />,
                                        <b>$ 100.00</b>
                                        </div>
                                    </div>
                                    <div className="random-products mb-3 d-flex">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Watch for kid </h5>
                                            <ReactStars
                                            count={5}
                                            size={24}
                                            value='4'
                                            edit={false}
                                            activeColor="#ffd700"
                                        />,
                                        <b>$ 100.00</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default OurStore