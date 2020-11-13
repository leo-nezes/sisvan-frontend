import React from 'react';

import { FiChevronDown } from 'react-icons/fi';

import SelectFilterElement from '../../Components/SelectFilterElement';

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
                <div>
                  <input placeholder="Selecione" />
                  <FiChevronDown />
                </div>
              </div>
              <div>
                Etnia
                <div>
                  <input placeholder="Selecione" />
                  <FiChevronDown />
                </div>
              </div>
            </div>
            <div id="idade">
              Idade
              <div>
                <div>
                  <input placeholder="De" />
                  <FiChevronDown />
                </div>
                <div>
                  <input placeholder="Até" />
                  <FiChevronDown />
                </div>
              </div>
            </div>
            <div id="altura">
              Altura
              <div>
                <div>
                  <input placeholder="De" />
                  <FiChevronDown />
                </div>
                <div>
                  <input placeholder="Até" />
                  <FiChevronDown />
                </div>
              </div>
            </div>
          </PatientsData>

          <RegionPeriod>
            <p>Região e período</p>
            <hr />
            Localidade
            <div>
              <input placeholder="Brasil" />
              <FiChevronDown />
            </div>
            Unidade
            <div>
              <input placeholder="Selecione a unidade" />
              <FiChevronDown />
            </div>
            Ano
            <div>
              <input type="range" min="0" max="100" />
            </div>
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
