import React from 'react';


import img101 from "../images/Banner105.jpg"
import img102 from "../images/Banner107.jpg"

import img103 from "../images/Australia/NewZealand101.jpg"
import img104 from "../images/Australia/study-in-australia.png"

const Blogs = () => {
    const BlogDetail = [
        {img:img104,caption:"Take A Bold Step Towards Success",detail:"Get the best guidance from our counsilors,who will help you to choose the best courses for you and process you paper to ensure your admission"},
        {img:img101,caption:"Study In A Quality Environment",detail:"Get the best guidance from our counsilors,who will help you to choose the best courses for you and process you paper to ensure your admission"},
        {img:img102,caption:"Take A Bold Step Towards Success",detail:"Get the best guidance from our counsilors,who will help you to choose the best courses for you and process you paper to ensure your admission"},
        {img:img103,caption:"Take A Bold Step Towards Success",detail:"Get the best guidance from our counsilors,who will help you to choose the best courses for you and process you paper to ensure your admission"}
    ]
    return (
       <>
       <p className='blogHeader'>Recent Articles</p>
       <div className='row blogCSS'>
            {
                BlogDetail.map(blog =>{
                   return(
                    <div className="col-12 col-lg-6">
                    <BlogBox  blog={blog}/>
                </div>
                   )
                })
            }
        </div>
       </>
    );
};

const BlogBox = (props) =>{
    const {img,caption,detail} = props.blog
    return (
    <div className="card mb-3 border border-0 blogBox">
    <div className="row g-0">
    <div className="col-md-7">
    <img src={img} className="img-fluid h-100 rounded-start" alt="..."/>
    </div>
    <div className="col-md-5">
      <div className="card-body">
        <h5 className="card-title">{caption}</h5>
        <p className="card-text">{detail}</p>
        <button className='btn btn-outline-dark'>Read More</button>
      </div>
    </div>
  </div>
</div>
    )
}
export default Blogs;