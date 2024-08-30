import React, { useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import style from './News.css';
import fillerImage from './headerimg-filler.png';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalresults] = useState(0);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const componentDidMount = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/everything?q=${props.category}%27&apiKey=e37140ff208240e7ba20626b29f30df2&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles);
    setTotalresults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    componentDidMount();
    document.title = `News AI - ${capitalizeFirstLetter(props.category)}`;
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/everything?q=${props.category}%27&apiKey=e37140ff208240e7ba20626b29f30df2&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalresults(parseData.totalResults);
    setLoading(false);
  };
  console.log(articles.length);
  return (
    <> 
      <div className="header-img " style={style}>
      {articles.length > 0 && (
          <img
            src={articles[0].urlToImage || fillerImage}
            alt="First News"
          />
        )}
      </div>
      <h1
        className="text-center py-2"
        style={{ marginTop: "40px", fontSize: "60px" }}
      >
        News AI - Top {capitalizeFirstLetter(props.category)} Headlines{" "}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container" data-bs-theme="dark">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
  totalResults: 0,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
