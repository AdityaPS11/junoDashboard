// FilterComponent.js
import { useState } from "react";

const FilterComponent = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [triggerReasonFilter, setTriggerReasonFilter] = useState("");
  const [riskLevelFilter, setRiskLevelFilter] = useState("");

  const handleFilter = () => {
    onFilter({ searchTerm, triggerReasonFilter, riskLevelFilter });
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="relative border border-gray-300 rounded-full flex items-center">
        <span className="absolute left-0 ml-2">
        <i className="far fa-search fa-xs"></i>
        </span>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="py-2 pl-10 pr-8 w-48 focus:outline-none"
        />
      </div>

      <div className="relative">
        <select
          value={triggerReasonFilter}
          onChange={(e) => setTriggerReasonFilter(e.target.value)}
          className="py-2 px-4 border border-gray-300 rounded focus:outline-none"
        >
          <option value="">Trigger Reason</option>
          <option value="Hard Flag">Hard Flag</option>
          <option value="Temp Flag">Temp Flag</option>
          <option value="Restricted Flag">Restricted Flag</option>
          <option value="Un Flag">Un Flag</option>
          <option value="Reviewed">Reviewed</option>
        </select>
      </div>

      <div className="relative">
        <select
          value={riskLevelFilter}
          onChange={(e) => setRiskLevelFilter(e.target.value)}
          className="py-2 px-4 border border-gray-300 rounded focus:outline-none"
        >
          <option value="">Risk Level</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterComponent;
