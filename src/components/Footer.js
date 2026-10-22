import Link from 'next/link';
import { Sparkles, MapPin, Mail, ExternalLink, Calendar, Users, Award, Shield } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Decorative gradient dividing bar */}
      <div className={styles.topGradientBar}></div>

      <div className={`container ${styles.footerContent}`}>
        <div className={styles.mainGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.brandHeader}>
              <div className={styles.logoIcon}>
                <span className={styles.warmDot}></span>
                <span className={styles.coolDot}></span>
              </div>
              <span className={styles.brandName}>syncup <span className={styles.versionBadge}>2.0</span></span>
            </div>
            <p className={styles.tagline}>
              Three milestones. One relationship that grows with the student.
            </p>
            <p className={styles.manifesto}>
              &ldquo;Warm and cool perspectives meeting in the middle — learn together, build forward.&rdquo;
            </p>
            <div className={styles.affiliation}>
              <Shield size={16} className={styles.affilIcon} />
              <span>Informatics Institute of Technology · IEEE Student Branch</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linkList}>
              <li><Link href="/">Home Overview</Link></li>
              <li><Link href="/challenges">The Challenges</Link></li>
              <li><Link href="/challenges#rs50k-challenge">Rs50,000 Budget Challenge</Link></li>
              <li><Link href="/challenges#global-challenge">Global Team Challenge</Link></li>
              <li><Link href="/contact">Contact & Venue</Link></li>
            </ul>
          </div>

          {/* Program Milestones Column */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Program Pillars</h4>
            <ul className={styles.linkList}>
              <li>
                <span className={styles.miniTag}>01</span> The SDGP / DSGP Group Project
              </li>
              <li>
                <span className={styles.miniTag}>02</span> Internship Applications & Interviews
              </li>
              <li>
                <span className={styles.miniTag}>03</span> Full-Time Career Transition
              </li>
              <li>
                <span className={styles.miniTag}>SPEECH</span> Banu Sir: Transition Guidance
              </li>
            </ul>
          </div>

          {/* Event Quick Info */}
          <div className={styles.infoCol}>
            <h4 className={styles.colTitle}>Event Info</h4>
            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <Calendar size={18} className={styles.infoIcon} />
                <div>
                  <div className={styles.infoHeading}>Full-Day Finale</div>
                  <div className={styles.infoSub}>Opening to Awards (9:00 AM - 4:30 PM)</div>
                </div>
              </div>
              <div className={styles.infoCard}>
                <MapPin size={18} className={styles.infoIcon} />
                <div>
                  <div className={styles.infoHeading}>Informatics Institute of Tech</div>
                  <div className={styles.infoSub}>Colombo, Sri Lanka</div>
                </div>
              </div>
              <div className={styles.infoCard}>
                <Award size={18} className={styles.infoIcon} />
                <div>
                  <div className={styles.infoHeading}>5 Award Categories</div>
                  <div className={styles.infoSub}>Recognise the work. Reward the relationship.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} SyncUp 2.0 Finale. Organized by Informatics Institute of Technology (IIT) IEEE Student Branch.
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/challenges">Challenges Hub</Link>
            <span className={styles.dotSeparator}>•</span>
            <Link href="/contact">Get in Touch</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
