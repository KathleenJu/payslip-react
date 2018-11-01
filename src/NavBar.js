import React, {Component} from 'react';
import {Navigation, MYOBLogo} from "@myob/myob-widgets";

class NavBar extends Component {
    render() {
        const brand = <Navigation.Brand url="/" width="73px" children={<MYOBLogo/>}/>;
        return (
            <Navigation brand={brand}/>
        );
    }
}

export default NavBar;