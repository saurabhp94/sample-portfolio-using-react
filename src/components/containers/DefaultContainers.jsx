import React, { useState } from "react";
import "./DefaultContainers.css?v=1.0";
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const DefaultContainers = (props) => {
  const { sectionType } = props;
  const bullets = sectionType && sectionType.bodyText ? sectionType.bodyText.split(/\r\n|\r|\n/) : [];
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const fullBullets = () => {
    return (
      bullets.map((Text, index) => {
        return (
          <ul key={index}>
            <li>{Text}</li>
          </ul>
        );
      })
    )
  }
  const twoBullets = () => {
    return (
      <ul>
        <li>{bullets[0]}</li>
        <li>{bullets[1]}....</li>
      </ul>
    );
  }
  const regularText = () => {
    return (
      <p>{bullets}</p>
    );
  }
  return (
    <div className="container">
      {sectionType?.image &&
        <img className="image"
          src={sectionType?.image}
          // onClick={handleShow}
          alt="ProjectImage" />}
      <h3>{sectionType.title}</h3>
      {sectionType.bodyText && (
        bullets.length > 2 ?
          (<div className="button">
            {showMore ? fullBullets() : twoBullets()}
            <Button variant="primary" onClick={toggleShowMore}>
              {showMore ? "Show Less" : "Show More"}
            </Button>
          </div>
          ) : (
            <div className="regularText">
              {regularText()}
            </div>
          )
      )
      }
      {sectionType.links && (
        <div className="links">
          {sectionType?.links?.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                style={{ marginRight: "5px" }}
                icon={faGithub} />
              {link.text}
            </a>
          ))}
        </div>
      )}
      <div className="tags-container">
        {sectionType?.tags?.map((tag, index) => (
          <span key={index} className="badge">
            {tag}
          </span>
        ))}
      </div>
      <div className="footerUrl">
        {sectionType.credentialUrl &&
          <a
            href={sectionType?.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Verify Credential
          </a>}
      </div>
    </div>
  );
};
export default DefaultContainers;