import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  // import './CSS/LoginSignup.css'
  
  import { Link} from 'react-router-dom';
  import '../App.css'
  import { useState } from 'react';
  
  import { useToast } from '@chakra-ui/react'
  
  import { useNavigate } from 'react-router-dom';
  
  
  
  
  export default function SimpleCard() {

    const toast = useToast()
  const navigate = useNavigate()
  const [values, setvalues] = useState({
      email :'',
      password :''
  })
  
  function handleemail (e) {
      setvalues (prev => ({...prev, email :e.target.value}))
      console.log(values.email)
      
  }
  function handlepass (e) {
      setvalues (prev => ({...prev, password :e.target.value}))
      console.log(values.password)
  }
  
  async function connexion (e) {
        
    console.log(values)
    const res = await fetch('http://localhost:4000/connexion',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })
    const data = await res.json()
    console.log(data)
// Dans le cas ou l'on reussi a s'inscrire, on affiche untoast de reussite a l'ecran et on nous redirige vers la page de connexion 

   if (data.inscrit) {
    toast({
      position : 'top',
      title: `Echec d'Inscription.`,
      description: "Une erreur s'est produite.",
      status: 'error',
      duration: 2000,
      isClosable: true,
    })
     navigate ('/home')
   }
  //  En cas d'erreur, on affiche un toast d'erreur lors de l''inscription et on reste sur la meme page
   else {
    toast({
      position : 'top',
      title: 'Connexion Reussi.',
      description: "Veuillez vous connecter a present.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
   }


   
    
        
    }
      

  


  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Veuillez vous connectez</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            Merci de nous faire confiance <Link color={'blue.400'}>SHOPPING Hfree</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Adrese E-mail</FormLabel>
                <Input type="email" onChange={handleemail} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Mot de passe</FormLabel>
                <Input type="password" onChange={handlepass}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                </Stack>
                <Button className='bu'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={connexion}>
                  Connexion
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }