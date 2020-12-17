import React from 'react';
import { Page, View, Document } from '@react-pdf/renderer';

import Header from './Header';
import Table from './Table';
import img from '../../data/pesoXIdade.png';

import { styles } from './styles';

const dataTable = [
  {
    title: 'Peso X Idade',
    img,
    subtitleProps: [
      { subtitle: 'Peso muito baixo para a idade', dataSubtitle: [73, 1.4] },
      { subtitle: 'Peso baixo para a idade', dataSubtitle: [245, 4.71] },
      { subtitle: 'Peso adequado ou eutrófico', dataSubtitle: [4618, 88.77] },
      { subtitle: 'Peso elevado para a idade', dataSubtitle: [266, 5.11] },
    ],
  },
  {
    title: 'Peso X Altura',
    img: '../../data/pesoXIdade.png',
    subtitleProps: [
      { subtitle: 'Magreza acentuada', dataSubtitle: [136, 2.61] },
      { subtitle: 'Magreza', dataSubtitle: [166, 3.19] },
      { subtitle: 'Peso adequado ou eutrófico', dataSubtitle: [3191, 61.34] },
      { subtitle: 'Risco de sobrepeso', dataSubtitle: [399, 7.67] },
      { subtitle: 'Obesidade', dataSubtitle: [362, 6.96] },
    ],
  },
  {
    title: 'Altura X Idade',
    img: '../../data/pesoXIdade.png',
    subtitleProps: [
      {
        subtitle: 'Altura muito baixa para a idade',
        dataSubtitle: [487, 9.36],
      },
      { subtitle: 'Altura baixa para a idade', dataSubtitle: [717, 13.78] },
      { subtitle: 'Altura adequada para a idade', dataSubtitle: [3998, 76.86] },
    ],
  },
  {
    title: 'IMC X Idade',
    img: '../../data/pesoXIdade.png',
    subtitleProps: [
      { subtitle: 'Magreza acentuada', dataSubtitle: [180, 3.48] },
      { subtitle: 'Magreza', dataSubtitle: [168, 3.23] },
      { subtitle: 'Eutrofia', dataSubtitle: [2964, 56.96] },
      { subtitle: 'Risco de sobrepeso', dataSubtitle: [1035, 19.9] },
      { subtitle: 'Sobrepeso', dataSubtitle: [466, 8.96] },
      { subtitle: 'Obesidade', dataSubtitle: [389, 7.48] },
    ],
  },
];

export const PDF = (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header test="Teste" />
      <View style={styles.section}>
        <Table tableData={dataTable} />
      </View>
    </Page>
  </Document>
);
