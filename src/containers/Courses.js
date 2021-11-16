import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Courses(props) {
  const [courses, setCourses] = useState([
    { id: 1, name: "React JS is awesome", price: 100 },
    { id: 2, name: "How to test React application", price: 200 },
    { id: 3, name: "React Hooks - the future of React", price: 300 },
  ]);

  return (
    <div>
      <h1>Courses</h1>
      {courses.map((course) => (
        <>
          <div key={course.id}>
            <Link to={`${props.match.url}/${course.id}/${course.name}`}>
              {course.name}
            </Link>
          </div>
          <div>
            {/* As query params */}
            <Link
              to={{
                pathname: `${props.match.url}/${course.id}`,
                search: `?title=${course.name}`,
              }}
            >
              {course.name}
            </Link>
          </div>
        </>
      ))}
    </div>
  );
}
