import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Main() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="text-center">
          <h3>My Bio</h3>
        </Row>
        <Row className="p-3">
          <Col>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            autem totam provident ut sapiente hic suscipit eos ex, porro
            quibusdam, officia in nostrum repellendus, aspernatur asperiores
            laboriosam optio illo ea.
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
