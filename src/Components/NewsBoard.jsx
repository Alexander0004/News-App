import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticle();
  }, [category]);
  const fetchArticle = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    console.log(res);
    setArticles(res.data.articles);
  };
  return (
    <>
      <h2 className="text-center">
        <span>Trending News</span>
      </h2>

      {articles &&
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            url={news.url}
            urlToImage={news.urlToImage}
            author={news.author}
          />
        ))}
    </>
  );
};

export default NewsBoard;
