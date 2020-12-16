import React from 'react';

import { View, Text } from '@react-pdf/renderer';
import {
  TableContainer,
  Table as TableUI,
  TableRow,
  TableCell,
} from '@material-ui/core';

interface ITableProps {
  title: string;
}

// const sanitize_block = (block) => {
//   if (typeof block === 'string' || typeof block === 'number') {
//     return <Text>{block}</Text>;
//   }
//   return block;
// };

// const tstyles = StyleSheet.create({
//   table: {
//     display: 'table',
//     width: 'auto',
//   },
//   row: {
//     flexDirection: 'row',
//   },
//   cell: {
//     // padding: '3px'
//   },
// });

// const Table = (): any => {
//   return (
//     <View>
//       <TableContainer>
//         <TableUI size="small">
//           <TableRow>
//             <TableCell>Peso X Idade</TableCell>
//           </TableRow>
//         </TableUI>
//       </TableContainer>
//     </View>

// <View>
//   <Text>Peso X Idade</Text>
//   <View>
//     <Text>Peso muito baixo para a idade</Text>
//     <View>
//       <Text>Quantidade:</Text>
//       <Text>Porcentagem:</Text>
//     </View>
//     <View>
//       <Text>73</Text>
//       <Text>1.4%</Text>
//     </View>
//   </View>
// </View>
//   );
// };

// export default Table;
