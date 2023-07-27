import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
const ProductCard = () => {
    return (
        <div className='col-3'>
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
                    <p className="price">$100.00</p>
                    <ReactStars
                        count={5}
                        size={24}
                        value='4'
                        edit={false}
                        activeColor="#ffd700"
                    />,
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
    )
}

export default ProductCard