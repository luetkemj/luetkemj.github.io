import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import './footer.scss'

const Footer = ({ siteTitle }) => (
  <div className="footer">
    <ul className="footer__list">
      <li className="footer__list-item">
        <OutboundLink href="https://github.com/luetkemj">github</OutboundLink>
      </li>
      <li className="footer__list-item">
        <OutboundLink href="https://twitter.com/markluetke">
          twitter
        </OutboundLink>
      </li>
      <li className="footer__list-item">
        <OutboundLink href="https://www.instagram.com/luetkemj/">
          instagram
        </OutboundLink>
      </li>
    </ul>

    <div title="made with &hearts; in FOCO" className="footer__heart">
      🏔️&hearts;🏔️
    </div>

    <ul className="footer__list">
      <li className="footer__list-item">
        <Link to="/about">about</Link>
      </li>
      <li className="footer__list-item">
        <Link to="/contact">contact</Link>
      </li>
      <li className="footer__list-item">
        <a href="/feed.xml">rss</a>
      </li>
    </ul>
  </div>
)

export default Footer
