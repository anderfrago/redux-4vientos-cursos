import React from "react";
import { Redirect } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";

import PropTypes from "prop-types";
import { Alert, Form, Col } from "react-bootstrap";

class AddCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: "",
      error: "",
      newcourse: {
        id: 0,
        name: "",
        description: "",
        level: "Nivel 3 Grado superior",
        type: "Informática y comunicaciones",
        duration: "",
      },
    };
    this.onChangeName.bind(this);
    this.onChangeDescription.bind(this);
    this.onChangeLevel.bind(this);
    this.onChangeType.bind(this);
    this.onChangeDuration.bind(this);
    this.handleSubmit.bind(this);
  }

  onChangeName(event) {
    this.setState({
      newcourse: {
        ...this.state.newcourse,
        name: event.target.value,
      },
    });
  }
  onChangeDescription(event) {
    this.setState({
      newcourse: {
        ...this.state.newcourse,
        description: event.target.value,
      },
    });
  }
  onChangeLevel(event) {
    this.setState({
      newcourse: {
        ...this.state.newcourse,
        level: event.target.value,
      },
    });
  }
  onChangeType(event) {
    this.setState({
      newcourse: {
        ...this.state.newcourse,
        type: event.target.value,
      },
    });
  }
  onChangeDuration(event) {
    this.setState({
      newcourse: {
        ...this.state.newcourse,
        duration: event.target.value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      redirect: "/courses",
      newcourse: {
        ...this.state.newcourse,
        id: this.props.courses.length + 1,
      },
    });
    this.props.actions.saveCourse(this.state.newcourse);
  }

  render() {
    return (
      <Col>
        <>
          {this.state.error ? (
            <Alert variant="info">this.state.error</Alert>
          ) : (
            this.state.redirect !== "" && <Redirect to={this.state.redirect} />
          )}{" "}
        </>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            if (
              !this.state.newcourse.name.trim() ||
              !this.state.newcourse.description.trim() ||
              !this.state.newcourse.level.trim() ||
              !this.state.newcourse.type.trim() ||
              !this.state.newcourse.duration.trim()
            ) {
              return;
            }
            this.handleSubmit(e);
          }}
        >
          <Form.Group controlId="formname">
            <Form.Label>Course Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={(event) => this.onChangeName(event)}
              placeholder="Enter course name"
            />
          </Form.Group>
          <Form.Group controlId="formdescription">
            <Form.Label>Course Description</Form.Label>
            <Form.Control
              type="text"
              value={this.state.description}
              onChange={(event) => this.onChangeDescription(event)}
              placeholder="Enter description"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Course level</Form.Label>
            <Form.Control
              as="select"
              value={this.state.level}
              onChange={(event) => this.onChangeLevel(event)}
            >
              <option>Nivel 3 Grado superior</option>
              <option>Nivel 2 Grado medio</option>
              <option>Nivel 1 Formación Profesional Especial</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Course type</Form.Label>
            <Form.Control
              as="select"
              value={this.state.type}
              onChange={(event) => this.onChangeType(event)}
            >
              <option>Informática y comunicaciones</option>
              <option>Comercio y marketing</option>
              <option>Administración y gestión</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formduration">
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type="text"
              placeholder="Duration"
              value={this.state.duration}
              onChange={(event) => this.onChangeDuration(event)}
            />
          </Form.Group>

          <input className="btn btn-primary" type="submit" value="Add Course" />
        </Form>
      </Col>
    );
  }
}

AddCourse.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
