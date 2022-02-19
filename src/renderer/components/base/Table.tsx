import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Table = ({ children, sx, column = null, gridTemplateColumns = null, ...other }) => {

  const countTableHeadItem = () => {
    let copyColumn = 0;
    React.Children.map(children, (child) => {
      if (child.type.name.toString() === 'TableHead') {
        const getChild = () => {
          if (Array.isArray(child.props.children)) {
            return child.props.children[0]
          } else {
            return child.props.children
          }
        }
        React.Children.map(getChild().props.children, (tableCell) => {
          copyColumn++;
        });
      }
    });
    return copyColumn;
  };

  const [columnNumber, setColumnNumber] = useState(countTableHeadItem());
  useEffect(() => {
    setColumnNumber(countTableHeadItem());
  }, [columnNumber]);


  const convertGritTemplCol = (gridTemplateColumns = {}, columnNumber) => {
    let resultArray = new Array(columnNumber);

    for (let i = 0; i < columnNumber; i++) {
      let key = i + 1;

      if (gridTemplateColumns[key] != null) {
        resultArray[i] = gridTemplateColumns[key];
      } else {
        resultArray[i] = 'auto';
      }
    }
    for (let key in gridTemplateColumns) {
      if (key === 'first') {
        resultArray[0] = gridTemplateColumns[key];
      } else if (key === 'last') {
        resultArray[resultArray.length - 1] = gridTemplateColumns[key];
      }
    }

    return resultArray.join(' ');
  }

  const getGridTemplateColumns = () => {
    let string = null;
    if (column === null && gridTemplateColumns === null) {
      string = `repeat(${columnNumber}, auto)`;
    } else if (gridTemplateColumns !== null && column !== null) {
      string = convertGritTemplCol(gridTemplateColumns, column);
    } else if (gridTemplateColumns !== null) {
      string = convertGritTemplCol(gridTemplateColumns, columnNumber);
    } else if (column !== null) {
      string = `repeat(${column}, auto)`;
    }
    return string;
  }

  return (
    <Box
      component="table"
      sx={{
        display: 'grid',
        gridTemplateColumns: getGridTemplateColumns(),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  )
};

export const TableHead = ({ children, sx, sticky, ...other }) => {
  const [headerHeight, setHeaderHeight] = useState(null);
  useEffect(() => {
    const header = document.querySelector('.header-wrap');
    if (header.clientHeight !== headerHeight) {
      setHeaderHeight(header.clientHeight);
    }
  });

  return (
    <Box
    component="thead"
    sx={{
      display: 'contents',
      '& th': {
        '&:first-child': {
          '& > *': {
            marginLeft: '0px',
          },
        },
        '&:nth-child(2)': {
          textAlign: 'left',
          '& > *': {
            marginLeft: '0px',
          }
        },
        '&:last-child': {
          '& > *': {
            marginRight: '0px',
            marginleft: '20px',
          }
        },
        position: sticky ? 'sticky' : null,
        top: sticky ? headerHeight : null,
        zIndex: -1,
        textAlign: 'left',
        fontSize: theme => theme.typography.table.head,
        background: theme => theme.palette.primary.light,
        ...sx,
      },
    }}
    {...other}
  >
    {children}
  </Box>
  )
}

export const TableBody = ({ children, sx, ...other }) => {
  return (
    <Box
    component="tbody"
    sx={{
      display: 'contents',
      '& td': {
        '&:first-child': {
          '& > *': {
            marginLeft: '0px',
            marginRight: '20px'
          },
          textAlign: 'left',
        },
        '&:nth-child(2)': {
          color: theme => theme.palette.primary.main,
          '& > *': {
            marginLeft: '0px',
          }
        },
        '&:last-child': {
          '& > *': {
            marginRight: '0px',
            marginleft: '20px',
          },
        },
        fontSize: theme => theme.typography.table.body,
        textAlign: 'left',
        zIndex: -2,
        ...sx,
      },
    }}
    {...other}
  >
    {children}
  </Box>
  )
}

export const TableRow = ({ children, sx, ...other }) => {
  return (
    <Box
    component="tr"
    sx={{
      display: 'contents',
      '& > th, & > td': {
        borderBottom: theme => `1px solid ${theme.palette.secondary.main}`,
        ':first-child': {
          borderBottom: 'none',
        }
      },
      ...sx,
    }}
    {...other}
  >
    {children}
  </Box>
  )
}

export const TableCell = ({ children, sx, th, ...other }) => {
  return (
    <Box
    component={th ? 'th' : 'td'}
    sx={{
    }}
    {...other}
  >
    <Box
      sx={{
        fontFamily: '',
        margin: '15px',
        ...sx,
      }}
    >
      {children}
    </Box>
  </Box>
  )
};

Table.protoTypes = {
  children: PropTypes.node,
}

export default Table;
