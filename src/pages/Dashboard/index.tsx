import React from 'react';

import { Container, Header, Content, FilterContainer } from './syles';

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

        {/* <FilterContainer>Teste</FilterContainer> */}
      </Content>
    </Container>
  );
};

export default Dashboard;
