import React from "react";
import { Link } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";

import Course from "./Course";
import { Container, Row, Col } from "react-bootstrap";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      courses: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.actions.loadCourses().catch((error) => {
      alert("Loading courses failed" + error);
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col className="jumbotron ">
            <h1>Instituto Cuatrovientos</h1> Listado de nuestra oferta
            educativa.
            <br />
            <Link to="add" className="btn btn-secondary btn-lg">
              Añadir nuevo curso
            </Link>
          </Col>
        </Row>

        <Row>
          {this.props.courses.map((course) => (
            <div className="col-12 col-md-6 col-lg-4 md-auto pb-2">
              <Course key={course.id} {...course} />
            </div>
          ))}
        </Row>
      </Container>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
