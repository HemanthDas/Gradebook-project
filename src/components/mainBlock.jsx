import { useState } from "react";
import StudentTable from "./studentTable";
import propTypes from "prop-types";
const MainBlock = ({ showStatistics, students }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("none");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="main-block">
      <input
        type="text"
        className="search-box"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="sorting-options">
        <label htmlFor="sortOption">Sort by:</label>
        <select
          id="sortOption"
          value={sortOption}
          onChange={handleSortOptionChange}
        >
          <option value="none">None</option>
          <option value="alphabetical">Alphabetical Order</option>
          <option value="finalGradeAsc">Final Grade (Ascending)</option>
          <option value="finalGradeDesc">Final Grade (Descending)</option>
        </select>
      </div>
      <StudentTable
        showStatistics={showStatistics}
        searchTerm={searchTerm}
        sortOption={sortOption}
        students={students}
      />
    </div>
  );
};
MainBlock.propTypes = {
  showStatistics: propTypes.bool.isRequired,
  students: propTypes.array.isRequired,
};
export default MainBlock;
