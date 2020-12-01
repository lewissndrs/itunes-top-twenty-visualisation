import React from 'react';
import TopTwentyItem from './TopTwentyItem';

const TopTwentyDisplay = ({chart}) => {

    const t20Nodes = chart.map( (listing, count) => {
        count ++;
        return(
            <div key={count} className="node">
            <header>{count}</header>
            <TopTwentyItem 
                title={listing['im:name'].label}
                artist={listing['im:artist'].label}
                imageURL={listing['im:image'][2].label}
                recordLabel={listing['rights'].label}
                itunesURL={listing['im:collection'].link.attributes.href}
                chartPos={count}
            />
            </div>
        )
    })

    

    return(
        <div className="top-twenty-display">
            {t20Nodes}
        </div>
    )
}

export default TopTwentyDisplay;