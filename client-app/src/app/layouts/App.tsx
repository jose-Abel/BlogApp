import React, { useState, useEffect } from 'react';
import './App.css';
import { Article } from "../models/article";
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState<Article[] | undefined>([]);

  useEffect(() => {
    axios.get<Article[]>('http://localhost:5000/api/articles')
    .then(response => {
      setArticles(response.data);
    });

  }, []);

  return (
    <div>
      {articles?.map((article) => {
        return (
          <div key={article.id}>{article.title}</div>
        )
      })}
    </div>
  );
}

export default App;
