import React from 'react';
import PageTitle from '../../Shared/Footer/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import LeadSection from '../LeadSection/LeadSection';
import Special1 from '../Special1/Special1';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <LeadSection></LeadSection>
            <Items></Items>
            <Special1></Special1>
            <PageTitle title='Home'></PageTitle>
        </div>
    );
};

export default Home;