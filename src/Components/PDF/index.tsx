import React from 'react';
import { Page, View, Document } from '@react-pdf/renderer';

import Header from './Header';
import Table from './Table';

import { styles } from './styles';

const dataSubTitle = [
  { subtitle: 'Peso muito baixo para a idade', dataSubTitle: [73, 1.4] },
  { subtitle: 'Peso baixo para a idade', dataSubTitle: [245, 4.71] },
  { subtitle: 'Peso adequado ou eutrófico', dataSubTitle: [4618, 88.77] },
  { subtitle: 'Peso elevado para a idade', dataSubTitle: [266, 5.11] },
];

export const PDF = (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header test="Teste" />
      <View style={styles.section}>
        <Table title="Peso X Idade" dataSubTitle={dataSubTitle} />
      </View>
    </Page>
  </Document>
);
