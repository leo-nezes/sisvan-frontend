import styled from 'styled-components';

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

  max-width: calc(100vw - (100vw - 100%));
  height: 100vh;
  margin: 8px 64px;
  flex-direction: column;

  span {
    font-size: 16px;
  }
`;

export const FilterContainer = styled.aside`
  width: 100%;
  max-width: 351px;
  height: 801px;
  margin-top: 8px;
  padding: 24px 16px;

  border-radius: 16px;
  background: #f5f5f5;
`;

export const PatientsData = styled.section`
  p,
  hr {
    font-size: 16px;
    font-weight: 700;
  }

  /* label,
  input {
    margin-right: 8px;
  } */

  input[type='radio'] {
    width: 16px;
    height: 16px;

    /* margin-right: 8px; */
  }

  div {
    margin-top: 8px;
  }

  #genero {
    label:first-child {
      margin-right: 75px;
    }
  }

  #opcoes_maes {
    input[type='checkbox'] {
      width: 14px;
      height: 14px;
    }
  }

  #caracteristicas {
    display: flex;
    flex-direction: column;

    input {
      margin-top: 8px;
    }
  }
`;

export const RegionPeriod = styled.section``;

export const StatisticalModels = styled.section``;
