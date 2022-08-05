import React from "react";

const ArticleTitle = ({ children }) => {
  return (
    <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  )
}

export default ArticleTitle;