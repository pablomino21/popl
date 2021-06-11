import React, { useState } from 'react'
import { Accordion, Card, Button, Form } from 'react-bootstrap'
import loogoo from '../assets/images/loogoo.png';

export default () => {
  const [accepted, setAccepted] = useState(false)
  return (
    <div className="py-5">
      <div className="c-width mx-auto text-left">
        <div className="headwa">
        <img src={loogoo} />
        <p>Back up your wallet now</p>
        </div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Privacy Policy
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis magni consequatur laborum quis dicta esse porro ut ducimus? Ducimus ullam rerum corporis vitae temporibus facilis, vel optio a aut suscipit.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Terms of Service
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis magni consequatur laborum quis dicta esse porro ut ducimus? Ducimus ullam rerum corporis vitae temporibus facilis, vel optio a aut suscipit.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Form className="mt-5">
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check onChange={e => setAccepted(e.target.checked)} type="checkbox" label="I've read and accept Privacy Policy and Terms of Service" />
          </Form.Group>
        </Form>
        <div className="d-flex justify-content-center mt-5">
          <Button disabled={!accepted}>Continue</Button>
        </div>
      </div>
    </div>
  )
  }