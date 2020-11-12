import React from 'react';

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
              <SelectFilterElement
                htmlFor="masculino"
                inputId="masculino"
                inputType="radio"
                inputName="genero"
              >
                Masculino
              </SelectFilterElement>
              <label htmlFor="feminino">
                <input id="feminino" name="genero" type="radio" />
                Feminino
              </label>
            </div>
            <div id="opcoes_maes">
              <SelectFilterElement
                htmlFor="gestante"
                inputId="gestante"
                inputType="checkbox"
              >
                Gestante
              </SelectFilterElement>
              <SelectFilterElement
                htmlFor="lactante"
                inputId="lactante"
                inputType="checkbox"
              >
                Lactante
              </SelectFilterElement>
              <SelectFilterElement
                htmlFor="bolsa_familia"
                inputId="bolsa_familia"
                inputType="checkbox"
              >
                Bolsa Família
              </SelectFilterElement>
            </div>
            <div id="caracteristicas">
              Raça/Cor
              <div>
                <input placeholder="Selecione" />
              </div>
              Etnia
              <div>
                <input placeholder="Selecione" />
              </div>
            </div>
            <div>
              Idade
              <input placeholder="De" />
              <input placeholder="Até" />
            </div>
            <div>
              Altura
              <input placeholder="De" />
              <input placeholder="Até" />
            </div>
          </PatientsData>

          <RegionPeriod>
            Região e período
            <hr />
            Localidade
            <input placeholder="Brasil" />
            Unidade
            <input placeholder="Selecione a unidade" />
            Ano
            <input placeholder="Selecione a unidade" />
          </RegionPeriod>

          <StatisticalModels>
            Modelos Estatísticos
            <hr />
            <input placeholder="Selecionar" />
          </StatisticalModels>
        </FilterContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
