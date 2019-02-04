import React from 'react'
import { Link } from 'gatsby'

import logoStamp from '../../assets/svg/logo-stamp.svg'
import luetkemj from '../../assets/svg/luetkemj.svg'

import './header.scss'

const Header = () => (
  <div className="header">
    <div className="header__masthead">
      <Link to="/">
        <img className="header__masthead__name" src={luetkemj} alt="luetkemj" />
        <h2 className="header__masthead__tagline">change is good</h2>
      </Link>

      <img
        className="header__masthead__logo"
        src={logoStamp}
        alt="luetkemj logo"
      />
    </div>
  </div>
)

export default Header
