import React from 'react';
import Navbar from '../components/Navbar';

const HeroSection = () => (
  <section style={styles.hero}>
    <h1>About Elderberry</h1>
    <p>Your go-to solution for connecting people and fostering communities.</p>
  </section>
);

const OurStory = () => (
  <section style={styles.section}>
    <h2>Our Story</h2>
    <p>
      Elderberry was born from the idea of bridging generational gaps through meaningful 
      interactions and shared knowledge. Our mission is to empower communities by connecting 
      young members with elders who have invaluable experience to share.
    </p>
  </section>
);

const TeamSection = () => (
  <section style={styles.section}>
    <h2>Meet the Team</h2>
    <p>
      We are a group of passionate individuals dedicated to making Elderberry 
      a platform that fosters growth, collaboration, and understanding.
    </p>
  </section>
);

const Footer = () => (
  <footer style={styles.footer}>
    <p>&copy; 2024 Elderberry. All rights reserved.</p>
    <p>Contact us at <a href="mailto:info@elderberry.com">info@elderberry.com</a></p>
  </footer>
);

const AboutUs = () => (
  <div>
    <Navbar />
    <HeroSection />
    <OurStory />
    <TeamSection />
    <Footer />
  </div>
);

const styles = {
  hero: {
    backgroundColor: '#f0f8ff',
    padding: '50px',
    textAlign: 'center',
  },
  section: {
    padding: '20px',
    margin: '20px auto',
    maxWidth: '800px',
    lineHeight: '1.6',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
  },
};

export default AboutUs;
