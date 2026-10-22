'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  MessageSquare,
  Building,
  GraduationCap
} from 'lucide-react';
import styles from './page.module.css';

const FAQS = [
  {
    q: 'Who can participate as a mentor vs mentee in SyncUp 2.0?',
    a: 'SyncUp 2.0 pairs experienced senior mentors (3rd/4th year students and distinguished alumni who successfully passed SDGP/DSGP and secured industrial placements) with 2nd-year junior mentees stepping into group projects and internship application cycles.'
  },
  {
    q: 'How does the mentor-mentee pairing work on the Main Event Day?',
    a: 'Pairings are revealed dynamically! Phase 1 pairs are officially unveiled at 9:20 AM after the opening ceremony. At 10:55 AM, a 5-minute re-pairing reveal occurs for Phase 2 (Internship Interview Gauntlet), and the afternoon general challenges feature flexible cross-group pairing.'
  },
  {
    q: 'What is the format of the two afternoon general challenges?',
    a: 'The afternoon block (1:00 PM - 2:00 PM) features two distinct 30-minute challenges: 1) The Rs50,000 Budget Challenge where your team must survive an unexpected budget drop to Rs20,000, and 2) The Global Team Challenge where pairs design an asynchronous collaboration matrix across Sri Lanka, India, UK, and Japan while handling a critical deployment misunderstanding.'
  },
  {
    q: 'How are teams scored by the floating judges?',
    a: 'Two to three floating judges circulate during every challenge block. Pairs are evaluated on a 1-5 scale across 4 core criteria: Collaboration (mentor guiding without dominating), Quality/Creativity of Output, Communication Clarity, and Problem-Solving under the strict time limit.'
  },
  {
    q: 'What is Banu Sir’s Guidance Speech focused on?',
    a: 'Scheduled from 2:30 PM to 3:30 PM on the main event day, Banu Sir presents “Transitioning from Internship to Permanent Role” — a masterclass on standing out during placement, communicating technical impact, and securing full-time job offers before graduation.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'mentee',
    subject: 'general',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className={styles.contactWrapper}>
      {/* HERO SECTION */}
      <section className={styles.contactHero}>
        <div className="container">
          <div className={styles.heroText}>
            <span className="section-badge fusion">
              <Sparkles size={14} />
              CONNECT & COLLABORATE
            </span>
            <h1 className={styles.heroHeading}>
              Get in Touch with the <br />
              <span className="text-gradient-fusion">SyncUp 2.0 Committee</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Whether you are an IIT student, an aspiring senior mentor, or an industry partner
              seeking to sponsor our finale awards — our IEEE Student Branch organizing team is here to assist.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="section-wrapper">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Left: Contact Form */}
            <div className={`glass-card ${styles.formCard}`}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Send an Official Message</h3>
                <p className={styles.formSub}>
                  Fill out the form below. We typically respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <CheckCircle2 size={48} color="#06b6d4" />
                  </div>
                  <h4 className={styles.successTitle}>Message Dispatched Successfully!</h4>
                  <p className={styles.successDesc}>
                    Thank you, <strong>{formData.name}</strong>. The IIT IEEE Student Branch organizing team
                    has received your inquiry regarding &ldquo;{formData.subject}&rdquo; and will get back to your email ({formData.email}) shortly.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', role: 'mentee', subject: 'general', message: '' });
                    }}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.inputLabel}>Full Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Kasun Perera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={styles.textInput}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.inputLabel}>Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. kasun.p@iit.ac.lk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={styles.textInput}
                    />
                  </div>

                  <div className={styles.twoInputsRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="role" className={styles.inputLabel}>Your Designation</label>
                      <select
                        id="role"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className={styles.selectInput}
                      >
                        <option value="mentee">IIT Undergraduate (Mentee)</option>
                        <option value="mentor">Senior IIT Student / Alumni (Mentor)</option>
                        <option value="sponsor">Industry Partner / Corporate Sponsor</option>
                        <option value="faculty">Academic Staff / Faculty</option>
                      </select>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="subject" className={styles.inputLabel}>Inquiry Track</label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={styles.selectInput}
                      >
                        <option value="general">General Program Information</option>
                        <option value="pairing">Mentor-Mentee Pairing</option>
                        <option value="challenges">Challenges & Judging Rules</option>
                        <option value="sponsorship">Awards & Event Sponsorship</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="message" className={styles.inputLabel}>Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      required
                      placeholder="How can the SyncUp committee help you today?..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={styles.textAreaInput}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                    <Send size={16} />
                    <span>Send Message to Committee</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Info Cards & QR Code */}
            <div className={styles.infoCardsCol}>
              {/* Institution Card */}
              <div className={`glass-card ${styles.orgCard}`}>
                <div className={styles.orgHeader}>
                  <Building size={24} color="#f97316" />
                  <div>
                    <h4 className={styles.orgName}>Informatics Institute of Technology</h4>
                    <span className={styles.orgBranch}>IEEE Student Branch</span>
                  </div>
                </div>
                <div className={styles.contactDetailsList}>
                  <div className={styles.contactLine}>
                    <MapPin size={18} className={styles.iconDim} />
                    <span>57 Ramakrishna Rd, Wellawatte, Colombo 00600, Sri Lanka</span>
                  </div>
                  <div className={styles.contactLine}>
                    <Mail size={18} className={styles.iconDim} />
                    <span>syncup@iit.ac.lk / ieee@iit.ac.lk</span>
                  </div>
                  <div className={styles.contactLine}>
                    <GraduationCap size={18} className={styles.iconDim} />
                    <span>Faculty of Computing & Engineering</span>
                  </div>
                </div>
              </div>

              {/* QR Code Quick Join Card */}
              <div className={`glass-card ${styles.qrBox}`}>
                <div className={styles.qrInnerGrid}>
                  <div className={styles.qrImgWrap}>
                    <Image
                      src="/images/qr-code.png"
                      alt="SyncUp 2.0 Induction Session QR Code"
                      width={140}
                      height={140}
                      className={styles.qrCodeImg}
                    />
                  </div>
                  <div className={styles.qrContent}>
                    <span className="section-badge warm" style={{ marginBottom: '8px' }}>FAST REGISTER</span>
                    <h4 className={styles.qrTitle}>Induction Session QR</h4>
                    <p className={styles.qrDesc}>
                      Scan with your smartphone camera to access the official induction group and pairing notifications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mentorship Philosophy Card */}
              <div className={`glass-card ${styles.quoteCard}`}>
                <div className={styles.quoteMark}>&ldquo;</div>
                <p className={styles.quoteText}>
                  Three milestones. One relationship that grows with the student.
                  Warm and cool perspectives meeting in the middle.
                </p>
                <div className={styles.quoteAuthor}>
                  — Informatics Institute of Technology IEEE Student Branch
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="section-wrapper" id="faqs" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className="section-badge cool">KNOWLEDGE BASE</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about SyncUp 2.0, the schedule, awards, and participation logistics.
            </p>
          </div>

          <div className={styles.faqList}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`glass-card ${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}
                  onClick={() => toggleFaq(idx)}
                >
                  <div className={styles.faqQuestion}>
                    <div className={styles.faqQText}>
                      <HelpCircle size={18} className={styles.faqIcon} />
                      <span>{faq.q}</span>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`${styles.chevron} ${isOpen ? styles.chevronRotated : ''}`}
                    />
                  </div>
                  {isOpen && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
