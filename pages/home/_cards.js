import React from 'react'
import styled from 'styled-components'
import { Text, Heading } from '../../components'
import Image from 'next/image'
import PropTypes from 'prop-types'

const SpeakerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2.5rem;
  min-width: 300px;
  margin-top: 2.4rem;
  position: relative;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-1.1rem) scale(1.02);
  }
`

const SpeakerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 0;
  max-height: 76px;
  overflow: hidden;
  height: auto;
  background-color: var(--color-orange);
  width: 100%;
  max-width: 370px;
  padding: 2.4rem;
  border-radius: 2.5rem;
  z-index: 1;
  transition: all 0.5s ease-in;

  :hover {
    max-height: 407px;

    p {
      display: unset;
    }
  }
`
const StyledImage = styled(Image)`
  border-radius: 2.5rem;
  object-fit: cover;
  filter: grayscale(100%);
`

const HoverText = styled(Text)`
  display: none;
`

const Cards = (props) => {
  const { src, name, children } = props
  return (
    <SpeakerCard>
      <StyledImage
        src={src ? src : '/images/png/event-2.png'}
        height={407}
        width={370}
        alt={name}
      />
      <SpeakerContent>
        <Heading color="black" size="1.8rem">
          {name}
        </Heading>
        <HoverText color="white" mt="2rem">
          {children}
        </HoverText>
      </SpeakerContent>
    </SpeakerCard>
  )
}

Cards.propTypes = {
  imageSource: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Cards
