import React from "react";
import CourseTableRow from "./CourseTableRow";

const CourseTableComponent = ({courses, deleteCourse}) =>
    <div>
        <h2>Course Table {courses.length}</h2>
        <ul>
            {
                courses.map(function(course, index) {
                    return <CourseTableRow
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}/>
                })
            }
        </ul>
    </div>
export default CourseTableComponent
