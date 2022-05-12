import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import monte from '../Backend/kuss-diga-monte.gif';
import axios from 'axios';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

async function searchAnimalTest(animal: string): Promise<any> {
  try{
    const res = await axios.get(`http://localhost:8080/api/${animal}`)
    console.log(res.data)
    return res.data;
  }
  catch{
    console.log("Animal cant be found")
    return "Animal cant be found";
  }
  //return res.data;
  
}

export default function BackendModal(props: { open: boolean, title: string, onClose: any, isFooter: boolean }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [animal, setAnimal] = React.useState<string>("");
  const [animalText, setAnimalText] = React.useState<string>("Test");

  async function searchAnimal(animal: string): Promise<any> {
    try{
      const res = await axios.get(`http://localhost:8080/api/${animal}`);
      console.log(res.data);
      setAnimalText(JSON.stringify(res.data.message));
    }
    catch{
      console.log("Animal cant be found")
      setAnimalText("Animal cant be found")
    }
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open Backend-Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }} style={{textAlign: 'center'}}>
            {props.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{textAlign: 'center'}}>
            <p>{animalText}</p>
          </Typography>
            <div style={{display: "flex"}}>

          <input type="text" style={{marginTop: "40px",  marginRight: "20px", width: '100%'}} placeholder='Animal name --> hund' onChange={e => setAnimal(e.target.value)}/>
          <button style={{marginTop: "40px", marginLeft: "20px", padding: "15px",  width: "100%", backgroundColor: "rgba(150,75,15,1)"}} onClick={() => searchAnimal(animal)} >Search Animal</button>
            </div>

          <button style={{marginTop: "40px", padding: "15px", width: "100%", backgroundColor: "rgba(150,75,15,1)"}} onClick={() => setOpen(false)} >Close Modal</button>
        </Box>
      </Modal>
    </div>
  );
}