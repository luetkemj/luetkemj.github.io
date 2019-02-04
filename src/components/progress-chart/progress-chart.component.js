import React from 'react'
import PropTypes from 'prop-types'

import './progress-chart.component.scss'

export default function Progress({ data, goal }) {
  return (
    <div className="rows">
      {data.map(d => {
        const row = d.split(' ')
        return (
          <div className="rows__row" key={d}>
            <div className="rows__label">{row[0]}</div>
            <div className="rows__bar">
              <div
                className="rows__progress"
                style={{ width: `${(row[1] / goal) * 100}%` }}
              />
            </div>
            <div className="rows__total">
              {row[1]}{' '}
              <span
                class={
                  row[1] >= 100 ? 'rows__check rows__success' : 'rows__check'
                }
              >
                ✓
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Progress.propTypes = {
  data: PropTypes.string.isRequired, // "LBL 000"
  goal: PropTypes.number,
}

Progress.defaultProps = {
  goal: 100,
}
