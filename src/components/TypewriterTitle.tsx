'use client';

import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';

export default function TypewriterTitle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <Typewriter
      options={{
        strings: ['Développeur Full Stack',
            "Développeur React Native",
            "Développeur Backend",
            "Développeur Next.js",
        ],
        autoStart: true,
        loop: true,
        cursor: '|',
        delay: 25,
        deleteSpeed: 25,
      }}
    />
  ) : null;
}
