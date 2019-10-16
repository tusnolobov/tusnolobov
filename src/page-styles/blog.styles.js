import styled from '@emotion/styled';

export const Container = styled.section`
  display: grid;
  gap: 2.4rem;

  max-width: ${({ theme }) => theme.breakPoints.medium.number}px;
  margin: 0 auto;

  @media (${({ theme }) => theme.breakPoints.small.query}) {
    gap: 4rem;
  }
  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    gap: 5.6rem;
  }
`;

export const Header = styled.header`
  & p:last-child {
    margin-bottom: 0.8rem;
  }
`;

export const Title = styled.h2`
  margin-top: 0;
`;
