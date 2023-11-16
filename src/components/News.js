  import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "David Shortell, Helen Regan",
      "title": "Israel launches ‘targeted’ military operation inside Gaza’s Al-Shifa Hospital - CNN",
      "description": "Israel said it had launched a military operation against Hamas early Wednesday morning inside Gaza’s largest hospital Al-Shifa, where thousands of Palestinians are believed to be sheltering.",
      "url": "https://www.cnn.com/2023/11/15/middleeast/shifa-hospital-gaza-idf-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231113084539-al-shifa-hospital-gv-110823.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-11-15T05:11:00Z",
      "content": "Israel said it had launched a targeted military operation against Hamas early Wednesday morning inside Gazas largest hospital Al-Shifa, where thousands of Palestinians are believed to be sheltering.\r… [+5990 chars]"
    },
    {
      "source": { "id": null, "name": "Cricket.one" },
      "author": "Debashis Sarangi",
      "title": "Mitchell Marsh & Glenn Maxwell Ruled Out; Here's Australia's Playing XI Vs England - OneCricket",
      "description": "In a massive setback for Australia, two premier all-rounders, Glenn Maxwell and Mitchell Marsh have been ruled out of the all-important World Cup clash against arch-rivals England in Ahmedabad.",
      "url": "https://cricket.one/cricket-analysis/mitchell-marsh-glenn-maxwell-ruled-out-heres-australias-playing-xi-vs-england/65432cd0de38a068f4cccff5",
      "urlToImage": "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1698899257110_Untitled design - 2023-11-02T095514.128.jpg",
      "publishedAt": "2023-11-02T05:00:00Z",
      "content": "Marsh and Maxwell have been ruled out of WC clash vs England [AP]\r\nIn a massive setback for Australia, two premier all-rounders, Glenn Maxwell and Mitchell Marsh have been ruled out of the all-import… [+1460 chars]"
    },
    {
      "source": { "id": null, "name": "BBC News" },
      "author": "https://www.facebook.com/bbcnews",
      "title": "India's Predicted XI vs Sri Lanka Cricket World Cup 2023: Can Shreyas Iyer Keep His Place? - NDTV Sports",
      "description": "Director Comey says the probe into last year's US election would assess if crimes were committed.",
      "url": "https://www.bbc.com/news/world-us-canada-39324587",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg",
      "publishedAt": "2023-11-02T02:33:41Z",
      "content": "Media caption, 'Putin hates Clinton' and other things the FBI learned about Russia\r\nFBI director James Comey has confirmed for the first time that the FBI is investigating alleged Russian interferenc… [+5942 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "SciTechDaily"
      },
      "author": null,
      "title": "Any Activity – Even Sleeping – Is Better for Your Heart Than Sitting, New Research Shows - SciTechDaily",
      "description": "Replacing sitting with as little as a few minutes of moderate exercise a day tangibly improves heart health, according to new research from UCL and the University of Sydney. The study, supported by the British Heart Foundation (BHF) and published in the Europ…",
      "url": "https://scitechdaily.com/any-activity-even-sleeping-is-better-for-your-heart-than-sitting-new-research-shows/",
      "urlToImage": "https://scitechdaily.com/images/Happy-Woman-Waking-Up-in-Bed-Good-Sleep.jpg",
      "publishedAt": "2023-11-15T04:59:36Z",
      "content": "ByUniversity College LondonNovember 14, 2023\r\nA study from UCL and the University of Sydney shows that substituting just a few minutes of daily sitting with moderate exercise can greatly benefit hear… [+8812 chars]"
    },
    {
      "source": { "id": null, "name": "Abplive.com" },
      "author": "ABP News Bureau",
      "title": "Cricket World Cup Latest Points Table, Highest Run-Scorer, Wicket-Taker List After SA vs NZ Match - ABP Live",
      "description": "Updated Points Table For Cricket World Cup 2023: India, ahead IND vs SL Cricket World Cup 2023 match, remains at number two position in ICC Cricket World Cup 2023 Points Table.",
      "url": "https://news.abplive.com/sports/cricket/cricket-world-cup-latest-points-table-highest-run-score-wicket-taker-list-ahead-india-vs-sri-lanka-match-1639882",
      "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/11/02/86f002d228e5e8333da324f3449d36ac169889182090624_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
      "publishedAt": "2023-11-02T02:24:32Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Melissa Repko",
      "title": "Target will report earnings before the bell. Here's what to expect - CNBC",
      "description": "The big-box retailer, which sells a heavier mix of clothing, home goods and impulse purchases, has been particularly squeezed by inflation.",
      "url": "https://www.cnbc.com/2023/11/15/target-tgt-earnings-q3-2023.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107257023-1686775871826-gettyimages-1491042036-dsc03042_gayitpjr.jpeg?v=1699979792&w=1920&h=1080",
      "publishedAt": "2023-11-15T05:01:01Z",
      "content": "Target will report fiscal third-quarter earnings on Wednesday, as the company tries to claw its way back from a string of disappointing results and high-profile setbacks.\r\nInvestors will listen for a… [+2094 chars]"
    }
  ]
  
constructor(){
  super();
  console.log("Hello I am a constructor from News components");
  this.state = {
    articles: this.articles,
    loading: false 
  }
}

  render() {
    return (
      <div className='container my-3'>                                     {/* ctrl+d */}
        <h3>NewsMonkey - Top Headlines</h3>
        <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className='col-md-4'key={element.url}>
            <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>  
            </div> 
          })}                                                     
        </div>
      </div>
    )
  }
}

export default News
