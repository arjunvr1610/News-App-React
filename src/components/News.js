import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = `${capitalizeFirstLetter(props.category)} - Geo News`

  //capitalize only the first letter of the string. 
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const loadNews = async() => {
    props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    let data = await fetch(url)
    props.setProgress(30)
    let parsedData = await data.json()
    props.setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    loadNews();
  }, [])
  

  const fetchMoreData = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page + 1)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

    console.log(totalResults)
    console.log(articles.length)
    return (
      <>
        <h1 className='text-center' style={{marginTop: '90px'}}>Geo News - Top {capitalizeFirstLetter(props.category)} Headlines.</h1>
        {loading && <Loader/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loader/>}
        >
          <div className='container'>
          <div className='row my-4'>
            {articles.map((elements) => {
              return(
                <div className="col-md-4" key={elements.url}>
                    <NewsItem 
                      title={elements.title?elements.title:""} 
                      description={elements.description?elements.description:""} 
                      imageUrl={!elements.urlToImage?"/default-image_600.png":elements.urlToImage} 
                      newsUrl={elements.url}
                      author={elements.author}
                      time={elements.publishedAt}
                      source={elements.source.name}
                    />
                </div>  
              ) 
            })}
          </div>
          </div>
        </InfiniteScroll>
      </>
    
    )
}

News.defaultProps = {
  pageSize: 9,
  country: "in",
  category: "general"
}

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
}

export default News
