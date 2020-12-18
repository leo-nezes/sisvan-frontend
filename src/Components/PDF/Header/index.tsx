import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    marginVertical: 8,
  },
});

const Header = (): any => {
  return (
    <View fixed>
      <Text style={styles.title}>
        Sistema de Vigilância Alimentar e Nutricional
      </Text>
      <Text>INDICES NUTRICIONAIS</Text>
      <Text>Municipio: Ababetatuba - Pará</Text>
      <Text>Total: 5202 resultados</Text>
    </View>
  );
};

export default Header;
