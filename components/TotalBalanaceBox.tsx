'use client'
import { formatAmount } from '@/lib/utils'
import React from 'react'
import CountUp from'react-countup'
import DoughnutChart from './DoughnutChart'

const TotalBalanaceBox = ({accounts,totalBanks,totalCurrentBalance}:TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
                <DoughnutChart accounts={accounts}/>
        </div>
        <div className='flex flex-col gap-6'>
            <h1 className='header-2'> Bank Accounts:{totalBanks}</h1>
            <div className=' flex flex-col gap-2'>
                <p className='total-balance-label'>Total Balance:</p>
                <p className='flex items-center gap-6 total-balance-amount'>
                   <CountUp
                    decimal=','
                    prefix='$'
                    end={totalCurrentBalance}/>
                    </p >
            </div>
        </div>
    </section>
  )
}

export default TotalBalanaceBox
