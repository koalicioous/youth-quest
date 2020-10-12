import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/scss/typography.scss'
import '../styles/app.scss'

import Wrapper from '../components/wrapper'
import Heading from '../components/sections/heading'
import Story from '../components/sections/story'
import Story2 from '../components/sections/story-2'
import Timeline from '../components/sections/timeline'
import Pendaftaran from '../components/sections/pendaftaran'
import Benefit from '../components/sections/benefit'

export default function Home() {
  return (
      <Wrapper>
        <Heading />
        <Story />
        <Story2 />
        <Timeline />
        <Pendaftaran />
        <Benefit />
      </Wrapper>
    )
}
