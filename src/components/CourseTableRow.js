import React from "react";
import {updateCourse} from "../services/CourseService";

class CourseTableRow extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course
    }

    render() {
        return(
            <li>
                {   !this.state.editing &&
                <a href="#" onClick={this.props.showCourseEditor}>
                    {this.state.course.title}
                </a>
                }
                {
                    this.state.editing &&
                    <input
                        onChange={(e) => this.setState({
                            course: {
                                ...this.state.course,
                                title: e.target.value
                            }
                        })}
                        value={this.state.course.title}/>
                }
                <button onClick={() => this.props.deleteCourse(this.props.course)}>Delete</button>
                <button onClick={() => this.setState({editing: true})}>Edit</button>
                <button onClick={(e) => {
                    updateCourse(this.state.course._id, this.state.course).then(status => {})
                    this.setState({
                        editing: false
                    })
                }}>Save</button>
            </li>
        )
    }
}


export default CourseTableRow
