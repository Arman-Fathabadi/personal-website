'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialSidebar from '@/components/SocialSidebar';
import EmailSidebar from '@/components/EmailSidebar';
import ScrollProgressBar from '@/components/ScrollProgressBar';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen selection:bg-lightest-navy selection:text-lightest-slate relative">
      <ScrollProgressBar />
      <Navbar />
      <SocialSidebar />
      <EmailSidebar />
      <main className="flex-1 w-full flex flex-col items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}