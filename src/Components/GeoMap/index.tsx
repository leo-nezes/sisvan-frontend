import React from 'react';

import { Treemap, Geomap } from 'd3plus-react';

import brStates from '../../data/br-states.json';

type SizeProps = { id: string; value: number };
type GeoProps = { id: string; population: number };

const GeoMap: React.FC = () => {
  const popData = [
    { id: '01', population: 4830620 },
    { id: '02', population: 733375 },
    { id: '04', population: 6641928 },
    { id: '05', population: 2958208 },
    { id: '06', population: 38421464 },
    { id: '08', population: 5278906 },
    { id: '09', population: 3593222 },
    { id: '10', population: 926454 },
    { id: '11', population: 647484 },
    { id: '12', population: 19645772 },
    { id: '13', population: 10006693 },
    { id: '15', population: 1406299 },
    { id: '16', population: 1616547 },
    { id: '17', population: 12873761 },
    { id: '18', population: 6568645 },
    { id: '19', population: 3093526 },
    { id: '20', population: 2892987 },
    { id: '21', population: 4397353 },
    { id: '22', population: 4625253 },
    { id: '23', population: 1329100 },
    { id: '24', population: 5930538 },
    { id: '25', population: 6705586 },
    { id: '26', population: 9900571 },
    { id: '27', population: 5419171 },
    { id: '28', population: 2988081 },
    { id: '29', population: 6045448 },
    { id: '30', population: 1014699 },
    { id: '31', population: 1869365 },
    { id: '32', population: 2798636 },
    { id: '33', population: 1324201 },
    { id: '34', population: 8904413 },
    { id: '35', population: 2084117 },
    { id: '36', population: 19673174 },
    { id: '37', population: 9845333 },
    { id: '38', population: 721640 },
    { id: '39', population: 11575977 },
    { id: '40', population: 3849733 },
    { id: '41', population: 3939233 },
    { id: '42', population: 12779559 },
    { id: '44', population: 1053661 },
    { id: '45', population: 4777576 },
    { id: '46', population: 843190 },
    { id: '47', population: 6499615 },
    { id: '48', population: 26538614 },
    { id: '49', population: 2903379 },
    { id: '50', population: 626604 },
    { id: '51', population: 8256630 },
    { id: '53', population: 6985464 },
    { id: '54', population: 1851420 },
    { id: '55', population: 5742117 },
    { id: '56', population: 579679 },
    { id: '72', population: 3583073 },
  ];

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

  const methods = {
    groupBy: 'id',
    data: [
      { id: 'alpha', value: 29 },
      { id: 'beta', value: 10 },
      { id: 'teta', value: 30 },
      { id: 'Leonardo', value: 50 },
    ],
    size: (d: SizeProps) => d.value,
  };

  const methodsGeo = {
    data: [...brStatesData],
    colorScale: 'population',
    topojson: brStates,
    fitFilter: (d: GeoProps) => {
      return ['02', '15', '43', '60', '66', '69', '72', '78'].indexOf(d.id) < 0;
    },
    tiles: false,
    ocean: 'transparent',
    width: '700',
    height: '700',
  };

  return (
    <>
      {/* <Treemap config={methods} /> */}
      <Geomap config={methodsGeo} />
    </>
  );
};

export default GeoMap;
