// pages/showSchools.jsx
import { Container, Row, Col, Card } from 'react-bootstrap';

const schools = [
  {
    id: 1,
    name: 'Example School 1',
    address: '123 Main Street',
    city: 'Example City',
    image: '/images/school1.jpg', // Replace with actual image path
  },
  {
    id: 2,
    name: 'Example School 2',
    address: '456 Oak Avenue',
    city: 'Example City',
    image: '/images/school2.jpg', // Replace with actual image path
  },
  // Add more schools as needed
];

const ShowSchools = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        {schools.map((school) => (
          <Col key={school.id} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Img variant="top" src={school.image} alt={school.name} />
              <Card.Body>
                <Card.Title>{school.name}</Card.Title>
                <Card.Text>
                  <strong>Address:</strong> {school.address}, {school.city}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ShowSchools;
