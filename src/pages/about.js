import React from 'react'
import SEO from '../components/seo'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const AboutPage = () => (
  <>
    <SEO title="About" />
    <div style={{ maxWidth: '592px', margin: '0 auto' }}>
      <h1>About</h1>
      <p>
        Hello! My name is Mark Luetke and I live along the front range in
        northern Colorado with my family, two cats, and a dog.
      </p>
      <p>
        In my formitive years I explored many possible carreer paths. I tried
        working fast food, cafeteria food, and gas station food, working on a
        pig farm, a cow farm, and a doggie daycare, laying brick, cutting stone,
        replacing auto glass, cleaing carpets, and caring for the mentally ill.
        Eventually I gave in and followed my muse, studying art, illustration,
        graphic design, and a dash of engineering.
      </p>
      <p>
        Previously I was the Associate Director of Web Development at VCUarts
        where I made websites with ♥ and at ALT Lab where I facilitated change.
        Later I moved to Austin to work on the design team for an AI and ML
        startup where I first learned to be an engineer and made prototypes that
        refused to die.
      </p>

      <p>
        Currently I hold the lofty title of "Lead Design Engineer" where I
        bridge the gap between engineering and design in the world of
        healthcare.
      </p>

      <p>
        You can see some of my work here and on
        <OutboundLink href="https://github.com/luetkemj"> github</OutboundLink>.
      </p>
    </div>
  </>
)

export default AboutPage
