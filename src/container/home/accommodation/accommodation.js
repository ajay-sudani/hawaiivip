
import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import AccommodationCardContainer from './accommodation-card/accommodation-card'

const AccommodationContainer = ({ accommodation }) => (
    <Aux>
        <div className="a-header">
            <div className="column">
                <h2>Accommodations</h2>
                <span>With a selection of pristine properties across the isles we'll find you the perfect vacation home. </span>
            </div>
            <div className="column explore-more">
                <button>EXPLORE MORE</button>
            </div>
        </div>
        <div className="content">
            {accommodation.map((item, index) => {
                return <AccommodationCardContainer key={index} item={item}></AccommodationCardContainer>
            })
            }
        </div>
    </Aux>
);

AccommodationContainer.propTypes = {
    accommodation: PropTypes.array
};

export default AccommodationContainer;
