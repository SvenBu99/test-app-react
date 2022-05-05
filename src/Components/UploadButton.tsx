import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import UploadIcon from "@mui/icons-material/Upload";
import Stack from '@mui/material/Stack';

export default function UploadButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        component="label"
        endIcon={<UploadIcon sx={{ fontSize: 'large' }}/>}
        sx={{ fontSize: 30,
        padding: '1.5%',
        textAlign: 'center',
        displax: 'flex',
        margin: 'auto',
        marginTop: '3%',
        color: 'black',
        backgroundColor: 'darkred',
        '&:hover': {
          backgroundColor: 'rgba(150,75,15,1)'
        },
        justifyContent: 'center'}}
      >
        Upload File
        <input type="file" hidden accept="image/*" />
      </Button>
    </Stack>
  );
}