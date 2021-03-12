import React, { useState, ChangeEvent } from 'react';

import { Slider } from '@material-ui/core';
import { FiSearch, FiPrinter } from 'react-icons/fi';

import { BlobProvider } from '@react-pdf/renderer';
import { useFilter } from '../../hooks/filter';
import { useMap } from '../../hooks/map';

import DropdownList from '../../Components/DropdownList';
import Button from '../../Components/Button';
import Brazil from '../../Components/GeoMap/Brazil';
import Para from '../../Components/GeoMap/Para';

import { PDF } from '../../Components/PDF';

import {
  Container,
  Header,
  Content,
  FilterContainer,
  FilterBox,
  MapContainer,
  MapBox,
  InformationContainer,
  Description,
  PatientsData,
  RegionPeriod,
  StatisticalModels,
  Footer,
} from './styles';

const Dashboard: React.FC = () => {
  const { filterObject, toFilter } = useFilter();
  const { mapContainerInformation } = useMap();

  const [value, setValue] = useState<number[]>([1, 50]);
  const yearNow = new Date();

  const style = { button: { width: '320px' }, list: { width: '320px' } };

  const handleChange = (
    event: ChangeEvent<{}>,
    newValue: number | number[],
  ): void => {
    setValue(newValue as number[]);
  };

  const handleFilter = (): void => {
    toFilter();
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
        <FilterContainer>
          <span>Utilize os filtros para a construção do gráfico.</span>
          <FilterBox>
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
                    idFilter="raca_cor"
                    options={[
                      'Selecione',
                      'Pardo',
                      'Preto',
                      'Branco',
                      'Amarelo',
                    ]}
                  />
                </div>
                <div>
                  Etnia
                  <DropdownList
                    idFilter="etnia"
                    options={[
                      'Selecione',
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
                    idFilter="idade_de"
                    options={[
                      'De',
                      '1',
                      '2',
                      '3',
                      '4',
                      '5',
                      '6',
                      '7',
                      '8',
                      '9',
                      '10',
                    ]}
                  />
                  <DropdownList
                    idFilter="idade_ate"
                    options={[
                      'Até',
                      '1',
                      '2',
                      '3',
                      '4',
                      '5',
                      '6',
                      '7',
                      '8',
                      '9',
                      '10',
                    ]}
                  />
                </div>
              </div>
              <div id="altura">
                Altura
                <div>
                  <DropdownList
                    idFilter="altura_de"
                    options={[
                      'De',
                      '1',
                      '2',
                      '3',
                      '4',
                      '5',
                      '6',
                      '7',
                      '8',
                      '9',
                      '10',
                    ]}
                  />
                  <DropdownList
                    idFilter="altura_ate"
                    options={[
                      'Até',
                      '1',
                      '2',
                      '3',
                      '4',
                      '5',
                      '6',
                      '7',
                      '8',
                      '9',
                      '10',
                    ]}
                  />
                </div>
              </div>
            </PatientsData>

            <RegionPeriod>
              <p>Região e período</p>
              <hr />
              Localidade
              <DropdownList
                idFilter="localidade"
                containerStyle={style}
                options={['Brasil', 'Para']}
              />
              Unidade
              <DropdownList
                idFilter="unidade"
                containerStyle={style}
                options={[
                  'Selecione',
                  'Unidade 1',
                  'Unidade 2',
                  'Unidade 3',
                  'Unidade 4',
                  'Unidade 5',
                ]}
              />
              Ano
              <Slider
                value={value}
                step={5}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={(textValue: number): string => `${textValue}`}
              />
            </RegionPeriod>

            <StatisticalModels>
              <p>Modelos Estatísticos</p>
              <hr />
              <DropdownList
                idFilter="modelos"
                containerStyle={style}
                options={['Mapa', 'Histograma', 'Gráfico de Linha']}
              />
            </StatisticalModels>

            <Button id="buttonComponent" onClick={handleFilter}>
              <FiSearch />
              Filtrar
            </Button>
          </FilterBox>
        </FilterContainer>
        <MapContainer>
          <h3>Estados nutricionais</h3>
          <p>Total: 20.000 resultados</p>
          <MapBox>
            {filterObject.localidade === 'Para' ? <Para /> : <Brazil />}

            {mapContainerInformation && (
              <InformationContainer>
                <BlobProvider document={PDF}>
                  {({ url }) => (
                    <div
                      style={{
                        width: '50%',
                        padding: '8px',
                        margin: '8px auto',
                        borderRadius: '8px',
                        background: '#00ab5c',
                        cursor: 'pointer',
                      }}
                    >
                      <a
                        href={url != null ? url : ''}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#f6f4f8',
                          textDecoration: 'none',
                        }}
                      >
                        <FiPrinter
                          style={{
                            margin: 'auto 8px',
                            fontSize: '18px',
                            color: '#f6f4f8',
                          }}
                        />
                        Gerar PDF
                      </a>
                    </div>
                  )}
                </BlobProvider>

                <h3>ABAETETUBA</h3>
                <Description>Total: 5202 resultados</Description>
                <h4>Peso X Idade</h4>
                <hr />
                <div>
                  Peso muito baixo para a idade
                  <p>Quantidade: 73</p>
                  <p>Porcentagem: 1.4%</p>
                </div>
                <div>
                  Peso baixo para a idade
                  <p>Quantidade: 245</p>
                  <p>Porcentagem: 4.71%</p>
                </div>
                <div>
                  Peso adequado ou eutrófico
                  <p>Quantidade: 4618</p>
                  <p>Porcentagem: 88.77%</p>
                </div>
                <div>
                  Peso elevado para a idade
                  <p>Quantidade: 266</p>
                  <p>Porcentagem: 5.11%</p>
                </div>

                <h4>Peso X Altura</h4>
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
                </div>
              </InformationContainer>
            )}
          </MapBox>
        </MapContainer>
      </Content>

      <Footer>
        Ministério da Saúde &copy; &nbsp;
        {yearNow.getFullYear()}
        <a href="http://aps.saude.gov.br/" target="_blank" rel="noreferrer">
          Secretaria de Atenção Primária à Saúde
        </a>
      </Footer>
    </Container>
  );
};

export default Dashboard;
