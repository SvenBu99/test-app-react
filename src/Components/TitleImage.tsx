import { autocompleteClasses } from '@mui/material'
import { margin } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import img1 from '../Backend/Images/TestBanner.jpg'
import img2 from '../Backend/Images/TestBanner2.jpg'
import img3 from '../Backend/Images/TestBanner3.jpg'

function TitleImage() {
    const imageSources=[img1,img2,img3]
    const count = useRef(0);
    const [image,setImage] = useState(imageSources[count.current])
    
    
    function selectImage() {
        if (count.current < imageSources.length-1){
            count.current = count.current +1;
            setImage(imageSources[count.current])
            console.log(count)
        }
        else{
            count.current=0;
            setImage(imageSources[count.current])
            console.log(count,Date.now)
        }
    }

    useEffect(() => { const interval = 
        setInterval(() => { 
            selectImage();}, 5000); 
        return () => clearInterval(interval); 
    }, []);


  return (
    <div style={{marginLeft: 'auto', marginRight: 'auto',display: 'flex', maxWidth: '1080px'}}>
        <img src={image} style={{ width: '100%'}}/>
    </div>
  )
}

export default TitleImage