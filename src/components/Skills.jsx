import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import DefaultContainers from "./containers/DefaultContainers";
const Skills = (props) => {
    const [data, setData] = useState(null);
    const { header } = props;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoints.skills, { method: "GET" });
                const res = await response.json();
                setData(res);
            } catch (err) {
                console.error("Skills fetch Error", err);
            }
        };
        fetchData();
    }, []);

    return data ? (
        <div id="/skills">
            <Header title={header} />
            <div className="test">
                <div className="parent-container">
                    {data && data.skills.map((skill, index) => {
                        return (
                            <DefaultContainers
                                key={index}
                                sectionType={skill}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    ) : (<FallbackSpinner />);
};

Skills.propTypes = {
    header: PropTypes.string.isRequired,
};

export default Skills