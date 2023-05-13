import React from "react";

function AdminPanel({ role }) {
  if (role === "admin") {
    return (
      <div>
        <h1>Admin Panel</h1>
      </div>
    );
  } else {
    return;
  }
}

export default AdminPanel;
