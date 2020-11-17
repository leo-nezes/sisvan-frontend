import React, { HTMLAttributes, useState } from 'react';

import { FiChevronDown } from 'react-icons/fi';

import { Container, ButtonBox, OptionsContainer, OptionButton } from './styles';

type OptionsType = string | number;

interface DropdownListProps extends HTMLAttributes<HTMLDivElement> {
  placeholder: string;
  options: OptionsType[];
}

const DropdownList: React.FC<DropdownListProps> = ({
  placeholder,
  options,
}: DropdownListProps) => {
  const [hide, setHide] = useState(true);
  const [selectedValue, setSelectedValue] = useState<OptionsType>(placeholder);

  const handleHide = (): void => {
    setHide(!hide);
  };

  const handleChangeValue = (option: OptionsType): void => {
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
