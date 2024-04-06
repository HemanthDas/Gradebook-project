import { useState } from "react";
import Header from "./components/header";
import MainBlock from "./components/mainBlock";
import StatisticsBlock from "./components/statisticsBlock";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [showStatistics, setShowStatistics] = useState(false);
  const students = [
    {
      id: 1,
      name: "John Doe",
      ticketNumber: "T123",
      ratingGrade: 8,
      examGrade: 7,
    },
    {
      id: 2,
      name: "Alice Smith",
      ticketNumber: "T124",
      ratingGrade: 9,
      examGrade: 8,
    },
    {
      id: 3,
      name: "Bob Johnson",
      ticketNumber: "T125",
      ratingGrade: 7,
      examGrade: 6,
    },
    {
      id: 4,
      name: "Emily Brown",
      ticketNumber: "T126",
      ratingGrade: 8,
      examGrade: 7,
    },
    {
      id: 5,
      name: "Michael Wilson",
      ticketNumber: "T127",
      ratingGrade: 9,
      examGrade: 8,
    },
    {
      id: 6,
      name: "Emma Garcia",
      ticketNumber: "T128",
      ratingGrade: 7,
      examGrade: 6,
    },
    {
      id: 7,
      name: "William Martinez",
      ticketNumber: "T129",
      ratingGrade: 8,
      examGrade: 7,
    },
    {
      id: 8,
      name: "Olivia Hernandez",
      ticketNumber: "T130",
      ratingGrade: 1,
      examGrade: 1,
    },
    {
      id: 9,
      name: "James Young",
      ticketNumber: "T131",
      ratingGrade: 7,
      examGrade: 6,
    },
    {
      id: 10,
      name: "Sophia Lee",
      ticketNumber: "T132",
      ratingGrade: 2,
      examGrade: 4,
    },
  ];

  const toggleStatistics = () => {
    setShowStatistics(!showStatistics);
  };

  return (
    <div className="app">
      <Header />
      <MainBlock showStatistics={showStatistics} students={students} />
      {showStatistics && <StatisticsBlock students={students} />}
      <button onClick={toggleStatistics}>
        {showStatistics ? "Hide Statistics" : "Show Statistics"}
      </button>
      <Footer />
    </div>
  );
}

export default App;
