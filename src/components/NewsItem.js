import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
            <div style={{
                display:"flex",
                justifyContent:'flex-end',
                position:'absolute',
                right:'0'
            }}>
                  
        <span class=" badge rounded-pill bg-danger" >
                {source}
            </span> 
            </div>
          <img
            src={
              !imageUrl
                ? "https://cache.careers360.mobi/media/article_images/2022/2/7/cbse-class-10-12-term-1-result-cbseresults-nic-in.jpeg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark btn-sm "
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
