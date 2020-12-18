import React from 'react';
import { Text, StyleSheet, View, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  tableContainer: {
    width: '550',
    marginVertical: 8,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  titleSession: {
    width: '100%',
    borderStyle: 'solid',
    borderBottom: 1,
  },
  contentSession: {
    width: '100%',
    flexDirection: 'row',
    borderWidth: 0,
  },
  dataContainer: {
    width: '50%',
    borderWidth: 0,
  },
  imageContainer: {
    width: '50%',
    borderWidth: 0,
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
    fontSize: 14,
  },
  tableColSubTitle: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellSubTitle: {
    fontSize: 12,
    margin: 5,
  },
  tableRowData: {
    flexDirection: 'column',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },
  image: {
    flexGrow: 1,
    margin: 5,
  },
});

interface ISubtitleProps {
  subtitle: string;
  dataSubtitle: number[];
}

interface ITableData {
  title: string;
  img: string;
  subtitleProps: ISubtitleProps[];
}

interface ITableProps {
  tableData: ITableData[];
}

const Table = ({ tableData }: ITableProps): any => {
  return tableData.map((table, index) => {
    return (
      <View
        style={styles.tableContainer}
        break={index !== 0 && index % 2 === 0}
      >
        <View style={styles.tableRow}>
          <View style={styles.titleSession}>
            <Text style={styles.tableCellTitle}>{table.title}</Text>
          </View>
        </View>

        <View style={styles.contentSession}>
          <View style={styles.dataContainer}>
            {table.subtitleProps.map((subtitle) => (
              <>
                <View style={styles.tableColSubTitle}>
                  <Text style={styles.tableCellSubTitle}>
                    {subtitle.subtitle}
                  </Text>
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
                      {/* eslint-disable */}
                      <Text style={styles.tableCell}>
                        {subtitle.dataSubtitle[1]}%
                      </Text>
                    </View>
                  </View>
                </View>
              </>
            ))}
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} src={table.img} />
          </View>
        </View>
      </View>
    );
  });
};

export default Table;
