import React from 'react';
import PageTitle from '../../Shared/Footer/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Items2 from '../Items2/Items2';
import LeadSections from '../LeadSections/LeadSections';
import Special1 from '../Special1/Special1';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>

            <LeadSections></LeadSections>
            <Items></Items>
            <Special1></Special1>
            <Items2></Items2>
            <PageTitle title='Home'></PageTitle>
        </div>
    );
};

export default Home;