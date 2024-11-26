import React from 'react';
import NewNavbar from '../components/NewNavbar';

const EventDetails = () => (
  <div style={styles.page}>
    <NewNavbar />
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <img
          src="https://via.placeholder.com/800x400"
          alt="Event"
          style={styles.heroImage}
        />
        <div style={styles.heroText}>
          <h1>Community Connection Day</h1>
          <p>Join us for an unforgettable day of sharing and growth!</p>
        </div>
      </section>

      <div style={styles.content}>
        {/* Main Content */}
        <main style={styles.mainContent}>
          <p style={styles.description}>
            Elderberry's Community Connection Day is a one-of-a-kind event
            designed to bridge generational gaps through meaningful interactions
            and collaborative workshops. Experience inspiring stories, engaging
            panels, and activities tailored to connect people of all ages.
          </p>
          <div style={styles.tags}>
            <span style={styles.tag}>Community</span>
            <span style={styles.tag}>Workshops</span>
            <span style={styles.tag}>Generations</span>
            <span style={styles.tag}>Networking</span>
          </div>
          <div style={styles.share}>
            <h3>Share this Event</h3>
            <div style={styles.socialLinks}>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">Email</a>
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <h2>Event Details</h2>
          <ul style={styles.detailsList}>
            <li>
              <strong>Start Date:</strong> December 10, 2024
            </li>
            <li>
              <strong>End Date:</strong> December 10, 2024
            </li>
            <li>
              <strong>Time:</strong> 10:00 AM - 4:00 PM
            </li>
            <li>
              <strong>Location:</strong> Community Hall, 123 Main Street
            </li>
            <li>
              <strong>Organizer:</strong> Elderberry Events
            </li>
            <li>
              <strong>Category:</strong> Community, Workshops
            </li>
            <li>
              <strong>Phone:</strong> (123) 456-7890
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:events@elderberry.com">events@elderberry.com</a>
            </li>
          </ul>
        </aside>
      </div>

      {/* Tab Section */}
      <section style={styles.tabs}>
        <nav style={styles.tabNav}>
          <button style={styles.tabButton}>Speakers</button>
          <button style={styles.tabButton}>Schedule</button>
          <button style={styles.tabButton}>Tickets</button>
          <button style={styles.tabButton}>FAQs</button>
          <button style={styles.tabButton}>Contact</button>
        </nav>
      </section>
    </div>
  </div>
);

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '20px',
  },
  heroImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  heroText: {
    marginTop: '10px',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
  },
  mainContent: {
    flex: '3',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  tags: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  tag: {
    backgroundColor: '#e0e0e0',
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '0.9rem',
  },
  share: {
    marginTop: '20px',
  },
  socialLinks: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  sidebar: {
    flex: '1',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  detailsList: {
    listStyleType: 'none',
    padding: 0,
  },
  tabs: {
    marginTop: '20px',
  },
  tabNav: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
  },
  tabButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default EventDetails;
