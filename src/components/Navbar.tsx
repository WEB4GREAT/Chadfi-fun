import React, { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "rgba(26, 26, 26, 0.6)", // glassy
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Left - Logo + Project Name */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
        <img
          src="/logo.png" // <-- replace with your logo path
          alt="ChadFi Logo"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            objectFit: "cover",
            border: "1px solid #00FF7F",
          }}
        />
        <span
          style={{
            color: "#00FF7F",
            fontWeight: "bold",
            fontSize: "1.5rem",
            letterSpacing: "0.5px",
          }}
        >
          ChadFi.fun
        </span>
      </div>

      {/* Right - Desktop Menu */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <div className="desktop-menu" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <a href="#mint" style={{ color: "#00FF7F", textDecoration: "none", fontWeight: "600" }}>
            Mint
          </a>
          <a href="#battle" style={{ color: "white", textDecoration: "none" }}>
            Battle
          </a>
          <a href="#dao" style={{ color: "white", textDecoration: "none" }}>
            DAO
          </a>
          <WalletMultiButton />
        </div>

        {/* Hamburger for mobile */}
        <div
          className="hamburger"
          style={{ fontSize: "1.8rem", cursor: "pointer", color: "#00FF7F", display: "none" }}
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </div>
      </div>

      {/* Floating Mobile Menu */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "250px",
            height: "100%",
            background: "rgba(20, 20, 20, 0.95)",
            borderLeft: "1px solid #00FF7F",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            padding: "2rem 1rem",
            zIndex: 200,
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              alignSelf: "flex-end",
              fontSize: "1.5rem",
              background: "none",
              border: "none",
              color: "#00FF7F",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
          <a href="#mint" style={{ color: "#00FF7F", textDecoration: "none", fontWeight: "600" }}>
            Mint
          </a>
          <a href="#battle" style={{ color: "white", textDecoration: "none" }}>
            Battle
          </a>
          <a href="#dao" style={{ color: "white", textDecoration: "none" }}>
            DAO
          </a>
          <WalletMultiButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
