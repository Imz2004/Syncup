'use client';

import { useState } from 'react';
import { AlertTriangle, DollarSign, RefreshCw, CheckCircle2, Flame, ShieldAlert, Sparkles, TrendingDown } from 'lucide-react';
import styles from './BudgetSimulator.module.css';

const DEFAULT_BUDGET = 50000;
const SLASHED_BUDGET = 20000;

const CATEGORIES = [
  { id: 'dev', name: 'Software & Cloud Infrastructure', defaultAlloc: 14000, min: 2000, desc: 'Hosting, database clusters, APIs, third-party licenses' },
  { id: 'design', name: 'UI/UX & Brand Design', defaultAlloc: 8000, min: 1000, desc: 'User testing, high-fidelity prototypes, design system' },
  { id: 'marketing', name: 'Marketing & Community Outreach', defaultAlloc: 9000, min: 1000, desc: 'Social ads, campus ambassadors, promo swag' },
  { id: 'events', name: 'Event Venue & Physical Logistics', defaultAlloc: 8000, min: 1000, desc: 'Space rental, A/V equipment, catering, badges' },
  { id: 'ops', name: 'Operations, SaaS & Collaboration', defaultAlloc: 6000, min: 1000, desc: 'Jira, Figma, Slack, Zoom, domain registrations' },
  { id: 'emergency', name: 'Emergency Contingency Reserve', defaultAlloc: 5000, min: 1000, desc: 'Unforeseen downtime, urgent contractor fixes' },
];

