const Header = () => {
  const examInfo = {
    title: "Sample Exam Title",
    date: "April 10, 2024",
    professor: "Dr. John Smith",
    college: "Sample College",
    department: "Computer Science",
    semester: "Spring 2024",
    group: "Group A",
  };

  return (
    <div className="header">
      <h1>{examInfo.title}</h1>
      <div className="h-grp">
        <p>
          <h4>Date:</h4> {examInfo.date}
        </p>
        <p>
          <h4>Professor:</h4> {examInfo.professor}
        </p>
        <p>
          <h4>College: </h4>
          {examInfo.college}
        </p>
        <p>
          <h4>Department:</h4> {examInfo.department}
        </p>
        <p>
          <h4>Semester:</h4> {examInfo.semester}
        </p>
        <p>
          <h4>Group:</h4> {examInfo.group}
        </p>
      </div>
    </div>
  );
};

export default Header;
