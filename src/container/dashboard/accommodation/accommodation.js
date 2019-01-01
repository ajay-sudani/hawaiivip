
import React from 'react';
import PropTypes from 'prop-types';
import './accommodation.scss';
import AccommodationCardContainer from './accommodation-card/accommodation-card'

const AccommodationContainer = ({ accommodation }) => (
    <div className="dashboard-accommodation">
        <div className="a-header">
            <strong>BIG ISLAND ACCOMMODATIONS</strong>
        </div>
        <div className="content">
            {accommodation.map((item, index) => {
                return <AccommodationCardContainer key={index} item={item}></AccommodationCardContainer>
            })
            }
        </div>
    </div>
);

AccommodationContainer.propTypes = {
    accommodation: PropTypes.array
};

export default AccommodationContainer;
