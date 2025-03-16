import React, { useState, useEffect } from "react";
import axios from "axios";
import QRScanner from "../components/QRScanner"; // QR Scanner component
import "./AdminPanel.css";

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("/api/admin/bookings")
      .then((response) => setBookings(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <section className="booking-list">
        <h2>Booking List</h2>
        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>User</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking._id}</td>
                <td>{booking.userId}</td>
                <td>{booking.status}</td>
                <td>
                  <button>Validate</button> {/* Admin action */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="qr-scanner">
        <h2>Scan QR Code</h2>
        <QRScanner /> {/* Custom QR scanner component */}
      </section>
    </div>
  );
};

export default AdminPanel;
