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


import '../App.css'
import { useState } from 'react';
import { Link} from 'react-router-dom';
  import { useToast } from '@chakra-ui/react'
  
  import { useNavigate } from 'react-router-dom';






export default function SimpleCard() {
  const toast = useToast()
  const navigate = useNavigate()
  const [values, setvalues] = useState({
      name : '',
      email :'',
      password :''
  })
  function handlename (e) {
      setvalues (prev => ({...prev, name :e.target.value}))
      console.log(values.name)
      
      
  }
  function handleemail (e) {
      setvalues (prev => ({...prev, email :e.target.value}))
      console.log(values.email)
      
  }
  function handlepass (e) {
      setvalues (prev => ({...prev, password :e.target.value}))
      console.log(values.password)
  }


  async function Inscription (e) {
        
    console.log(values)
    const res = await fetch('http://localhost:4000/inscription',{
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
    //  navigate ('/connexion')
   }
  //  En cas d'erreur, on affiche un toast d'erreur lors de l''inscription et on reste sur la meme page
   else {
    toast({
      position : 'top',
      title: 'Inscription Reussi.',
      description: "Veuillez vous connecter a present.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    navigate ('/connexion')
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
          <Heading fontSize={'4xl'}>Veuillez vous inscrire</Heading>
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
            <FormControl id="name">
              <FormLabel>Nom d'utilisateur</FormLabel>
              <Input type="text" onChange={handlename}/>
            </FormControl>
            <FormControl id="email">
              <FormLabel>Adrese E-mail</FormLabel>
              <Input type="email"  onChange={handleemail}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Mot de passe</FormLabel>
              <Input type="password" onChange={handlepass} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Text className='moi'>Deja Inscrit?</Text>
                <Link color={'blue.400'} to={`/connexion`} className='lien'> Connectez-vous</Link>
              </Stack>
              <Checkbox>En Continuant, j'accepte les conditions d'utilisation & la politique de confidentialité</Checkbox>
              <Button className='bu'
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}onClick={Inscription}>
                Inscription
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}