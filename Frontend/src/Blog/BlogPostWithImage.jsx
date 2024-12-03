import React from 'react'
// import PageHeader from '../Composants/PageHeader'




// import Image from 'next/image'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

export default function BlogPostWithImage() {
 
  return (
    <Center py={6} className='d-flex justify-content-around'>
      <Box
        maxW={'345px'}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box h={'180px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <img src="../src/assets/images/blog/09.jpg" className='cc' alt="" />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Blog
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Boost your conversion rate
          </Heading>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
      <Box
        maxW={'345px'}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box h={'180px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <img src="../src/assets/images/blog/05.jpg" className='cc' alt="" />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Blog
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Boost your conversion rate
          </Heading>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
      <Box
        maxW={'345px'}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box h={'180px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <img src="../src/assets/images/blog/10.jpg" className='cc' alt="" />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Blog
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Boost your conversion rate
          </Heading>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>

    
  )
}




const postList = [
  {
  id:1,
  imgUrl: '/src/assets/images/blog/10.jpg',
  imgAlt: 'rajibraj91',
  title: 'Poor People Campaign Our Resources',
  date: 'Jun 05,2022',
  },
  {
  id:2,
  imgUrl: '/src/assets/images/blog/11.jpg',
  imgAlt: 'rajibraj91',
  title: 'Poor Peoples Campaign Our Resources',
  date: 'Jun 05,2022',
  },
  {
  id:3,
  imgUrl: '/src/assets/images/blog/12.jpg',
  imgAlt: 'rajibraj91',
  title: 'Poor Peoples Campaign Our Resources',
  date: 'Jun 05,2022',
  },
  {
  id:4,
  imgUrl: '/src/assets/images/blog/09.jpg',
  imgAlt: 'rajibraj91',
  title: 'Poor Peoples Campaign Our Resources',
  date: 'Jun 05,2022',
  },
  ]
  

  // <>
  //   <div>
  //     <PageHeader title="Blog" curPage="Blogs"/>
  //   </div>
  // </>

  
  
    
    
  