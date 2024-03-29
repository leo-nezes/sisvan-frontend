import styled from 'styled-components';

import ScrollArea from 'react-scrollbar';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;

  width: calc(100vw - (100vw - 100%));
  height: 120px;
  padding: 0 64px;

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
  display: flex;
  flex-direction: row;

  max-width: calc(100vw - (100vw - 100%));
  margin: 16px 64px;

  span {
    font-size: 16px;
  }
`;

export const FilterContainer = styled.div`
  margin-right: 32px;
`;

export const FilterBox = styled.aside`
  width: 100%;
  max-width: 351px;
  height: 801px;
  margin-top: 8px;
  padding: 24px 16px;

  border-radius: 16px;
  background: #f5f5f5;

  #buttonComponent {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 8px;
    }
  }
`;

export const MapContainer = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;

  h3,
  p {
    color: #666360;
    margin-bottom: 8px;
  }
`;

export const MapBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InformationContainer = styled(ScrollArea)`
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

export const PatientsData = styled.section`
  p,
  hr {
    font-size: 16px;
    font-weight: 700;
  }

  input[type='radio'] {
    width: 16px;
    height: 16px;
  }

  #genero {
    margin-top: 8px;

    label:first-child {
      margin-right: 75px;
    }

    label > input {
      margin-right: 8px;
    }
  }

  #opcoes_maes {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;

    label > input {
      margin-right: 8px;
      width: 14px;
      height: 14px;
    }
  }

  #caracteristicas {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }

  #idade,
  #altura {
    margin-top: 16px;

    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const RegionPeriod = styled.section`
  margin-top: 24px;

  hr {
    margin-bottom: 8px;
  }

  p,
  hr {
    font-size: 16px;
    font-weight: 700;
  }

  div {
    margin-bottom: 8px;
  }
`;

export const StatisticalModels = styled.section`
  margin-top: 24px;

  hr {
    margin-bottom: 8px;
  }

  p,
  hr {
    font-size: 16px;
    font-weight: 700;
  }
`;

export const Footer = styled.footer`
  display: flex;
  width: calc(100vw - (100vw - 100%));
  padding: 32px 64px;
  background: #008d4c;
  color: #f6f4f8;
  justify-content: space-between;

  a {
    color: #f6f4f8;
  }
`;
