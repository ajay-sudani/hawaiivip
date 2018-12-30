
import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';

const ActivityCardContainer = ({ item }) => (
    <Aux>
        <div className="card" >
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
