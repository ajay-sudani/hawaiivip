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
                    <div className="rating">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 33" width="38" height="33">
                            <defs>
                                <image width="394" height="338" id="img1" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTQgMzM4IiB3aWR0aD0iMzk0IiBoZWlnaHQ9IjMzOCI+Cgk8c3R5bGU+CgkJdHNwYW4geyB3aGl0ZS1zcGFjZTpwcmUgfQoJCS5zaHAwIHsgZmlsbDogI2ZmZmZmZiB9IAoJPC9zdHlsZT4KCTxnIGlkPSJQYWdlIDEiPgoJCTxwYXRoIGlkPSJQYXRoIDEiIGNsYXNzPSJzaHAwIiBkPSJNMTYuNTYsMTcyLjQzYzE0LjQ3LDI5Ljc4IDM3Ljg1LDUzLjAyIDYxLjY3LDc1LjQ1YzM0LjcsMzIuNjYgNzIuODQsNjAuOTggMTEyLjM2LDg3LjUyYzQuMjgsMi44NyA3LjQzLDMuODEgMTIuMzMsMC41YzUyLjU0LC0zNS41NCAxMDIuOTgsLTczLjU0IDE0NS4yOSwtMTIxLjMzYzIzLjA1LC0yNi4wMyA0MC40NywtNTQuNzYgNDQuOTYsLTkwLjAyYzAuMDYsLTAuNDggMC42OCwtMC44OCAxLjA0LC0xLjMydi0yNC41M2MtMS43NSwtNi45OSAtMy4xMSwtMTQuMSAtNS4zMiwtMjAuOTRjLTI2LjM0LC04MS42NSAtMTI4LjYzLC0xMDQuNjYgLTE4Ny40MywtNDIuMmMtMS4xOSwxLjI2IC0xLjk2LDIuOTIgLTIuOSw0LjM1Yy04LjU2LC03LjI1IC0xNS41OCwtMTQuMjEgLTIzLjU1LC0xOS44MWMtNjcuMjMsLTQ3LjI5IC0xNjAuODksLTcuMzQgLTE3My40Nyw3My43OWMtMC4yNiwxLjY0IC0xLjAxLDMuMjEgLTEuNTQsNC44MXYyNC41M2M1LjQsMTYuNDYgOS4wNiwzMy43NyAxNi41Niw0OS4yMXoiIC8+Cgk8L2c+Cjwvc3ZnPg==" />
                            </defs>
                            <use id="Vector Smart Object copy 2" href="#img1" transform="matrix(0.091,0,0,0.089,1.107,1.708)" />
                        </svg>
                    </div>
                    <div className="image-container" style={{ 'right': slideValue + 'px' }}>
                        {item.url.map((image, index) => {
                            return <img key={index} src={image} alt="no data found"></img>
                        })
                        }
                    </div>
                    <div className="image-index">
                        {item.url.map((item, index) => {
                            return <div key={index} className={(count - 1) === index ? 'dot active' : 'dot'}
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
