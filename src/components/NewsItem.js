import React, { Component } from 'react'

const NewsItem = (props) => {
  
    let {title, description, imageUrl, newsUrl, author, time, source} = props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}<span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '90%'}}>
                  {source}
                  <span className="visually-hidden">unread messages</span>
                </span></h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(time).toTimeString()}</small></p>
                <a href={newsUrl} className="btn btn-sm btn-primary">Details</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem
