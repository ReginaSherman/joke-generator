import { Spinner, Flex, SimpleGrid, Container } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import { useQuery } from 'react-query'
import { Nav } from './Nav'
import { Main } from './Main'
import UserCard from './UserCard'


const Users = () => {
    const userQuery = useQuery('users', async () => {
        const res = await fetch('/api/users')
        const data = await res.json()
        return data.users
    })

    if (userQuery.isLoading) {
        return <Spinner />
    }
    return (
        <>
            <Container maxW='xl' centerContent>
                <Flex mt={40}>
                    <SimpleGrid columns={[2, null, 3]} spacing='40px'>
                        {userQuery.data.map(user => {
                            return (
                                <>
                                    <UserCard user={user} />
                                </>
                            )
                        })}
                    </SimpleGrid>
                </Flex>
            </Container>


        </>
    )
}

export default Users