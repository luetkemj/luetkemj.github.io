import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import ListItem from '../components/list-item/list-item.component'
import _ from 'lodash'

import './index.scss'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const posts = edges.filter((post) => post.node.frontmatter.layout === 'post')
  const categories = _.uniq(_.map(posts, (p) => p.node.frontmatter.categories))
  const postsByCategory = _.map(categories, (cat) =>
    _.filter(posts, (post) => post.node.frontmatter.categories === cat)
  )
  console.log({ categories, posts, postsByCategory })
  return (
    <div className="index">
      <SEO title={`${title}`} />
      <section>
        <h2 className="index__header">Posts</h2>
        <ul className="index__post-list">
          {posts.map((post) => (
            <ListItem
              key={post.node.fields.path}
              date={post.node.frontmatter.date}
              path={post.node.fields.path}
              title={post.node.frontmatter.title}
              category={post.node.frontmatter.categories}
            />
          ))}
        </ul>
      </section>

      <section>
        <h2 className="index__header">Comics</h2>
        <ul className="index__post-list">
          <ListItem
            external
            path="http://www.webtoons.com/en/challenge/mallow-chalie/list?title_no=3458"
            title="Mallow Chalie"
          />
          <ListItem path="/comics/strong-man" title="Strong Man" />
          <ListItem
            external
            path="http://www.makingcomics.com/2014/01/18/get-started-already"
            title="Get Started Already!"
          />
          <ListItem path="/comics/inner-dialogue" title="Inner Dialogue" />
          <ListItem
            path="/comics/inner-dialogue-outtakes"
            title="Inner Dialogue Outtakes"
          />
          <ListItem
            external
            path="http://www.makingcomics.com/2014/01/01/taste-vs-ability"
            title="Taste VS Ability"
          />
          {/* <!-- 2816 monument -->
          <!-- experimental sequential 2 --> */}
          <ListItem path="/comics/robert" title="Robert" />
          <ListItem
            external
            path="http://www.topshelfcomix.com/ts2.0/baby_dragons_ch1/"
            title="Baby Dragons Are No Fun - Part 1"
          />
          <ListItem
            external
            path="http://www.topshelfcomix.com/ts2.0/baby_dragons_ch2/"
            title="Baby Dragons Are No Fun - Part 2"
          />
          <ListItem
            path="/comics/rip-smokey-the-cat"
            title="RIP Smokey the Cat"
          />
          <ListItem
            path="/comics/are-you-awake-bunny-rabbit"
            title="Are You Awake Bunny Rabbit?"
          />
          <ListItem path="/comics/fiesta" title="Fiesta" />
        </ul>

        <h2 className="index__header">Games</h2>
        <ul className="index__post-list">
          <ListItem
            external
            path="https://luetkemj.github.io/gobs-o-goblins/"
            title="Gobs O' Goblins"
          />
          <ListItem
            external
            path="https://luetkemj.github.io/snail6/"
            title="Covered In Blood"
          />
          <ListItem
            external
            path="https://luetkemj.github.io/snail5/"
            title="Snail 5"
          />
          <ListItem
            external
            path="https://luetkemj.github.io/snail4/"
            title="Snail 4"
          />
          <ListItem
            external
            path="https://luetkemj.github.io/snail2/"
            title="Snail 2"
          />
          <ListItem
            external
            path="https://luetkemj.github.io/snail/"
            title="Snail"
          />
          <ListItem
            external
            path="https://luetkemj.github.io/snerv/"
            title="Snerv"
          />
        </ul>
      </section>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            path
          }
          frontmatter {
            layout
            title
            date(formatString: "YYMMDD")
            categories
          }
        }
      }
    }
  }
`
