import React, { Component } from "react";

export class DogList extends Component {
    render() {
        let { title, description, urlToImage, author } = this.props;
        return (
            <>
             <div className="my-3">
                 <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg" style={{ width: "18rem" , borderRadius:"25px" }}>
                     <img src={urlToImage} height="200rem" width="10rem" class="card-img-top" alt="..." />
                 <div className="card-body">
                      <h4 className="card-title" style={{fontFamily:"cursive",fontSize: "xx-large"}}>{title}</h4>
                   <p className="card-text">{description}...</p>
                       <p className="card-text" style={{font:"initial" , fontSize:"x-large"}}>
                           {author}
                        </p>
                        <a href="/" className="btn btn-info">
                            Add to cart
                        </a>
                    </div>
                </div>
             </div>
           
                {/* max-w-sm rounded-2xl overflow-hidden shadow-lg */}
            </>
        )
    }
}

export default DogList;
