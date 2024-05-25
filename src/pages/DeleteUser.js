import React, { useState } from 'react';
import { deleteUsers } from '../services/services';
import { toast } from 'react-toastify';

export default function DeleteUser() {

  const [userid, setUserid] = useState("");

  const callApi = (userid) => {
    deleteUsers(userid)
      .then(res => {
        if (res) {
          toast.success("User Deleted Successfully..!");
        }
      })
      .catch((err) => {
        console.error("Error deleting user:", err); // Log the full error object
        if (err.response) {
          // Server responded with a status other than 200 range
          toast.error(`Error: ${err.response.data.message || err.response.statusText}`);
        } else if (err.request) {
          // Request was made but no response received
          toast.error("No response received from server.");
        } else {
          // Something else caused the error
          toast.error(`Error: ${err.message}`);
        }
      });
  }

  return (
    <div className="outer">
      <div className="form">
        <h1 style={{ color: "black" }}>Delete User By ID</h1>
        <input
          className="registration-inputs"
          onChange={(e) => setUserid(e.target.value)}
          type="text"
          placeholder="Enter User ID"
        />
        <button onClick={() => callApi(userid)} className="button-main">Delete User</button>
      </div>
    </div>
  );
}
