import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>                                     {/* ctrl+d */}
        <h2>NewsMonkey - Top Headlines</h2>
        <div className='row'>
          <div className='col-md-4'>
          <NewsItem title="myTitle" description="mydesc" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg"/>  
          </div>                                    
          <div className='col-md-4'>
          <NewsItem title="myTitle" description="mydesc" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg"/>  
          </div>
          <div className='col-md-4'>
          <NewsItem title="myTitle" description="mydesc" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg"/>  
          </div>
        </div>
      </div>
    )
  }
}

export default News
