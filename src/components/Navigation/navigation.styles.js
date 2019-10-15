import styled from '@emotion/styled';
import { animated } from 'react-spring';

export const Container = styled(animated.header)`
  position: fixed;
  bottom: 14.4rem;
  right: 1.6rem;

  display: flex;
  flex-flow: column nowrap;

  padding: 4rem;
  padding-right: 5.6rem;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.pleasantYellow};
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    left: 50%;
    top: 2.4rem;
    bottom: unset;
    right: unset;

    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    width: calc(100% - 3.2rem);
    max-width: ${({ theme }) => theme.breakPoints.large.number}px;
    padding: 1.6rem 3.2rem;

    transform: translateX(-50%);
  }

  & a {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-flow: inherit;
  align-items: flex-start;
  margin-bottom: 3.2rem;

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    margin-bottom: 0;
  }

  & a {
    position: relative;
    margin-bottom: 1.6rem;

    &:last-child {
      margin-bottom: 0;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: -0.3rem;
      left: 0;

      width: 100%;
      height: 0.2rem;

      background-color: ${({ theme }) => theme.colors.darkBlue};

      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.2s ease;
    }

    &:hover:after {
      transform: scale(1);
    }

    @media (${({ theme }) => theme.breakPoints.medium.query}) {
      margin-bottom: 0;
      margin-right: 3.2rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  & .active {
    &:after {
      transform: scaleX(1);
    }
  }
`;

export const Social = styled.nav`
  display: block;

  & img {
    width: 100%;
    max-width: 3.2rem;
    vertical-align: middle;
  }

  & a {
    margin-right: 1.6rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Button = styled.button`
  position: fixed;
  bottom: 8rem;
  right: 1.6rem;

  width: 5rem;
  height: 5rem;

  border: none;
  border-radius: 0.4rem;

  background-color: ${({ theme }) => theme.colors.pleasantYellow};
  background-image: url('/images/svg/icons/tap.svg');
  background-position: center;
  background-repeat: no-repeat;

  box-shadow: 0px 0px 2rem rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:active {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    display: none;
  }
`;
