
import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../../hoc/Aux';
import './vip-difference-card.scss';

const VipDifferenceCardContainer = ({ item }) => (
    <Aux>
        <div className="home-vip-difference-card" >
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

VipDifferenceCardContainer.propTypes = {
    item: PropTypes.object
};

export default VipDifferenceCardContainer;
