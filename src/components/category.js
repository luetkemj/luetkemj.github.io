import React from 'react'
import PropTypes from 'prop-types'

import './category.scss'

export default function Category({ category }) {
  const catMap = {
    code: '💻',
    life: '🏠',
    dnd: '🧙',
    running: '🏃',
    gamedev: '🕹️',
    yearend: '📅',
    creativity: '✨',
    gaming: '🎮',
    dophs: '👻',
  }
  return <span>{catMap[category]}</span>
}

Category.propTypes = {
  category: PropTypes.string,
}

Category.defaultProps = {
  category: '',
}
