'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Challenges', 
      href: '/challenges',
      badge: '2 Grand Challenges' 
    },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logoLink} aria-label="SyncUp 2.0 Home">
          <div className={styles.logoIcon}>
            <span className={styles.warmDot}></span>
            <span className={styles.coolDot}></span>
          </div>
          <div className={styles.brandGroup}>
            <div className={styles.brandTitle}>
              sync<span className={styles.brandAccent}>up</span>
              <span className={styles.versionTag}>2.0</span>
            </div>
            <span className={styles.brandSub}>IIT IEEE Student Branch</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
              >
                {link.name}
                {link.badge && (
                  <span className={styles.navBadge}>
                    <Sparkles size={11} />
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className={styles.actionsGroup}>
          <Link href="/challenges" className={`btn btn-primary ${styles.ctaButton}`}>
            <span>View Challenges</span>
            <ArrowRight size={16} />
          </Link>

          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileDrawerContent}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${styles.mobileNavItem} ${isActive ? styles.mobileNavItemActive : ''}`}
                >
                  <span className={styles.mobileNavText}>{link.name}</span>
                  {link.badge && (
                    <span className={styles.mobileNavBadge}>
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
            <div className={styles.mobileCtaWrapper}>
              <Link href="/challenges" className="btn btn-primary" style={{ width: '100%' }}>
                <span>Explore Challenges</span>
                <ArrowRight size={16} />
              </Link>
              <div className={styles.mobileSubInfo}>
                <ShieldCheck size={14} color="#06b6d4" />
                <span>Informatics Institute of Technology IEEE Student Branch</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
