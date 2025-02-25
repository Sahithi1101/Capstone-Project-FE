import React from 'react';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-column">
          <h5>Our Company</h5>
          <ul>
            <li><a href="#ourStory">Our Story</a></li>
            <li><a href="#joinOurTeam">Join our team</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>Our Social</h5>
          <ul>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#youtube">YouTube</a></li>
            <li><a href="#tiktok">TikTok</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>BookNest is available on</h5>
          <ul>
            <li><a href="#itunes">iTunes Store</a></li>
            <li><a href="#amazonPlay">Amazon Play Store</a></li>
            <li><a href="#googlePlay">Google Play Store</a></li>
          </ul>
        </div>
    </div>
     
      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>©2025. All rights reserved MERN Project.</p>
      </div>
    </footer>
  );
};

export default Footer;
