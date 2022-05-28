import { Col, Container, Row } from 'react-bootstrap';
import { Form } from '@unform/web';
import React from 'react';
import { Layout } from '../components/layout';
import * as S from './styles';
import { Input } from '../components/communs/Input';
import { SearchInput } from '../components/communs/SearchInput';

type Data = {
  search: string;
};

export default function Home() {
  const formRef = React.useRef(null);

  const handleSubmit = (data: Data) => {
    console.log(data);
  };

  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <S.Title>Home</S.Title>
          </Col>
        </Row>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="input" label="input" />
          <SearchInput
            onSubmit={() => console.log('pesquisando...')}
            iconPosition="left"
            name="searchInput"
          />
        </Form>
      </Container>
    </Layout>
  );
}
