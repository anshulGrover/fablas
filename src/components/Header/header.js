/**
 *  Header Component
 */

// Dependencies
import React, {Component} from "react";
import PropTypes from "prop-types";
import ResponsiveUtils from "../Widgets/ResponsiveUtils/responsiveUtils";
import ImageOptimize from "../../components/Widgets/ImageOptimize/imageOptimize";
import NavigationBar from "../Navbar/navbar";
import {Col} from "reactstrap";
import { connect } from "react-redux";

// Styles & Images
import "./header.scss";

class Header extends Component  {
    constructor(){
        super();
        this.responsiveUtils = new ResponsiveUtils();
    }
    componentDidMount(){
        // //Optimizing Image as per the viewPort.
        // this.imageOptimizer = new ImageOptimize({
        //     mobile_image : "../../assets/images/walking-dog-bg-320.png", 
        //     large_image : "../../assets/images/walking-dog-bg.png", 
        //     viewport : this.props.viewport
        // });

        // this.bgImage = {
        //     backgroundImage: `url(${this.imageOptimizer.optimizeImage()})`
        // };

    }

    render(){
        switch(this.props.headerTemplate){
            case "static"  :
                return(
                    <header className="static-header col-12">
                        <NavigationBar navbarTemplate="black"/>
                    </header>
                );
            case "landing" :   
                return(
                    <header style={this.bgImage} className="header col-12">
                        <NavigationBar navbarTemplate="Main"/>
                    </header>
                );
            default:
        }
    }
}

Header.propTypes = {
    viewport:PropTypes.object,
    headerTemplate:PropTypes.string.isRequired
};

const mapStateToProps = ( state ) => {
    return {
        viewport : state.resizeReducer.viewport
    };
};


// Exporting the Header Component
export default connect(mapStateToProps)(Header);
