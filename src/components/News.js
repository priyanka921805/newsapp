  import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


// {alt+shift+click} = for multiple cursers.

export class News extends Component {                                                  
  static defaultProps = {
    country: 'in',
    pageSize: 4
  }

  static defaultProps = {
   country: PropTypes.string,
   pageSize: PropTypes
  }


  constructor(){
    super();
      this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }

  async componentDidMount(){
    console.log("cdn");
    let url =`https://newsapi.org/v2/everything?country=${this.props.country}&domains=wsj.com&apiKey=580f047e7ec44e39bfee24ff1a006b2a&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
    handlePrevClick = async ()=>{
      console.log("Previous");
      let url =`https://newsapi.org/v2/everything?country=${this.props.country}&domains=wsj.com&apiKey=580f047e7ec44e39bfee24ff1a006b2a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
      })
    }

    handleNextClick = async ()=>{
        console.log("Next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
        let url =`https://newsapi.org/v2/everything?country=${this.props.country}&domains=wsj.com&apiKey=580f047e7ec44e39bfee24ff1a006b2a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }
  render() {
    return (
      <div className='container my-3'>                                     {/* ctrl+d */}
        <h3 className='text-center'>NewsMonkey - Top Headlines</h3>
        {this.state.loading && <Spinner />}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-4'key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/> 
            {/* // <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>   */}
            </div> 
          })}                                                     
        </div>f
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next&rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
