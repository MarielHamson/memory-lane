import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Control
            type='text'
            name='title'
            placeholder='Title' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            name='date'
            placeholder='Enter the date.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            name='place'
            placeholder='Place' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='description'
            placeholder='Describe your memory.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='text'
            name='vibe'
            placeholder='What was the vibe?' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='text'
            name='scents'
            placeholder='Any smells associated with the memory?' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='text'
            name='keywords'
            placeholder='Any keywords?' />
        </Form.Group>
        <div style={{padding: 10}}>
          <Button variant="info" type='submit'>{props.buttonText}</Button>
        </div>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;