import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
const ProductCard = (props) => {
    const { grid } = props
    let location = useLocation()
    return (
        <>
            <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
                <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src="images/wish.svg" alt="wishlist" />
                        </Link>
                    </div>
                    <div className="product-img">
                        <img src="images/watch.jpg" className='img-fluid' alt="product_image" />
                    </div>
                    <div className="product-detail">
                        <h6 className='brand'>Havels</h6>
                        <h5 className="product-title">
                            Kids headphone bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value='4'
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block":"d-none"}`}> Repellendus ipsam laborum dicta nostrum ullam cum natus! Similique quo at  dolor sit que voluptatem eaque quisquam labore? Odit, perferendis!</p>
                        <p className="price">$100.00</p>

                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src="images/prodcompare.svg" alt="add card" />
                            </Link>
                            <Link>
                                <img src="images/view.svg" alt="add card" />
                            </Link>
                            <Link>
                                <img src="images/add-cart.svg" alt="add card" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
                <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src="images/wish.svg" alt="wishlist" />
                        </Link>
                    </div>
                    <div className="product-img">
                        <img src="images/watch.jpg" className='img-fluid' alt="product_image" />
                    </div>
                    <div className="product-detail">
                        <h6 className='brand'>Havels</h6>
                        <h5 className="product-title">
                            Kids headphone bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value='4'
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block":"d-none"}`}> Repellendus ipsam laborum dicta nostrum ullam cum natus! Similique quo at  dolor sit que voluptatem eaque quisquam labore? Odit, perferendis!</p>
                        <p className="price">$100.00</p>

                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src="images/prodcompare.svg" alt="add card" />
                            </Link>
                            <Link>
                                <img src="images/view.svg" alt="add card" />
                            </Link>
                            <Link>
                                <img src="images/add-cart.svg" alt="add card" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard