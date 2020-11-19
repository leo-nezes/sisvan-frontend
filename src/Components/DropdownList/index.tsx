import React, { HTMLAttributes, useState } from 'react';

import { FiChevronDown } from 'react-icons/fi';

import { Container, ButtonBox, OptionsContainer, OptionButton } from './styles';

type OptionsType = string | number;

type IContainerStyleProps = {
  button: object;
  list: object;
};

interface IDropdownListProps extends HTMLAttributes<HTMLDivElement> {
  placeholder: string;
  containerStyle?: IContainerStyleProps;
  options: OptionsType[];
}

const DropdownList: React.FC<IDropdownListProps> = ({
  placeholder,
  containerStyle = {
    button: Object,
    list: Object,
  },
  options,
  ...rest
}: IDropdownListProps) => {
  const [hide, setHide] = useState(true);
  const [selectedValue, setSelectedValue] = useState<OptionsType>(placeholder);

  const { button, list } = containerStyle;

  const handleHide = (): void => {
    setHide(!hide);
  };

  const handleChangeValue = (option: OptionsType): void => {
    setSelectedValue(option);
    setHide(!hide);
  };

  return (
    <Container {...rest}>
      <ButtonBox style={{ ...button }} onClick={handleHide} type="button">
        {selectedValue}
        <FiChevronDown />
      </ButtonBox>
      {!hide && (
        <OptionsContainer style={{ ...list }}>
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
  containerStyle: {
    button: { width: '142px', height: '42px' },
    list: { width: '142px' },
  },
};

export default DropdownList;
