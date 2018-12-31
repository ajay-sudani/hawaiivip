import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../../hoc/Aux';

const AccommodationCardContainer = ({ item }) => (
    <Aux>
        <div className="card">
            <div className="bg-image">
                <img src={item.url} alt="no data found"></img>
            </div>
            <div className="info">
                <p className="description">{item.description}</p>
                <div className="details">
                    <span>{item.badrooms} Bedrooms</span>
                    <div className="dot"></div>
                    <span>{item.max_guests} Guests Max</span>
                    <div className="dot"></div>
                    <span>{item.minimum_nights} Night Minimum</span>
                </div>
            </div>
        </div>
    </Aux>
);

AccommodationCardContainer.propTypes = {
    item: PropTypes.object
};

export default AccommodationCardContainer;
