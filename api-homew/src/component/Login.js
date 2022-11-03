import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button
  } from '@chakra-ui/react';


function Login() {
    const navigate = useNavigate(); 
    const [femail, setfemail] = useState()
    const [lemail, setlemail] = useState()
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    let url = "https://636242497521369cd068dfdc.mockapi.io/ToDo"
    const postData = () =>{
    axios.post(url, {
        femail,
        lemail,
        email,
        pass
    }).then(res => {
        console.log(res)
    })
    }

    function handleSubmit (e) {
        e.preventDefault();
        navigate("/HomePage")
      }

    //   localStorage.setItem("email", {setEmail})
    //   alert(localStorage.getItem(email))

    // useEffect(() => {
    //     localStorage.setItem("email", JSON.stringify(email));
    //   }, [email]);


      return (
        <Flex width ="full" align="center" justifyContent="center">
          <Box
           p={8}
           maxWidth="500px"
           borderWidth={1}
           borderRadius={8}
           boxShadow="lg">
            <Box textAlign="center">
            <Heading>Sign up</Heading>
            </Box>
            <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>

                <FormControl isRequired>
                    <FormLabel>First email</FormLabel>
                     <Input onChange={e=>{setfemail(e.target.value)}}/>
                </FormControl>

                <FormControl>
                    <FormLabel>Last email</FormLabel>
                   <Input onChange={e=>{setlemail(e.target.value)}}/>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" onChange={e=>{setEmail(e.target.value)}}/>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" onChange={e=>{setPass(e.target.value)}}/>
                </FormControl>

            <Button
             onClick={postData}
             variantColor="teal"
            variant="outline"
            type="submit"
            width="full"
            mt={4}>
                Sign up
             </Button>
            </form>
           </Box>
          </Box>
        </Flex>
      )
}

export default Login