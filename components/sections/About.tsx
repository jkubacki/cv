'use client'

import { useState } from 'react';

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="About flex flex-col items-center gap-5 print:my-4">
      <h2 className="text-2xl font-bold print:hidden">About me</h2>
      <div className="flex flex-col items-center gap-4">
        <p className="text-md">
        Results-driven technical leader with a strong track record of solving complex problems and delivering high-impact software products. I take full ownership of initiatives - from concept to launch - ensuring they meet both technical excellence and business goals. Known for building maintainable, scalable systems using best-in-class tools and practices, I lead by example and thrive in remote, collaborative environments where delivering real value is the priority.
        </p>
      </div>
    </section>
  );
}
