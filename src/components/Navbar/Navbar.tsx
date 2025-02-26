"use client";
import React from "react";
import styles from "./Navbar.module.scss";
import { akshar } from "@/utils";

export type NavbarProps = {
  // types...
};

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.menu}>
          <ul className={akshar.className}>
            <li>Home</li>
            <li>Carreras</li>
            <li>Reglamento</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div className={styles.contact}>
          <ul>
            <li>num</li>
            <li>correo</li>
          </ul>
        </div>
        <div className={styles.social}>
          <ul>
            <li>
              <a href="">
                <span className="icon icon-instagram_icon"></span>
              </a>
            </li>
            <li>
              {" "}
              <a href="">
                <span className="icon icon-facebook_icon"></span>
              </a>
            </li>
            <li>
              {" "}
              <a href="">
                <span className="icon icon-whatsapp-svgrepo-com"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
