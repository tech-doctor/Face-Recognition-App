import React, {useState} from 'react'
import { ChakraProvider, CircularProgress, Flex, Box, Heading, FormControl, FormLabel, Input,  Button, InputGroup, InputRightElement } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


const SignUp = ({onRouteChange}) => {
  //const [error, setError] = useState('');
  const [inputs, setInputs] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //const [isLoggedIn, setIsLoggedIn] =  useState(false);
  const [showPassword, setShowPassword] = useState(false);



  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
   };

  return (
    <div className='login'>
      <div className='heading-body'>
        {/* <div className='heading'>
          <Link>LOGO</Link>
        </div> */}
        <div className='body'>
          <ChakraProvider>
            <Flex mt ={10} width="100%" align="center" justifyContent="center">
              <Box background={"white"} p={8} width={"100%"} maxWidth="500px" borderWidth={1} borderRadius={3} boxShadow="lg">
            
                <Box textAlign="center">
                  <Heading>SignUp</Heading>
                </Box>
                <Box my={4} textAlign="left">
                  <form>
                    {/* {error && <ErrorMessage message={error} />} */}
                    <FormControl mt={6} isRequired>
                      <FormLabel>First name</FormLabel>
                      <Input
                      onChange= {handleChange}
                      borderColor={"#808080"} type="text" placeholder="First Name..."/>
                    </FormControl>

                    <FormControl mt={6} isRequired>
                      <FormLabel>Last name</FormLabel>
                      <Input
                      onChange= {handleChange}
                      borderColor={"#808080"} type="text" placeholder="Last Name..."/>
                    </FormControl>

                    <FormControl mt={6} isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input
                      onChange= {handleChange}
                      borderColor={"#808080"} type="email" placeholder="Enter email..."/>
                    </FormControl>
                    <FormControl mt={6} isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input 
                        onChange= {handleChange}
                        borderColor={"#808080"} type= {showPassword ? 'text': 'password'} placeholder="*******"/>
                        <InputRightElement width="3rem">
                          <Button h="1.5rem" size="sm" onClick=  
                            {handlePasswordVisibility}>
                            {showPassword ? <ViewOffIcon/> : <ViewIcon/>}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <Button  color={'white'} background = {'grey'} _hover={{ background: "grey", color: "white",}}   width="full" mt={4} type="submit">
                      {isLoading ? 
                      <CircularProgress isIndeterminate size="24px" color="teal" />
                      : 'Sign up'}
                    </Button>
                  </form>
                </Box>
            
              </Box> 
            </Flex>
          </ChakraProvider>
        </div>
        {/* {isLoggedIn? '' : 
        <div style={{textAlign: 'center'}}>
          <span style={{ marginTop: '10px', color: 'white'}}>New to FElearn? <Link style={{color: 'teal'}} to = './register'>Register</Link></span><br/>
        </div>
        } */}
    </div>  
    </div>
  );
}
export default SignUp;