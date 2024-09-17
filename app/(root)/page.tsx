import React from 'react'
import HeaderBox from'@/components/HeaderBox'
import TotalBalanaceBox from '@/components/TotalBalanaceBox'
import RightSideBar from '@/components/RightSideBar'
const Home = () => {
    const loggedIn= {firstName:"nabi",lastName:"Niyaz",email:"niyazweb@gmail.com"}
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
         Recent Transacations 
            </div>
          <RightSideBar user={loggedIn} transactions={[]} banks={[]}/>
    </div>
  )
}

export default Home