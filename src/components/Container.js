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
    borderBlockColor: theme.palette.background,
  }));

export default function Container() {
    return (
        <div className="Container">
        <Box sx={{ flexGrow: 1 }}>
        {/* 좌측컨테이너 */}
        <Grid container direction={"row"} spacing={3}>
          <Grid container direction={"column"} xs={8}>
          <Grid>
            <Item style ={ {height : '75px'} }>광고1</Item>
          </Grid>
          <Grid>
            <Item style = { {height : '350px'} }>뉴스</Item>
          </Grid>
          <Grid>
            <Item style={{ height : '450px'}}>쇼핑</Item>
          </Grid>
          <Grid>
            <Item style = { {height : '500px'} }>추천</Item>
            </Grid>
          </Grid>
        {/* 우측컨테이너 */}
          <Grid container direction={"column"} xs={4}>
          <Grid>
            <Item style = { {height : '100px'} }>로그인창</Item>
          </Grid>
            <Grid>
            <Item style = { {height : '180px'} }>광고2</Item>
            </Grid>
            <Grid>
            <Item style = { {height : '50px'} }>해피빈</Item>
            </Grid>
            <Grid>
            <Item style={{height : '250px'}}>날씨</Item>
            </Grid>
            <Grid>
            <Item style = {{ height : '250px' }}>증시</Item>
            </Grid>
            <Grid>
            <Item style = { {height : '600px'} }>위젯보드</Item>
            </Grid>
            </Grid>
        </Grid>
      </Box>
        </div>
    )
}