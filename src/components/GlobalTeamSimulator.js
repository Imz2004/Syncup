'use client';

import { useState } from 'react';
import { Globe, Clock, ShieldAlert, CheckCircle, ArrowRight, BookOpen, AlertOctagon, Sparkles, MessageSquare, Zap } from 'lucide-react';
import styles from './GlobalTeamSimulator.module.css';

const LOCATIONS = [
  { city: 'Colombo', country: 'Sri Lanka', tz: 'GMT +5:30', flag: '🇱🇰', role: 'Product & Fullstack Leads' },
  { city: 'New Delhi', country: 'India', tz: 'GMT +5:30', flag: '🇮🇳', role: 'Backend & Data Engineering' },
  { city: 'London', country: 'UK', tz: 'GMT +00:00', flag: '🇬🇧', role: 'DevOps & Enterprise Architecture' },
  { city: 'Tokyo', country: 'Japan', tz: 'GMT +09:00', flag: '🇯🇵', role: 'QA & Edge Systems Engineering' },
];

export default function GlobalTeamSimulator() {
  const [activeTab, setActiveTab] = useState('rules');
  const [crisisActive, setCrisisActive] = useState(false);
  const [selectedMitigations, setSelectedMitigations] = useState([]);
  const [systemBlueprint, setSystemBlueprint] = useState({
    communication: 'async-first',
    standupWindow: '13:30-14:30 GMT (Golden Window)',
    taskTracker: 'Linear / Jira with strict DoD',
    docsPlatform: 'Notion ADRs + Loom Async Demos',
    conflictProtocol: 'Blameless Postmortems + Tiered Escalation'
  });

  const toggleMitigation = (id) => {
    setSelectedMitigations(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const MITIGATIONS = [
    { id: 'm1', title: 'Automated CI/CD Handoff Guard', desc: 'No merges allowed without passing automated test suites in all environments, irrespective of timezone handoffs.' },
    { id: 'm2', title: 'Async Handover Checklist (Loom + Jira)', desc: 'Mandatory 3-point handover briefing recorded by UK team before logging off for Tokyo QA to resume.' },
    { id: 'm3', title: 'Defined 90-Min Overlap Golden Window', desc: 'Core sync window held at 13:30 GMT when all 4 teams have working hours overlap for live blockers.' },
    { id: 'm4', title: '24/7 Incident PagerDuty Rotation', desc: 'Clear primary and secondary escalation on-call schedules with unambiguous ownership.' },
  ];

  return (
    <div className={`glass-card ${styles.simulatorWrapper} ${crisisActive ? styles.crisisTheme : ''}`} id="global-challenge">
      {/* Top Header */}
      <div className={styles.simHeader}>
        <div className={styles.badgeRow}>
          <span className="section-badge cool">
            <Globe size={14} />
            Challenge 02 · 30 Minutes
          </span>
          <span className={styles.pairingTag}>Flexible Pairing · Cross-Border System Architecture</span>
        </div>

        <h3 className={styles.title}>The Global Team Collaboration System</h3>
        <p className={styles.scenarioDesc}>
          Your pair must engineer a complete collaboration system for an engineering unit distributed across{' '}
          <strong>Sri Lanka, India, the United Kingdom, and Japan</strong>.
          You must harmonize disparate time zones, cultural nuances, and communication styles.
        </p>
      </div>

      {/* Global Timezone Hubs */}
      <div className={styles.locationsGrid}>
        {LOCATIONS.map((loc) => (
          <div key={loc.city} className={styles.locationCard}>
            <div className={styles.locHeader}>
              <span className={styles.flag}>{loc.flag}</span>
              <div className={styles.tzBadge}>{loc.tz}</div>
            </div>
            <div className={styles.locCity}>{loc.city}</div>
            <div className={styles.locCountry}>{loc.country}</div>
            <div className={styles.locRole}>{loc.role}</div>
          </div>
        ))}
      </div>

      {/* Golden Overlap Window Banner */}
      <div className={styles.overlapCard}>
        <div className={styles.overlapIcon}>
          <Clock size={20} color="#06b6d4" />
        </div>
        <div className={styles.overlapContent}>
          <strong>Synchronous Overlap Window: 13:30 - 15:00 GMT</strong>
          <span className={styles.overlapSub}>
            (Colombo 19:00 | Delhi 19:00 | London 13:30 | Tokyo 22:30) — Strict async-first required outside this window!
          </span>
        </div>
      </div>

      {/* Crisis Banner */}
      {crisisActive && (
        <div className={styles.crisisBanner}>
          <div className={styles.crisisIcon}>
            <AlertOctagon size={32} />
          </div>
          <div>
            <div className={styles.crisisTitle}>
              THE TWIST: Cross-Border Handoff Misunderstanding Causes Major Outage!
            </div>
            <p className={styles.crisisDesc}>
              A UK developer assumed Tokyo would deploy the staging migration. Tokyo assumed London already executed it.
              Production database experienced a schema collision, causing a <strong>4-hour outage affecting 15,000 users</strong>.
              How does your system triage the error and guarantee it never happens again?
            </p>
          </div>
        </div>
      )}

      {/* Blueprint Design Tabs */}
      <div className={styles.tabsNav}>
        {[
          { id: 'rules', label: '1. Communication Rules' },
          { id: 'meetings', label: '2. Meeting Structure' },
          { id: 'tasks', label: '3. Task Management' },
          { id: 'docs', label: '4. Documentation' },
          { id: 'conflict', label: '5. Conflict & Twist Guard' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className={styles.tabContent}>
        {activeTab === 'rules' && (
          <div className={styles.panelBlock}>
            <h4 className={styles.panelTitle}>Asynchronous vs. Synchronous Communication Protocol</h4>
            <div className={styles.optionsGrid}>
              <div 
                className={`${styles.optionCard} ${systemBlueprint.communication === 'async-first' ? styles.selectedOption : ''}`}
                onClick={() => setSystemBlueprint({ ...systemBlueprint, communication: 'async-first' })}
              >
                <div className={styles.optTitle}>Async-First (Default)</div>
                <p className={styles.optDesc}>
                  All decisions documented in writing with 12-hour response SLA. No impromptu Zoom calls without prior written agenda.
                </p>
              </div>
              <div 
                className={`${styles.optionCard} ${systemBlueprint.communication === 'sync-escalation' ? styles.selectedOption : ''}`}
                onClick={() => setSystemBlueprint({ ...systemBlueprint, communication: 'sync-escalation' })}
              >
                <div className={styles.optTitle}>Synchronous Escalation</div>
                <p className={styles.optDesc}>
                  Urgent blockers trigger Slack call within golden overlap hour. Clear fallback phone on-call directory.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'meetings' && (
          <div className={styles.panelBlock}>
            <h4 className={styles.panelTitle}>Meeting Cadence & Overlap Protocol</h4>
            <p className={styles.tabText}>
              Minimizing fatigue across a 9-hour time spread is essential. Which meeting schedule governs your squad?
            </p>
            <div className={styles.checkCard}>
              <CheckCircle size={18} color="#06b6d4" />
              <div>
                <strong>Weekly 4-Way All-Hands:</strong> Every Tuesday 13:45 GMT (45 min max, hard stop).
              </div>
            </div>
            <div className={styles.checkCard}>
              <CheckCircle size={18} color="#06b6d4" />
              <div>
                <strong>Daily Standups:</strong> Handled asynchronously via Slack bot at 09:00 local time per hub.
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className={styles.panelBlock}>
            <h4 className={styles.panelTitle}>Task Definition of Done (DoD) & Handoff Checklist</h4>
            <p className={styles.tabText}>
              Tickets must follow the strict <strong>Action + Tool + Impact</strong> format to prevent cross-cultural ambiguity.
            </p>
            <ul className={styles.protocolList}>
              <li>Every pull request must specify target deployment timezone and designated sign-off hub.</li>
              <li>No ticket marked &lsquo;Done&rsquo; until automated acceptance criteria pass in CI/CD pipeline.</li>
              <li>Handoff comments must include: 1) What shipped, 2) Blockers encountered, 3) Immediate next step.</li>
            </ul>
          </div>
        )}

        {activeTab === 'docs' && (
          <div className={styles.panelBlock}>
            <h4 className={styles.panelTitle}>Single Source of Truth Documentation Engine</h4>
            <div className={styles.optionsGrid}>
              <div className={styles.optionCard}>
                <BookOpen size={20} color="#f97316" />
                <div className={styles.optTitle}>Architecture Decision Records (ADRs)</div>
                <p className={styles.optDesc}>
                  All system changes require a short 1-page markdown ADR committed directly in repo before code review.
                </p>
              </div>
              <div className={styles.optionCard}>
                <MessageSquare size={20} color="#06b6d4" />
                <div className={styles.optTitle}>Loom Asynchronous Walkthroughs</div>
                <p className={styles.optDesc}>
                  Engineers record 3-minute video demos explaining context for teammates sleeping on other continents.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'conflict' && (
          <div className={styles.panelBlock}>
            <h4 className={styles.panelTitle}>Blameless Postmortem & Misunderstanding Safeguards</h4>
            <p className={styles.tabText}>
              Select the preventative safeguards your team will enact to eliminate communication breakdowns:
            </p>
            <div className={styles.mitigationsGrid}>
              {MITIGATIONS.map((m) => {
                const active = selectedMitigations.includes(m.id);
                return (
                  <div
                    key={m.id}
                    className={`${styles.mitigationItem} ${active ? styles.mitigationActive : ''}`}
                    onClick={() => toggleMitigation(m.id)}
                  >
                    <div className={styles.mitigationHeader}>
                      <span className={styles.mitigationCheckbox}>
                        {active ? <CheckCircle size={16} /> : <div className={styles.emptyCircle} />}
                      </span>
                      <strong className={styles.mitigationTitle}>{m.title}</strong>
                    </div>
                    <p className={styles.mitigationBody}>{m.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className={styles.bottomBar}>
        {!crisisActive ? (
          <button
            type="button"
            className="btn btn-warm"
            onClick={() => {
              setCrisisActive(true);
              setActiveTab('conflict');
            }}
          >
            <Zap size={16} />
            <span>Simulate Twist: Timezone Handoff Misunderstanding</span>
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setCrisisActive(false)}
          >
            <span>Reset Crisis Scenario</span>
          </button>
        )}

        <div className={styles.awardCriteria}>
          <Sparkles size={14} color="#06b6d4" />
          <span>Judged on: System design completeness & handling of the misunderstanding twist</span>
        </div>
      </div>
    </div>
  );
}
