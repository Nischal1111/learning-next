import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav>
      <h1>Nischal Dai</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/ticket">Tickets</Link>
    </nav>
  )
}

export default Nav
