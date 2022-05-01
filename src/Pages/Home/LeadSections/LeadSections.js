import React from 'react';
import useItems from '../../Hooks/useItems';
import LeadSection from '../LeadSection/LeadSection';

const LeadSections = () => {
    const [items] = useItems([]);
    return (
        <div>
            <p style={{ backgroundColor: '#e2e2e2', marginTop: '70px' }} className='w-50 f-block mx-auto'><button style={{ border: '2px solid #003366', backgroundColor: '#003366', color: 'white', borderRadius: '10px' }} className='btn d-block mx-auto mt-5 mb-4 border border-5 border-white fw-bold text-uppercase'>Inventory Item Section</button></p>
            <div className="row row-cols-1 row-cols-lg-2 g-4">
                {
                    items.slice(6, 8).map(leadSection => <LeadSection
                        key={leadSection.id}
                        leadSection={leadSection}
                    ></LeadSection>)
                }
            </div>
        </div>
    );
};

export default LeadSections;