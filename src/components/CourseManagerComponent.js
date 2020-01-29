import React from "react";
import CourseManagerHeading from "./CourseManagerHeading";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";

class CourseManagerComponent extends React.Component {
        state = {
                layout: 'table',
                courses: [
                        {_id: '123', title: 'Course A'},
                        {_id: '234', title: 'Course B'},
                        {_id: '345', title: 'Course C'},
                        {_id: '567', title: 'Course D'},
                        {_id: '456', title: 'Course E'}
                ]
        }

        deleteCourse = (deletedCourse) => {
                this.setState(prevState => ({
                        courses: prevState.courses.filter(course => course._id !== deletedCourse._id)
                }))
        }

        toggle = () => {
                console.log('toggle')
                this.setState((prevState) => {
                        if(prevState.layout === 'grid') {
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

        render() {
                return(
                    <div>
                            <h1>Course Manager</h1>
                            <CourseManagerHeading/>
                            <button onClick={this.toggle}>Toggle</button>
                            {this.state.layout === 'table' && <CourseTableComponent deleteCourse={this.deleteCourse} courses={this.state.courses}/>}
                            {this.state.layout === 'grid' && <CourseGridComponent courses={this.state.courses}/>}
                    </div>
                )
        }
}

export default CourseManagerComponent
