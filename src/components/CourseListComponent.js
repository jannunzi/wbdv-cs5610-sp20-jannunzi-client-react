import CourseManagerHeading from "./CourseManagerHeading";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import React from "react";

const CourseListComponent =
    ({
         toggle,
         updateForm,
         newCourseTitle,
         addCourse,
         layout,
         showCourseEditor,
         deleteCourse,
         courses
     }) =>
<div>
    <CourseManagerHeading/>
    <button onClick={toggle}>Toggle</button>
    <input
        onChange={updateForm}
        value={newCourseTitle}/>
    <button onClick={addCourse}>Add Course</button>
    {layout === 'table' &&
    <CourseTableComponent
        showCourseEditor={showCourseEditor}
        deleteCourse={deleteCourse}
        courses={courses}/>}
    {layout === 'grid' &&
    <CourseGridComponent courses={courses}/>}
</div>

export default CourseListComponent
