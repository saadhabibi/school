// pages/addSchool.jsx
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import * as yup from 'yup';

const schema = yup.object().shape({
  schoolName: yup.string().required('School Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  image: yup.mixed().required('Image is required'),
});

const AddSchool = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission, including storing data and image.
    console.log(data);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="schoolName">
              <Form.Label>School Name</Form.Label>
              <Form.Control
                type="text"
                name="schoolName"
                placeholder="Enter school name"
                ref={register}
                isInvalid={!!errors.schoolName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.schoolName?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                ref={register}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                ref={register}
                isInvalid={!!errors.image}
              />
              <Form.Control.Feedback type="invalid">
                {errors.image?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSchool;
