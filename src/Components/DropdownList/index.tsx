import React, { HTMLAttributes, useState } from 'react';

import { FiChevronDown } from 'react-icons/fi';

import { Container, ButtonBox, OptionsContainer, OptionButton } from './styles';

interface DropdownListProps extends HTMLAttributes<HTMLDivElement> {
  options: string[];
}

const DropdownList: React.FC<DropdownListProps> = ({
  options,
}: DropdownListProps) => {
  const [hide, setHide] = useState(true);
  const [selectedValue, setSelectedValue] = useState('Selecione');

  const handleHide = (): void => {
    setHide(!hide);
  };

  const handleChangeValue = (option: string): void => {
    setSelectedValue(option);
    setHide(!hide);
  };

  return (
    <Container>
      <ButtonBox onClick={handleHide} type="button">
        {selectedValue}
        <FiChevronDown />
      </ButtonBox>
      {!hide && (
        <OptionsContainer>
          {options.map((option) => (
            <OptionButton
              key={option}
              type="button"
              value={option}
              onClick={(e) => handleChangeValue(option)}
            >
              {option}
            </OptionButton>
          ))}
        </OptionsContainer>
      )}
    </Container>
  );
};

export default DropdownList;
