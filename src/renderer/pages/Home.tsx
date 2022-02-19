import React from 'react';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import Button from '../components/base/Button';
import { Context } from '../App';
import MainLayout from 'renderer/components/MainLayout';
import Header from 'renderer/components/Header';
import Divider from 'renderer/components/base/Divider';
import { observer } from 'mobx-react-lite';
import { SearchField } from 'renderer/components/base/TextField';
import Filter from 'renderer/components/base/Filter';
import Dropdown, { DropdownContent, DropdownItem, DropdownTrigger } from 'renderer/components/base/Dropdown';
import iconPlus from '../img/icons/plus__white.svg';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'renderer/components/base/Table';
import iconMore from '../img/icons/more.svg';

const dataBundel = [
  {
    word: 'weasel',
    meaning: 'a small mammal with reddish-brown fur and a long body that can kill other small animals such as mice and birds for food',
    example: 'I always knew you were a weasel',
    translate: 'ласка, проныра',
    tag: 'noun',
    athor: 'danileph',
  },
  {
    word: 'kidnap',
    meaning: 'to take someone away using force, usually to obtain money in exchange for releasing them',
    example: "You are helping her kidnap the man's children.",
    translate: 'похищать',
    tag: 'verb',
    athor: 'danileph',
  },
  {
    word: 'weasel',
    meaning: 'a small mammal with reddish-brown fur and a long body that can kill other small animals such as mice and birds for food',
    example: 'I always knew you were a weasel',
    translate: 'ласка, проныра',
    tag: 'noun',
    athor: 'danileph',
  },
  {
    word: 'kidnap',
    meaning: 'to take someone away using force, usually to obtain money in exchange for releasing them',
    example: "You are helping her kidnap the man's children.",
    translate: 'похищать',
    tag: 'verb',
    athor: 'danileph',
  },
  {
    word: 'weasel',
    meaning: 'a small mammal with reddish-brown fur and a long body that can kill other small animals such as mice and birds for food',
    example: 'I always knew you were a weasel',
    translate: 'ласка, проныра',
    tag: 'noun',
    athor: 'danileph',
  },
  {
    word: 'kidnap',
    meaning: 'to take someone away using force, usually to obtain money in exchange for releasing them',
    example: "You are helping her kidnap the man's children.",
    translate: 'похищать',
    tag: 'verb',
    athor: 'danileph',
  },
  {
    word: 'weasel',
    meaning: 'a small mammal with reddish-brown fur and a long body that can kill other small animals such as mice and birds for food',
    example: 'I always knew you were a weasel',
    translate: 'ласка, проныра',
    tag: 'noun',
    athor: 'danileph',
  },
];

const Home = observer(({children}) => {
  const { user } = useContext(Context);
  const chosenWordbase = user.getChosenWordbase();


  return (
    <MainLayout>
      <Box
        className="header-wrap"
        sx={{
          position: 'sticky',
          top: '0px',
          paddingTop: '30px',
          background: theme => theme.palette.primary.light,
        }}
      >
        <Header>{chosenWordbase}</Header>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > *': {
              mx: '5px',
            }
          }}
        >
          <SearchField
            sx={{
              marginLeft: '0px'
            }}
            placeholder={'Search for a word...'} />
          <Dropdown
            Trigger={DropdownTrigger}
            Content={DropdownContent}
            caption="Tag"
          >
            <DropdownItem key="default" id="default" default>All</DropdownItem>
            <DropdownItem key="1" id="1">Verb</DropdownItem>
            <DropdownItem key="2" id="2">Noun</DropdownItem>
          </Dropdown>
          <Dropdown
            Trigger={DropdownTrigger}
            Content={DropdownContent}
            caption="Athor"
          >
            <DropdownItem key="0" id="default" default>All</DropdownItem>
            <DropdownItem key="1" id="1">Danileph</DropdownItem>
            <DropdownItem key="2" id="2">Kamil</DropdownItem>
            <DropdownItem key="3" id="3">Nick</DropdownItem>
          </Dropdown>
          <Box sx={{flexGrow: 1}}/>
          <Button
            sx={{
              margin: '0',
            }}
          >
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Box sx={{
                width: '12px',
                display: 'flex',
                alignItems: 'center',
                marginRight: '10px',
              }}>
                <img src={iconPlus} style={{width: '100%'}} />
              </Box>
              <Typography variant="btn">Add a word</Typography>
            </Box>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          my: '20px',
        }}
      >
      <Table gridTemplateColumns={{first: 'min-content', last: 'min-content'}}>
            <TableHead sticky>
              <TableRow>
                <TableCell th></TableCell>
                <TableCell th>Word</TableCell>
                <TableCell th>Meaning</TableCell>
                <TableCell th>Example</TableCell>
                <TableCell th>Translate</TableCell>
                <TableCell th>Tag</TableCell>
                <TableCell th>Author</TableCell>
                <TableCell th></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>+ Add a word</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              {dataBundel.map((data, i) => (
                <TableRow>
                  <TableCell >{i + 1}</TableCell>
                  <TableCell >{data.word}</TableCell>
                  <TableCell >{data.meaning}</TableCell>
                  <TableCell >{data.example}</TableCell>
                  <TableCell >{data.translate}</TableCell>
                  <TableCell >{data.tag}</TableCell>
                  <TableCell >{data.athor}</TableCell>
                  <TableCell >
                    <Box sx={{
                      width: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <img src={iconMore} style={{width: '100%'}} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </Box>
    </MainLayout>
  );
});

export default Home;
