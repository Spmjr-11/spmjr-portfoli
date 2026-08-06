'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          Portfolio
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}