import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  width: 100vw;
  height: 120px;
  padding: 0 64px;
  display: flex;
  align-items: center;
  flex-direction: row;

  background: #008d4c;

  div {
    font-size: 72px;
    color: #f6f4f8;
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 0 8px;
    justify-content: center;

    span {
      font-size: 18px;
    }
  }
`;

export const Content = styled.div`
  max-width: 100vw;

  span {
    font-size: 16px;
    color: #666360;
  }
`;

export const FilterContainer = styled.aside`
  /* padding: 24px 16px; */
  width: 351px;
  height: 801px;
  border-radius: 16px;
  background: red;
`;
