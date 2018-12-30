
import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux';
import ActivityCardContainer from './activity-card/activity-card'

const ActivitiesContainer = ({ activities }) => (
    <Aux>
        <div className="a-header">
            <div className="column">
                <h2>Activities</h2>
                <span>Let our team help you experience paradise the right way.</span>
            </div>
            <div className="column explore-more">
                <button>EXPLORE MORE</button>
            </div>
        </div>
        <div className="content">
            {activities.map((item, index) => {
                return <ActivityCardContainer item={item} key={index}></ActivityCardContainer>
            })
            }
        </div>
    </Aux>
);

ActivitiesContainer.propTypes = {
    activities: PropTypes.array
};

export default ActivitiesContainer;
