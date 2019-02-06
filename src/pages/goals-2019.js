import React from 'react'
import SEO from '../components/seo'
import ProgressChart from '../components/progress-chart/progress-chart.component'
import CalChart from '../components/cal-chart/cal-chart.component'
import ListItem from '../components/list-item/list-item.component'

const Goals2019Page = ({ data }) => (
  <>
    <SEO title="Goals 2019" />
    {console.log(data)}
    <div style={{ maxWidth: '624px', margin: '0 auto' }}>
      <h1>2019</h1>

      <h2>Run 1200 miles this year</h2>
      <ProgressChart
        data={data.allJsonJson.edges[0].node.totalMilage.data}
        goal={1200}
      />

      <br />

      <h2>Run 100 miles per month</h2>
      <ProgressChart data={data.allJsonJson.edges[0].node.runs.data} />

      <br />

      <h2>X-Train 4 days a week</h2>
      <CalChart data={data.allJsonJson.edges[0].node.xtrain.data} />

      <h2>Meditation Practice</h2>
      <CalChart data={data.allJsonJson.edges[0].node.meditation.data} />

      <br />

      <h2>Publish 1 new blog post a month</h2>
      <div className="calchart__month-name">JAN</div>
      <ul style={{ marginLeft: 0 }}>
        <ListItem
          path="/190108/the-druid-and-the-squirrel/"
          title="The Druid And The Squirrel"
        />
        <ListItem
          path="/190101/new-look-same-great-taste/"
          title="New Look, Same Great Taste!"
        />
      </ul>

      <h2>Days Sober</h2>
      <CalChart data={data.allJsonJson.edges[0].node.sober.data} />
    </div>
  </>
)

export default Goals2019Page

export const pageQuery = graphql`
  query goals2019 {
    allJsonJson {
      edges {
        node {
          totalMilage {
            data
          }
          runs {
            data
            meta {
              comments
            }
          }
          meditation {
            data {
              month
              days
            }
          }
          xtrain {
            data {
              month
              days
            }
            meta {
              comments
            }
          }
          sober {
            data {
              month
              days
            }
          }
        }
      }
    }
  }
`
