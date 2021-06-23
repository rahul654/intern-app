import React, { Component, createRef } from 'react'

import SelectBox from './SelectBox'
import Card from './Card'
import ProductImage from '../img/logo.png';
import leftIcon from '../img/left_icon.png';

class PageTwo extends Component {
    cardCarouselRef = createRef();
    state = {
        counterCount : 10,
        counterError : false,
        selectedColor : 'red',
        layerThicknessOptions : [
            {
                label: 'High Quality',
                value: 'high'
            },
            {
                label: 'Low Quality',
                value: 'low'
            }
        ],
        cardsText : [
            "FDA", "SLA", "SLS", "SLM", "ADF", "ALS", "LSL", "DFA", "FSD", "MLS"
        ],
        infillOptions : [
            {
                label: 'PLA',
                value: 'pla'
            },
            {
                label: 'PLB',
                value: 'plb'
            }
        ],
        finishOptions : [
            {
                label: 'Glossy',
                value: 'glossy'
            },
            {
                label: 'Matte',
                value: 'matte'
            }
        ],
        priorityOptions : [
            {
                label: '5 days standard',
                value: 'standard'
            },
            {
                label: '5 days premium',
                value: 'premium'
            }
        ]
    }

    handleColorChange = (e) => {
        this.setState({
            selectedColor: e.target.value
        })
    }

    handleSlide = (slideTo) => {
        let movementValue = 200;
        let scrollAmount = 0;
        let container = this.cardCarouselRef.current;
        let slideTimer;
        if(slideTo === 'left') {
            slideTimer = setInterval(function(){
                container.scrollLeft -= 1;
                scrollAmount += 1;
                if(scrollAmount >= movementValue){
                    window.clearInterval(slideTimer);
                }
            }, 2);
        } else if(slideTo === 'right') {
            slideTimer = setInterval(function(){
                container.scrollLeft += 1;
                scrollAmount += 1;
                if(scrollAmount >= movementValue){
                    window.clearInterval(slideTimer);
                }
            }, 2);
        }
    }

