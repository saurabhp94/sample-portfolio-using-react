import React, { useState, useEffect } from "react";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import Typewriter from "typewriter-effect";

const Home = () => {
    const [data, setData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoints.home, { method: "GET" });
                const res = await response.json();
                setData(res);
            } catch (err) {
                console.error("Home fetch Error", err);
            }
        };
        fetchData();
    }, []);
  


    return data ? (
        <div id="/" className="home">
            <div>
            <img src={data.profilePic.source} alt="ProfilePic"/>
            </div>
            <div className="hometext">
            <h1 className="name">{data.name}</h1>
            <div className="textanimation">
                <h2 className="im">I'm</h2>
                <span>&nbsp;</span>
                <Typewriter
                    options={{
                        strings: data.roles,
                        autoStart: true,
                        loop: true
                    }}
                />
            </div>
           <div className="home-paragraph"><p>{data.paragraph}</p></div>
          
            </div>
        
        </div>
    ) : (<FallbackSpinner />)
}

export default Home