import React, { useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState} from 'react';


const News=(props)=> {

  const[articles,setArticles]=useState([]);
  const[loading,setLoading]=useState(true);
  const[page,setPage]=useState(1);
  const[totalResults,setTotalresults]=useState(0);
  const capitalizeFirstLetter=(string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

 
    
    const componentDidMount = async ()=>{
      props.setProgress(0);
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d54c5f0d057944d587d731e75aaf94c9&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data= await fetch(url);
      let parseData= await data.json();
      setArticles(parseData.articles);
      setTotalresults(parseData.totalResults);
      setLoading(false);
      props.setProgress(100);
    }
    
    useEffect(()=>{
      componentDidMount();
      document.title= `News AI - ${capitalizeFirstLetter(props.category)}` 
      // eslint-disable-next-line
      },[])
  
  /*   const handlePrevClick=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d54c5f0d057944d587d731e75aaf94c9&page=${page}&pageSize=${props.pageSize}`;
      loading(true);
      let data= await fetch(url);
      let parseData= await data.json();
      console.log(parseData);
      setArticles(parseData.articles);
      setTotalresults(parseData.totalResults);
      setLoading(false);
      setPage(page-1)
    }
    const handleNextClick=async()=>{
      if(!(page + 1 > Math.ceil(totalResults/props.pageSize))){
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d54c5f0d057944d587d731e75aaf94c9&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data= await fetch(url);
      let parseData= await data.json();
      console.log(parseData);
      setArticles(parseData.articles);
      setTotalresults(parseData.totalResults);
      setLoading(false);
      setPage(page+1)
      }
    } */

    const fetchMoreData=async()=>{
      setPage(page + 1 )
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d54c5f0d057944d587d731e75aaf94c9&page=${page+1}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data= await fetch(url);
      let parseData= await data.json();
      setArticles(articles.concat(parseData.articles))
      setTotalresults(parseData.totalResults);
      setLoading(false);
    }
    console.log(articles.length);
    return (
    <>
        <h1 className='text-center py-4' style={{marginTop:'80px',fontSize:'60px'}}>News AI - Top {capitalizeFirstLetter(props.category)} Headlines  </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className='container' data-bs-theme='dark'>
          <div className='row'>
           {articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
           <NewsItem  title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>           
          })}
          </div>
          </div>
        </InfiniteScroll>
      </>
    )
    }



News.defaultProps={
  country:'in',
  pageSize:6,
  category:'general',
  totalResults:0
}

News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}

export default News