import { Link } from 'lucide-react'
import React from 'react'

const RightSideBar = ({user,transactions,banks}) => {
  return (
    <div>
      <aside className='right-sidebar'>
        <section className='flex flex-col pb-8'>
            <div className='profile-banner'>
                <div className='profile-img absolute '>
                    <span className='text-5xl text-blue-500 font-bold'>{user.firstName[0].toUpperCase()}</span>

                </div>
                <div className='profile-details'>
                    <h1 className='profile-name'>{user.firstName}</h1>
                    <p className='profile-email'>{user.email}</p>
                </div>
            </div>
        </section>
        <section className='banks '>
            <div className='flex w-full justify-between'>
                <h2 className='header-2'>My Banks</h2>
                <Link href='/' className='flex gap-2'>
                
                </Link>
            </div>
        </section>
      </aside>
    </div>
  )
}

export default RightSideBar
