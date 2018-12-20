import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Baggage."
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        'baggage',
        'luggage',
        'airport',
      ]}
    />
    <div
      style={{
        background: '#111',
        display: 'grid',
        height: '100vh',
        overflow: 'auto',
        placeContent: 'center center',
      }}
    >
      <h1 style={{ color: 'white', fontSize: '5em' }}>Baggage.</h1>
    </div>
  </Layout>
)

export default IndexPage
