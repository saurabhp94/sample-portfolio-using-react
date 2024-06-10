import React, { useState, useEffect } from "react";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import Header from "./Header";
import VerticalTimelinecomp from "./containers/VerticalTimelinecomp";

const Education = (props) => {
    const [data, setData] = useState(null);
    const { header } = props;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoints.education, { method: "GET" });
                const res = await response.json();
                setData(res);
            } catch (err) {
                console.error("Education fetch Error", err);
            }
        };
        fetchData();
    }, []);

    return (
        data ? (
            <div id="/education">
                <Header title={header} />
                <VerticalTimelinecomp sectionType={data.education} />
            </div>

        ) : <FallbackSpinner />
    );
};

export default Education;
