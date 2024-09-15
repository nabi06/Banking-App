import React from 'react'
import HeaderBox from'@/components/HeaderBox'
import TotalBalanaceBox from '@/components/TotalBalanaceBox'
const Home = () => {
    const loggedIn= {firstName:"nabi"}
  return (
    <div className='home'>
      <div className='home-content'>
        <header className='home-header'>
            <HeaderBox
             type="greeting"
             title="Welcome"
             user={loggedIn?.firstName||'Guest'}
             subtext="Acess your data" 
            />
           <TotalBalanaceBox 
           accounts={[]}
           totalBanks={1}
           totalCurrentBalance={1250}/>
                
         </header> 
            </div>
    </div>
  )
}

export default Home