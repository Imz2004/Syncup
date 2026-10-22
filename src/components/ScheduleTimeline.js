'use client';

import { useState } from 'react';
import { Calendar, Clock, Trophy, Flame, Users, Sparkles, ChevronRight, Compass } from 'lucide-react';
import styles from './ScheduleTimeline.module.css';

const MAIN_EVENT_ITEMS = [
  {
    time: '9:00 - 9:20 AM',
    duration: '20 min',
    title: 'Opening Ceremony & Sponsor Keynote',
    desc: 'Welcoming senior mentors and junior mentees. Introduction from IEEE Student Branch and partner sponsors.',
    type: 'ceremony',
    badge: 'Opening'
  },
  {
    time: '9:20 - 9:30 AM',
    duration: '10 min',
    title: 'Mentor-Mentee Pairing Reveal',
    desc: 'Phase 1 pairs revealed on the main stage. Senior guides united with mentees for the morning track.',
    type: 'pairing',
    badge: 'Phase 1 Reveal'
  },
  {
    time: '9:30 - 10:00 AM',
    duration: '30 min',
    title: 'Icebreaker 1: The Line-Up (This or That)',
    desc: 'High-energy opener breaking initial awkwardness across year groups. Quick physical movement prompts (Frontend vs Backend, Startup vs Big Tech).',
    type: 'icebreaker',
    badge: 'Energy Reset'
  },
  {
    time: '10:00 - 11:00 AM',
    duration: '60 min',
    title: 'Phase 1: SDGP / DSGP Kickstart',
    desc: 'Two 30-min challenges with same pair: 01 Idea Stress-Test & Refine + 02 Build the Blueprint (Sprint 1 MVP Backlog).',
    type: 'challenge',
    badge: 'Phase 1 · 2×30m'
  },
  {
    time: '11:00 - 12:00 PM',
    duration: '60 min',
    title: 'Phase 2: Internship Interview Gauntlet',
    desc: 'Quick 5-min re-pairing reveal. 01 CV & LinkedIn Makeover (Action + Tool + Impact) + 02 Pitch & Mock Interview Gauntlet (rapid fire 90-sec answers).',
    type: 'challenge',
    badge: 'Phase 2 · New Pair'
  },
  {
    time: '12:00 - 1:00 PM',
    duration: '60 min',
    title: 'Networking Lunch & People’s Choice Voting',
    desc: 'Recharge and connect. Participants receive voting stickers to cast People’s Choice favorites on the collaboration board.',
    type: 'networking',
    badge: 'Community'
  },
  {
    time: '1:00 - 2:00 PM',
    duration: '60 min',
    title: 'Afternoon General Challenges (The 2 Grand Challenges)',
    desc: 'Flexible pairing: 01 The Rs50,000 Budget Challenge (Twist: Budget slashed to Rs20,000!) & 02 The Global Team Challenge (Twist: Cross-border handoff breakdown).',
    type: 'challenge',
    badge: 'Grand Challenges'
  },
  {
    time: '2:00 - 2:30 PM',
    duration: '30 min',
    title: 'Icebreaker 2: Back-to-Back Draw-Off',
    desc: 'Pairs sit back-to-back. One verbally describes a complex shape without naming it, while the other draws it blind. Tests communication under constraints.',
    type: 'icebreaker',
    badge: 'Energy Reset'
  },
  {
    time: '2:30 - 3:30 PM',
    duration: '60 min',
    title: 'Keynote Guidance Speech by Banu Sir',
    desc: '“Transitioning from Internship to Permanent Role” — Real-world tactical advice on standing out, taking ownership, and securing full-time conversion.',
    type: 'keynote',
    badge: 'Executive Guidance'
  },
  {
    time: '3:30 - 4:30 PM',
    duration: '60 min',
    title: 'Grand Awards Ceremony & Finale Recognition',
    desc: 'Presenting awards for Best Pair Phase 1, Best Pair Phase 2, Best Rs50k Strategy, Best Global System Design, and People’s Choice.',
    type: 'awards',
    badge: '5 Award Categories'
  }
];

