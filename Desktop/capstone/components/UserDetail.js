import React from 'react'
import { Spinner, Box, Img, Text, Flex, SimpleGrid } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import ClothingItemCard from './ClothingItemCard'
import { Container } from './Container'


const UserDetail = () => {
    const router = useRouter()
    const query = useQuery('user', async () => {
        const id = router.query.id
        const res = await fetch(`http://localhost:3000/api/user/${id}`)
        const data = await res.json()
        console.log('data', data)
        return data.user
    })
    console.log(query)
    if (query.isLoading) {
        return <Spinner />
    }
    console.log(query)
    return (
        <>
            <Container padding='150'>
                <Box padding='4' bg='gray.100' w='xxs' h='xxs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Img
                        borderRadius='full'
                        boxSize='100px'
                        src={query.data.image}
                        alt='profile'
                    />
                    <br />
                    <Text>{query.data.name}</Text>
                </Box>
                {query.data.clothingItems.map(item => {
                    return (
                        <>
                            <SimpleGrid columns={[1, null, 3]} spacing='40px'>
                                <Flex mt={40}>
                                    <ClothingItemCard item={item} />
                                </Flex>
                            </SimpleGrid>
                        </>
                    )
                })}
            </Container>
        </>
    )
}

export default UserDetail