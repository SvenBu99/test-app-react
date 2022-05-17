import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

export default function UploadButtons() {
  return (
      <Button
        variant="contained"
        component="label"
        startIcon={<AddAPhotoOutlinedIcon sx={{ fontSize: 40, margin: '10px', color: 'gray' }}/>}
        sx={{ fontSize: 20,
          padding: '4.5%',
          textAlign: 'center',
          display: 'flex',
          ml: 'auto',
          mr: 'auto',
          mt: '3%',
          width: '100%',
          height: '250px',
          color: 'gray',
          maxWidth: '800px',
          backgroundColor: 'rgba(185, 185, 185,0.65)',
          '&:hover': {
            backgroundColor: 'rgba(185, 185, 185,1)'
          },
          justifyContent: 'center'}}
          >
        Bild hinzufügen
        <input type="file" hidden accept="image/*" />
      </Button>
  );
}