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
      flex-direction: row;
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
  div {
    display: flex;
    padding: 8px;
    background: #fcfcfc;
    border-radius: 8px;
    align-items: center;

    input {
      flex: 1;
      background: transparent;
      border: 0;
      margin-right: 8px;
      min-width: 0;
    }
  }
`;

export const StatisticalModels = styled.section`
  margin-top: 24px;

  p,
  hr {
    font-size: 16px;
    font-weight: 700;
  }

  div {
    display: flex;
    padding: 8px;
    background: #fcfcfc;
    border-radius: 8px;
    align-items: center;
    margin-top: 8px;

    input {
      flex: 1;
      background: transparent;
      border: 0;
      margin-right: 8px;
      min-width: 0;
    }
  }
`;
