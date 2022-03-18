import {NavLink as ReachLink} from "react-router-dom";
import {Box, Container, HStack, Link} from "@chakra-ui/react"

const Navigation = () => {
    return (
        <Box borderBottom="1px" borderColor="gray.200">
            <Container maxW="6xl">
                <HStack as="nav" h={12}>
                    <Link
                        as={ReachLink} to="/"
                    >
                        Главная
                    </Link>
                    <Link
                        as={ReachLink} to="/employees"
                    >
                        Сотрудники
                    </Link>
                </HStack>
            </Container>
        </Box>
    )
}

export default Navigation
