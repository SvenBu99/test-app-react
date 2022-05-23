import React from 'react';
import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from '@mui/material';

function DropdownButton() {
    return (

        <div>
            <IconButton sx={{ backgroundColor: 'white', border: 'black' }}>
                <ArrowDropDownIcon />
            </IconButton>
        </div>
    );
}

export default DropdownButton






