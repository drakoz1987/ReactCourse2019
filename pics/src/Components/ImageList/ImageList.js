import React from 'react';
import './ImageList.css';
//import masonry from 'masonry-layout';

const ImageList = (props) => {
  return (
      <div className='img-container'>
          <h1>Your Search Found {props.imageList.length}</h1>
          <div className='image-gallery'>
              {props.imageList.map((item)=>{
                  return <img className='grid-element' alt={item.description} key={item.id} src={item.urls.regular} />
              })}
          </div>
      </div>)
};

export default ImageList;
