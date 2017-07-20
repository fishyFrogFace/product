import React, { Component } from 'react'
import milk from '../images/milk.svg'
import paprika from '../images/paprika.svg'
import sausage from '../images/sausage.svg'
import cheese from '../images/cheese.svg'

class Header extends Component {

    render() {
        return (
            <div className="header-pics">
                <img src={sausage} className="header-logo" alt="sausage" />
                <img src={milk} className="header-logo" alt="milk" />
                <img src={paprika} className="header-logo" alt="paprika" />
                <img src={cheese} className="header-logo" alt="cheese" />
            </div>
        )
    }
}

export default Header