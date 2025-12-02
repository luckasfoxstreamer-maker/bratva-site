"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>BRATVA</h1>

      <div style={styles.links}>
        <Link href="/">Início</Link>
        <Link href="/produtos">Armamentos</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/pedido">Pedido</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    background: "#0a0a0a",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: 0,
    zIndex: 1000,
    borderBottom: "1px solid #222"
  },
  logo: {
    color: "#b30000",
    fontWeight: "bold",
    fontSize: "22px",
    letterSpacing: "2px"
  },
  links: {
    display: "flex",
    gap: "20px"
  }
};
