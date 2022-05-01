import React from 'react';
import PageTitle from '../Shared/Footer/PageTitle/PageTitle';


const NotFound = () => {
    return (
        <div className="container">
            <PageTitle title='404'></PageTitle>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <div className='  m-5'>
                        <img className='img-fluid' src={require('../../Images/NotFound/notFound.png')} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;