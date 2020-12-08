import React, { HTMLAttributes, useEffect, useState } from 'react';

import { FiChevronDown } from 'react-icons/fi';

import { useFilter } from '../../hooks/filter';

import { Container, ButtonBox, OptionsContainer, OptionButton } from './styles';

type IContainerStyleProps = {
  button: object;
  list: object;
};

interface IDropdownListProps extends HTMLAttributes<HTMLDivElement> {
  containerStyle?: IContainerStyleProps;
  idFilter: string;
  options: string[];
}

const DropdownList: React.FC<IDropdownListProps> = ({
  containerStyle = {
    button: Object,
    list: Object,
  },
  idFilter,
  options,
  ...rest
}: IDropdownListProps) => {
  const [hide, setHide] = useState(true);
  const [selectedValue, setSelectedValue] = useState<string>(options[0]);

  const { button, list } = containerStyle;
  const { setFilter } = useFilter();

  const handleHide = (): void => {
    setHide(!hide);
  };

  const handleSetOption = (idFilterOption: string, option: string): void => {
    setFilter({ [idFilterOption]: option });
    setSelectedValue(option);
    setHide(!hide);
  };

  useEffect(() => {
    setFilter({ [idFilter]: selectedValue });
  }, []);

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
              onClick={() => handleSetOption(idFilter, option)}
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
