import {
    Box,
    Button, FormControl, HStack, Input,
} from "@chakra-ui/react";
import React, {useCallback, useState} from "react";
import {v4 as uuid} from 'uuid'


const AddEmployee = ({add}) => {
    const [name, setName] = useState('')
    const onClick = useCallback(() => {
        if (name.trim() !== '') {
            add({first_name: name, id: uuid()})
            setName('')
        }
    }, [name, add])

    return (
        <HStack>
            <Input
                maxW="sm"
                value={name}
                onChange={({target}) => setName(target.value)}
            />
            <Button onClick={onClick}>Добавить</Button>
        </HStack>
    )
}

export default React.memo(
    AddEmployee,
    (prev, next) => prev.add !== next.add
)
