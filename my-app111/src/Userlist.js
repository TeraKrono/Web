import React, { useState, useEffect } from "react";
import axios from "axios";

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedFilterColumn, setSelectedFilterColumn] = useState("state");

  useEffect(() => {
    axios.get("http://localhost:3005/register").then((response) => {
      setUsers(response.data);
      setFilteredUsers(response.data);
    });
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const handleFilterColumnChange = (e) => {
    setSelectedFilterColumn(e.target.value);
  };

  const filterUsers = () => {
    if (!filter) {
      return users;
    } else {
      return users.filter(
        (user) =>
          user[selectedFilterColumn] &&
          user[selectedFilterColumn].toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  const sortUsers = (filteredData) => {
    if (sortColumn) {
      const sortedData = [...filteredData].sort((a, b) => {
        const aValue = a[sortColumn] || "";
        const bValue = b[sortColumn] || "";

        if (sortOrder === "asc") {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      });

      return sortedData;
    } else {
      return filteredData;
    }
  };

  useEffect(() => {
    const filteredData = filterUsers();
    const sortedData = sortUsers(filteredData);
    setFilteredUsers(sortedData);
  }, [filter, sortColumn, sortOrder, selectedFilterColumn, users]);

  const formatDate = (dateString) => {
    if (!dateString) {
      return "";
    }
  
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "white", marginRight: "10px" }}>User List</h2>
      <div style={{ marginBottom: "20px" }}>
  <label htmlFor="filterColumn" style={{ color: "white", marginRight: "10px" }}>
    Filter by:
  </label>
  <select
    id="filterColumn"
    value={selectedFilterColumn}
    onChange={handleFilterColumnChange}
    style={{ color: "black" }} // Dropdown text color
  >
    <option value="name">Name</option>
    <option value="email">Email</option>
    <option value="state">State</option>
    <option value="date">Date</option>
  </select>
  <input
    type="text"
    placeholder={`Filter by ${selectedFilterColumn}`}
    value={filter}
    onChange={handleFilterChange}
    style={{ marginLeft: "10px" }} // Add space between dropdown and input
  />
</div>
      <table
        style={{
          color: "white",
          borderCollapse: "collapse",
          width: "100%",
          textAlign: "left",
        }}
      >
        <thead>
          <tr>
            <th
              style={{ border: "1px solid white", padding: "8px", cursor: "pointer" }}
              onClick={() => handleSort("name")}
            >
              Name
            </th>
            <th
              style={{ border: "1px solid white", padding: "8px", cursor: "pointer" }}
              onClick={() => handleSort("email")}
            >
              Email
            </th>
            <th
              style={{ border: "1px solid white", padding: "8px", cursor: "pointer" }}
              onClick={() => handleSort("state")}
            >
              State
            </th>
            <th
              style={{ border: "1px solid white", padding: "8px", cursor: "pointer" }}
              onClick={() => handleSort("date")}
            >
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td style={{ border: "1px solid white", padding: "8px" }}>
                {user.name}
              </td>
              <td style={{ border: "1px solid white", padding: "8px" }}>
                {user.email}
              </td>
              <td style={{ border: "1px solid white", padding: "8px" }}>
                {user.state}
              </td>
              <td style={{ border: "1px solid white", padding: "8px" }}>
                {formatDate(user.date)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
