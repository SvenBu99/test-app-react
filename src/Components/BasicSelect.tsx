import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const BasicSelect = (props: {usedBy: string}) => {
  const [val, setVal] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setVal(event.target.value as string);
    let currentVal = event.target.value;
    return currentVal
  };

  if (props.usedBy == 'category'){
    return <>{
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth sx={{backgroundColor: 'white'}}>
        
        <Select
          labelId="demo-simple-select-label2"
          id="demo-simple-select"
          value={val}
          onChange={handleChange}
        >
          <MenuItem value={'Stereoanlagen'}>Stereoanlagen</MenuItem>
          <MenuItem value={'Musikboxen'}>Musikboxen</MenuItem>
          <MenuItem value={'Plattenspieler'}>Plattenspieler</MenuItem>
          <MenuItem value={'Zubehör'}>Zubehör</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    }</>
  }
  else if (props.usedBy == 'shipping'){
    return <>{
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth sx={{backgroundColor: 'white'}}>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={val}
          onChange={handleChange}
        >
          <MenuItem value={'Abholung'}>Abholung</MenuItem>
          <MenuItem value={'Standardversand'}>Standardversand</MenuItem>
          <MenuItem value={'Eil-Versand'}>Eil-Versand</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    }</>
  }
  else if (props.usedBy == 'seller'){
    return <>{
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth sx={{backgroundColor: 'white'}}>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={val}
          onChange={handleChange}
        >
          <MenuItem value={10}>Privatverkäufer</MenuItem>
          <MenuItem value={20}>Gewerblicher Anbieter</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    }</>
  }
  else if (props.usedBy == 'offerType'){
    return <>{
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth sx={{backgroundColor: 'white'}}>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={val}
          onChange={handleChange}
        >
          <MenuItem value={10}>Sofortkauf</MenuItem>
          <MenuItem value={20}>Auktion</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    }</>
  }
  else if (props.usedBy == 'order'){
    return <>{
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth sx={{backgroundColor: 'white'}}>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={val}
          onChange={handleChange}
        >
          <MenuItem value={10}>Neuste Angebote zuerst</MenuItem>
          <MenuItem value={20}>Älteste Angebote zuerst</MenuItem>
          <MenuItem value={30}>Günstigste Angebote zuerst</MenuItem>
          <MenuItem value={40}>Teuerste Angebote zuerst</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    }</>
  }
  else {
    return <>{
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth sx={{backgroundColor: 'white'}}>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={val}
          onChange={handleChange}
        >
          <MenuItem value={40}>Sonstiges</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    }</>
  }
  
}

export default BasicSelect
