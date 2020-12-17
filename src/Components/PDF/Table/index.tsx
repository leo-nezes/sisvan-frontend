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
    margin: 5,
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
    marginLeft: 5,
    fontSize: 10,
  },
});

interface ISubtitleProps {
  subtitle: string;
  dataSubtitle: number[];
}

interface ITableData {
  title: string;
  subtitleProps: ISubtitleProps[];
}

interface ITableProps {
  tableData: ITableData[];
}

const Table = ({ tableData }: ITableProps): any => {
  return tableData.map((table) => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableColTitle}>
            <Text style={styles.tableCellTitle}>{table.title}</Text>
          </View>
        </View>

        {table.subtitleProps.map((subtitle) => (
          <>
            <View>
              <View style={styles.tableColSubTitle}>
                <Text style={styles.tableCellSubTitle}>
                  {subtitle.subtitle}
                </Text>
              </View>
            </View>

            <View style={styles.tableRowData}>
              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Quantidade:</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {subtitle.dataSubtitle[0]}
                  </Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Porcentagem:</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {subtitle.dataSubtitle[1]}
                  </Text>
                </View>
              </View>
            </View>
          </>
        ))}
      </View>
    );
  });
};

export default Table;
