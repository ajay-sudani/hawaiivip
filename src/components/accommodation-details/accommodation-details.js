import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './accommodation-details.scss';
import Footer from '../footer/footer';
import DashboardHeader from '../dashboard/dashboard-header/dashboard-header';
import { SingleDatePicker } from 'react-dates';
import AccommodationCardContainer from '../../container/dashboard/accommodation/accommodation-card/accommodation-card';

class AccommodationDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accommodation: [],
            loggedIn: false, endDate: null,
            endFocusedInput: false,
            activeSliderIndex: 0,
            sliderImages: [require('../../assets/images/MakenaCoralGardens.png'),
            require('../../assets/images/napali_coast_1.png'),
            require('../../assets/images/MakenaCoralGardens.png'),
            require('../../assets/images/napali_coast_1.png')]
        };
    }

    componentDidMount() {
        this.setAccommodation();
    }

    setAccommodation() {
        this.setState({
            accommodation: [{
                'url': [require("../../assets/images/dashboard/accommodation_1.png"),
                require("../../assets/images/dashboard/accommodation_2.png"),
                require("../../assets/images/dashboard/accommodation_3.png"),
                require("../../assets/images/dashboard/accommodation_4.png")],
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }, {
                'url': [require("../../assets/images/dashboard/accommodation_2.png"),
                require("../../assets/images/dashboard/accommodation_3.png"),
                require("../../assets/images/dashboard/accommodation_4.png"),
                require("../../assets/images/dashboard/accommodation_5.png")],
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }, {
                'url': [require("../../assets/images/dashboard/accommodation_3.png"),
                require("../../assets/images/dashboard/accommodation_4.png"),
                require("../../assets/images/dashboard/accommodation_5.png"),
                require("../../assets/images/dashboard/accommodation_6.png")],
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }]
        });
    }


    componentWillUnmount() {
    }

    onLoginEvent(data) {
        this.setState({
            loggedIn: data
        })
    }

    onStartDateFocusChange = ({ focused }) => {
        this.setState(() => ({ startFocusedInput: focused }))
    };

    onSliderClick(index) {
        this.setState({
            activeSliderIndex: index
        })
    }

    render() {
        const { activeSliderIndex, accommodation, sliderImages } = this.state;

        return (
            <Aux>
                <div className="accommodation-details">
                    <section className="header-section">
                        <DashboardHeader onLoginEvent={this.onLoginEvent.bind(this)}></DashboardHeader>
                    </section>
                    <section className="background-cover">
                        <div className="image-content">
                            <img alt="no data found" src={sliderImages[activeSliderIndex]}></img>
                        </div>
                        <div className="slider-dots">
                            <div onClick={this.onSliderClick.bind(this, 0)} className={activeSliderIndex === 0 ? 'dot active' : 'dot'}></div>
                            <div onClick={this.onSliderClick.bind(this, 1)} className={activeSliderIndex === 1 ? 'dot active' : 'dot'}></div>
                            <div onClick={this.onSliderClick.bind(this, 2)} className={activeSliderIndex === 2 ? 'dot active' : 'dot'}></div>
                            <div onClick={this.onSliderClick.bind(this, 3)} className={activeSliderIndex === 3 ? 'dot active' : 'dot'}></div>
                        </div>
                        <div className="more-photos">
                            <div className="icon">
                                <div className="row">
                                    <div className="first"></div>
                                    <div className="second"></div>
                                </div>
                                <div className="row">
                                    <div className="first"></div>
                                    <div className="second"></div>
                                </div>
                            </div>
                            <div className="text">MORE PHOTOS</div>
                        </div>
                    </section>
                    <section className="am-details">
                        <div className="left">
                            <div className="row">
                                <div className="info">
                                    <label>Coral Gardens Estate At Makena Bay</label>
                                    <p className="first">Set directly overlooking Maui's Makena Bay, Makena Landing, and Maluaka Beach, Coral Gardens Estate is the ideal location to enjoy exceptional ocean views
                                        and seasonal sunsets and whale watching. Coral Gardens Estate is a newly re-decorated and updated ultra-lux 4,800 square foot
                                        oceanfront home with spectacular panoramic ocean views in the leeward sunnier Makena area on Maui Island. </p>
                                    <p>Along with a state-of-art interior, Coral Gardens provides a heated swimming pool,
                                        whirlpool spa, cabana/bar, patio BBQ, large flat panel televisions, and superbly well equipped kitchen.
                                        This exceptional vacation home is a legal, permitted short-term vacation rental. </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <div className="d-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                                            <defs>
                                                <image width="30" height="30" id="bedroom" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAeCAMAAACGwcfRAAAAAXNSR0IB2cksfwAAAXdQTFRFAAAAV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbwkFXXgAAAH10Uk5TAC+Jrsva6PD9//rhz7mIE7/GgGlVQUA1MCggIzpKWnbrUMBg0E5dcGFLG0JqDh21/u/SzuW9FLrtq7ssItFusbgnJNtrsGhlPRUEDTRE9aAHAbLDAwySbe4cMviU/LOQwveKD/S8x823pDkqmmxRWIaHU4QZ9ufWyPKsTE9ogpZmAAABeElEQVR4nNWU2zcCURSHt5QxFSXKdBDNTI2Exq1cU+7jnlwiuRsqpcG4//FSaspMrZY339P+nfWtvffDOQegSJ2qXq1pwBrxHFoM0+mbmg2ggLHF1NpmtrQThBV1EATR2WXr7rErmSQlP6MVTbPD2cr0uvpyweB29jO9Xa4BuTfoYYeGSXJkFB/zAvKx4zRJ6htwn3zRicmpfDE944fZQDAf5uYX5FsyhWqRKQlS9QfTgxdZgoAUln+LKxwqsgprUuDWy0WLNiibkmdj01oavaOmCiLAFr0thdBOeLeiuafZl8JB5LCiCHAUdfw0dB/HTk6rcXZ+4Q4BXBqvrvmt6tzcXhkvIa7mqkwuwKnjEE3UIAIkooCjmkyE/xuTTdZkJlng70I1iKE7HohIOJW232cEIWOzy3h4FASBSqfCEQLgScXTtI4VxUYdLWMeF8XYM82rngrdKVr5Z7Bg2QtadnepF4Relcw3hN7LzI/vx/UpNwk2e+7PlV8+KFTMcWEf1gAAAABJRU5ErkJggg==" />
                                            </defs>
                                            <use id="bedroom" href="#bedroom" transform="matrix(1,0,0,1,0,0)" />
                                        </svg>
                                        <strong>Bedroom (4)</strong>
                                    </div>
                                    <div className="m-info">
                                        <p>Master Suite - King Bed + Day Sofa</p>
                                        <p>Suite 2- King Bed</p>
                                        <p>Suite 3 - King + 2 Day Sofas</p>
                                        <p> Guest Suite - Queen Bed</p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="d-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                                            <defs>
                                                <image width="30" height="30" id="bathrooms" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAApCAMAAAB5lzuAAAAAAXNSR0IB2cksfwAAAY9QTFRFAAAAV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbzKlsuQAAAIV0Uk5TABqa9HkDKrL2rlfbyCgEVr//NwqQdAIn+uO6QORtpq8gifeKoICw+3xH83g2URRJt8dnJC2UGA8bHXafYiZOogWNDHETIUhECY5KmQ4ZEm8chILWlvwi7zLq2Uu+ZJWRaspe+P4f4lDQ3GntiNoHRaelkqTuMPXYHjpNmAZdU/Jc6csQz23e8yMAAAF4SURBVHic1dT5VwFRFAfwa0RIZZhSSqtBpWjTooVCVCqUNkmbSqv2RWn7wxujH9A47/Zj3x/ue3PP5533Zt45A0CIiBKXSUgoF2m5TK6oUFaSZVW1ipapATSMrKaWYLV1dD2l46cNjXoCbmpuaW1rz80NLAEbOWAyI3FHZ5eetiBwdw9XrLbePkBgqn9gMP+5NLbLhwCGrTg8MioBhxbGxsl4YpIrTtcUTGvJ2O0B8M4A+NyoYwD4ZwHMcyg8783WQACFLRRXFhbzW4QbXAr+ARfmH+MQg0lYyZUQ0AyLiGOZZRkaViLYo0RMsLqGxZZ12PBi8WYYoltYrLdBzI/FsW2IR7F4Zxekexqcte8fACQOcTh+xJWgCmWdx0muuk9Q3+P07Dw7XIgv+StNuQQv+oofrm9uc4s8rMPA5U5nEMh9mB/8DwX7PIp9Qts/JYR++sZnwbOmEy+/m68ZkfCbvb0HilvqjELYAqQ+Pos6X8lSFtLG0M/sG3YbRYc1PcRYAAAAAElFTkSuQmCC" />
                                            </defs>
                                            <use id="bathrooms" href="#bathrooms" transform="matrix(1,0,0,1,0,0)" />
                                        </svg>
                                        <strong>Bathrooms (4.5)</strong>
                                    </div>
                                    <div className="m-info">
                                        <p>Private bathrooms for each bedroom,
                                        including outdoor shower gardens</p>
                                        <p>Master bathroom ammenities</p>
                                        <p>Bain ultra jet tub</p>
                                        <p>2 HD mirror televisions</p>
                                        <p>Warming drawer for towels & robes</p>
                                        <p>King walk in closet</p>
                                        <p>Powder room</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <div className="d-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                                            <defs>
                                                <image width="30" height="30" id="lanai" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAMAAABKdvqKAAAAAXNSR0IB2cksfwAAARFQTFRFAAAAV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbDr27DAAAAFt0Uk5TAI6gGV6dK/aIJDrxkAE3l+t7OX+twCUqWdf6vIZtErXzExXVzCAGx8UKfOYW9FtabN8CuIsLEANS8v/+5FZVs5Fm5QQM72XwcO0du9IPyNguovsiQ8TQnIBrr6DPEngAAAFrSURBVHiczZVXd4JAEIXH3sHee0c0sQZFE7HE2Hv//z8kqOdImwcfvU97L9/OLoedBUAplQoJManV7whqtGKn04mdViMyeoNR5EwmkTEa9OJpZovVhi1ls1rM0oSwkAhpIy2EPCPsjvsjp8vt8bhdzvs0h13BAXh9POYPBEPhSCQcCgb8POrzYvsBiMbirsRjmHDFY1GcAkim0hnBZdKpJM5lc3lK7Kl8LouCBbooDYp0AeMSpQ959FlKIGC5UpVH1UoZAWt1ZVavCePG100MAN1Ugk0agLkDDWixN/FLsMhHIFh+S3egJVRsO5Wgsy1UfKrzrQR/OsjLdDllxnURsNcfyKNBv4eAw9+RPBr9DREQxpOpNJhOxhgHzGwuOVjR+YxBQVgsV2vBrVfLBYrxJ5zabLndw+247YZCT/ijZ/YH9ng6n09H9rAHtGeeXei9kNcreXmUUnbhq3398k3x8t0j1XtepFKhf4V/Sqkri2GTpZIAAAAASUVORK5CYII=" />
                                            </defs>
                                            <use id="lanai" href="#lanai" transform="matrix(1,0,0,1,0,0)" />
                                        </svg>
                                        <strong>Lanai & Outdoor Features</strong>
                                    </div>
                                    <div className="m-info">
                                        <p>Infinity-edge pool with underwater sound system</p>
                                        <p>Spa with foot massaging jets</p>
                                        <p>Built-in 42' Lynx BBQ</p>
                                        <p>Gas fire pit & tiki torches</p>
                                        <p>Outdoor dining</p>
                                        <p>Poolside sofas</p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="d-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                                            <defs>
                                                <image width="30" height="30" id="kitchen" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAeCAMAAABg6AyVAAAAAXNSR0IB2cksfwAAAbBQTFRFAAAAV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hb/iuOsQAAAJB0Uk5TAAaU8PqzGI/UNCWtyQEE8z8M7z4eZfyyrFxCFwJDkuHQjlPD2/+JJ3bg55lJCRFKpPa1K+vIEoQDxN9PLti9D5oKGY3VvlL3YnD0sDsHtwVATqnkRg6RZLnOFiidn3TaXR/Zb9xgE+1ZWFbefMBbfx35HPtHaa8QGiAmMDGg+Oyog4roPEW4gLRsYel1KjKrLGyHFgAAAYlJREFUeJxjYMAEjEzMLKxsWCSwAXYOTi5uHl6i1PLxCzAwCAoJE6NWRFSMD0iJS0hKSeNVKCMrJy+moAhiKokrq6iqqKnjUiqooamlraOLENDTNzA0MsZqqqiJqRIfuqgZu6G5BaZTLa2ssdpnY2tnjyYkJeTgyMDg5OzCiOk6Vx5U1W7uHgwMvJ5e3j5YzPb1c/VH4gYYBgIjLig4BKtDGEJdwpDcyxwOVBsRGYVdLQNDtLssjMnrGgMkY13Q/YEE4uJhfkkIDgUSQom41TL4JyVDGHwpqQwMaekZeNQyMGRq+YLprGxgVOTk4lXLIJOdB6a984GEegF+xQw5diDSvhBnYkEGRcUiQLIkmxi1DAyWpSDzy8qhoKISCVRVI4GagIAAA2+g4lpVdFDHjATqNWGgAaiYD2QoZirECsJqiQZhDKqNnkSCJlWG5hbiXMDA0BrM0BZHrOL2DoZOBeJKEwY+2y4Gwe5U4hT3pABTqY5XY285QVDFLtQH0sLZ4YURLxjAsB+Y3AHxIoEJNkcuPQAAAABJRU5ErkJggg==" />
                                            </defs>
                                            <use id="kitchen" href="#kitchen" transform="matrix(1,0,0,1,0,0)" />
                                        </svg>
                                        <strong>Kitchen</strong>
                                    </div>
                                    <div className="m-info">
                                        <p>fully equipped gourmet kitchen</p>
                                        <p>6 burner professional gas cook top</p>
                                        <p>2 convection ovens</p>
                                        <p>2 27' SubZero refigerators</p>
                                        <p>Vegetable sink</p>
                                        <p>Drop-down HD flatscreen television</p>
                                    </div>
                                </div>

                            </div>
                            <div className="row last-row">
                                <div className="column">
                                    <div className="d-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                                            <defs>
                                                <image width="30" height="30" id="OhanaCottage" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAMAAADGxShVAAAAAXNSR0IB2cksfwAAAaFQTFRFAAAAV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbz9NIjwAAAIt0Uk5TAAqF9qIaTt9nxPR7CSGz+QFZ4lUHfPe7JX7CMUbb5Byl/ZsXHav7iw04yvJ2BgV188EsXuXcUD/V6V0MvC2j/JQPIKqXFDXxyD7O7zYQSwJKa4D/ybBhqc/g2cOKLjvjV5kfnjnshN4DX/oLoLEwuhv4KLhcI6dEMwjHwP69RaTFYHBpU2gZPbVmPE9t1D0AAAFvSURBVHicY2BAAYxMzCysDPgAGzs7BycXNw9OBbx8/Ew8DAKCQuzC2BWIiIqJS4BZPJLMUtJYVMjIyiH0yisoKimjKVBRVVPXQBbQ1NLW0UXi6+kbGBqhaRIwNjE1g/PMLSytBDCttmYSs7EFs5Tt7B0csfvAydnexZWBwc3dA5vrocDTy9uHwdfPH7cKBgb/AF+GwCACIJAhOCQULwgJZgg2w2cPA4MZeUp4wsIjIiMjo6JjYnEoiROKj0kwA4JAPsVEXWxKkrST4aklJdUBm5K09AwEJzMrG4uSnFwkTl6wEzYloQSVKOUjcTSDC7AoySwsQnCSI/1RlYDdmVFsWSIC4ZeWFZYj+6iCjzmYPagSmAK5Uw2qqoFAtqYWlErgSuqy6lNKjYUa9IBsvZTGpqam5pYCsF6YEgHTHBA3iauVAR3AlLQFt4P5HfU4lTgF54H5oaGDXkmnk5NTV3CAEwjk5zuhg85gBvdgAsAdAMmYf2d2lExoAAAAAElFTkSuQmCC" />
                                            </defs>
                                            <use id="Ohana Cottage" href="#OhanaCottage" transform="matrix(1,0,0,1,0,0)" />
                                        </svg>
                                        <strong>Ohana Cottage</strong>
                                    </div>
                                    <div className="m-info">
                                        <p>Free standing & private entrance</p>
                                        <p>Private lanai</p>
                                        <p>Outdoor shower</p>
                                        <p>Fully equipped kitchen</p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="d-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                                            <defs>
                                                <image width="30" height="30" id="facts" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAjCAMAAAAkGTMsAAAAAXNSR0IB2cksfwAAALFQTFRFAAAAV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbV1hbM8Kx9AAAADt0Uk5TAA2F2/8Z2tRXHhCl1Qz2ZVAWm6Bfa3A+FJlcd4BDAT0Er+8bHSDR2CcV+ojruE5mjgN4k/lg6DpNroR1uVOkAAAAvElEQVR4nM2U2QrCMBBFJ923tHWtS9W6VqPWff3/D7OICIUkU1DQ8zBD4MBc8nABiKJqMlSFAOiGadmOGNsyDR1cj4Ic6rngB4gEEPighagVan9uVao1LvWCRRtNLtGP03/TarX5P9EpWLQbc+n9OP0nVn+Q4BYdjsZCa/La01k6F15csOVzR6u1I8mVsTifG7bdSdNnbJ8cjqf3W5A+Y+n5ApgF15sNuFUkt8r1hOsRRCJ555TrL7wL7wQeBSEX9UcKmuoAAAAASUVORK5CYII=" />
                                            </defs>
                                            <use id="facts" href="#facts" transform="matrix(1,0,0,1,0,0)" />
                                        </svg>
                                        <strong>Facts</strong>
                                    </div>
                                    <div className="m-info">
                                        <p>6502 Sq Ft</p>
                                        <p> 7 Night Minimum</p>
                                        <p> 10 Night Minimum Festive</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="row first">
                                <p className="price">$7,500 </p>
                                <p className="ind"> / NIGHT</p>
                                <span>6502 Sq Ft  ·  7 Night Minimum  ·  10 Night Minimum Festive</span>
                            </div>
                            <div className="row second">
                                <div className="dates">
                                    <label>DATES</label>
                                    <SingleDatePicker
                                        date={this.state.startDate}
                                        onDateChange={startDate => { this.setState({ startDate }) }}
                                        focused={this.state.startFocusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) 
                                        onFocusChange={this.onStartDateFocusChange}
                                        numberOfMonths={1}
                                        isOutsideRange={() => false}
                                        displayFormat="DD/MM/YYYY"
                                        placeholder="End date"
                                        id="start_date"
                                    />
                                    <div className="date-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                                            <defs>
                                                <filter id="flt1"> <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.847   0 0 0 0 0.847   0 0 0 0 0.847   0 0 0 1 0" /> </filter>
                                                <image width="550" height="550" id="date_icon" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODkgMzg5IiB3aWR0aD0iMzg5IiBoZWlnaHQ9IjM4OSI+Cgk8c3R5bGU+CgkJdHNwYW4geyB3aGl0ZS1zcGFjZTpwcmUgfQoJCS5zaHAwIHsgZmlsbDogI2ZmZmZmZiB9IAoJPC9zdHlsZT4KCTxnIGlkPSJQYWdlIDEiPgoJCTxwYXRoIGlkPSJQYXRoIDEiIGNsYXNzPSJzaHAwIiBkPSJNMzg4Ljc2IDgzLjE3TDM4OC43NiAzMzcuMTZDMzg0LjY2IDM1Mi4zMSAzNzguNzUgMzY2Ljc2IDM2NS4xOSAzNzUuNjRDMzU2LjU1IDM4MS4yOSAzNDYuNCAzODQuNjIgMzM2LjkzIDM4OUw1MS44NCAzODlDMzYuNzEgMzg0Ljg3IDIyLjIzIDM3OS4wMSAxMy4zNiAzNjUuNDNDNy43MiAzNTYuNzkgNC4zNyAzNDYuNjQgMCAzMzcuMTZDMCAyNTIuNSAwIDE2Ny44NCAwIDgzLjE3QzAuNTEgODIuMTkgMS4yNSA4MS4yNyAxLjUxIDgwLjIyQzEwLjMyIDQ0LjcgNDMuMTUgMjQuNjUgODEuMDMgMzMuMTZDODEuMDMgNDcuMDkgODAgNjEuNTEgODEuMyA3NS43MkM4Mi44NSA5Mi42IDk3Ljg0IDEwNS4yNSAxMTQuODMgMTA1LjkxQzEyMi4zIDEwNi4yIDEzMC4xMiAxMDcuMzIgMTM3LjE4IDEwNS41OUMxNDUuNDggMTAzLjU2IDE1NC4wNyAxMDAuMSAxNjAuODMgOTUuMDFDMTcwLjEzIDg3Ljk5IDE3Mi4wMiA3Ni43NSAxNzEuOTcgNjUuNDJDMTcxLjkzIDU0LjM1IDE3MS45NiA0My4yOCAxNzEuOTYgMzIuMTFMMjI0LjY1IDMyLjExQzIyNC42NSA0NS4yIDIyNC40MiA1Ny44MSAyMjQuNyA3MC40MUMyMjUuMTIgODkuOTMgMjQwLjMgMTA1LjIyIDI1OS43NSAxMDUuOTZDMjY1LjIgMTA2LjE3IDI3MC42NyAxMDYuMDcgMjc2LjE0IDEwNi4wNEMzMDEuMzkgMTA1LjkyIDMxNi4wMiA5MS4xNyAzMTYuMTYgNjUuNjVDMzE2LjIyIDU0LjUzIDMxNi4xNyA0My40MSAzMTYuMTcgMzIuMDFDMzM1LjkgMzAuMzQgMzUyLjk0IDM0LjE3IDM2Ny42NyA0Ni42MUMzNzkuMTYgNTYuMyAzODQuNjQgNjkuMzEgMzg4Ljc2IDgzLjE3Wk0xOTMuOTggMzU5LjE1QzIzNi44NiAzNTkuMTUgMjc5LjczIDM1OS4yOCAzMjIuNjEgMzU5LjFDMzQ2LjA3IDM1OS4wMSAzNTguNjYgMzQ3LjMyIDM1OC44IDMyNC42M0MzNTkuMTMgMjY4LjgxIDM1OS4wMiAyMTIuOTggMzU4Ljg0IDE1Ny4xNkMzNTguNzkgMTQxLjQxIDM1MS42NiAxMzQuOCAzMzUuOTIgMTM0Ljc5QzI0MS41NCAxMzQuNzggMTQ3LjE1IDEzNC43OCA1Mi43NyAxMzQuOEMzNy4wNyAxMzQuOCAyOS45NyAxNDEuNDMgMjkuOTIgMTU3LjIzQzI5Ljc1IDIxMy4wNiAyOS44MSAyNjguODggMjkuOSAzMjQuNzFDMjkuOTIgMzM0LjQ3IDMyLjM4IDM0My40NyAzOS44NiAzNTAuNDlDNDcuNTkgMzU3Ljc0IDU3LjEgMzU5LjE1IDY3LjA4IDM1OS4xNUMxMDkuMzggMzU5LjE2IDE1MS42OCAzNTkuMTYgMTkzLjk4IDM1OS4xNVpNMTM5Ljk1IDAuMjRDMTQ5Ljk2IDQuOTYgMTUzLjc2IDEyLjgxIDE1My4zMSAyMy44M0MxNTIuNzIgMzguMTkgMTUzLjI1IDUyLjYgMTUzLjE0IDY2Ljk4QzE1My4wMyA4MC43OCAxNDYuMjkgODcuNDIgMTMyLjM5IDg3Ljg0QzEwOC43NiA4OC41NCA5Ni44OCA4OC4yMyA5OC43NSA1NS41NkM5OS4zNCA0NS4yNCA5OS4zNSAzNC44MiA5OC43IDI0LjVDOTcuOTggMTMuMTUgMTAxLjkxIDUuMDUgMTEyLjMxIDAuMjRMMTM5Ljk1IDAuMjRaTTI4My4zNiAwLjI0QzI5My43NCA0LjQxIDI5Ny45MiAxMS45IDI5Ny40MyAyMy4xOUMyOTYuNzcgMzguMTEgMjk3LjMzIDUzLjA5IDI5Ny4yNCA2OC4wNEMyOTcuMTcgODAuMDUgMjkwLjk0IDg2LjcyIDI3OS4wOSA4Ny43OEMyNzguOCA4Ny44IDI3OC41MSA4Ny44MSAyNzguMjMgODcuODFDMjU1LjY0IDg3LjkxIDI0MSA5MS4yOCAyNDMuMzUgNTUuMzlDMjQ0LjAyIDQ1LjA4IDI0NC4xMiAzNC42MyAyNDMuMjcgMjQuMzVDMjQyLjM0IDEzLjI5IDI0Ni4zMyA1LjU3IDI1NS43MiAwLjI0TDI4My4zNiAwLjI0Wk0xNzQuMjggMjI1LjkxQzE3NC4yOCAyMjkuNjIgMTY5LjI2IDIzMi43NCAxNjIuNyAyMzIuNzRMODkuMDQgMjMyLjc0QzgyLjQ3IDIzMi43NCA3Ni4zNiAyMjkuNjIgNzYuMzYgMjI1LjkxTDc2LjM2IDE4NC4yM0M3Ni4zNiAxODAuNTIgODIuNDcgMTc2LjQ5IDg5LjA0IDE3Ni40OUwxNjIuNyAxNzYuNDlDMTY5LjI2IDE3Ni40OSAxNzQuMjggMTgwLjUyIDE3NC4yOCAxODQuMjNMMTc0LjI4IDIyNS45MVpNMzEzLjg2IDIyNS45MUMzMTMuODYgMjI5LjYyIDMwNy44NCAyMzIuNzQgMzAxLjI3IDIzMi43NEwyMjcuNDggMjMyLjc0QzIyMC45MSAyMzIuNzQgMjE1Ljk1IDIyOS42MiAyMTUuOTUgMjI1LjkxTDIxNS45NSAxODQuMjNDMjE1Ljk1IDE4MC41MiAyMjAuOTEgMTc2LjQ5IDIyNy40OCAxNzYuNDlMMzAxLjI3IDE3Ni40OUMzMDcuODQgMTc2LjQ5IDMxMy44NiAxODAuNTIgMzEzLjg2IDE4NC4yM0wzMTMuODYgMjI1LjkxWk0xNzQuMjggMzA4Ljg0QzE3NC4yOCAzMTIuNTYgMTY5LjI2IDMxNi4wNyAxNjIuNyAzMTYuMDdMODkuMDQgMzE2LjA3QzgyLjQ3IDMxNi4wNyA3Ni4zNiAzMTIuNTYgNzYuMzYgMzA4Ljg0TDc2LjM2IDI2Ny4xN0M3Ni4zNiAyNjMuNDYgODIuNDcgMjU5LjgyIDg5LjA0IDI1OS44MkwxNjIuNyAyNTkuODJDMTY5LjI2IDI1OS44MiAxNzQuMjggMjYzLjQ2IDE3NC4yOCAyNjcuMTdMMTc0LjI4IDMwOC44NFpNMzEzLjg2IDMwOC44NEMzMTMuODYgMzEyLjU2IDMwNy44NCAzMTYuMDcgMzAxLjI3IDMxNi4wN0wyMjcuNDggMzE2LjA3QzIyMC45MSAzMTYuMDcgMjE1Ljk1IDMxMi41NiAyMTUuOTUgMzA4Ljg0TDIxNS45NSAyNjcuMTdDMjE1Ljk1IDI2My40NiAyMjAuOTEgMjU5LjgyIDIyNy40OCAyNTkuODJMMzAxLjI3IDI1OS44MkMzMDcuODQgMjU5LjgyIDMxMy44NiAyNjMuNDYgMzEzLjg2IDI2Ny4xN0wzMTMuODYgMzA4Ljg0WiIgLz4KCTwvZz4KPC9zdmc+" />
                                            </defs>
                                            <use style={{ filter: "url(#flt1)" }} href="#date_icon" transform="matrix(0.031,0,0,0.031,-0.029,0.236)" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="guests">
                                    <label>GUESTS</label>
                                    <div className="guest-list">
                                        <select>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <div className="down-arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 9" width="17" height="9">
                                                <path d="M7.76,7.74l0.71,-0.71l-6.99,-6.99l-0.71,0.71zM16.46,0.75l-0.71,-0.71l-7.99,7.99l0.71,0.71z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row third">
                                <button>BOOK NOW</button>
                            </div>
                        </div>
                    </section>
                    <section className="similar-accommodations">
                        <div className="container">
                            <p className="heading">SIMILAR ACCOMMODATIONS</p>
                            <div className="s-a-list">
                                {accommodation.map((item, index) => {
                                    return <AccommodationCardContainer key={index} item={item}></AccommodationCardContainer>
                                })
                                }
                            </div>
                        </div>
                    </section>
                    <section className="footer-section">
                        <Footer></Footer>
                    </section>
                </div>
            </Aux>
        )
    };
}

export default AccommodationDetails;