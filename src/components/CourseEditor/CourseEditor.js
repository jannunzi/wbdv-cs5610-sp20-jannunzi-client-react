import React from "react";
import ModuleList from "./ModuleList";
import './CourseEditor.css'
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import widgetReducer from "../../reducers/widgetReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import WidgetListComponent from "./WidgetListComponent";

const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    widgets: widgetReducer
})

const store = createStore(rootReducer)

const CourseEditor = ({hideCourseEditor, match, history, courseId, moduleId, lessonId, topicId}) =>
    <Provider store={store}>
        <div>
            <a href="/">
                Back
            </a>
            <button onClick={() => history.push("/")}>Close</button>
            <h2>Course Editor {match.params.courseId}</h2>
            <div className="row">
                <div className="col-4">
                    <h4>Module List</h4>
                    <ModuleList
                        courseId={courseId}/>
                </div>
                <div className="col-8">
                    {/*<LessonTabs*/}
                    {/*    moduleId={moduleId}*/}
                    {/*    courseId={courseId}/>*/}
                    {/*<TopicPills*/}
                    {/*    lessonId={lessonId}*/}
                    {/*    moduleId={moduleId}*/}
                    {/*    courseId={courseId}/>*/}

                    <WidgetListComponent
                        topicId={topicId}/>
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditor
