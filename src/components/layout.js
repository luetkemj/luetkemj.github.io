import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header/header'
import Footer from './footer/footer'
import Sprinkles from './sprinkles'

import './layout.css'
import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="layout__wrapper">
        <div className="layout__sprinkles">
          <Sprinkles />
        </div>

        <div className="layout__header">
          <Header siteTitle={data.site.siteMetadata.title} />
        </div>

        <div className="layout__content">{children}</div>

        <Footer title={data.site.siteMetadata.title} />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
