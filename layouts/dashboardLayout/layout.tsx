"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { sideBar } from "@/utils/data";
import Link from "next/link";
import Notification from "@/svgs/notification";
import UserProfile from "@/svgs/userProfile";

interface FounderLayoutProps {
  pageTitle: string;
  pageText: string;
  children?: React.ReactNode;
}

const PageLayout: React.FC<FounderLayoutProps> = ({
  children,
  pageTitle,
  pageText,
}) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      {isMobileMenuOpen && (
        <div className={styles.overlay} onClick={closeMobileMenu} />
      )}

      {/* Sidebar */}
      <div
        className={`${styles.colOne} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.logoWrapper}>
          <h4>Learn App</h4>
          <button className={styles.closeMenuBtn} onClick={closeMobileMenu}>
            ✕
          </button>
        </div>
        <div className={styles.menuLists}>
          <div className={styles.menuGroup1}>
            <h4>Overview</h4>
            <div className={styles.linkContain}>
              {sideBar.slice(0, 4).map((items, index) => {
                return (
                  <Link
                    key={index}
                    href={items.link}
                    className={`${styles.menuListing} ${
                      items.link === pathname ? styles.active : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {items.icon}
                    <p>{items.label}</p>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className={styles.menuGroup1}>
            <h4>Financial</h4>
            <div className={styles.linkContain}>
              {sideBar.slice(4, 6).map((items, index) => {
                return (
                  <Link
                    key={index}
                    href={items.link}
                    className={`${styles.menuListing} ${
                      pathname.startsWith(items.link) ? styles.active : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {items.icon}
                    <p>{items.label}</p>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className={styles.menuGroup1}>
            <h4>Support</h4>
            <div className={styles.linkContain}>
              {sideBar.slice(6, 9).map((items, index) => {
                return (
                  <Link
                    key={index}
                    className={`${styles.menuListing} ${
                      items.link === pathname ? styles.active : ""
                    }`}
                    onClick={closeMobileMenu}
                    href={items.link}
                  >
                    {items.icon}
                    <p>{items.label}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.colTwo}>
        <div className={styles.topNav}>
          <h3>Logo</h3>
          <div className={styles.navText}>
            <h2>{pageTitle}</h2>
            <p>{pageText}</p>
          </div>
          <div className={styles.otherNavItems}>
            <Notification />
            <div className={styles.profileSection}>
              <UserProfile /> <p>Jane Doe</p>
            </div>
          </div>
          <button
            className={styles.mobileMenuBtn}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={styles.pageDetails}>
          <div className={styles.pageHeader}>
            <h2>{pageTitle}</h2>
            <p>{pageText}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
