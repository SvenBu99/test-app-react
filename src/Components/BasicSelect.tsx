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
  };

  if (props.usedBy == 'category'){
    return <>{
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth sx={{backgroundColor: 'white'}}>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={val}
          onChange={handleChange}
        >
          <MenuItem value={10}>Stereoanlagen</MenuItem>
          <MenuItem value={20}>Musikboxen</MenuItem>
          <MenuItem value={30}>Plattenspieler</MenuItem>
          <MenuItem value={40}>Zubehör</MenuItem>
          
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
          <MenuItem value={10}>Abholung</MenuItem>
          <MenuItem value={20}>Standardversand</MenuItem>
          <MenuItem value={30}>Eil-Versand</MenuItem>
          
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
