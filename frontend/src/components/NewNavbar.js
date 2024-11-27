import React from 'react';

const EventNavbar = () => (
  <nav style={styles.navbar}>
    <h1 style={styles.logo}>Elderberry</h1>
    <ul style={styles.navLinks}>
      <li><a href="/" style={styles.link}>Home</a></li>
      <li><a href="/about" style={styles.link}>About Us</a></li>
      <li><a href="/events" style={styles.link}>Events</a></li>
      <li><a href="/contact" style={styles.link}>Contact</a></li>
    </ul>
  </nav>
);

const styles = {
  navbar: {
    backgroundColor: '#0',
    color: '#FF8D7O',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default EventNavbar;
