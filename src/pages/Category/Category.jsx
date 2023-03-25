import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummaryCard from '../Shared/NewsSummaryCard/SummaryCard';

const Category = () => {
    const allNews = useLoaderData();
    
    
    return (
      <div>
        This category has: {allNews.length} news.
        {allNews.map((news, i) => (
          <SummaryCard key={i} news={news} />
        ))}
      </div>
    );
};

export default Category;