import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import UploadIcon from "@mui/icons-material/Upload";
import Stack from '@mui/material/Stack';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

export default function UploadButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        component="label"
        startIcon={<AddAPhotoOutlinedIcon sx={{ fontSize: 40, margin: '10px', color: 'gray' }}/>}
        sx={{ fontSize: 20,
        padding: '4.5%',
        textAlign: 'center',
        displax: 'flex',
        margin: 'auto',
        mt: '3%',
        mb:'3%',
        width: '100%',
        height: '250px',
        color: 'gray',
        backgroundColor: 'rgba(185, 185, 185,0.65)',
        '&:hover': {
          backgroundColor: 'rgba(185, 185, 185,1)'
        },
        justifyContent: 'center'}}
      >
        Bild hinzufügen
        <input type="file" hidden accept="image/*" />
      </Button>
    </Stack>
  );
}