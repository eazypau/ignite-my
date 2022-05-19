import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/helpers/auth'
import { Button } from '../../components'

const BannerContainer = styled.div`
  height: 750px;
  padding: 10rem 0;
  position: relative;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 760px;
    /* padding: 2.4rem 0; */
  }
  @media (max-width: 560px) {
    height: 600px;
    /* padding: 1.2rem 0; */
  }
`

const StyledImage = styled(Image)`
  z-index: 0;
`

const ImageWrapper = styled.div`
  /* padding-left: 10rem;
  padding-right: 15rem;
  padding-top: 10rem; */
  padding: 10rem 15rem 0 10rem;
`

const ButtonWrapper = styled.div`
  margin-top: 6.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledIFrame = styled.iframe`
  z-index: 2;
  max-width: 144rem;
  border: solid 2px white;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 90%;
    height: 460px;
  }
  @media (max-width: 560px) {
    width: 95%;
    height: 320px;
  }
`

const StyledExtLink = styled.a`
  color: var(--color-white);
  text-decoration: none;
  position: relative;
`

const Video = () => {
  const user = useAuth()
  return (
    <BannerContainer>
      {/* <StyledImage
        src="/images/png/video-bg.png"
        alt="Fire patterns"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      /> */}
      <ImageWrapper>
        <Image
          src="/images/png/sketched-human-model.png"
          alt="sketched model"
          width={208}
          height={386}
        />
      </ImageWrapper>
      <div style={{ width: "50%", height: "80%" }}>
        <StyledIFrame
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/mQWBvqyyZ5w"
          title="IGNITEMY2021 Promo Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <ButtonWrapper>
          <StyledExtLink
            href="https://ignitemy.online.church/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button orange="true">Streaming Live</Button>
          </StyledExtLink>
        </ButtonWrapper>
      </div>
    </BannerContainer>
  )
}

export default Video
