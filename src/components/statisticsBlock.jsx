import propTypes from "prop-types";
const StatisticsBlock = ({ students }) => {
  const passedStudents = students.filter((student) => {
    return 0.6 * student.examGrade + 0.4 * student.ratingGrade >= 4;
  });

  const failedStudents = students.filter((student) => {
    return 0.6 * student.examGrade + 0.4 * student.ratingGrade < 4;
  });

  const averageGrade =
    students.reduce((sum, student) => {
      return sum + (0.6 * student.examGrade + 0.4 * student.ratingGrade);
    }, 0) / students.length;

  const maxGrade = Math.max(
    ...students.map(
      (student) => 0.6 * student.examGrade + 0.4 * student.ratingGrade
    )
  );
  const minGrade = Math.min(
    ...students.map(
      (student) => 0.6 * student.examGrade + 0.4 * student.ratingGrade
    )
  );

  return (
    <div className="statistics-block">
      <h2>Statistics</h2>
      <div className="statistic-item">
        <span className="statistic-label">Total number of students:</span>
        <span className="statistic-value total-students">
          {students.length}
        </span>
      </div>
      <div className="statistic-item">
        <span className="statistic-label">Number of students passed:</span>
        <span className="statistic-value passed-students">
          {passedStudents.length}
        </span>
      </div>
      <div className="statistic-item">
        <span className="statistic-label">Number of students failed:</span>
        <span className="statistic-value failed-students">
          {failedStudents.length}
        </span>
      </div>
      <div className="statistic-item">
        <span className="statistic-label">Average grade:</span>
        <span className="statistic-value">{averageGrade.toFixed(2)}</span>
      </div>
      <div className="statistic-item">
        <span className="statistic-label">Maximum grade:</span>
        <span className="statistic-value">{maxGrade.toFixed(2)}</span>
      </div>
      <div className="statistic-item">
        <span className="statistic-label">Minimum grade:</span>
        <span className="statistic-value">{minGrade.toFixed(2)}</span>
      </div>
    </div>
  );
};
StatisticsBlock.propTypes = {
  students: propTypes.array.isRequired,
};
export default StatisticsBlock;
