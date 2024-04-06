const Header = () => {
  const examInfo = {
    title: "Gradebook project",
    date: "April 6, 2024",
    professor: "M Jogendra Kumar",
    college: "KL University",
    department: "Computer Science & Engineering - Honors",
    semester: "6th Semester",
    group: "DevOps/Front-end",
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
