import React, { useCallback, useState } from 'react';

import { Geomap } from 'd3plus-react';

import para from '../../../data/PA.json';

import { useMap } from '../../../hooks/map';

type DataType = {
  id: string;
  name: string;
  population: number;
};

const Para: React.FC = () => {
  const [widthMap, setWidthMap] = useState('836');

  const { showContainerInformation, loadInformation } = useMap();

  const paraCities = [
    { id: '1500107', name: 'ABAETETUBA', population: 1492745 },
    { id: '1500131', name: 'ABEL FIGUEIREDO', population: 304589 },
    { id: '1500206', name: 'ACARA', population: 279349 },
    { id: '1500305', name: 'AFUA', population: 208273 },
    { id: '1500347', name: 'AGUA AZUL DO NORTE', population: 200793 },
    { id: '1500404', name: 'ALENQUER', population: 157698 },
    { id: '1500503', name: 'ALMEIRIM', population: 136390 },
    { id: '1500602', name: 'ALTAMIRA', population: 129321 },
    { id: '1500701', name: 'ANAJAS', population: 126436 },
    { id: '1500800', name: 'ANANINDEUA', population: 124763 },
    { id: '1500859', name: 'ANAPU', population: 122294 },
    { id: '1500909', name: 'AUGUSTO CORREA', population: 113195 },
    { id: '1500958', name: 'AURORA DO PARA', population: 112148 },
    { id: '1501006', name: 'AVEIRO', population: 111764 },
    { id: '1501105', name: 'BAGRE', population: 103664 },
    { id: '1501204', name: 'BAIAO', population: 101891 },
    { id: '1501253', name: 'BANNACH', population: 101097 },
    { id: '1501303', name: 'BARCARENA', population: 83997 },
    { id: '1501402', name: 'BELEM', population: 80988 },
    { id: '1501451', name: 'BELTERRA', population: 74602 },
    { id: '1501501', name: 'BENEVIDES', population: 72160 },
    { id: '1501576', name: 'BOM JESUS DO TOCANTINS', population: 71187 },
    { id: '1501600', name: 'BONITO', population: 69746 },
    { id: '1501709', name: 'BRAGANCA', population: 68616 },
    { id: '1501725', name: 'BRASIL NOVO', population: 64738 },
    { id: '1501758', name: 'BREJO GRANDE DO ARAGUAIA', population: 62854 },
    { id: '1501782', name: 'BREU BRANCO', population: 62455 },
    { id: '1501808', name: 'BREVES', population: 62355 },
    { id: '1501907', name: 'BUJARU', population: 61689 },
    { id: '1501956', name: 'CACHOEIRA DO ARARI', population: 61126 },
    { id: '1502004', name: 'CACHOEIRA DO PIRIA', population: 61049 },
    { id: '1502103', name: 'CAMETA', population: 58956 },
    { id: '1502152', name: 'CANAA DOS CARAJAS', population: 58457 },
    { id: '1502202', name: 'CAPANEMA', population: 58328 },
    { id: '1502301', name: 'CAPITAO POCO', population: 57900 },
    { id: '1502400', name: 'CASTANHAL', population: 57632 },
    { id: '1502509', name: 'CHAVES', population: 56908 },
    { id: '1502608', name: 'COLARES', population: 56480 },
    { id: '1502707', name: 'CONCEICAO DO ARAGUAIA', population: 55513 },
    { id: '1502756', name: 'CONCORDIA DO PARA', population: 54179 },
    { id: '1502764', name: 'CUMARU DO NORTE', population: 53191 },
    { id: '1502772', name: 'CURIONOPOLIS', population: 53182 },
    { id: '1502806', name: 'CURRALINHO', population: 51964 },
    { id: '1502855', name: 'CURUA', population: 51903 },
    { id: '1502905', name: 'CURUCA', population: 49503 },
    { id: '1502939', name: 'DOM ELISEU', population: 47734 },
    { id: '1502954', name: 'ELDORADO DOS CARAJAS', population: 46986 },
    { id: '1503002', name: 'FARO', population: 46416 },
    { id: '1503044', name: 'FLORESTA DO ARAGUAIA', population: 45517 },
    { id: '1503077', name: 'GARRAFAO DO NORTE', population: 45516 },
    { id: '1503093', name: 'GOIANESIA DO PARA', population: 44751 },
    { id: '1503101', name: 'GURUPA', population: 40458 },
    { id: '1503200', name: 'IGARAPE-ACU', population: 40424 },
    { id: '1503309', name: 'IGARAPE-MIRI', population: 39857 },
    { id: '1503408', name: 'INHANGAPI', population: 39783 },
    { id: '1503457', name: 'IPIXUNA DO PARA', population: 39540 },
    { id: '1503507', name: 'IRITUIA', population: 39059 },
    { id: '1503606', name: 'ITAITUBA', population: 38863 },
    { id: '1503705', name: 'ITUPIRANGA', population: 38588 },
    { id: '1503754', name: 'JACAREACANGA', population: 36050 },
    { id: '1503804', name: 'JACUNDA', population: 34142 },
    { id: '1503903', name: 'JURUTI', population: 33893 },
    { id: '1504000', name: 'LIMOEIRO DO AJURU', population: 33674 },
    { id: '1504059', name: 'MAE DO RIO', population: 33178 },
    { id: '1504109', name: 'MAGALHAES BARATA', population: 32991 },
    { id: '1504208', name: 'MARABA', population: 32847 },
    { id: '1504307', name: 'MARACANA', population: 32504 },
    { id: '1504406', name: 'MARAPANIM', population: 32319 },
    { id: '1504422', name: 'MARITUBA', population: 32168 },
    { id: '1504455', name: 'MEDICILANDIA', population: 31837 },
    { id: '1504505', name: 'MELGACO', population: 31213 },
    { id: '1504604', name: 'MOCAJUBA', population: 31038 },
    { id: '1504703', name: 'MOJU', population: 30896 },
    { id: '1504802', name: 'MONTE ALEGRE', population: 30736 },
    { id: '1504901', name: 'MUANA', population: 30656 },
    { id: '1504950', name: 'NOVA ESPERANCA DO PIRIA', population: 30608 },
    { id: '1504976', name: 'NOVA IPIXUNA', population: 30293 },
    { id: '1505007', name: 'NOVA TIMBOTEUA', population: 30009 },
    { id: '1505031', name: 'NOVO PROGRESSO', population: 29917 },
    { id: '1505064', name: 'NOVO REPARTIMENTO', population: 29886 },
    { id: '1505106', name: 'OBIDOS', population: 29429 },
    { id: '1505205', name: 'OEIRAS DO PARA', population: 28859 },
    { id: '1505304', name: 'ORIXIMINA', population: 28832 },
    { id: '1505403', name: 'OUREM', population: 28583 },
    { id: '1505437', name: 'OURILANDIA DO NORTE', population: 28220 },
    { id: '1505486', name: 'PACAJA', population: 27415 },
    { id: '1505494', name: 'PALESTINA DO PARA', population: 27241 },
    { id: '1505502', name: 'PARAGOMINAS', population: 27161 },
    { id: '1505536', name: 'PARAUAPEBAS', population: 26301 },
    { id: '1505551', name: "PAU D'ARCO", population: 26020 },
    { id: '1505601', name: 'PEIXE-BOI', population: 25758 },
    { id: '1505635', name: 'PICARRA', population: 25358 },
    { id: '1505650', name: 'PLACAS', population: 25181 },
    { id: '1505700', name: 'PONTA DE PEDRAS', population: 24991 },
    { id: '1505809', name: 'PORTEL', population: 24725 },
    { id: '1505908', name: 'PORTO DE MOZ', population: 23482 },
    { id: '1506005', name: 'PRAINHA', population: 23466 },
    { id: '1506104', name: 'PRIMAVERA', population: 23424 },
    { id: '1506112', name: 'QUATIPURU', population: 22842 },
    { id: '1506138', name: 'REDENCAO', population: 21291 },
    { id: '1506161', name: 'RIO MARIA', population: 21042 },
    { id: '1506187', name: 'RONDON DO PARA', population: 20704 },
    { id: '1506195', name: 'RUROPOLIS', population: 20080 },
    { id: '1506203', name: 'SALINOPOLIS', population: 19852 },
    { id: '1506302', name: 'SALVATERRA', population: 18807 },
    { id: '1506351', name: 'SANTA BARBARA DO PARA', population: 18619 },
    { id: '1506401', name: 'SANTA CRUZ DO ARARI', population: 18186 },
    { id: '1506500', name: 'SANTA IZABEL DO PARA', population: 18014 },
    { id: '1506559', name: 'SANTA LUZIA DO PARA', population: 17970 },
    { id: '1506583', name: 'SANTA MARIA DAS BARREIRAS', population: 17721 },
    { id: '1506609', name: 'SANTA MARIA DO PARA', population: 17624 },
    { id: '1506708', name: 'SANTANA DO ARAGUAIA', population: 16841 },
    { id: '1506807', name: 'SANTAREM', population: 16499 },
    { id: '1506906', name: 'SANTAREM NOVO', population: 16371 },
    { id: '1507003', name: 'SANTO ANTONIO DO TAUA', population: 16038 },
    { id: '1507102', name: 'SAO CAETANO DE ODIVELAS', population: 15982 },
    { id: '1507151', name: 'SAO DOMINGOS DO ARAGUAIA', population: 15833 },
    { id: '1507201', name: 'SAO DOMINGOS DO CAPIM', population: 15218 },
    { id: '1507300', name: 'SAO FELIX DO XINGU', population: 15190 },
    { id: '1507409', name: 'SAO FRANCISCO DO PARA', population: 14987 },
    { id: '1507458', name: 'SAO GERALDO DO ARAGUAIA', population: 14197 },
    { id: '1507466', name: 'SAO JOAO DA PONTA', population: 13940 },
    { id: '1507474', name: 'SAO JOAO DE PIRABAS', population: 13512 },
    { id: '1507508', name: 'SAO JOAO DO ARAGUAIA', population: 13179 },
    { id: '1507607', name: 'SAO MIGUEL DO GUAMA', population: 12983 },
    { id: '1507706', name: 'SAO SEBASTIAO DA BOA VISTA', population: 12040 },
    { id: '1507755', name: 'SAPUCAIA', population: 11839 },
    { id: '1507805', name: 'SENADOR JOSE PORFIRIO', population: 11591 },
    { id: '1507904', name: 'SOURE', population: 11559 },
    { id: '1507953', name: 'TAILANDIA', population: 10792 },
    { id: '1507961', name: 'TERRA ALTA', population: 9939 },
    { id: '1507979', name: 'TERRA SANTA', population: 8899 },
    { id: '1508001', name: 'TOME-ACU', population: 8523 },
    { id: '1508035', name: 'TRACUATEUA', population: 8073 },
    { id: '1508050', name: 'TRAIRAO', population: 7596 },
    { id: '1508084', name: 'TUCUMA', population: 7392 },
    { id: '1508100', name: 'TUCURUI', population: 7382 },
    { id: '1508126', name: 'ULIANOPOLIS', population: 7319 },
    { id: '1508159', name: 'URUARA', population: 6664 },
    { id: '1508209', name: 'VIGIA', population: 6059 },
    { id: '1508308', name: 'VISEU', population: 5849 },
    { id: '1508357', name: 'VITORIA DO XINGU', population: 5557 },
    { id: '1508407', name: 'XINGUARA', population: 3310 },
  ];

  const handleShowLocationInformation = (name: string): void => {
    loadInformation(name);

    setWidthMap(() => {
      if (widthMap === '836') return '556';

      return '836';
    });

    showContainerInformation();
  };

  const methods = {
    data: [...paraCities],
    colorScale: 'population',
    topojson: para,
    tiles: false,
    ocean: 'transparent',
    width: widthMap,
    height: '768',
    on: {
      click: (data: DataType) => handleShowLocationInformation(data.name),
    },
    tooltipConfig: {
      title: useCallback((data: DataType) => {
        return data.name;
      }, []),
    },
  };

  return <Geomap config={methods} />;
};

export default Para;
