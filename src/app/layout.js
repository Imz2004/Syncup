import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://syncup.iit.ac.lk'),
  title: 'SyncUp 2.0 Finale | IIT IEEE Student Branch',
  description: 'A mentor-mentee program guiding Informatics Institute of Technology students through three defining milestones of IIT career life: SDGP/DSGP, Internship Interviews, and Full-Time Conversion.',
  keywords: 'SyncUp, IEEE Student Branch, IIT, Mentorship, SDGP, DSGP, Hackathon, Challenges, Sri Lanka, Engineering',
  openGraph: {
    title: 'SyncUp 2.0 Finale | IIT IEEE Student Branch',
    description: 'Three milestones. One relationship that grows with the student. Warm and cool perspectives meeting in the middle.',
    images: ['/images/hero-poster.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
