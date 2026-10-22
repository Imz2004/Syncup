import Image from 'next/image';
import Link from 'next/link';
import {
  Flame,
  Globe,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Target,
  FileCode,
  Users,
  Compass,
  CheckCircle2,
  Award,
  ChevronDown
} from 'lucide-react';
import BudgetSimulator from '@/components/BudgetSimulator';
import GlobalTeamSimulator from '@/components/GlobalTeamSimulator';
import styles from './page.module.css';

export const metadata = {
  title: 'The Challenges | SyncUp 2.0 Finale',
  description: 'Explore the full gauntlet of SyncUp 2.0 challenges: SDGP/DSGP Kickstart, Internship Interview Gauntlet, and the 2 Afternoon Grand Challenges with live mid-round twists.',
};

export default function ChallengesPage() {
  return (
    <div className={styles.challengesPageWrapper}>
      {/* HEADER SECTION */}
      <section className={styles.challengesHero}>
        <div className="container">
          <div className={styles.heroText}>
            <span className="section-badge fusion">
              <Sparkles size={14} />
              SYNCUP 2.0 GAUNTLET
            </span>
            <h1 className={styles.heroHeading}>
              Tested Under Pressure. <br />
              <span className="text-gradient-fusion">The Two Grand Challenges</span>
            </h1>
            <p className={styles.heroSubtitle}>
              SyncUp pairs senior mentors with junior mentees to solve authentic real-world engineering,
              budgeting, and distributed collaboration problems — elevated with unexpected mid-challenge twists!
            </p>

            <div className={styles.quickNavChips}>
              <a href="#rs50k-challenge" className={styles.navChip}>
                <Flame size={14} color="#f97316" />
                <span>Challenge 1: Rs50,000 Budget Twist</span>
              </a>
              <a href="#global-challenge" className={styles.navChip}>
                <Globe size={14} color="#06b6d4" />
                <span>Challenge 2: Global Team Matrix</span>
              </a>
              <a href="#phase1" className={styles.navChip}>
                <span>Phase 1: SDGP Kickstart</span>
              </a>
              <a href="#phase2" className={styles.navChip}>
                <span>Phase 2: Interview Gauntlet</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE TWO GRAND AFTERNOON CHALLENGES */}
      <section className="section-wrapper" id="grand-challenges">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-badge warm">AFTERNOON TRACK · 1:00 PM – 2:00 PM</span>
            <h2 className="section-title">The Two Grand Challenges</h2>
            <p className="section-subtitle">
              &ldquo;prioritise. communicate. adapt.&rdquo; Not tied to a specific milestone — mentors and mentees
              are flexibly paired from morning cohorts to face real engineering leadership dilemmas.
            </p>
          </div>

          {/* GRAND CHALLENGE 01: RS 50,000 BUDGET */}
          <div className={styles.challengeBlock} id="rs50k-section">
            <div className={styles.challengeMetaBanner}>
              <div className={styles.metaLeft}>
                <div className={styles.challengeNumTag}>01</div>
                <div>
                  <h3 className={styles.metaTitle}>The Rs50,000 Challenge</h3>
                  <div className={styles.metaSub}>30 Minutes · Flexible Pairing · Resource Allocation & Triage</div>
                </div>
              </div>
              <div className={styles.metaTwistPill}>
                <Flame size={16} />
                <span>Twist: Budget Plummets to Rs20,000</span>
              </div>
            </div>

            <div className={styles.challengeDetailGrid}>
              <div className={styles.challengeNarrative}>
                <h4 className={styles.narrativeTitle}>The Brief & Core Conflict</h4>
                <p className={styles.narrativeText}>
                  Your pair is handed a <strong>Rs50,000 budget</strong> for a high-impact student project.
                  You must allocate capital across Marketing, Development, Design, Events, Operations, and Emergency.
                  The rule: <em>you cannot spend everything</em>. A safety buffer is mandatory.
                </p>

                <div className={styles.twistBox}>
                  <div className={styles.twistBoxHeader}>
                    <ShieldAlert size={20} color="#f97316" />
                    <strong>The Dramatic Twist:</strong>
                  </div>
                  <p>
                    Midway through planning, management announces emergency cost cuts.
                    The budget suddenly drops to <strong>Rs20,000</strong>. What survives? Which features are preserved
                    as core MVP, and which are brutally cut?
                  </p>
                </div>

                <div className={styles.judgingHighlight}>
                  <Award size={18} color="#f97316" />
                  <div>
                    <strong>Award 03 at Finale:</strong> Best Strategy - Rs50,000 Challenge (awarded for highest
                    prioritization clarity & reasoning under the budget-cut twist).
                  </div>
                </div>
              </div>

              <div className={styles.challengeImageCard}>
                <Image
                  src="/images/challenge-general.jpg"
                  alt="SyncUp General Challenge Official Artwork"
                  width={400}
                  height={300}
                  className={styles.detailImg}
                />
                <div className={styles.imgTagline}>
                  &ldquo;prioritise. communicate. adapt.&rdquo;
                </div>
              </div>
            </div>

            {/* INTERACTIVE SIMULATOR FOR CHALLENGE 1 */}
            <BudgetSimulator />
          </div>

          {/* GRAND CHALLENGE 02: GLOBAL TEAM CHALLENGE */}
          <div className={`${styles.challengeBlock} ${styles.challengeBlockCool}`} id="global-section" style={{ marginTop: '80px' }}>
            <div className={styles.challengeMetaBanner}>
              <div className={styles.metaLeft}>
                <div className={`${styles.challengeNumTag} ${styles.coolTag}`}>02</div>
                <div>
                  <h3 className={styles.metaTitle}>The Global Team Challenge</h3>
                  <div className={styles.metaSub}>30 Minutes · Flexible Pairing · Distributed Systems Design</div>
                </div>
              </div>
              <div className={`${styles.metaTwistPill} ${styles.coolTwistPill}`}>
                <Globe size={16} />
                <span>Twist: Cross-Border Outage Misunderstanding</span>
              </div>
            </div>

            <div className={styles.challengeDetailGrid}>
              <div className={styles.challengeNarrative}>
                <h4 className={styles.narrativeTitle}>The Brief & Core Conflict</h4>
                <p className={styles.narrativeText}>
                  Your pair designs a complete collaboration system for an engineering team spread across{' '}
                  <strong>Sri Lanka, India, the United Kingdom, and Japan</strong>.
                  Each office has distinct working hours, communication cultures, and technical tooling.
                  You must define communication rules, meeting structure, task management, documentation, and conflict management.
                </p>

                <div className={`${styles.twistBox} ${styles.twistBoxCool}`}>
                  <div className={styles.twistBoxHeader}>
                    <ShieldAlert size={20} color="#06b6d4" />
                    <strong>The Dramatic Twist:</strong>
                  </div>
                  <p>
                    A critical misunderstanding between London and Tokyo during an overnight deployment handoff
                    causes a major production database failure! How do you triage the incident blamelessly,
                    and what concrete architectural safeguards prevent it from recurring?
                  </p>
                </div>

                <div className={styles.judgingHighlight}>
                  <Award size={18} color="#06b6d4" />
                  <div>
                    <strong>Award 04 at Finale:</strong> Best Collaboration System - Global Team Challenge (awarded
                    for best system architecture & handling of the misunderstanding twist).
                  </div>
                </div>
              </div>

              <div className={styles.challengeImageCard}>
                <Image
                  src="/images/challenge-sdgp.jpg"
                  alt="SyncUp Global Systems Design Artwork"
                  width={400}
                  height={300}
                  className={styles.detailImg}
                />
                <div className={styles.imgTagline}>
                  &ldquo;build the idea. then test the person.&rdquo;
                </div>
              </div>
            </div>

            {/* INTERACTIVE SIMULATOR FOR CHALLENGE 2 */}
            <GlobalTeamSimulator />
          </div>
        </div>
      </section>

      {/* SECTION: PHASE 1 & PHASE 2 MORNING TRACKS */}
      <section className="section-wrapper" id="morning-phases">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-badge fusion">MORNING FOUNDATION</span>
            <h2 className="section-title">Phase 1 & Phase 2 Challenges</h2>
            <p className="section-subtitle">
              Before the afternoon grand challenges, pairs complete four milestone sprints covering SDGP group
              projects and internship interview readiness.
            </p>
          </div>

          <div className={styles.phasesGrid}>
            {/* Phase 1 Card */}
            <div className={`glass-card ${styles.phaseDetailCard} warm-accent`} id="phase1">
              <div className={styles.phaseHeader}>
                <span className="section-badge warm">10:00 - 11:00 AM · SAME PAIR</span>
                <h3 className={styles.phaseTitle}>Phase 1 - SDGP / DSGP Kickstart</h3>
                <p className={styles.phaseSub}>
                  Mentors who successfully delivered 2nd year projects stress-test the next generation&apos;s ideas.
                </p>
              </div>

              <div className={styles.challengeItemsList}>
                <div className={styles.chItem}>
                  <div className={styles.chItemTop}>
                    <span className={styles.chItemNum}>01</span>
                    <div>
                      <h4 className={styles.chItemTitle}>Idea Stress-Test & Refine</h4>
                      <span className={styles.chItemDuration}>Challenge 1 · 30 Min</span>
                    </div>
                  </div>
                  <p className={styles.chItemDesc}>
                    Mentee pitches their SDGP/DSGP idea. Mentor plays &ldquo;friendly skeptic,&rdquo; asking the hardest questions
                    a panel would ask — scope, feasibility, tech risk, data availability, and uniqueness. Pair writes
                    a refined one-line problem statement together.
                  </p>
                </div>

                <div className={styles.chItem}>
                  <div className={styles.chItemTop}>
                    <span className={styles.chItemNum}>02</span>
                    <div>
                      <h4 className={styles.chItemTitle}>Build the Blueprint</h4>
                      <span className={styles.chItemDuration}>Challenge 2 · 30 Min</span>
                    </div>
                  </div>
                  <p className={styles.chItemDesc}>
                    <strong>15 min:</strong> Mentor shares real tech stacks they&apos;ve shipped with; pair maps requirements
                    against options (learning curve, familiarity, scalability).
                    <br />
                    <strong>15 min:</strong> Pair turns the chosen stack into a mini 5-item Sprint 1 backlog
                    (Must-have / Nice-to-have / Cut for MVP).
                  </p>
                </div>
              </div>

              <div className={styles.phaseCardFooter}>
                <Image
                  src="/images/challenge-sdgp.jpg"
                  alt="Phase 1 Illustration"
                  width={360}
                  height={180}
                  className={styles.phaseFooterImg}
                />
                <span className={styles.phaseTagline}>&ldquo;build the idea. then test the person.&rdquo;</span>
              </div>
            </div>

            {/* Phase 2 Card */}
            <div className={`glass-card ${styles.phaseDetailCard} cool-accent`} id="phase2">
              <div className={styles.phaseHeader}>
                <span className="section-badge cool">11:00 - 12:00 PM · NEW PAIR</span>
                <h3 className={styles.phaseTitle}>Phase 2 - Internship Interview Gauntlet</h3>
                <p className={styles.phaseSub}>
                  Quick 5-minute re-pairing reveal occurs at 10:55 AM before diving into industrial interview prep.
                </p>
              </div>

              <div className={styles.challengeItemsList}>
                <div className={styles.chItem}>
                  <div className={styles.chItemTop}>
                    <span className={`${styles.chItemNum} ${styles.coolNum}`}>01</span>
                    <div>
                      <h4 className={styles.chItemTitle}>CV & LinkedIn Makeover</h4>
                      <span className={styles.chItemDuration}>Challenge 1 · 30 Min</span>
                    </div>
                  </div>
                  <p className={styles.chItemDesc}>
                    <strong>20 min:</strong> Mentor critiques mentee&apos;s CV. Pair rewrites the weakest bullet using the strict{' '}
                    <strong>Action + Tool + Impact</strong> formula.
                    <br />
                    <strong>10 min:</strong> Pair audits mentee&apos;s LinkedIn profile and rewrites the headline live to command
                    recruiter interest.
                  </p>
                </div>

                <div className={styles.chItem}>
                  <div className={styles.chItemTop}>
                    <span className={`${styles.chItemNum} ${styles.coolNum}`}>02</span>
                    <div>
                      <h4 className={styles.chItemTitle}>Pitch & Mock Interview Gauntlet</h4>
                      <span className={styles.chItemDuration}>Challenge 2 · 30 Min</span>
                    </div>
                  </div>
                  <p className={styles.chItemDesc}>
                    <strong>10 min:</strong> Mentee delivers a crisp 60-second &ldquo;Tell me about yourself&rdquo; pitch; mentor gives instant feedback.
                    <br />
                    <strong>20 min:</strong> Mentor fires 3-4 rapid technical/behavioral mock questions; mentee answers under 90 seconds each
                    with rapid critiques after every round.
                  </p>
                </div>
              </div>

              <div className={styles.phaseCardFooter}>
                <Image
                  src="/images/challenge-interview.jpg"
                  alt="Phase 2 Illustration"
                  width={360}
                  height={180}
                  className={styles.phaseFooterImg}
                />
                <span className={styles.phaseTagline}>&ldquo;refine the story. rehearse the room.&rdquo;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVALUATION RUBRIC */}
      <section className="section-wrapper" id="evaluation">
        <div className="container">
          <div className={`glass-card ${styles.rubricCard}`}>
            <div className={styles.rubricGrid}>
              <div>
                <span className="section-badge fusion">JUDGING STANDARD</span>
                <h3 className={styles.rubricTitle}>How Pairs Are Evaluated</h3>
                <p className={styles.rubricDesc}>
                  Every challenge round is judged on a strict 1-5 scale across four key criteria by floating judges
                  circulating the room. Scores are calculated immediately after each 30-minute block.
                </p>
                <div className={styles.rubricNote}>
                  <CheckCircle2 size={18} color="#f97316" />
                  <span>Judges submit scorecards right after each block — no end-of-day scoring scramble!</span>
                </div>
              </div>

              <div className={styles.scoreScaleCol}>
                <div className={styles.scaleItem}>
                  <div className={styles.scaleScore}>1-5</div>
                  <div>
                    <strong>Collaboration</strong>
                    <p>Mentor guiding and empowering, not dominating the solution.</p>
                  </div>
                </div>
                <div className={styles.scaleItem}>
                  <div className={styles.scaleScore}>1-5</div>
                  <div>
                    <strong>Quality & Creativity of Output</strong>
                    <p>Depth of technical reasoning, uniqueness, and architectural clarity.</p>
                  </div>
                </div>
                <div className={styles.scaleItem}>
                  <div className={styles.scaleScore}>1-5</div>
                  <div>
                    <strong>Communication Clarity</strong>
                    <p>Concise, persuasive delivery under tight 30-minute time limits.</p>
                  </div>
                </div>
                <div className={styles.scaleItem}>
                  <div className={styles.scaleScore}>1-5</div>
                  <div>
                    <strong>Problem-Solving Under Pressure</strong>
                    <p>Composure, analytical agility, and recovery when the twist strikes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className={styles.pageCta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>Ready to Experience SyncUp 2.0?</h3>
            <p className={styles.ctaSub}>
              Have questions regarding pairing, judging, or sponsorship? Get in touch with the IIT IEEE Student Branch.
            </p>
            <div className={styles.ctaBtnRow}>
              <Link href="/contact" className="btn btn-primary">
                <span>Contact Organizing Committee</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="/" className="btn btn-outline">
                <span>Back to Home Overview</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
