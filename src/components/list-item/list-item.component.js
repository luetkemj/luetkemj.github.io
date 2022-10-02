import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import './list-item.component.scss'

export default function ListItem({
  className,
  category,
  date,
  path,
  title,
  external,
}) {
  const classes = date
    ? `list-item list-item--with-date ${className}`
    : `list-item ${className}`
  const linkToRender = external ? (
    <OutboundLink className="list-item__link" href={path}>
      {title}
    </OutboundLink>
  ) : (
    <Link className="list-item__link" to={path}>
      {title}
    </Link>
  )
  const catMap = {
    code: '💻',
    life: '🏠',
    dnd: '🧙',
    running: '🏃',
    gamedev: '🕹️',
    yearend: '📅',
    creativity: '✨',
    gaming: '🎮',
  }
  return (
    <li key={`${date}-${title}`} className={classes}>
      {date && (
        <span className="list-item__date extrnal">
          {`${catMap[category]} ${date}`}
        </span>
      )}
      {linkToRender}
    </li>
  )
}

ListItem.propTypes = {
  className: PropTypes.string,
}

ListItem.defaultProps = {
  className: '',
}
