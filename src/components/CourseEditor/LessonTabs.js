import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class LessonTabs extends React.Component {
    render() {
        return(
            <ul>
                {
                    this.props.lessons && this.props.lessons.map(lesson =>
                        <li key={lesson._id}>
                            <Link to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lesson._id}`}>
                                {lesson.title}
                            </Link>
                        </li>
                    )
                }
            </ul>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    lessons: state.lessons.lessons
})

export default connect(stateToPropertyMapper)
(LessonTabs)

