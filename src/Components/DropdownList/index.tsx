import React, { HTMLAttributes, useState } from 'react';

import { FiChevronDown } from 'react-icons/fi';

import { Container, ButtonBox, OptionsContainer, OptionButton } from './styles';

type OptionsType = string | number;

interface Teste {
  Button: { width: string; height: string };
}

interface DropdownListProps extends HTMLAttributes<HTMLDivElement> {
  placeholder: string;
  containerStyle?: object;
  options: OptionsType[];
}

const DropdownList: React.FC<DropdownListProps> = ({
  placeholder,
  containerStyle = {},
  options,
  ...rest
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
              onClick={() => handleChangeValue(option)}
            >
              {option}
            </OptionButton>
          ))}
        </OptionsContainer>
      )}
    </Container>
  );
};

DropdownList.defaultProps = {
  containerStyle: { Button: { width: '142px', height: '42px' } },
};

export default DropdownList;
