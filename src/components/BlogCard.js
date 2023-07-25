import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <div className='col-3'>
            <div className="blog-card">
                <div className="card-images">
                    <img src="images/blog-1.jpg" className='img-fluid' alt="" />
                </div>
                <div className="blog-content">
                    <p className='date'>1 Dec, 2022</p>
                    <h5 className='title'>A beautiful sunday morning renaissance</h5>
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, maxime? Ad odit, aliquam tenetur cumque excepturi maxime autem nihil vel. Eligendi, iure vitae. Maiores, aut. Soluta ipsam iusto quos rerum.</p>
                    <Link to="/" className='button'>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard