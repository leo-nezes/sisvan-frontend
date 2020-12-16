import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';

import Header from './Header';
import Table from './Table';

import { styles } from './styles';

export const PDF = (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header test="Teste" />
      <View style={styles.section}>
        <Table />
        {/* <View> */}
        {/* <Text>Peso X Idade</Text> */}
        {/* <View>
            <Text>Peso muito baixo para a idade</Text>
            <View>
              <Text>Quantidade:</Text>
              <Text>Porcentagem:</Text>
            </View>
            <View>
              <Text>73</Text>
              <Text>1.4%</Text>
            </View>
          </View> */}
        {/* <View>
          <Text>Peso muito baixo para a idade</Text>
          <View>
            <Text>Quantidade:</Text>
            <Text>Porcentagem:</Text>
          </View>
          <View>
            <Text>73</Text>
            <Text>1.4%</Text>
          </View>
        </View>
        <View>
          <Text>Peso muito baixo para a idade</Text>
          <View>
            <Text>Quantidade:</Text>
            <Text>Porcentagem:</Text>
          </View>
          <View>
            <Text>73</Text>
            <Text>1.4%</Text>
          </View>
        </View>
        <View>
          <Text>Peso muito baixo para a idade</Text>
          <View>
            <Text>Quantidade:</Text>
            <Text>Porcentagem:</Text>
          </View>
          <View>
            <Text>73</Text>
            <Text>1.4%</Text>
          </View>
        </View> */}
        {/* </View> */}
        {/* <View style={styles.section}>Gráfico</View> */}
      </View>
    </Page>
  </Document>
);
