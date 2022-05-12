import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import monte from '../Backend/kuss-diga-monte.gif'
import { width } from '@mui/system';


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


export default function BasicModal(props: { open: boolean, title: string, onClose: any, isFooter: boolean }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")



  return (
    <div>
      <Button onClick={handleOpen}>Open Login-Modal</Button>
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
            MoneyBoy der Hustler
          </Typography>
            <div style={{display: "flex"}}>

          <input type="text" style={{marginRight: "20px", marginTop: "20px"}} placeholder='email' onChange={e => setEmail(e.target.value)}/>
          <input type="text" style={{marginLeft: "20px", marginTop: "20px"}} placeholder='password' onChange={e => setPassword(e.target.value)} />
            </div>

          <img width='100%' style={{marginTop: "40px"}} src={monte} alt='Kuss Digga...'/>
          <button style={{marginTop: "40px", padding: "15px", width: "100%", backgroundColor: "rgba(150,75,15,1)"}} onClick={() => setOpen(false)} >Close Modal</button>
        </Box>
      </Modal>
    </div>
  );
}