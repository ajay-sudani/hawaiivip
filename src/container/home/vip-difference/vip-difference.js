
import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import VipDifferenceCardContainer from './vip-difference-card/vip-difference-card'

const VipDifferenceContainer = ({ vipDifference }) => (
    <Aux>
        <div className="a-header">
            <div className="column">
                <h2>VIP Difference</h2>
                <span>After forty five years in Hawaii, we have built strong personal relationships with our suppliers. It's these strong connection that allow for us to
                                        differentiate from our competition by immersing our clientele into the "Ultimate Hawaiian Experience.</span>
            </div>
            <div className="column explore-more">
                <button>BOOK NOW</button>
            </div>
        </div>
        <div className="content">
            {vipDifference.map((item, index) => {
                return <VipDifferenceCardContainer item={item} key={index}></VipDifferenceCardContainer>
            })
            }
        </div>
        <div className="private-chefs">
            <div className="img-content">
                <img alt="no data found" src={require('../../../assets/images/private_chefs.png')}></img>
            </div>
            <p>PRIVATE CHEFS & CATERED EVENTS</p>
        </div>
    </Aux>
);

VipDifferenceContainer.propTypes = {
    activities: PropTypes.array
};

export default VipDifferenceContainer;
