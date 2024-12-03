import './SocialProfileSimple.css'
import HarroldPost from '../assets/HarroldPost.png'

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'

export default function SocialProfileSimple() {
  return (
    <Center py={6} className='moi'>
      <Box
        maxW={'150px'}
        height={100}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={HarroldPost} 
          mb={0.5}
          pos={'relative'}
          _after={{
            content: '""',
            w: 2,
            h: 2,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={9} fontFamily={'body'}>
          NWAGOUM HARROLD
        </Heading>
      </Box>
    </Center>
  )
}