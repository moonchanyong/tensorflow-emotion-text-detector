import React from 'react'
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";

import { TextArea } from "../components/TextArea";
import { MainEmotion } from "../components/MainEmotion";
import { SubEmotion } from "../components/SubEmotion";

export const Home = () => {
  return (
    <Container>
      <Row className="justify-content-sm-center">
        <Col style={{ marginTop: "90px" }} md={{ span: 7 }}>
          <h1 style={{ textAlign: "center" }} className="display-5">Tensorflow Test Text Detector</h1>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", marginTop: "50px" }} md={{ span: 10, offset: 1 }}>
          <TextArea />
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", marginTop: "30px" }} md={{ span: 10, offset: 1 }}>
          <Button variant="primary">
            <Spinner
              style={{ margin: "0 10px" }}
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Primary
          </Button>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", marginTop: "50px" }} md={{ span: 10, offset: 1 }}>
          <MainEmotion />
          <hr />
        </Col>
      </Row>
      <Row className="justify-content-sm-center">
        <Col style={{ textAlign: "center", marginTop: "50px" }} xs={{ span: 3 }}>
          <SubEmotion />
        </Col>
        <Col style={{ textAlign: "center", marginTop: "50px" }} xs={{ span: 3 }}>
          <SubEmotion />
        </Col>
      </Row>
      <div style={{ marginBottom: "100px" }}></div>
    </Container>
  )
}