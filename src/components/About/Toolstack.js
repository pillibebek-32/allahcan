import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiWebstorm,
    SiClion,
    SiVercel,
    SiWindows11,
} from "react-icons/si";

import {
    DiDebian,
} from "react-icons/di";

function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiWindows11/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWebstorm/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiDebian/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiClion/>
            </Col>
        </Row>
    );
}

export default Toolstack;
