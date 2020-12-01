import React from 'react';

const TopTwentyItem = ({title,artist,imageURL,chartPos,recordLabel,itunesURL}) => {

    return(
        <div className='list-item' id={`song_${chartPos}`}>
            <div className="img-box">
                <img src={imageURL} alt={`cover art for ${title} by ${artist}`} />
            </div>
            <div className="text-box">
             <a href={itunesURL}>
                <h3>{title}</h3>
                <h4>{artist}</h4>
                <h6>{recordLabel}</h6>
             </a>
            </div>  
        </div>
    )
}

export default TopTwentyItem;