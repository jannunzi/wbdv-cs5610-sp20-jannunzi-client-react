import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class TopicPills extends React.Component {
    componentDidMount() {
        // this.props.findAllTopics();
        this.props.findTopicsForLesson(this.props.lessonId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.lessonId !== this.props.lessonId) {
            this.props.findTopicsForLesson(this.props.lessonId);
        }
    }

    render() {
        return (
            <div>
                {this.props.lessonId}
                <ul>
                    {
                        this.props.topics.map(topic =>
                        <li key={topic.id}>
                            <Link to={`/course-editor/${this.props.courseId}/topic/${topic.id}`}>
                                {topic.title}
                            </Link>
                        </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

const stateMapper = (state) => ({
    topics: state.topics.topics
})

const dispatchMapper = (dispatcher) => ({
    findAllTopics: () =>
        fetch("http://localhost:8080/api/topics")
            .then(response => response.json())
            .then(topics => dispatcher({
                type: "SET_TOPICS",
                topics: topics
            })),
    findTopicsForLesson: (lessonId) =>
        fetch(`http://localhost:8080/api/lessons/${lessonId}/topics`)
            .then(response => response.json())
            .then(topics => dispatcher({
                type: "SET_TOPICS",
                topics: topics
            }))
})

export default connect(
    stateMapper, dispatchMapper)
(TopicPills)
