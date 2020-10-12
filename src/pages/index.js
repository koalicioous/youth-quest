import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/scss/typography.scss'
import '../styles/app.scss'
import { Helmet } from 'react-helmet'
import Favicon from '../img/q.png'

import Wrapper from '../components/wrapper'
import Heading from '../components/sections/heading'
import Story from '../components/sections/story'
import Story2 from '../components/sections/story-2'
import Timeline from '../components/sections/timeline'
import Pendaftaran from '../components/sections/pendaftaran'
import Benefit from '../components/sections/benefit'
import Rundown from '../components/sections/rundown'
import Bottom from '../components/sections/bottom-cta'

export default function Home() {
  return (
      <Wrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Youth Quest - Fully Funded Trip to Japan</title>
          <meta name="description" content="Fully Funded Educational Trip To Japan" />
          <meta name="keywords" content="Scholarship, Japan Trip" />
          <meta name="author" content="Youth Quest Indonesia" />
          <link rel="icon" href={Favicon} />
        </Helmet>
        <Heading />
        <Story />
        <Story2 />
        <Timeline />
        <Pendaftaran />
        <Benefit />
        <Rundown />
        <Bottom />
      </Wrapper>
    )
}
