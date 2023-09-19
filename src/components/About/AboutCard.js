import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                            Greetings! I am <span className="purple">Alper Uğur Şenol </span>
                        from <span className="purple"> Ankara, Türkiye.</span>
                        <br/> I am a self-taught Software Developer.
                        <br/>
                        <br/>
                            Additionally, I am currently enrolled in CISCO Academy as a DevNet Professional.
                        <br/>
                        <br/>
                        <br/>
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                        Playing Chess & Video Games
                    </li>
                    <li className="about-activity">
                        Writing
                    </li>
                    <li className="about-activity">
                        Travelling
                    </li>
                </ul>

                <p style={{color: "rgb(155 126 172)"}}>
                    "I like chess and software for the same reason. No luck is involved in both."{" "}
                </p>
                <footer className="blockquote-footer">Alper</footer>
            </blockquote>
        </Card.Body>
</Card>
)
    ;
}

export default AboutCard;
