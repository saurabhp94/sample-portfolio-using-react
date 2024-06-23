import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '../../theme/ThemeContext.jsx'; // Adjusted import path


const VerticalTimelinecomp = (props) => {
    const { sectionType } = props;
    const [showMoreStates, setShowMoreStates] = useState({});
    const { theme } = useTheme();

    const toggleShowMore = (itemIndex) => {
        setShowMoreStates((prevStates) => ({
            ...prevStates,
            [itemIndex]: !prevStates[itemIndex],
        }));
    };

    return (
        <VerticalTimeline
            animate={true}
            lineColor={theme.lineColor}
        >
            {sectionType?.map((item, index) => {
                const hasWorkDescription = item.workDescription && item.workDescription.length > 0;
                const showMore = showMoreStates[index] || false;

                return (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--education"
                        contentStyle={{
                            background: `${theme.tagContainerBg}`, color: `${theme.color}`,
                            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                            borderRadius: '10px'
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  #f7f7f7' }}
                        date={item?.dateText}
                        iconStyle={{ background: '#f7f7f7', color: 'black' }}
                        icon={<img src={item.Imgsrc} alt=""
                            className="vertical-timeline-element-icon" />}
                    >
                        <h3 className='vertical-timeline-element-title'>{item.cardtitle}</h3>
                        <h4 className='vertical-timeline-element-subtitle'>{item.cardsubtitle}</h4>
                        <p>{item.subtitle}</p>
                        {hasWorkDescription && showMore && (
                            <ul>
                                {item.workDescription?.map((description, index) => {
                                    return <li key={index}>{description}</li>
                                })}
                            </ul>
                        )}
                        {hasWorkDescription && (
                            <button onClick={() => toggleShowMore(index)}
                                style={{ cursor: "pointer", backgroundColor: "#0f456b", color: "white", padding: "5px 10px", fontWeight: "bold", borderRadius: "5px", marginTop: "10px" }}>
                                {showMore ? '- Collapse' : '+ Expand'}
                            </button>
                        )}
                    </VerticalTimelineElement>
                )
            })}
        </VerticalTimeline>
    );
};

export default VerticalTimelinecomp;