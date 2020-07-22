import React from "react";
import { Link } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";

import PropTypes from "prop-types";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  ButtonGroup,
} from "react-bootstrap";

import { BsPencil, BsFillTrashFill } from "react-icons/bs";

class Course extends React.Component {

  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(id){
     this.props.actions.deleteCourse(id).catch(error => {
       alert("Deleting course failed" + error);
     });   
    
  }

  render() {
    let {  id, name, description, level, type, duration} = this.props;

    return (
      <Card style={{ width: "20rem" }}>
        <Card.Header className="bg-dark text-white">
          <Card.Title>
            <h3 className="m-3">{name}</h3>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p className="lead">{description}</p>
          </Card.Text>
          <ListGroup>
            <ListGroupItem variant="secondary">{level}</ListGroupItem>
            <ListGroupItem>
              <p className="small bg-light mb-0">Familia profesional: </p>
              {type}
            </ListGroupItem>
            <ListGroupItem>
              <p className="small bg-light mb-0">Duración: </p>
              {duration}
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup size="lg" className="d-flex">
            <Link className="btn btn-info" to={"/course/"+id}>
              <BsPencil className="m-2" />
              Editar
            </Link>
            <Button variant="danger" onClick={()=>this.handleDelete(id)}>
              <BsFillTrashFill className="m-2" />
              Borrar
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    );
  }
}

Course.propTypes = {
  onClick: PropTypes.func,
  completed: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  level: PropTypes.string,
  type: PropTypes.string,
  duration: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    course: state.course,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);

