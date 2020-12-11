import React, { useCallback } from 'react';

import { Geomap } from 'd3plus-react';

import brStates from '../../../data/br-states.json';

type DataType = {
  id: string;
  name: string;
  population: number;
};

const Brazil: React.FC = () => {
  const brStatesData = [
    { id: 'AC', name: 'Acre', population: 4830620 },
    { id: 'AL', name: 'Alagoas', population: 733375 },
    { id: 'AP', name: 'Amapá', population: 6641928 },
    { id: 'AM', name: 'Amazonas', population: 2958208 },
    { id: 'BA', name: 'Bahia', population: 38421464 },
    { id: 'CE', name: 'Ceará', population: 5278906 },
    { id: 'DF', name: 'Distrito Federal', population: 3593222 },
    { id: 'ES', name: 'Espírito Santo', population: 926454 },
    { id: 'GO', name: 'Goiás', population: 647484 },
    { id: 'MA', name: 'Maranhão', population: 19645772 },
    { id: 'MT', name: 'Mato Grosso', population: 10006693 },
    { id: 'MS', name: 'Mato Grosso do Sul', population: 1406299 },
    { id: 'MG', name: 'Minas Gerais', population: 1616547 },
    { id: 'PA', name: 'Pará', population: 12873761 },
    { id: 'PB', name: 'Paraíba', population: 6568645 },
    { id: 'PR', name: 'Paraná', population: 3093526 },
    { id: 'PE', name: 'Pernambuco', population: 2892987 },
    { id: 'PI', name: 'Piauí', population: 4397353 },
    { id: 'RR', name: 'Roraima', population: 4625253 },
    { id: 'RO', name: 'Rondônia', population: 1329100 },
    { id: 'RJ', name: 'Rio de Janeiro', population: 5930538 },
    { id: 'RN', name: 'Rio Grande do Norte', population: 6705586 },
    { id: 'RS', name: 'Rio Grande do Sul', population: 9900571 },
    { id: 'SC', name: 'Santa Catarina', population: 5419171 },
    { id: 'SP', name: 'São Paulo', population: 2988081 },
    { id: 'SE', name: 'Sergipe', population: 6045448 },
    { id: 'TO', name: 'Tocantins', population: 1014699 },
  ];

  const methodsGeo = {
    data: [...brStatesData],
    colorScale: 'population',
    topojson: brStates,
    tiles: false,
    ocean: 'transparent',
    // colorScaleConfig: { color: ['red', 'orange', 'yellow', 'green', 'blue'] },
    width: '836',
    // width: '556',
    height: '768',
    // shapeConfig: {
    //   label: useCallback((data: DataType) => {
    //     return data.name;
    //   }, []),
    // labelConfig: {
    //   fontFamily: 'Roboto-Slab',
    //   fontMax: 1000,
    // },
    // },

    tooltipConfig: {
      title: useCallback((data: DataType) => {
        return data.name;
      }, []),
      // tbody: [['Leonardo']],
    },
    on: {
      hover: useCallback((data) => {
        console.log(data.id);
      }, []),
    },
  };

  return <Geomap config={methodsGeo} />;
};

export default Brazil;
