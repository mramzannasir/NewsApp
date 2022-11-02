import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsApp = (props) => {
  const [articles, setarticles] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResult, settotalResult] = useState(0);
  // document.title = `${props.category} - My News`;

  const update = async () => {
    props.setProgress(10);
    const url = `https:newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    setarticles(parsedData.articles);
    settotalResult(parsedData.totalResult);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    update();
    // eslint-disable-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https:newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setpage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setarticles(articles.concat(parsedData.articles));
    settotalResult(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <div className="my-3">
        <h2 className="text-2xl text-zinc-800 font-semibold text-center ">
          Hot News - {props.category}
        </h2>
        {Loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResult}
          loader={<Spinner />}
        >
          <div className="grid grid-cols-4 gap-4 px-8">
            {articles.map((element) => {
              return (
                <div key={element.url}>
                  {/* if image is not exist then use !imgurl?"https":imgUrl */}
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default NewsApp;

NewsApp.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "technology",
};

NewsApp.PropType = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
