import React from 'react';
import { Text, StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  table: {
    width: '550',
    marginVertical: 16,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableColTitle: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellTitle: {
    margin: 'auto',
    fontSize: 12,
  },
  tableColSubTitle: {
    width: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellSubTitle: {
    fontSize: 10,
    marginTop: '5',
    marginLeft: '5',
  },
  tableRowData: {
    flexDirection: 'column',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },
  canvas: {
    width: '150px',
    height: '150px',
  },
});

const Table = (): any => {
  return (
    <View style={styles.table}>
      {/* TableHeader */}
      <View style={styles.tableRow}>
        <View style={styles.tableColTitle}>
          <Text style={styles.tableCellTitle}>Peso X Idade</Text>
        </View>
      </View>

      <View>
        <View style={styles.tableColSubTitle}>
          <Text style={styles.tableCellSubTitle}>
            Peso muito baixo para a idade
          </Text>
        </View>
      </View>

      <View style={styles.tableRowData}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Quantidade:</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>73</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Porcentagem:</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1.4%</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.tableColSubTitle}>
          <Text style={styles.tableCellSubTitle}>Peso baixo para a idade</Text>
        </View>
      </View>

      <View style={styles.tableRowData}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Quantidade:</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>245</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Porcentagem:</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>4.71%</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.tableColSubTitle}>
          <Text style={styles.tableCellSubTitle}>
            Peso adequado ou eutrófico
          </Text>
        </View>
      </View>

      <View style={styles.tableRowData}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Quantidade:</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>4618</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Porcentagem:</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>88.77%</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.tableColSubTitle}>
          <Text style={styles.tableCellSubTitle}>
            Peso elevado para a idade
          </Text>
        </View>
      </View>

      <View style={styles.tableRowData}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Quantidade:</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>266</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Porcentagem:</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>5.11%</Text>
          </View>
        </View>
      </View>

      {/* TableContent */}
      {/* <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>React-PDF</Text>
        </View>

        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>3 User </Text>
        </View>

        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text>
        </View>

        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>5€</Text>
        </View>
      </View> */}
    </View>
  );
};

export default Table;
