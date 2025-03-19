import React from 'react'

const NewsItem = ({title, urlToImage, description, author, url, category}) => {
  return (
    <> 
      <div className="card mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px"}}>
    <img src={urlToImage} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description?description.slice(0,90):"No content"}</p>
      <span className="badge text-bg-dark mb-3">{author}</span>
      <br />
      <a href={url} className="btn btn-primary">Read More...</a>
    </div>
  </div>
  </>
  )
}

export default NewsItem