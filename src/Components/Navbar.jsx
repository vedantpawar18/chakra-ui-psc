import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Box>
            <Flex gap="1rem" p="1rem" borderBottom="1px" borderColor="gray.100">
                <Button variant="solid">4d</Button>
                <Spacer />
                <Button variant="ghost">Sign In</Button>
                <Button variant="outline">Sign Up</Button>
                <Button variant="solid">Post a Job</Button>
            </Flex>
        </Box>
    </div>
  )
}

export default Navbar