const WORKSHOP_ITEMS = [
  {
    time: '10:00 - 10:10 AM',
    duration: '10 min',
    title: 'Arrival & Welcome',
    desc: 'Program intro, what to expect this semester across the IIT mentor-mentee journey.',
    type: 'ceremony',
    badge: 'Intro'
  },
  {
    time: '10:10 - 12:10 PM',
    duration: '120 min',
    title: 'Speaker Session: “Mentorship & You - Building Relationships That Carry Your Whole Career”',
    desc: 'Guest Speaker talk & live Q&A. How to ask for help without feeling like a burden, what makes relationships work, and growing into a mentor yourself.',
    type: 'keynote',
    badge: 'Feature Talk'
  },
  {
    time: '12:10 - 12:20 PM',
    duration: '10 min',
    title: 'Coffee & Refreshment Break',
    desc: 'Informal networking and quick refreshments.',
    type: 'networking',
    badge: 'Break'
  },
  {
    time: '12:20 - 12:45 PM',
    duration: '25 min',
    title: 'Icebreaker: Common Ground or 60-Second Impromptu',
    desc: 'Groups find 3 non-obvious shared traits in 3 minutes or draw random light-hearted prompts from a bowl.',
    type: 'icebreaker',
    badge: 'Icebreaker'
  },
  {
    time: '12:45 - 1:00 PM',
    duration: '15 min',
    title: 'Wrap-Up & Main Event Preview',
    desc: 'Closing remarks, preview of the full-day finale challenges, and cohort group photo.',
    type: 'ceremony',
    badge: 'Wrap-Up'
  }
];

export default function ScheduleTimeline() {
  const [selectedTrack, setSelectedTrack] = useState('main');
  const [filterType, setFilterType] = useState('all');

  const items = selectedTrack === 'main' ? MAIN_EVENT_ITEMS : WORKSHOP_ITEMS;
  const filteredItems = filterType === 'all' ? items : items.filter(it => it.type === filterType);

  return (
    <div className={styles.scheduleWrapper}>
      {/* Track Selector Tabs */}
      <div className={styles.trackNav}>
        <button
          type="button"
          className={`${styles.trackBtn} ${selectedTrack === 'main' ? styles.activeTrack : ''}`}
          onClick={() => setSelectedTrack('main')}
        >
          <Flame size={18} />
          <div>
            <div className={styles.trackTitle}>The Main Event Day (Finale)</div>
            <div className={styles.trackSub}>Full Day Agenda · 9:00 AM – 4:30 PM</div>
          </div>
        </button>

        <button
          type="button"
          className={`${styles.trackBtn} ${selectedTrack === 'workshop' ? styles.activeTrack : ''}`}
          onClick={() => setSelectedTrack('workshop')}
        >
          <Compass size={18} />
          <div>
            <div className={styles.trackTitle}>Pre-Event Workshop</div>
            <div className={styles.trackSub}>Mindset Kickstart · 3 Hours · 10:00 AM</div>
          </div>
        </button>
      </div>

      {/* Filter Chips */}
      {selectedTrack === 'main' && (
        <div className={styles.filtersRow}>
          <span className={styles.filterLabel}>Filter by:</span>
          {['all', 'challenge', 'icebreaker', 'keynote', 'awards'].map(type => (
            <button
              key={type}
              type="button"
              className={`${styles.filterChip} ${filterType === type ? styles.activeChip : ''}`}
              onClick={() => setFilterType(type)}
            >
              {type === 'all' && 'All Segments'}
              {type === 'challenge' && '⚡ Challenges'}
              {type === 'icebreaker' && '🎯 Energy Resets'}
              {type === 'keynote' && '🎙️ Banu Sir Keynote'}
              {type === 'awards' && '🏆 Awards'}
            </button>
          ))}
        </div>
      )}

      {/* Timeline List */}
      <div className={styles.timelineList}>
        {filteredItems.map((item, idx) => (
          <div key={idx} className={styles.timelineItem}>
            <div className={styles.timeCol}>
              <div className={styles.timeText}>{item.time}</div>
              <div className={styles.durationBadge}>{item.duration}</div>
            </div>

            <div className={styles.dotCol}>
              <div className={`${styles.nodeDot} ${styles[item.type] || ''}`}></div>
              <div className={styles.connectingLine}></div>
            </div>

            <div className={`glass-card ${styles.cardCol} ${item.type === 'challenge' ? 'warm-accent' : ''}`}>
              <div className={styles.cardHeader}>
                <span className={`${styles.typeBadge} ${styles[item.type] || ''}`}>
                  {item.badge}
                </span>
              </div>
              <h4 className={styles.itemTitle}>{item.title}</h4>
              <p className={styles.itemDesc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
