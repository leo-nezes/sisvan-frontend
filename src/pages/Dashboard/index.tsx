import React, { useState, ChangeEvent } from 'react';

import { FiChevronDown } from 'react-icons/fi';
import { Slider } from '@material-ui/core';

import DropdownList from '../../Components/DropdownList';

import {
  Container,
  Header,
  Content,
  FilterContainer,
  PatientsData,
  RegionPeriod,
  StatisticalModels,
} from './styles';

const Dashboard: React.FC = () => {
  const textValue = (value: number): string => `${value}`;
  const [value, setValue] = useState<number[]>([1, 50]);

  const handleChange = (
    event: ChangeEvent<{}>,
    newValue: number | number[],
  ): void => {
    setValue(newValue as number[]);
  };

  return (
    <Container>
      <Header>
        <div>SISVAN</div>
        <div>
          <span>Sistema de Vigilância</span>
          <span>Alimentar e Nutricional</span>
        </div>
      </Header>

      <Content>
        <span>Utilize os filtros para a construção do gráfico.</span>

        <FilterContainer>
          <PatientsData>
            <p>Dados dos pacientes</p>
            <hr />
            <div id="genero">
              <label htmlFor="masculino">
                <input id="masculino" name="genero" type="radio" />
                Masculino
              </label>

              <label htmlFor="feminino">
                <input id="feminino" name="genero" type="radio" />
                Feminino
              </label>
            </div>
            <div id="opcoes_maes">
              <label htmlFor="gestante">
                <input id="gestante" name="gestante" type="checkbox" />
                Gestante
              </label>

              <label htmlFor="lactante">
                <input id="lactante" name="lactante" type="checkbox" />
                Lactante
              </label>

              <label htmlFor="bolsa_familia">
                <input
                  id="bolsa_familia"
                  name="bolsa_familia"
                  type="checkbox"
                />
                Bolsa Familia
              </label>
            </div>
            <div id="caracteristicas">
              <div>
                Raça/Cor
                <DropdownList
                  placeholder="Selecione"
                  options={['Preto', 'Pardo', 'Branco', 'Amarelo']}
                />
              </div>
              <div>
                Etnia
                <DropdownList
                  placeholder="Selecione"
                  options={[
                    'Brancos',
                    'Negros',
                    'Indígenas',
                    'Pardos',
                    'Mulatos',
                    'Caboclos',
                    'Cafuzos',
                  ]}
                />
              </div>
            </div>
            <div id="idade">
              Idade
              <div>
                <DropdownList
                  placeholder="De"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                />
                <DropdownList
                  placeholder="Até"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                />
              </div>
            </div>
            <div id="altura">
              Altura
              <div>
                <DropdownList
                  placeholder="De"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                />
                <DropdownList
                  placeholder="Até"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                />
              </div>
            </div>
          </PatientsData>

          <RegionPeriod>
            <p>Região e período</p>
            <hr />
            Localidade
            <DropdownList
              placeholder="Brasil"
              options={[
                'Pará',
                'Roraima',
                'São Paulo',
                'Rio de Janeiro',
                'Santa Catarina',
              ]}
            />
            Unidade
            <div>
              <input placeholder="Selecione a unidade" />
              <FiChevronDown />
            </div>
            Ano
            <Slider
              value={value}
              step={5}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={textValue}
            />
          </RegionPeriod>

          <StatisticalModels>
            <p>Modelos Estatísticos</p>
            <hr />
            <div>
              <input placeholder="Selecionar" />
              <FiChevronDown />
            </div>
          </StatisticalModels>
        </FilterContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
