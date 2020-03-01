import React from "react";
import CourseManagerHeading from "./CourseManagerHeading";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import CourseEditor from "./CourseEditor/CourseEditor";
import {deleteCourse, createCourse, findAllCourses} from "../services/CourseService"
import CourseListComponent from "./CourseListComponent";
import Page1 from "./Page1";
import Page2 from "./Page2";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import OmdbClient from "./Prototype/omdb-client";
import OmdbDetails from "./Prototype/omdb-details";

class CourseManagerComponent extends React.Component {
    state = {
        layout: 'table',
        editingCourse: false,
        newCourseTitle: 'Whatever',
        courses: []
    }

    componentDidMount = async () => {

        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses
        })

        // findAllCourses()
        //     .then(courses => this.setState({
        //         courses: courses
        //     }))
    }

    deleteCourse = async (deletedCourse) => {
        const status = await deleteCourse(deletedCourse._id)
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
        // this.setState(prevState => ({
        //     courses: prevState.courses.filter(course => course._id !== deletedCourse._id)
        // }))
    }

    toggle = () => {
        this.setState((prevState) => {
            if (prevState.layout === 'grid') {
                return {
                    layout: 'table'
                }
            } else {
                return {
                    layout: 'grid'
                }
            }
        })
    }

    showCourseEditor = () =>
        this.setState({
            editingCourse: true
        })

    hideCourseEditor = () =>
        this.setState({
            editingCourse: false
        })

    addCourse = async () =>
    {
        const newCourse = {
            title: this.state.newCourseTitle
        }
        const actualCourse = await createCourse(newCourse)
        console.log(actualCourse)
        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses
        })
        // this.setState(prevState => ({
        //     courses: [
        //         ...prevState.courses,
        //         {
        //             _id: (new Date()).getTime() + "",
        //             title: prevState.newCourseTitle
        //         }
        //     ]
        // }))
    }

    updateForm = (e) =>
        this.setState({
            newCourseTitle: e.target.value
        })

    render() {
        return (
            <div>
                {/*<Router>*/}

                {/*    <Link to="/page1">*/}
                {/*        Page 1*/}
                {/*    </Link>*/}
                {/*    <Link to="/page2">*/}
                {/*        Page 2*/}
                {/*    </Link>*/}

                {/*    <Route*/}
                {/*        path="/page1"*/}
                {/*        component={Page1}/>*/}
                {/*    <Route*/}
                {/*        path="/page2/:message"*/}
                {/*        exact={true}*/}
                {/*        component={Page2}/>*/}
                {/*</Router>*/}

                <Router>
                    <Route
                        path="/omdb"
                        exact={true}
                        component={OmdbClient}
                    />
                    <Route
                        path="/omdb/:imdbID"
                        exact={true}
                        render={(props) =>
                            <OmdbDetails
                                imdbID={props.match.params.imdbID}/>}
                    />
                    <Route
                        path="/course-editor/:courseId"
                        exact={true}
                        render={(props) =>
                            <CourseEditor
                                courseId={props.match.params.courseId}
                                {...props}/>
                        }/>
                    <Route
                        path="/course-editor/:courseId/topic/:topicId"
                        exact={true}
                        render={(props) =>
                            <CourseEditor
                                courseId={props.match.params.courseId}
                                topicId={props.match.params.topicId}
                                {...props}/>
                        }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId"
                        exact={true}
                        render={(props) =>
                           <CourseEditor
                               {...props}
                               moduleId={props.match.params.moduleId}
                               courseId={props.match.params.courseId}/>
                        }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId"
                        exact={true}
                        render={(props) =>
                           <CourseEditor
                               {...props}
                               lessonId={props.match.params.lessonId}
                               moduleId={props.match.params.moduleId}
                               courseId={props.match.params.courseId}/>
                        }/>
                    <Route
                        path="/"
                        exact={true}
                        render={() =>
                            <CourseListComponent
                                toggle={this.toggle}
                                updateForm={this.updateForm}
                                newCourseTitle={this.state.newCourseTitle}
                                addCourse={this.addCourse}
                                layout={this.state.layout}
                                showCourseEditor={this.showCourseEditor}
                                deleteCourse={this.deleteCourse}
                                courses={this.state.courses}
                            />
                        }/>
                </Router>
            </div>
        )
    }
}

export default CourseManagerComponent
