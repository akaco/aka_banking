import HeaderBox from '@/components/HeaerBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn: User = {
        firstName: 'Amirreza',
        lastName: 'Ya',
        email: 'a@b.com',
        $id: '1',
        address1: '123 Main St',
        city: 'Melbourne',
        dateOfBirth: '1980-01-01',
        dwollaCustomerId: '1',
        dwollaCustomerUrl: '1',
        postalCode: '3000',
        ssn: '123-45-6789',
        state: 'VIC',
        userId: '1'
    };
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type='greeting'
                        title='Welcome,'
                        user={loggedIn?.firstName || 'Guest'}
                        subtext='What would you like to do? ... Access your accounts, send money, receive money, or view your transaction history.'
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={15320.00}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 12500.0 }, { currentBalance: 12500.0 }]}
            />
        </section>
    )
}

export default Home