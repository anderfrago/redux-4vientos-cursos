import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../features/home/HomePage";
import AboutPage from "../features/about/AboutPage";
import Header from "./Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "../features/courses/CoursesPage";
import AddCourse from "../features/courses/AddCourse";
import EditCourse from "../features/courses/EditCourse";

import {Container} from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/add" component={AddCourse} />
        <Route path="/course/:id" component={EditCourse} />
        <Route component={PageNotFound} />
      </Switch>
    </Container>
  );
}

export default App;
