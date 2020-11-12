import React from 'react';

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
                <input id="gestante" type="checkbox" />
                Gestante
              </label>
              <label htmlFor="lactante">
                <input id="lactante" type="checkbox" />
                Lactante
              </label>
              <label htmlFor="bolsa_familia">
                <input id="bolsa_familia" type="checkbox" />
                Bolsa Família
              </label>
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
