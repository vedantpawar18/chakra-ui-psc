import { Button } from '@chakra-ui/react'
import React from 'react'

const JobTypeButton = ({text, icon}) => {
  return (
    <Button
    variant="outline" width="8rem" px="2rem" color="gray.200" bg="purple.700" borderWidth="2px" borderColor="purple.900" leftIcon={icon}>
        {text}
    </Button>
    
  )
}

export default JobTypeButton