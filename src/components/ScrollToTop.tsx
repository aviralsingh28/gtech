// components/ScrollToTop.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Optional: Smooth scroll to top for better UX
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}