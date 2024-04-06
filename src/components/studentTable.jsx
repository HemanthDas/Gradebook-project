import propTypes from "prop-types";
const StudentTable = ({ showStatistics, searchTerm, sortOption, students }) => {
  const sortStudents = (filteredStudents) => {
    let sortedStudents = [...filteredStudents];
    switch (sortOption) {
      case "alphabetical":
        sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "finalGradeAsc":
        sortedStudents.sort(
          (a, b) => calculateFinalGrade(a) - calculateFinalGrade(b)
        );
        break;
      case "finalGradeDesc":
        sortedStudents.sort(
          (a, b) => calculateFinalGrade(b) - calculateFinalGrade(a)
        );
        break;
      default:
        break;
    }
    return sortedStudents;
  };

  const calculateFinalGrade = (student) => {
    return 0.6 * student.examGrade + 0.4 * student.ratingGrade;
  };

  const filteredStudents = students.filter((student) => {
    return student.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const sortedAndFilteredStudents = sortStudents(filteredStudents);

  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Ticket&apos;s Number</th>
          <th>Rating Grade</th>
          <th>Exam Grade</th>
          <th>Final Grade</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sortedAndFilteredStudents.map((student, index) => (
          <tr
            key={student.id}
            className={showStatistics ? "" : "clickable-row"}
          >
            <td>{index + 1}</td>
            <td>{student.name}</td>
            <td>{student.ticketNumber}</td>
            <td>{student.ratingGrade}</td>
            <td>{student.examGrade}</td>
            <td>{0.6 * student.examGrade + 0.4 * student.ratingGrade}</td>
            <td
              className={
                "std-g " +
                (0.6 * student.examGrade + 0.4 * student.ratingGrade >= 4
                  ? "pass"
                  : "fail")
              }
            >
              {0.6 * student.examGrade + 0.4 * student.ratingGrade >= 4
                ? "Passed"
                : "Failed"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
StudentTable.propTypes = {
  showStatistics: propTypes.bool.isRequired,
  searchTerm: propTypes.string.isRequired,
  sortOption: propTypes.string.isRequired,
  students: propTypes.array.isRequired,
};
export default StudentTable;
