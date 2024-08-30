import React from 'react'
import style from './NewsItems.css'
import filler from './Fillerimg.jpg'
 const NewsItem =(props)=> { 
    let {title,description,imgUrl,newsUrl,author,date,source}=props;
    return(
      <>
      <div className='my-3' style={style} >
        <div className="card py-2 mt-4" style={{backgroundColor:'#333333'}}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger fs-6" style={{zIndex:'1',left:'90%'}}>
        {source}</span>
        <div className='card-image px-2'>
        {imgUrl?(<img src={imgUrl} className="card-img-top" alt="No Img found!"/>):(<img src={filler} className=" card-img-top" alt='no img found'/>)}
        </div>
        <div className="card-body  d-flex flex-column">
            <h5 className="card-title fs-3">{title}</h5>
            <p className="card-text  fs-5"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-success py-2 fs-5 fw-medium mt-auto">Read More</a>
        </div>
        </div>
      </div>

      </>
    )
  }

export default  NewsItem