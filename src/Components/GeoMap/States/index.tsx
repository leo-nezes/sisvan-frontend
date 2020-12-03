import React, { useCallback } from 'react';

import { Geomap } from 'd3plus-react';

import brStates from '../../../data/br-states.json';

const GeoMap: React.FC = () => {
  const brStatesData = [
    { id: 'AC', population: 4830620 },
    { id: 'AL', population: 733375 },
    { id: 'AP', population: 6641928 },
    { id: 'AM', population: 2958208 },
    { id: 'BA', population: 38421464 },
    { id: 'CE', population: 5278906 },
    { id: 'DF', population: 3593222 },
    { id: 'ES', population: 926454 },
    { id: 'GO', population: 647484 },
    { id: 'MA', population: 19645772 },
    { id: 'MT', population: 10006693 },
    { id: 'MS', population: 1406299 },
    { id: 'MG', population: 1616547 },
    { id: 'PA', population: 12873761 },
    { id: 'PB', population: 6568645 },
    { id: 'PR', population: 3093526 },
    { id: 'PE', population: 2892987 },
    { id: 'PI', population: 4397353 },
    { id: 'RR', population: 4625253 },
    { id: 'RO', population: 1329100 },
    { id: 'RJ', population: 5930538 },
    { id: 'RN', population: 6705586 },
    { id: 'RS', population: 9900571 },
    { id: 'SC', population: 5419171 },
    { id: 'SP', population: 2988081 },
    { id: 'SE', population: 6045448 },
    { id: 'TO', population: 1014699 },
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
    on: {
      click: useCallback((data) => {
        console.log(data.id);
      }, []),
    },
  };

  return <Geomap config={methodsGeo} />;
};

export default GeoMap;
