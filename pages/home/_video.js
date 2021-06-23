import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../components'

const BannerContainer = styled.div`
  height: 1000px;
  padding: 4rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledImage = styled(Image)`
  z-index: 0;
`

const ButtonWrapper = styled.div`
  margin-top: 6.4rem;
`
const StyledIFrame = styled.iframe`
  z-index: 2;
  max-width: 144rem;
  border: solid 2px white;
  border-radius: 8px;
`

const Video = () => {
  return (
    <BannerContainer>
      <StyledImage
        src="/images/png/video-bg.png
        "
        alt="Fire patterns"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <StyledIFrame
        width="70%"
        height="65%"
        src="https://www.youtube.com/embed/TaNlWl0PqWU"
        title="Ignite 2021 Teaser"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></StyledIFrame>
      <ButtonWrapper>
        <Link href="/register" as="a">
          <Button orange="true">Register</Button>
        </Link>
      </ButtonWrapper>
    </BannerContainer>
  )
}

export default Video