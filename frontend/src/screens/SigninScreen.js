import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet-async";
import Button from "react-bootstrap/Button";

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectInURL = new URLSearchParams(search).get("redirect"); //redirectInURL sra value-n linelu e /shipping
  const redirect = redirectInURL ? redirectInURL : "/"; //

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required></Form.Control>
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New costumer ? {""}
          <Link to={`/signup?redirect=${redirect}`}>Create Your Account</Link>
        </div>
      </Form>
    </Container>
  );
}

//className="my-3" --- margin from top and button = 3 rem
//Form.Control --- creates an input
//className="mb-3" --- vor inputneri mej taracutyun lini
