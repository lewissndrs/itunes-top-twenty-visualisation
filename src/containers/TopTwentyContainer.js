import React, {useState, useEffect} from "react";
import TopTwentyDisplay from '../components/TopTwentyDisplay';

const TopTwentyContainer = () => {

    const[chart,setChart] = useState([]);

    const getTop20 = () => {
        console.log("pinging API...");
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then( res => res.json())
        .then( res => setChart(res.feed.entry));
    }

    useEffect( () => {
        getTop20();
    },[])

    return(
        <>
            <TopTwentyDisplay chart={chart} />
        </>
    )
}

export default TopTwentyContainer;