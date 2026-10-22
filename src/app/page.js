import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  Flame,
  Globe,
  Compass,
  Award,
  Users,
  CheckCircle2,
  Calendar,
  Layers,
  Target,
  FileCheck,
  TrendingUp,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import ScheduleTimeline from '@/components/ScheduleTimeline';
import styles from './page.module.css';

export default function HomePage() {
  const milestones = [
    {
      num: '01',
      title: 'The SDGP / DSGP Group Project',
      year: '2nd Year Milestone',
      desc: 'Pairing with senior alumni who shipped successful 2nd year projects. Stress-testing ideas, defining robust tech stacks, and constructing bulletproof Sprint 1 MVP backlogs.',
      tags: ['Idea Stress-Test', 'Architecture Blueprint', 'Sprint 1 Backlog'],
      accent: 'warm',
    },
    {
      num: '02',
      title: 'Internship Applications & Interviews',
      year: 'Preparation + Practice',
      desc: 'Transforming student resumes using the rigorous Action + Tool + Impact formula, optimizing LinkedIn presence live, and training under rapid 90-second mock interview gauntlets.',
      tags: ['Action+Tool+Impact CV', 'LinkedIn Makeover', 'Mock Gauntlet'],
      accent: 'cool',
    },
    {
      num: '03',
      title: 'Converting Internship into Full-Time Role',
      year: 'Career Transition',
      desc: 'Guidance speech and mentorship on transitioning from student intern to indispensable full-time engineer. Navigating office politics, delivering business impact, and leadership.',
      tags: ['Banu Sir Keynote', 'Career Longevity', 'Full-Time Conversion'],
      accent: 'fusion',
    },
  ];

  const awards = [
    { num: '01', title: 'Best Pair - Phase 1 (SDGP/DSGP)', desc: 'Highest combined score across Idea Stress-Test and Sprint 1 MVP Blueprint challenges.' },
    { num: '02', title: 'Best Pair - Phase 2 (Interview Gauntlet)', desc: 'Highest combined score across CV/LinkedIn makeover and rapid mock interview rounds.' },
    { num: '03', title: 'Best Strategy - Rs50,000 Challenge', desc: 'Best resource prioritization and defense reasoning under the unexpected Rs20,000 budget-cut twist.' },
    { num: '04', title: 'Best Collaboration System - Global Challenge', desc: 'Superior multi-timezone system architecture and incident triage for cross-border engineering squads.' },
    { num: '05', title: 'People’s Choice (Peer Dot-Voting)', desc: 'Recognized by fellow peers during lunch networking through cohort-wide sticker voting.' },
  ];

  const galleryImages = [
    { src: '/images/gallery-01.webp', caption: 'Senior Mentors Guiding Phase 1 Teams' },
    { src: '/images/gallery-02.webp', caption: 'Interactive Group Discussions & Icebreakers' },
    { src: '/images/gallery-03.webp', caption: '1-on-1 Resume & LinkedIn Audits' },
    { src: '/images/gallery-04.webp', caption: 'Hands-on Architectural Whiteboarding' },
    { src: '/images/gallery-05.webp', caption: 'Peer Collaboration & Problem Solving' },
    { src: '/images/gallery-06.webp', caption: 'IIT IEEE Student Branch Cohort Moments' },
  ];

  return (
    <div className={styles.homeContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            {/* Left Column: Text & CTAs */}
            <div className={styles.heroTextCol}>
              <div className="section-badge fusion">
                <Sparkles size={14} />
                <span>SyncUp 2.0 · Informatics Institute of Technology</span>
              </div>

              <h1 className={styles.heroTitle}>
                learn together. <br />
                <span className="text-gradient-fusion">build forward.</span>
              </h1>

              <p className={styles.heroSubtitle}>
                A mentor-mentee program guiding students through three defining milestones of IIT career life:
                SDGP group projects, competitive internship interviews, and full-time career conversion.
              </p>

              <div className={styles.posterConceptCallout}>
                <div className={styles.conceptIndicator}>
                  <span className={styles.warmDot}></span>
                  <span className={styles.coolDot}></span>
                </div>
                <span>Warm and cool perspectives meeting in the middle — senior wisdom meets junior ambition.</span>
              </div>

              <div className={styles.heroActions}>
                <Link href="/challenges" className="btn btn-primary">
                  <span>Explore The Two Challenges</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="#schedule" className="btn btn-outline">
                  <Calendar size={18} />
                  <span>Full-Day Agenda</span>
                </a>
              </div>

              {/* Quick Metrics */}
              <div className={styles.heroMetrics}>
                <div className={styles.metricItem}>
                  <div className={styles.metricNumber}>3</div>
                  <div className={styles.metricLabel}>Milestones</div>
                </div>
                <div className={styles.metricDivider}></div>
                <div className={styles.metricItem}>
                  <div className={styles.metricNumber}>2</div>
                  <div className={styles.metricLabel}>Grand Challenges</div>
                </div>
                <div className={styles.metricDivider}></div>
                <div className={styles.metricItem}>
                  <div className={styles.metricNumber}>1:1</div>
                  <div className={styles.metricLabel}>Mentor Pairing</div>
                </div>
                <div className={styles.metricDivider}></div>
                <div className={styles.metricItem}>
                  <div className={styles.metricNumber}>5</div>
                  <div className={styles.metricLabel}>Finale Awards</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual from PDF Page 1 */}
            <div className={styles.heroVisualCol}>
              <div className={styles.heroVisualFrame}>
                <div className={styles.heroImageGlow}></div>
                <div className={styles.heroImageCard}>
                  <Image
                    src="/images/hero-poster.jpg"
                    alt="SyncUp 2.0 Official Proposal Artwork"
                    width={520}
                    height={640}
                    className={styles.heroImg}
                    priority
                  />
                  <div className={styles.heroImageOverlay}>
                    <div className={styles.heroOverlayBadge}>
                      <ShieldCheck size={14} color="#06b6d4" />
                      <span>IEEE Student Branch Official Program</span>
                    </div>
                    <div className={styles.heroOverlayTitle}>PROJECT PROPOSAL: SyncUp 2.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSPECTIVES BANNER (PDF Page 2 Artwork) */}
      <section className={styles.perspectivesSection}>
        <div className="container">
          <div className={styles.bannerContainer}>
            <Image
              src="/images/perspectives-banner.jpg"
              alt="Warm and Cool Perspectives Meeting in the Middle"
              width={1200}
              height={450}
              className={styles.bannerImg}
            />
            <div className={styles.bannerOverlay}>
              <div className={styles.bannerTag}>MENTOR × MENTEE PHILOSOPHY</div>
              <h2 className={styles.bannerHeading}>
                Two distinct worldviews. One shared horizon.
              </h2>
              <p className={styles.bannerText}>
                The warmth of tested senior experience embraces the cool energy of raw student ambition.
                SyncUp is engineered so both sides evolve together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01: THREE MILESTONES */}
      <section className="section-wrapper" id="milestones">
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className="section-badge warm">SECTION 01</span>
            <h2 className="section-title">Program Overview</h2>
            <p className="section-subtitle">
              Three milestones. One relationship that grows with the student. SyncUp pairs senior mentors
              with junior mentees to guide them through three real milestones of IIT student life.
            </p>
          </div>

          <div className={styles.milestonesGrid}>
            {milestones.map((item) => (
              <div
                key={item.num}
                className={`glass-card ${styles.milestoneCard} ${
                  item.accent === 'warm' ? 'warm-accent' : item.accent === 'cool' ? 'cool-accent' : ''
                }`}
              >
                <div className={styles.milestoneTop}>
                  <span className={`${styles.milestoneNum} ${styles[item.accent]}`}>
                    {item.num}
                  </span>
                  <span className={styles.milestoneYear}>{item.year}</span>
                </div>

                <h3 className={styles.milestoneTitle}>{item.title}</h3>
                <p className={styles.milestoneDesc}>{item.desc}</p>

                <div className={styles.milestoneTags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Program Structure 2-Column Banner */}
          <div className={styles.structureCard}>
            <div className={styles.structureCol}>
              <span className="section-badge warm">3 Hours · 10:00 AM</span>
              <h3 className={styles.structureTitle}>Pre-Event Workshop</h3>
              <p className={styles.structureDesc}>
                Builds the mentorship mindset and frames it as a career-long skill ahead of the main day.
                Features an executive speaker session on how to ask for help without feeling like a burden,
                building mentor networks, and cohort icebreakers.
              </p>
            </div>

            <div className={styles.structureDivider}></div>

            <div className={styles.structureCol}>
              <span className="section-badge cool">Full-Day Track · 9:00 AM</span>
              <h3 className={styles.structureTitle}>The Main Event Day</h3>
              <p className={styles.structureDesc}>
                A packed day of hands-on paired challenges (SDGP Kickstart, Interview Gauntlet, Rs50k Budget Challenge,
                Global Team Challenge), Banu Sir&apos;s guidance speech, energy resets, and finale awards recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE TWO GRAND CHALLENGES HIGHLIGHT TEASER */}
      <section className={`${styles.challengesSpotlightSection} section-wrapper`} id="challenges-preview">
        <div className="container">
          <div className={styles.spotlightHeader}>
            <div>
              <span className="section-badge fusion">GRAND FINALE SEGMENT</span>
              <h2 className="section-title">The Afternoon General Challenges</h2>
              <p className="section-subtitle">
                At 1:00 PM, mentors and mentees enter flexible pairing for two intense 30-minute challenges —
                complete with mid-round dramatic twists!
              </p>
            </div>
            <Link href="/challenges" className="btn btn-primary">
              <span>Try Challenge Simulators</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className={styles.twoChallengesGrid}>
            {/* Challenge 01 */}
            <div className={`glass-card ${styles.challengeTeaserCard} warm-accent`}>
              <div className={styles.challengeCardImgWrap}>
                <Image
                  src="/images/challenge-general.jpg"
                  alt="Rs 50,000 Challenge Concept Artwork"
                  width={400}
                  height={220}
                  className={styles.challengeCardImg}
                />
                <span className={styles.challengeImgTag}>01 · The Rs50,000 Challenge</span>
              </div>
              <div className={styles.challengeCardBody}>
                <div className={styles.twistNotice}>
                  <Flame size={16} color="#f97316" />
                  <span>The Twist: Budget Slashed from Rs50k to Rs20k!</span>
                </div>
                <h3 className={styles.challengeCardTitle}>The Rs50,000 Budget Gauntlet</h3>
                <p className={styles.challengeCardDesc}>
                  Pairs must allocate capital across Marketing, Development, Design, Events, and Operations.
                  When the surprise Rs20,000 drop strikes: What survives? What gets cut?
                </p>
                <Link href="/challenges#rs50k-challenge" className={styles.learnMoreLink}>
                  <span>Simulate this challenge</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Challenge 02 */}
            <div className={`glass-card ${styles.challengeTeaserCard} cool-accent`}>
              <div className={styles.challengeCardImgWrap}>
                <Image
                  src="/images/challenge-sdgp.jpg"
                  alt="Global Team Challenge Concept Artwork"
                  width={400}
                  height={220}
                  className={styles.challengeCardImg}
                />
                <span className={styles.challengeImgTag}>02 · The Global Team Challenge</span>
              </div>
              <div className={styles.challengeCardBody}>
                <div className={styles.twistNoticeCool}>
                  <Globe size={16} color="#06b6d4" />
                  <span>The Twist: Cross-Border Handoff Breakdown!</span>
                </div>
                <h3 className={styles.challengeCardTitle}>Global Team Collaboration System</h3>
                <p className={styles.challengeCardDesc}>
                  Pairs architect a collaboration matrix across Sri Lanka, India, UK, and Japan.
                  When a misunderstanding causes a critical production mistake, how do you bulletproof the system?
                </p>
                <Link href="/challenges#global-challenge" className={styles.learnMoreLinkCool}>
                  <span>Build the system blueprint</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL SCHEDULE TIMELINE */}
      <section className="section-wrapper" id="schedule">
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className="section-badge cool">AGENDA</span>
            <h2 className="section-title">Schedule & Event Flow</h2>
            <p className="section-subtitle">
              From morning pairings to the evening awards ceremony — every minute is designed for growth,
              practical output, and meaningful mentorship.
            </p>
          </div>

          <ScheduleTimeline />
        </div>
      </section>

      {/* KEYNOTE GUIDANCE SPEECH HIGHLIGHT */}
      <section className={styles.keynoteSection}>
        <div className="container">
          <div className={`glass-card ${styles.keynoteCard}`}>
            <div className={styles.keynoteGrid}>
              <div className={styles.keynoteText}>
                <span className="section-badge warm">MAIN EVENT DAY · 2:30 PM - 3:30 PM</span>
                <h2 className={styles.keynoteTitle}>
                  Guidance Speech by Banu Sir
                </h2>
                <h4 className={styles.keynoteTopic}>
                  &ldquo;Transitioning from Internship to Permanent Role&rdquo;
                </h4>
                <p className={styles.keynoteBody}>
                  Landing an internship is only the first step. Banu Sir delivers an exclusive, high-impact guidance
                  session for all IIT mentees and mentors on how to prove technical value, build strong internal sponsorship,
                  exceed expectations during industrial placement, and convert an internship into a prestigious permanent offer.
                </p>
                <div className={styles.keynoteTakeaways}>
                  <div className={styles.takeawayItem}>
                    <CheckCircle2 size={18} color="#f97316" />
                    <span>Communicating under pressure & managing expectations</span>
                  </div>
                  <div className={styles.takeawayItem}>
                    <CheckCircle2 size={18} color="#f97316" />
                    <span>Owning technical deliverables beyond assigned tickets</span>
                  </div>
                  <div className={styles.takeawayItem}>
                    <CheckCircle2 size={18} color="#f97316" />
                    <span>Navigating full-time employment conversion pathways</span>
                  </div>
                </div>
              </div>

              <div className={styles.keynoteVisual}>
                <Image
                  src="/images/challenge-interview.jpg"
                  alt="Banu Sir Guidance Speech Artwork"
                  width={460}
                  height={280}
                  className={styles.keynoteImg}
                />
                <div className={styles.keynoteQuote}>
                  &ldquo;refine the story. rehearse the room.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: AWARDS & EVALUATION */}
      <section className="section-wrapper" id="awards">
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className="section-badge fusion">SECTION 04</span>
            <h2 className="section-title">Awards & Evaluation</h2>
            <p className="section-subtitle">
              &ldquo;recognise the work. reward the relationship.&rdquo; Standout mentor-mentee pairs are evaluated
              live across four distinct criteria.
            </p>
          </div>

          <div className={styles.awardsGrid}>
            {/* Awards List */}
            <div className={styles.awardCategoriesCol}>
              <h3 className={styles.colSubheading}>5 Award Categories</h3>
              <div className={styles.awardCategoryCards}>
                {awards.map((aw) => (
                  <div key={aw.num} className={`glass-card ${styles.awardCard}`}>
                    <div className={styles.awardNum}>{aw.num}</div>
                    <div>
                      <h4 className={styles.awardName}>{aw.title}</h4>
                      <p className={styles.awardSub}>{aw.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Evaluation Scorecard */}
            <div className={styles.evalScorecardCol}>
              <div className={`glass-card ${styles.scorecardBox}`}>
                <div className={styles.scorecardHeader}>
                  <Award size={24} color="#f97316" />
                  <h3 className={styles.scorecardTitle}>Evaluation Method</h3>
                </div>
                <div className={styles.scorecardScale}>
                  SCORECARD · 4 CRITERIA · 1-5 SCALE EACH
                </div>
                <p className={styles.scorecardDesc}>
                  2-3 floating judges circulate during each challenge block, scoring pairs immediately
                  after their 30-minute round to prevent end-of-day scoring delays.
                </p>

                <div className={styles.criteriaList}>
                  <div className={styles.criteriaItem}>
                    <strong>1. Collaboration:</strong>
                    <span>Mentor guiding and empowering, not dominating the solution.</span>
                  </div>
                  <div className={styles.criteriaItem}>
                    <strong>2. Output Quality & Creativity:</strong>
                    <span>Depth of architectural thought and uniqueness of problem solving.</span>
                  </div>
                  <div className={styles.criteriaItem}>
                    <strong>3. Communication Clarity:</strong>
                    <span>Crisp, persuasive pitch delivered under strict time constraints.</span>
                  </div>
                  <div className={styles.criteriaItem}>
                    <strong>4. Problem-Solving Under Time Limit:</strong>
                    <span>Graceful adaptation to unexpected mid-challenge twists.</span>
                  </div>
                </div>

                <div className={styles.peopleChoiceNote}>
                  <strong>People&apos;s Choice Voting:</strong> Each participant receives one voting sticker during lunch
                  to place on their favorite pair&apos;s board.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COHORT MOMENTS GALLERY */}
      <section className="section-wrapper" id="gallery">
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className="section-badge cool">COMMUNITY</span>
            <h2 className="section-title">SyncUp Moments & Cohort Energy</h2>
            <p className="section-subtitle">
              Moments from the Informatics Institute of Technology IEEE Student Branch mentorship initiatives.
            </p>
          </div>

          <div className={styles.galleryGrid}>
            {galleryImages.map((img, i) => (
              <div key={i} className={styles.galleryCard}>
                <Image
                  src={img.src}
                  alt={img.caption}
                  width={400}
                  height={270}
                  className={styles.galleryImg}
                />
                <div className={styles.galleryOverlay}>
                  <span>{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAST ACCESS / CTA BANNER */}
      <section className={styles.bottomCtaSection}>
        <div className="container">
          <div className={`glass-card ${styles.ctaCard}`}>
            <div className={styles.ctaGrid}>
              <div className={styles.ctaText}>
                <span className="section-badge fusion">READY FOR FINALE?</span>
                <h2 className={styles.ctaHeading}>
                  Experience SyncUp 2.0 Finale
                </h2>
                <p className={styles.ctaDesc}>
                  Check out the full challenge blueprints, interactive budgeting calculators, and reach out to the
                  IIT IEEE Student Branch committee.
                </p>
                <div className={styles.ctaButtons}>
                  <Link href="/challenges" className="btn btn-primary">
                    <span>Enter Challenges Hub</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link href="/contact" className="btn btn-outline">
                    <span>Contact Organizing Committee</span>
                  </Link>
                </div>
              </div>

              <div className={styles.ctaQrCol}>
                <div className={styles.qrCard}>
                  <Image
                    src="/images/qr-code.png"
                    alt="SyncUp 2.0 QR Code for Induction"
                    width={180}
                    height={180}
                    className={styles.qrImg}
                  />
                  <span className={styles.qrLabel}>Scan for Induction Session</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
