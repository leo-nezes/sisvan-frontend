import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';

import { styles } from './styles';

export const PDF = (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>
        Sistema de Vigilância Alimentar e Nutricional
      </Text>
      <Text>INDICES NUTRICIONAIS</Text>
      <Text>Municipio: Ababetatuba - Pará</Text>
      <Text>Total: 5202 resultados</Text>
      <View style={styles.section}>
        <View>
          <Text>Peso X Idade</Text>
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
        </View>
        <View>Gráfico</View>
      </View>
    </Page>
  </Document>
);
