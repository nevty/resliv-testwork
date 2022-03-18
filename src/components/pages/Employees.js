import useEmployees from "../../hooks/useEmployees";
import {
    Container as ChakraContainer,
    HStack, IconButton, List, ListItem, Text
} from "@chakra-ui/react";
import {AiFillDelete} from "react-icons/ai";
import AddEmployee from "../AddEmployee";


const Employees = () => {
    const {
        employees, isLoading, error,
        addEmployee, removeEmployee
    } = useEmployees()

    if (isLoading) return <Container>...Загрузка</Container>
    if (error) return <Container>Ошибка</Container>

    return (
        <Container>
            <List spacing={2} mb={4}>
                {employees.map(person => (
                    <HStack as={ListItem} key={person.id}>
                        <Text fontSize="lg">
                            {person.first_name}
                        </Text>
                        <IconButton
                            onClick={() => removeEmployee(person.id)}
                            size="sm"
                            icon={<AiFillDelete/>}
                        />
                    </HStack>
                ))}
            </List>
            <AddEmployee add={addEmployee}/>
        </Container>
    )
}

const Container = ({children}) => (
    <ChakraContainer maxW="6xl" p={4}>
        {children}
    </ChakraContainer>
)

export default Employees
