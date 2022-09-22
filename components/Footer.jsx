import Link from 'next/link'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer,Text } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'

const Footer = () => (
    <Box style={{
        backgroundColor:'#357EC7',
        margin: '0 auto',
        display:'flex',
        justifyContent:'center',
        color:'white',
        padding:'50px'

      }}>
        <Text fontSize='sm' fontWeight='bold'>Realtor Inc. 2022 </Text>
      </Box>
)

export default Footer