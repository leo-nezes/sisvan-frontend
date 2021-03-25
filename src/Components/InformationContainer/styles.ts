import styled from 'styled-components';

import ScrollArea from 'react-scrollbar';

export const Container = styled(ScrollArea)`
  width: 280px;
  height: 845px;
  margin-left: 8px;
  padding: 8px;
  border-radius: 0 16px 16px 0;
  box-shadow: -1px 1px 5px #807e7e;

  h3 {
    margin-bottom: 0;
  }

  p {
    margin-bottom: 0;
    font-size: 14px;
  }

  h4 {
    text-align: center;
  }

  div,
  hr {
    margin-bottom: 8px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 8px !important;
`;
