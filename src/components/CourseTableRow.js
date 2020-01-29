import React from "react";

const CourseTableRow = ({course, deleteCourse}) =>
    <li>
        {course.title}
        <button onClick={() => deleteCourse(course)}>Delete</button>
    </li>

export default CourseTableRow
