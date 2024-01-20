import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='text-7xl'>
      <h1 className="">Hello Nischal</h1>
       <Link href="/about" className='text-2xl'>Go to About</Link>
    </div>
  )
}

export default page

