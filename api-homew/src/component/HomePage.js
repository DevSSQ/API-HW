import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Box} from '@chakra-ui/react';

function HomePage() {
    const [state, setstate] = useState([])
    useEffect (() => {
      axios.get("https://makeup-api.herokuapp.com/api/v1/products.json").then((res)=>{
        console.log(res.data)
        setstate(res.data)
      })
    }, [])

    return (
      <div>
          <Box className='pic'>
          {state.map(items => {
          return(
            <div className='product'>
            <img src={items.image_link} height='70px' width= '150px' />
            <p>Product Name: {items.name}</p>
            {/* <p>{items.description}</p> */}
            </div>
                )
        })}
        </Box>
      </div>
    )
}

export default HomePage