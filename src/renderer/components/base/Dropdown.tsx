import React, { useState, useEffect } from 'react';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import { Box, Typography } from '@mui/material';
import iconArrow from '../../img/icons/arrow.svg';
import useEventListener from '@use-it/event-listener';

export const DropdownTrigger = ({sx, chosenItem, isOpen, fullWidth = false, caption = "Type", ...other}) => {

  return (
    <Box
      className="dropdown-trigger"
      sx={{
        border: isOpen
                ? theme => `1px solid ${theme.palette.secondary.dark}`
                : theme => `1px solid ${theme.palette.secondary.main}`,
        borderRadius: '7px',
        padding: '7px 12px',
        boxSizing: 'border-box',
        display: 'inline-block',
        maxWidth: '200px',
        cursor: 'pointer',
        WebkitUserSelect: 'none',
        width: '100%',
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          '& > *:first-child': {
            marginRight: '10px',
          },
          '& > *:last-child': {
            marginLeft: '10px',
          }
        }}
      >
        <Typography variant="body1">{caption}:</Typography>
        <Typography variant="body2">{chosenItem.props.children}</Typography>
        <Box sx={{
            width: '10px',
            display: 'flex',
            alignItems: 'center',
            transform: 'rotate(90deg)',
            ...(isOpen && {
              transform: 'rotate(270deg)',
            }),
          }}>
            <img src={iconArrow} style={{width: '100%'}} />
        </Box>
      </Box>
    </Box>
  )
};

export const DropdownItem = ({ children, isChosen, ...other }) => {
  return (
    <Box
      sx={{
        fontSize: isChosen ? theme => theme.typography.body2 : theme => theme.typography.body1,
        py: isChosen ? '5px' : '3px',
        px: isChosen ? '10px' : null,
        background: isChosen ? theme => theme.palette.secondary.light : null,
        mx: isChosen ? '-10px' : null,
        borderRadius: '7px',

      }}
      {...other}
    >
      {children}
    </Box>
  )
}


export const DropdownContent = ({ children, isOpen, sx, ...other }) => {
  const [heightTrigger, setHeightTrigger] = useState(0);

  // useEventListener('DOMContentLoaded', () => {
  //   const dropdownTrigger = document.querySelector('.dropdown-trigger');
  //   setHeightTrigger(dropdownTrigger.clientHeight);
  // });

  useEffect(() => {
    const dropdownTrigger = document.querySelector('.dropdown-trigger');
    setHeightTrigger(dropdownTrigger.clientHeight);
  }, heightTrigger);


  console.log({heightTrigger});

  return (
    <Box
      sx={{
        background: theme => theme.palette.primary.light,
        display: !isOpen ? 'none' : 'inline-block',
        border: theme => `1px solid ${theme.palette.secondary.dark}`,
        boxSizing: 'border-box',
        borderRadius: '7px',
        padding: '7px 12px',
        cursor: 'pointer',
        WebkitUserSelect: 'none',
        position: 'absolute',
        left: 0,
        top: heightTrigger + 10,
        zIndex: 10,
        width: '100%',
        ...sx,
      }}
      {...other}
    >{children}</Box>
  )
}


const Dropdown = ({ children, Trigger, Content, caption, defaul }) => {
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(React.Children.count(children));
  const [chosenItem, setChosenItem] = useState(React.Children.map(children, (child) => {if (child.props.default) return child; })[0]);

  const getChosenItem = () => {
    // if (!chosenItem) {
    //   return <Box />
    // } else {
    //   return chosenItem
    // };
    return chosenItem;
  }

  const chooseItem = (child) => {
    setIsOpen(false);
    setChosenItem(child);
  }

  console.log(getChosenItem());
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-block',
      }}
    >
      <Trigger caption={caption} onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} chosenItem={getChosenItem()} {...buttonProps}
      >{chosenItem}</Trigger>
      <Content
        role="menu"
        isOpen={isOpen}
      >
        {React.Children.map(children, (child, i) => {
          console.log({chosenItem: getChosenItem(), child});
          return React.cloneElement(child, {
            ...itemProps[i],
            onClick: () => chooseItem(child),
            // isChosen: chosenItem ? chosenItem.key === child.key : false,
            isChosen: getChosenItem().props.id === child.props.id,
          });
        })}
      </Content>
    </Box>
  )
}

export default Dropdown;
