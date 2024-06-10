import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Contact = (props) => {
    const { header } = props;
    return (
        <div id="/contact">
            <Header title={header} />
            <div className="contact-container">
                
                <form className="contact-form" action="">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" required/>
                    <select name="enquiry" id="enquiry">
                        <option>Freelance Project Proposal</option>
                        <option>General enquiry</option>
                        <option>Feedback</option>
                        <option>Hire Me</option>
                    </select>
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="5"
                        placeholder="Message"
                    ></textarea>
                    <button 
                    style={{ cursor: "pointer", 
                    backgroundColor: "black", color: "white", 
                    padding: "10px 20px", 
                    fontWeight: "bold", 
                    margin:"0px",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "small",
                    justifyItems: "center" }} type="submit">Send  Message</button>
                </form>
                <div>
                <div>
                <p className="contact-text">
                    I am always interested in discussing new projects or
                    opportunities. If you have any questions or would like to get in touch, please feel free to reach out to me.
                </p>
                </div>

                <div className="contact-links">
                    
                    <a
                        className="contact-link"
                        href="https://github.com/saurabhp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub}
                        style={{ color: "black" }}/>
                    </a>
                    
                    <a
                        className="contact-link"
                        href="https://www.linkedin.com/in/saurabh-patel-1a9b411a3/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>

                    <a
                        className="contact-link"
                        href="mailto:abc@example.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faEnvelope}
                        style={{ color: "black" }}/>
                    </a>
                </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;