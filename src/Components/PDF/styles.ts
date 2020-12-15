import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    marginHorizontal: 16,
    marginVertical: 16,
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    marginVertical: 8,
  },
  section: {
    marginVertical: 8,
    flexGrow: 1,
  },
});
