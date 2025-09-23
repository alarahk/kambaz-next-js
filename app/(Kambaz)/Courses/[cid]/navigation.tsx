export default function CourseNavigation() {
  return (
    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
      <li><a href="/Courses/1234/Home">Course Home</a></li>
      <li><a href="/Courses/1234/Modules">Modules</a></li>
      <li><a href="/Courses/1234/Assignments">Assignments</a></li>
      <li><a href="/Courses/1234/Quizzes">Quizzes</a></li>
      <li><a href="/Courses/1234/Grades">Grades</a></li>
    </ul>
  );
}