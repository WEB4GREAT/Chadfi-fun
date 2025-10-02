import React from "react";
import { FaTelegram, FaXTwitter, FaGithub } from "react-icons/fa6"; // X, Telegram, GitHub icons

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Actions */}
        <div className="footer-section">
          <h4>Actions</h4>
          <ul>
            <li><a href="#mint">Mint Coin</a></li>
            <li><a href="#battle">Battle Arena</a></li>
            <li><a href="#dao">DAO Governance</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="#docs">Docs</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h4>Social</h4>
          <div className="social-icons">
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://t.me" target="_blank" rel="noreferrer">
              <FaTelegram />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 ChadFi.fun. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
