import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
`;

export const ButtonBox = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 142px;
  height: 42px;
  padding: 8px;
  background: #fcfcfc;
  color: #666360;
  align-items: center;
  border-radius: 8px;
  border: 0;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 142px;
  padding: 0 8px;
  border-radius: 8px;
  background: #fcfcfc;
`;

export const OptionButton = styled.button`
  color: #666360;
  background: #fcfcfc;
  margin: 8px 0;
  border: 0;

  &:after {
    display: flex;
    content: '';
    width: 50%;
    height: 1px;
    margin: 0 auto;

    background: #666360;
    transition: width 0.3s;
  }

  &:hover:after {
    width: 80%;
    align-items: center;
    justify-content: center;
  }
`;
