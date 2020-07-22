import React from "react";
import { Redirect } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";

import PropTypes from "prop-types";
import { Alert, Form, Col } from "react-bootstrap";

class EditCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: props.match.params.id,
      loading: true,
      redirect: "",
      error: "",
      updatecourse: props.courses[props.match.params.id-1]
    };

    this.onChangeName.bind(this);
    this.onChangeDescription.bind(this);
    this.onChangeLevel.bind(this);
    this.onChangeType.bind(this);
    this.onChangeDuration.bind(this);
    this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.courses
      .filter((c) => c.id === this.state.courseId)
      .map((course) =>
        this.setState({
          updatecourse: {
            id: course.id,
            name: course.name,
            description: course.description,
            level: course.level,
            type: course.type,
          },
        })
      );
    this.setState({ loading: false });
  }

  onChangeName(event) {
    this.setState({
      updatecourse: {
        ...this.state.updatecourse,
        name: event.target.value,
      },
    });
  }
  onChangeDescription(event) {
    this.setState({
      updatecourse: {
        ...this.state.updatecourse,
        description: event.target.value,
      },
    });
  }
  onChangeLevel(event) {
    this.setState({
      updatecourse: {
        ...this.state.updatecourse,
        level: event.target.value,
      },
    });
  }
  onChangeType(event) {
    this.setState({
      updatecourse: {
        ...this.state.updatecourse,
        type: event.target.value,
      },
    });
  }
  onChangeDuration(event) {
    this.setState({
      updatecourse: {
        ...this.state.updatecourse,
        duration: event.target.value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      redirect: "/courses",
      updatecourse: {
        ...this.state.updatecourse,
        id: this.state.courseId,
      },
    });
    this.props.actions.saveCourse(this.state.updatecourse);
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
        {!this.state.loading ? (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              if (
                !this.state.updatecourse.name.trim() ||
                !this.state.updatecourse.description.trim() ||
                !this.state.updatecourse.level.trim() ||
                !this.state.updatecourse.type.trim() ||
                !this.state.updatecourse.duration.trim()
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
                value={this.state.updatecourse.name}
                onChange={(event) => this.onChangeName(event)}
                placeholder={this.props.courses[this.state.courseId].name}
              />
            </Form.Group>
            <Form.Group controlId="formdescription">
              <Form.Label>Course Description</Form.Label>
              <Form.Control
                type="text"
                value={this.state.updatecourse.description}
                onChange={(event) => this.onChangeDescription(event)}
                placeholder={
                  this.props.courses[this.state.courseId].description
                }
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Course level</Form.Label>
              <Form.Control
                as="select"
                value={this.state.updatecourse.level}
                placeholder={this.props.courses[this.state.courseId].level}
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
                value={this.state.updatecourse.type}
                placeholder={this.state.updatecourse.type}
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
                value={this.state.updatecourse.duration}
                placeholder={this.props.courses[this.state.courseId].duration}
                onChange={(event) => this.onChangeDuration(event)}
              />
            </Form.Group>

            <input
              className="btn btn-primary"
              type="submit"
              value="edit Course"
            />
          </Form>
        ) : (
          "loading..."
        )}
      </Col>
    );
  }
}

EditCourse.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EditCourse);
