import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classNames'

import './cal-chart.component.scss'

export default function Runs({ data }) {
  return (
    <div className="calchart">
      {console.log(data)}
      {data.map(({ month, days }) => (
        <div className="calchart__month">
          {month && <div className="calchart__month-name">{month}</div>}
          <div>
            {days.map((week, indexWeek) => (
              <div className="calchart__week">
                {week.map((day, indexDay) => (
                  <div
                    key={`${indexWeek}${indexDay}`}
                    className={classnames(
                      'calchart__day',
                      { 'calchart__day--no': day === 0 },
                      { 'calchart__day--yes': day === 1 },
                      { 'calchart__day--null': day === 2 }
                    )}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

Runs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string,
      days: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
}

Runs.defaultProps = {
  className: '',
}
