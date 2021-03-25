import React, { ReactElement } from 'react';

import { Container, Description } from './styles';

import { useMap } from '../../hooks/map';

const InformationContainer = (): ReactElement => {
  const { information } = useMap();
  const {
    city,
    state,
    region,
    total,
    veryLowWeightForAge,
    lowWeightForAge,
    properWeightForAge,
    highWeightForAge,
  } = information;

  return (
    <Container>
      {`${city} - ${state} - ${region}`}
      <Description>{`Total: ${total} resultados`}</Description>
      <h4>Peso X Idade</h4>
      <hr />
      <div>
        Peso muito baixo para a idade
        <p>{`Quantidade: ${veryLowWeightForAge.quantity}`}</p>
        <p>{`Porcentagem: ${veryLowWeightForAge.percentage}%`}</p>
      </div>
      <div>
        Peso baixo para a idade
        <p>{`Quantidade: ${lowWeightForAge.quantity}`}</p>
        <p>{`Porcentagem: ${lowWeightForAge.percentage}%`}</p>
      </div>
      <div>
        Peso adequado ou eutrófico
        <p>{`Quantidade: ${properWeightForAge.quantity}`}</p>
        <p>{`Porcentagem: ${properWeightForAge.percentage}%`}</p>
      </div>
      <div>
        Peso elevado para a idade
        <p>{`Quantidade: ${highWeightForAge.quantity}`}</p>
        <p>{`Porcentagem: ${highWeightForAge.percentage}%`}</p>
      </div>
      {/* <h4>Peso X Altura</h4>
      <hr />
      <div>
        Magreza acentuada
        <p>Quantidade: 136</p>
        <p>Porcentagem: 2.61%</p>
      </div>
      <div>
        Magreza
        <p>Quantidade: 166</p>
        <p>Porcentagem: 3.19%</p>
      </div>
      <div>
        Peso adequado ou eutrófico
        <p>Quantidade: 3191</p>
        <p>Porcentagem: 61.34%</p>
      </div>
      <div>
        Risco de sobrepeso
        <p>Quantidade: 399</p>
        <p>Porcentagem: 7.67%</p>
      </div>
      <div>
        Obesidade
        <p>Quantidade: 362</p>
        <p>Porcentagem: 6.96%</p>
      </div>
      <h4>Altura X Idade</h4>
      <hr />
      <div>
        Altura muito baixa para a idade
        <p>Quantidade: 487</p>
        <p>Porcentagem: 9.36%</p>
      </div>
      <div>
        Altura baixa para a idade
        <p>Quantidade: 717</p>
        <p>Porcentagem: 13.78%</p>
      </div>
      <div>
        Altura adequada para a idade
        <p>Quantidade: 3998</p>
        <p>Porcentagem: 76.86%</p>
      </div>
      <h4>IMC X Idade</h4>
      <hr />
      <div>
        Magreza acentuada
        <p>Quantidade: 180</p>
        <p>Porcentagem: 3.46%</p>
      </div>
      <div>
        Magreza
        <p>Quantidade: 168</p>
        <p>Porcentagem: 3.23%</p>
      </div>
      <div>
        Eutrofia
        <p>Quantidade: 2964</p>
        <p>Porcentagem: 56.98%</p>
      </div>
      <div>
        Risco de sobrepeso
        <p>Quantidade: 1.035</p>
        <p>Porcentagem: 19.9%</p>
      </div>
      <div>
        Sobrepeso
        <p>Quantidade: 466</p>
        <p>Porcentagem: 8.96%</p>
      </div>
      <div>
        Obesidade
        <p>Quantidade: 389</p>
        <p>Porcentagem: 7.48%</p>
      </div> */}
    </Container>
  );
};

export default InformationContainer;
