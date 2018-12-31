import React from 'react';
import PropTypes from 'prop-types';
import './accommodation-card.scss';

class AccommodationCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { slideValue: 0, count: 1 };

    }

    handleClick(item, prm) {
        let width = document.querySelector('.image-container img').clientWidth;
        const slideValue = this.state.slideValue;
        const count = this.state.count;
        if (prm === 'right') {
            if (count !== item.url.length) {
                this.setState({
                    slideValue: slideValue + width,
                    count: count + 1
                });
            }
        } else if (prm === 'left') {
            if (count !== 1) {
                this.setState({
                    slideValue: slideValue - width,
                    count: count - 1
                });
            }
        }
    }

    render() {
        const item = this.props.item;
        const slideValue = this.state.slideValue;
        const count = this.state.count;
        return (
            <div className="card">
                <div className="bg-image">
                    <div className="image-container" style={{ 'right': slideValue + 'px' }}>
                        {item.url.map((image, index) => {
                            return <img key={index} src={image} alt="no data found"></img>
                        })
                        }
                    </div>
                    <div className="image-index">
                        {item.url.map((image, index) => {
                            return <div key={index} className="dot" className={(count - 1) === index ? 'dot active' : 'dot'}
                            ></div>
                        })
                        }
                    </div>
                    <div className="left" onClick={this.handleClick.bind(this, item, 'left')}>
                        <img alt="no data found" src={require('../../../../assets/images/dashboard/left_arrow_indicator_white.png')}></img>
                    </div>
                    <div className="right" onClick={this.handleClick.bind(this, item, 'right')}>
                        <img alt="no data found" src={require('../../../../assets/images/dashboard/right_arrow_indicator_white.png')}></img>
                    </div>
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
                    <div className="night-price">
                        <p>${item.price}</p>
                        <span>/ NIGHT</span>
                    </div>
                </div>
            </div>

        );
    }
}

AccommodationCardContainer.propTypes = {
    item: PropTypes.object
};

export default AccommodationCardContainer;
