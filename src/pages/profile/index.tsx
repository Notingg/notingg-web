import { Col, Container, Row } from 'react-bootstrap';
import { Layout } from '../../components/layout';
import * as S from '../../styles/pages/profile/styles';

export default function Profile() {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <S.Title>Profile</S.Title>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
