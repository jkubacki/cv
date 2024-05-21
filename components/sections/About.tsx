'use client'

import { useState } from 'react';

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="About flex flex-col items-center gap-5">
      <h2 className="text-2xl font-bold print:hidden">About me</h2>
      <div className="flex flex-col items-center gap-4">
        <p className="text-md">
          I'm an experienced software engineer with 14 years of expertise in the web-dev industry.
          I'm passionate about building high-quality, maintainable, and scalable software using the best tech available.
          I work well in a team and have achieved success as a leader in multiple projects. I am comfortable taking full ownership of a product.
        </p>
      </div>
    </section>
  );
}
