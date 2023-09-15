import React from "react";
import '../App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Container() {
    const gridAddStyle_1 = {
        height: '75px', // 원하는 높이 값으로 설정
      };
      const gridAddStyle_2 = {
        height: '180px', // 원하는 높이 값으로 설정
      };
      const gridLoginStyle = {
        height: '100px', // 원하는 높이 값으로 설정
      };
      const gridNewsStyle = {
        height: '350px', // 원하는 높이 값으로 설정
      };


    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid xs={8}>
            <Item style ={ gridAddStyle_1 }>광고1</Item>
          </Grid>
          <Grid xs={4}>
            <Item style = { gridLoginStyle }>로그인창</Item>
          </Grid>
          <Grid xs={8}>
            <Item style = { gridNewsStyle }>뉴스</Item>
          </Grid>
          <Grid xs={4}>
            <Item style = { gridAddStyle_2 }>광고2</Item>
          </Grid>
        </Grid>
      </Box>
        </>
    )
}