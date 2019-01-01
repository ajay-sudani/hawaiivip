
import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../../hoc/Aux';
import './activity-card.scss';

const ActivityCardContainer = ({ item }) => (
    <Aux>
        <div className="home-activity-card" >
            <div className="bg-image">
                <img src={item.url} alt="no data found"></img>
            </div>
            <div className="info">
                <p className="description">{item.description}</p>
                <div className="details">
                    <span>{item.info}</span>
                </div>
            </div>
        </div>
    </Aux>
);

ActivityCardContainer.propTypes = {
    item: PropTypes.object
};

export default ActivityCardContainer;
