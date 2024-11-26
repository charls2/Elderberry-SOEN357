import React from 'react';
import NewNavbar from '../components/NewNavbar';

const EventDetailsDesign2 = () => (
  <div>
    <NewNavbar />
    <section style={styles.container}>
      <div style={styles.card}>
        <h1>Community Connection Day</h1>
        <p>Join us for a day of learning, sharing, and fun!</p>
      </div>
      <div style={styles.card}>
        <h2>Event Details</h2>
        <p><strong>Date:</strong> December 10, 2024</p>
        <p><strong>Time:</strong> 10:00 AM - 4:00 PM</p>
        <p><strong>Location:</strong> Community Hall, 123 Main Street</p>
      </div>
      <div style={styles.card}>
        <h2>Schedule</h2>
        <ul>
          <li>10:00 AM - Opening Ceremony</li>
          <li>11:00 AM - Workshop: "Sharing Skills Across Generations"</li>
          <li>1:00 PM - Lunch Break</li>
          <li>2:00 PM - Panel Discussion: "Building Stronger Communities"</li>
          <li>3:30 PM - Closing Remarks</li>
        </ul>
      </div>
    </section>
    <footer style={styles.footer}>
      <p>&copy; 2024 Elderberry. All rights reserved.</p>
    </footer>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    gap: '20px',
  },
  card: {
    width: '80%',
    maxWidth: '600px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'left',
    lineHeight: '1.6',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
  },
};

export default EventDetailsDesign2;
