import React from 'react';
import { Page, View, Document } from '@react-pdf/renderer';

import Header from './Header';
import Table from './Table';

import { styles } from './styles';

const dataTable = [
  {
    title: 'Peso X Idade',
    subtitleProps: [
      { subtitle: 'Peso muito baixo para a idade', dataSubtitle: [73, 1.4] },
      { subtitle: 'Peso muito baixo para a idade', dataSubtitle: [73, 1.4] },
      { subtitle: 'Peso baixo para a idade', dataSubtitle: [245, 4.71] },
      { subtitle: 'Peso adequado ou eutrófico', dataSubtitle: [4618, 88.77] },
      { subtitle: 'Peso elevado para a idade', dataSubtitle: [266, 5.11] },
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
