import * as React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Login() {


    return (
    <div className="login_Page">
        <div className="language_Box">
        <Box sx={{ minWidth: 120 }}>
        <FormControl size="small">
        <InputLabel id="demo-simple-select-label">한국어</InputLabel>
        <Select style={{width: '100px'}}>
          <MenuItem>한국어</MenuItem>
          <MenuItem>English</MenuItem>
          <MenuItem>中文</MenuItem>
        </Select>
        </FormControl>
        </Box>
        </div>
        <div className="login_Box">
            <p className="login_Title">NAVER</p>
            <p className='loginTitle'>ID 로그인</p>
            <TextField margin='normal' fullWidth label="id" variant="outlined" />
            <TextField margin='normal' fullWidth label="password" variant="outlined" />
            <div className='login_Button'>
            <Button fullWidth variant='contained'  style={{ backgroundColor: '#19CE60', color: 'white', padding: '12px', fontWeight: 'bold', fontSize: '20px' }} onClick={(event)=>{
            event.preventDefault();}}>로그인</Button>
            </div>
        </div>
    </div>
    )
}