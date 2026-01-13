import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Dipankar</h3>
      <button className={styles.headerBtn}>LogIn</button>
    </div>
  );
};

export default Header;
