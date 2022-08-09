import React from "react";

const ArticleTitle = ({ children }) => {
  return (
    <h1 className='transition duration-300 text-center cursor-pointer 
      mb-8 hover:text-pink-600 text-3xl font-semibold'>
      {children}
    </h1>
  )
}

export default ArticleTitle;