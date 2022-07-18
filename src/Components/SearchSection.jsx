import { Box, Button, Container, Flex, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import FilterIcon from './FilterIcon'
import JobTypeButton from './JobTypeButton'

const SearchSection = () => {
  return (
    <Container pt="5rem" pb="1rem">
        <Flex direction="column" alignItems="center">
            <Heading as="h1" size="4xl" justifySelf="center">Find The Right</Heading>
            <Flex gap="1rem">
                <Heading as="h1"  bgGradient='linear(to-r, purple.500, blue.500)'
                bgClip='text' size="4xl" justifySelf="center">Four-Day</Heading>

                <Heading as="h1" size="4xl" justifySelf="center">Week</Heading>
            </Flex>
            <Heading as="h1" size="4xl" justifySelf="center">Job</Heading>
        </Flex>
        <Box>
            <Flex gap="1rem">
                <Input boxShadow='2xl' borderRadius="1rem" placeholder='Type job title or keyword' />
                <Button color="gray.700" borderRadius="1rem" variant="ghost" background="gray.200">
                    <FilterIcon />
                </Button>
            </Flex>
            <Flex mt="1rem" gap="1rem" justifyContent="space-between">
                <JobTypeButton text="Remote" />
                <JobTypeButton text="Tech" />
                <JobTypeButton text="Marketing" />
            </Flex>
        </Box>
    </Container>
  )
}

export default SearchSection