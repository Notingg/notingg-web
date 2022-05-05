import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "../components/layout";
import * as S from "./styles";

export default function Home() {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <S.Title>Home</S.Title>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
