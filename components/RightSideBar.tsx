import React from 'react'

const RightSideBar = ({user,transactions,banks}) => {
  return (
    <div>
      <aside className='right-sidebar'>
        <section className='flex flex-col pb-8'>
            <div className='profile-banner'>
                <div className='profile-img'>
                    <span className='text-5xl text-blue-500 font-bold'>{user.firstName[0].toUpperCase()}</span>

                </div>
                <div className='profile-details'>
                    <h1 className='profile-name'>{user.firstName}</h1>
                    <p className='profile-email'>{user.email}</p>
                </div>
            </div>
        </section>
      </aside>
    </div>
  )
}

export default RightSideBar
