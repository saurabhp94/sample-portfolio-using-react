import React, { useState, useEffect } from "react";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import Header from "./Header";
import VerticalTimelinecomp from "./containers/VerticalTimelinecomp";

const Experience = (props) => {
    const [data, setData] = useState(null);
    const { header } = props;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoints.experiences, { method: "GET" });
                const res = await response.json();
                setData(res);
            } catch (err) {
                console.error("Experience fetch Error", err);
            }
        };
        fetchData();
    }, []);

    return (
        data ? (
            <div id="/experience">
                <Header title={header} />
                <div className="eachSection_height">
                <VerticalTimelinecomp sectionType={data.experiences} />
                </div>
            </div>
        ) : (
            <FallbackSpinner />
        )
    );
};

export default Experience;