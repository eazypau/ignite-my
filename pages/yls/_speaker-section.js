import React from 'react'
import styled from 'styled-components'
import { HeadingShadow } from '../../components'
import SpeakerProfile from '@/components/SpeakerProfile'

const SectionContainer = styled.section`
  width: 100%;
  padding: 7rem 3rem;
  // background-color: ${(props) => props.bgcolor || 'var(--color-black)'};
  // background: ${(props) => props.background};
  background: url("/images/png/IGNITEMY2023/chain 1 flip.png");
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    padding: 12rem 6rem;    
  }
  @media (min-width: 1024px) {
    padding: 9rem 7rem;
  }
  @media (min-width: 1440px) {
    padding: 12rem 16rem;
  }
  @media (min-width: 1700px) {
    padding: 12rem 34rem;
  }
`
const DetailsWrapper = styled.div`
display: flex;
flex-direction: row;
@media (max-width: 1024px) {
  flex-direction: column;
  gap: 8rem;
}
`

const speakerSectionDetails = [
  {
    imgSrc: '/images/jpg/alexa-1.jpg',
    imgSrcHover: '/images/jpg/alexa-2.jpg',
    alt: 'Rev Alexa Ho',
    name: 'Rev Alexa Ho',
    separator: 'of',
    founder: 'PJEFC',
    founderLink: 'https://pjefc.org/',
    details:
      "In full time pastoring ministry since 2004, Alexa loves people, loves talking, and she gathers energy when she talks to people! She’s happily married to Gary, and together, they have a son, Micah. She's currently the Senior Pastor of PJ Evangelical Free Church — a church that seeks to love God, love people and make disciples."
  },
  {
    imgSrc: '/images/jpg/daniel.jpg',
    imgSrcHover: '/images/jpg/daniel.jpg',
    alt: 'Pr Daniel Tan',
    name: 'Pr Daniel Tan',
    separator: 'of',
    founder: 'Generasi Gemilang',
    founderLink: 'https://www.gengemilang.org/',
    details:
      'Daniel has served in the pastoral ministry for 17 years. Daniel pioneered a ministry to reach the East Malaysians residing in the Klang Valley. The ministry eventually grew to be the SIBLife Church he pastors here in PJ today. Ever since his corporate life, Daniel has been very involved in serving the underserved community. In 2010, he founded a social welfare organisation, Yayasan Generasi Gemilang.'
  }
]


const SpeakerSection = () => {
  return (
    <SectionContainer>
      <HeadingShadow align="center">Speakers</HeadingShadow>
      <DetailsWrapper>
      {speakerSectionDetails.map((speaker) => (
        <SpeakerProfile key={speaker.name} speaker={speaker} />
      ))}
      </DetailsWrapper>
    </SectionContainer>
  )
}

export default SpeakerSection