export default function BudgetSimulator() {
  const [allocations, setAllocations] = useState({
    dev: 14000,
    design: 8000,
    marketing: 9000,
    events: 8000,
    ops: 6000,
    emergency: 5000,
  });

  const [twistActive, setTwistActive] = useState(false);
  const [rationale, setRationale] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const maxBudget = twistActive ? SLASHED_BUDGET : DEFAULT_BUDGET;
  const totalAllocated = Object.values(allocations).reduce((acc, curr) => acc + curr, 0);
  const remaining = maxBudget - totalAllocated;
  const isOverBudget = remaining < 0;

  const handleSliderChange = (id, val) => {
    setAllocations(prev => ({
      ...prev,
      [id]: Number(val),
    }));
  };

  const triggerTwist = () => {
    setTwistActive(true);
    // Scale down proportionally or let user solve
    setAllocations({
      dev: 7000,
      design: 3000,
      marketing: 2000,
      events: 3000,
      ops: 2500,
      emergency: 2500,
    });
  };

  const resetChallenge = () => {
    setTwistActive(false);
    setSubmitted(false);
    setAllocations({
      dev: 14000,
      design: 8000,
      marketing: 9000,
      events: 8000,
      ops: 6000,
      emergency: 5000,
    });
  };

  return (
    <div className={`glass-card ${styles.simulatorWrapper} ${twistActive ? styles.twistTheme : ''}`} id="rs50k-challenge">
      {/* Top Header */}
      <div className={styles.simHeader}>
        <div className={styles.badgeRow}>
          <span className="section-badge warm">
            <Flame size={14} />
            Challenge 01 · 30 Minutes
          </span>
          <span className={styles.pairingTag}>Flexible Pairing · Mixed Mentors & Mentees</span>
        </div>

        <h3 className={styles.title}>The Rs50,000 Budget Gauntlet</h3>
        <p className={styles.scenarioDesc}>
          Your team is allocated a <strong>Rs50,000 budget</strong> for a high-impact student project.
          You must allocate resources across all critical departments — but you <em>cannot spend every single rupee</em>.
          Carefully build your baseline... until the unforeseen happens!
        </p>
      </div>

      {/* Twist Alert Banner */}
      {twistActive && (
        <div className={styles.twistAlert}>
          <div className={styles.twistIconCol}>
            <ShieldAlert size={32} />
          </div>
          <div className={styles.twistTextCol}>
            <div className={styles.twistTitle}>
              CRITICAL TWIST TRIGGERED: Budget Slashed to Rs20,000!
            </div>
            <p className={styles.twistBody}>
              Executive funding cuts struck! Your budget immediately plummeted from Rs50,000 to Rs20,000.
              <strong> What survives?</strong> You must rebalance allocations immediately and justify every rupee to the judges.
            </p>
          </div>
        </div>
      )}

      {/* Live Budget Meter */}
      <div className={styles.meterCard}>
        <div className={styles.meterStats}>
          <div>
            <span className={styles.meterLabel}>Budget Ceiling</span>
            <div className={styles.meterValue}>Rs {maxBudget.toLocaleString()}</div>
          </div>
          <div>
            <span className={styles.meterLabel}>Allocated Total</span>
            <div className={`${styles.meterValue} ${isOverBudget ? styles.overbudget : ''}`}>
              Rs {totalAllocated.toLocaleString()}
            </div>
          </div>
          <div>
            <span className={styles.meterLabel}>Unallocated Buffer</span>
            <div className={`${styles.meterValue} ${remaining < 0 ? styles.negative : styles.positive}`}>
              {remaining < 0 ? `-Rs ${Math.abs(remaining).toLocaleString()}` : `Rs ${remaining.toLocaleString()}`}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressBarTrack}>
          <div
            className={`${styles.progressBarFill} ${isOverBudget ? styles.barOver : ''} ${twistActive ? styles.barTwist : ''}`}
            style={{ width: `${Math.min(100, (totalAllocated / maxBudget) * 100)}%` }}
          ></div>
        </div>
        <div className={styles.progressNote}>
          {isOverBudget ? (
            <span className={styles.errNote}>
              <AlertTriangle size={14} /> Over allocated by Rs {Math.abs(remaining).toLocaleString()}! Please trim funds.
            </span>
          ) : remaining === 0 ? (
            <span className={styles.warnNote}>
              <AlertTriangle size={14} /> Rule check: You must not spend 100% of the budget. Maintain a safety buffer!
            </span>
          ) : (
            <span className={styles.successNote}>
              <CheckCircle2 size={14} /> Valid allocation: Rs {remaining.toLocaleString()} preserved as unspent surplus buffer.
            </span>
          )}
        </div>
      </div>

      {/* Sliders Grid */}
      <div className={styles.slidersGrid}>
        {CATEGORIES.map((cat) => {
          const val = allocations[cat.id];
          const pct = ((val / maxBudget) * 100).toFixed(1);
          return (
            <div key={cat.id} className={styles.sliderItem}>
              <div className={styles.sliderTop}>
                <div>
                  <h4 className={styles.catName}>{cat.name}</h4>
                  <p className={styles.catDesc}>{cat.desc}</p>
                </div>
                <div className={styles.catNumbers}>
                  <span className={styles.catAmount}>Rs {val.toLocaleString()}</span>
                  <span className={styles.catPct}>{pct}%</span>
                </div>
              </div>

              <input
                type="range"
                min="0"
                max={twistActive ? 15000 : 30000}
                step="500"
                value={val}
                onChange={(e) => handleSliderChange(cat.id, e.target.value)}
                className={styles.rangeInput}
              />
              <div className={styles.sliderScale}>
                <span>Rs 0</span>
                <span>Rs {(twistActive ? 7500 : 15000).toLocaleString()}</span>
                <span>Rs {(twistActive ? 15000 : 30000).toLocaleString()}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls & Rationale Section */}
      <div className={styles.bottomSection}>
        <div className={styles.twistControl}>
          {!twistActive ? (
            <button
              type="button"
              className="btn btn-warm"
              onClick={triggerTwist}
              style={{ width: '100%' }}
            >
              <TrendingDown size={18} />
              <span>Simulate Mid-Challenge Twist (Drop to Rs 20,000)</span>
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-outline"
              onClick={resetChallenge}
              style={{ width: '100%' }}
            >
              <RefreshCw size={16} />
              <span>Reset Challenge to Rs 50,000 Baseline</span>
            </button>
          )}
        </div>

        <div className={styles.rationaleBox}>
          <label htmlFor="rationale-input" className={styles.rationaleLabel}>
            Team Strategy & Defense Pitch (What survived & why):
          </label>
          <textarea
            id="rationale-input"
            rows="3"
            className={styles.rationaleInput}
            placeholder={
              twistActive
                ? "Explain what core features were prioritized under Rs20,000 and which nice-to-haves were cut (e.g. Action + Tool + Impact)..."
                : "Enter your pair's resource allocation thesis and justification..."
            }
            value={rationale}
            onChange={(e) => setRationale(e.target.value)}
          ></textarea>

          <div className={styles.submitRow}>
            <div className={styles.awardTag}>
              <Sparkles size={14} color="#f97316" />
              <span>Judged on: Best Strategy & Reasoning under the budget-cut twist</span>
            </div>
            <button
              type="button"
              className="btn btn-cool"
              onClick={() => setSubmitted(true)}
              disabled={isOverBudget || remaining === 0}
            >
              {submitted ? 'Strategy Locked!' : 'Lock Pair Allocation'}
            </button>
          </div>

          {submitted && (
            <div className={styles.lockedFeedback}>
              <CheckCircle2 size={18} color="#06b6d4" />
              <span>Allocation & Defense thesis recorded! Ready for judge evaluation round.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
