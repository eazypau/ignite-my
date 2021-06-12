import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Button from './Button'
import { Text } from '../components'
import { useAuth } from '../helpers/auth'
// import { Capitalize } from '../helpers/capitalize'

const StyledLink = styled(Link)`
  color: var(--color-white);
  text-decoration: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    transition: width 0.25s;
    height: 0.2rem;
    width: 0;
    background-color: var(--color-orange);
    bottom: -4px;
  }
  &:hover {
    &::before {
      width: 1.6rem;
    }
  }
`

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  top: 0;
  z-index: 100;
  background-color: var(--color-black);
  padding: 0 8rem;
`
const StyledNav = styled.nav`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const LeftWrapper = styled.div`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }

  li {
    margin-right: 6.6rem;
    position: relative;
  }

  a {
    color: var(--color-white);
    font-size: 18px;
    text-decoration: none;
    transition: text-shadow 0.25s;
    position: relative;
  }

  @media (max-width: 900px) {
    display: none;
  }
`

const WhiteSpan = styled.span`
  color: var(--color-white);
`
const OrangeSpan = styled.span`
  color: var(--color-orange);
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Header = () => {
  const user = useAuth()
  return (
    <StyledHeader>
      <StyledNav>
        <LeftWrapper>
          <ul>
            <li>
              <StyledLink href="/">
                <a>Home</a>
              </StyledLink>
            </li>
            <li>
              <StyledLink href="/yls">
                <a>
                  <WhiteSpan>IGNITE</WhiteSpan>
                  <OrangeSpan>YLS</OrangeSpan>
                </a>
              </StyledLink>
            </li>
            <li>
              <StyledLink href="/rally">
                <a>
                  <WhiteSpan>IGNITE</WhiteSpan>
                  <OrangeSpan>RALLY</OrangeSpan>
                </a>
              </StyledLink>
            </li>
            <li>
              <StyledLink href="/blog">
                <a>Blog</a>
              </StyledLink>
            </li>
          </ul>
        </LeftWrapper>
        <RightWrapper>
          {!user ? (
            <StyledLink href="/register">
              <Button orange="true">Register</Button>
            </StyledLink>
          ) : (
            <Text color="white">Welcome back, {user.displayName}</Text>
          )}
        </RightWrapper>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
