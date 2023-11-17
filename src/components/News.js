  import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component { 
  constructor(){
    super();
    console.log("Hello I am a constructor from News components");
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }

  async componentDidMount(){
    console.log("cdn");
    let url ="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=580f047e7ec44e39bfee24ff1a006b2a&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }



  render() {
    return (
      <div className='container my-3'>                                     {/* ctrl+d */}
        <h3>NewsMonkey - Top Headlines</h3>
        <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className='col-md-4'key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/> 
            {/* // <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>   */}
            </div> 
          })}                                                     
        </div>
        <div className='container d-flex justify-content-between'>
        <button type="button" className="btn btn-primary">&larr;Previous</button>
        <button type="button" className="btn btn-primary">Next&rarr;</button>


        </div>
      </div>
    )
  }
}

export default News