    render() {
        return (
            <div className="pagetwo__main">
                <div>
                    <h2>Page 2</h2>
                </div>
                <div className="pagetwo__main_filenames">
                    <div>
                        <div>filename.pdf</div> <div style={{ margin: "0 0 0 40px" }}>X</div>
                    </div>
                    <div>
                        <div>filename.pdf</div> <div style={{ margin: "0 0 0 40px" }}>X</div>
                    </div>
                    <div>
                        +
                    </div>
                </div>
                <div className="pagetwo__main_file_and_buttons">
                    <div>
                        File name <span className="pagetwo__main_file_and_buttons_file">lamp_stripe_27.5.stl</span>
                    </div>
                    <div className="pagetwo__main_file_and_buttons_button">
                        Duplicate <div></div>
                        Delete <div></div>
                    </div>
                </div>
                <div className="pagetwo__main_product">
                    <div className="pagetwo__main_product_image_and_detail">
                        <div className="pagetwo__main_product_image_and_detail_image">
                            <img src={ProductImage} alt="logo" className="pagetwo__main_product_image_and_detail_image_style" />
                        </div>
                        <div style={{ width: "100%", height: "1px", backgroundColor: "black" }}></div>

                        <div>
                            <div className="pagetwo__main_product_image_and_detail_detail">
                                Scale:
                                <div>
                                    250 X 300 X 200
                                </div>
                            </div>
                            <div style={{ width: "100%", height: "1px", backgroundColor: "black" }}></div>

                            <div className="pagetwo__main_product_image_and_detail_detail">
                                Volume:
                                <div>
                                    242.958.13 mm<sup>3</sup>
                                </div>
                            </div>
                            <div style={{ width: "100%", height: "1px", backgroundColor: "black" }}></div>

                            <div className="pagetwo__main_product_image_and_detail_detail">
                                Scale:
                                <div>
                                    242.958.13 mm<sup>3</sup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagetwo__main_product_details">
                        <div className="pagetwo__main_product_details_technology">Technology</div>
                        <div>
                            <div className="pagetwo__main_product_details_main_carousel">
                                <div className="mobileview" onClick={() => this.handleSlide('left')} ><div className="pagetwo__main_product_slide_icons"><img src={leftIcon} alt="left icon"/></div></div>
                                <div className="pagetwo__main_product_details_carousel">
                                    <div ref={this.cardCarouselRef}>
                                        {this.state.cardsText?.map((text, index) =>(
                                            <div key={`card${index}`}>
                                                <Card text={text}/>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mobileview" onClick={() => this.handleSlide('right')}><div className="pagetwo__main_product_slide_icons right"><img src={leftIcon} alt="left icon"/></div></div>
                            </div>
                        </div>
                        <div className="pagetwo__main_product_details_production">
                            Production Details
                        </div>
                        <div className="pagetwo__main_product_details_input_material">
                            <div className="pagetwo__main_product_details_input_head">
                                Material
                            </div>
                            <span className="pagetwo__main_product_details_info_inputs_top_right mobileview"> ? </span>
                            <span className="pagetwo__main_product_details_info_inputs_top_right desktopview"> View Specs Sheet </span>
                            <input className="pagetwo__main_product_details_input" name="material" type="text" />
                        </div>
                        <div className="pagetwo__main_product_details_info">
                            <SelectBox name="Layers Thickness" topright="?" options={this.state.layerThicknessOptions}/>
                            <SelectBox name="Infill" topright="?"  options={this.state.infillOptions}/>
                        </div>
                        <div className="pagetwo__main_product_details_production_process">
                            Post production process
                        </div>
                        <div className="pagetwo__main_product_details_info">
                            <div className="pagetwo__main_product_details_info_inputs">
                                <div className="pagetwo__main_product_details_input_head">
                                    Colour
                                </div>
                                <div className="pagetwo__main_product_details_color_select">
                                    <div style={{backgroundColor : this.state.selectedColor}} className="color__selected">
                                        &nbsp;
                                    </div>
                                    <select name="color" onChange={(e) => this.handleColorChange(e)} className="input color__select">
                                        <option value="red">Red</option>
                                        <option value="yellow">Yellow</option>
                                        <option value="green">Green</option>
                                    </select>
                                </div>
                            </div>
                            <SelectBox name="Finish" options={this.state.finishOptions}/>
                        </div>
                    </div>
                    <div className="pagetwo__main_product_price">
                        <div className="pagetwo__main_product_price_pricing">
                            Pricing
                        </div>
                        <SelectBox name="Priority" options={this.state.priorityOptions}/>
                        <div className="pagetwo__main_product_price_quality">
                            <div className="pagetwo__main_product_details_input_head">
                                Quantiity
                            </div>
                            <div className="pagetwo__main_product_price_quality_input">
                                <div 
                                onClick={() => {
                                            if(this.state.counterCount > 1) {
                                                this.setState({ counterCount : this.state.counterCount - 1});
                                                this.setState({ counterError : false});
                                            }else{
                                                this.setState({counterError : true});
                                            }
                                        }}
                                >
                                    -
                                </div>
                                <div>{this.state.counterCount}</div>
                                <div
                                    onClick={() => {
                                        if(this.state.counterCount < 10) {
                                            this.setState({ counterCount : this.state.counterCount + 1});
                                            this.setState({ counterError : false});
                                        }else{
                                            this.setState({counterError : true});
                                        }
                                    }}
                                >+</div>
                            </div>
                            { this.state.counterError && <div className="error">error quantity should be &gt; = 1 or &lt; = 10</div>}
                        </div>
                        <div>
                            <h1>&#x20B9; 5,24,920</h1>
                            <div style={{ width: "100%", height: "1px", backgroundColor: "#bcfccb" }}></div>
                        </div>
                        <div style={{ color: "#07a12c", margin: "15px 0" }}>
                            Cost break down
                        </div>
                        <div className="pagetwo__main_product_price_instructions">
                            Instructions
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageTwo