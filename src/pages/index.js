import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import SEO from '../components/seo'
import _ from 'lodash';

import './index.scss';

const ListItem = ({ date, path, title, external }) => {
  const classes = date ? 'list-item list-item--with-date' : 'list-item';
  const linkToRender = external ?
    (<OutboundLink className="list-item__link" href={path}>{title}</OutboundLink>) :
    (<Link className="list-item__link" to={path}>{title}</Link>);

  return (
    <li key={`${date}-${title}`} className={classes}>
      {date && <span className="list-item__date extrnal">{date}</span>}
      {linkToRender}
    </li>
  )
};

const IndexPage = ({ 
  data: { 
    allMarkdownRemark: { edges }, 
    site: {
      siteMetadata: {
        title
      }
    }
  }
}) => {
  const posts = edges.filter(post => post.node.frontmatter.layout === 'post');
  const categories = _.chain(posts).map(p => p.node.frontmatter.categories).uniq().value();
  const postsByCategory = _.chain(categories).map(category => _.filter(posts, post => post.node.frontmatter.categories === category)).value()

  return (
    <div className="index">
      <SEO title={`${title}`}/>
      <section>
        {
          postsByCategory.map((category, index) => (
            <>
              <h2 className="index__header">{categories[index]}</h2>
              <ul className="index__post-list">
                {category
                  .map(post => (
                    <ListItem
                      key={post.node.fields.path}
                      date={post.node.frontmatter.date}
                      path={post.node.fields.path}
                      title={post.node.frontmatter.title}
                    />
                  ))
                }
              </ul>    
            </>
          ))
        }
      </section>

      <section>
        <h2 className="index__header">Comics</h2>
        <ul className="index__post-list">
          <ListItem external path="http://www.webtoons.com/en/challenge/mallow-chalie/list?title_no=3458" title="Mallow Chalie" />
          <ListItem path="/comics/strong-man" title="Strong Man" />
          <ListItem external path="http://www.makingcomics.com/2014/01/18/get-started-already" title="Get Started Already!" />
          <ListItem path="/comics/inner-dialogue" title="Inner Dialogue" />
          <ListItem path="/comics/inner-dialogue-outtakes" title="Inner Dialogue Outtakes" />
          <ListItem external path="http://www.makingcomics.com/2014/01/01/taste-vs-ability" title="Taste VS Ability" />
          {/* <!-- 2816 monument -->
          <!-- experimental sequential 2 --> */}
          <ListItem path="/comics/robert" title="Robert" />
          <ListItem external path="http://www.topshelfcomix.com/ts2.0/baby_dragons_ch1/" title="Baby Dragons Are No Fun - Part 1" />
          <ListItem external path="http://www.topshelfcomix.com/ts2.0/baby_dragons_ch2/" title="Baby Dragons Are No Fun - Part 2" />
          <ListItem path="/comics/rip-smokey-the-cat" title="RIP Smokey the Cat" />
          <ListItem path="/comics/are-you-awake-bunny-rabbit" title="Are You Awake Bunny Rabbit?" />
          <ListItem path="/comics/fiesta" title="Fiesta" />
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
`;
