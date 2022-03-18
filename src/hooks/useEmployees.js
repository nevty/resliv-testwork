import {useState} from "react";
import {useQuery} from "react-query";

const getEmployees = fetch('https://reqres.in/api/users?per_page=12')
    .then(res => res.json())

const useEmployees = () => {
    const [employees, setEmployees] = useState([])
    const {isLoading, error} = useQuery(
        'employees',
        () => getEmployees
            .then((res) => {
                setEmployees(res.data)
            })
    )

    const addEmployee = person =>
        setEmployees(employees => [
            ...employees,
            person
        ])

    const removeEmployee = id =>
        setEmployees(employees => employees
            .filter(person => person.id !== id)
        )

    return {
        isLoading,
        error,
        employees,
        addEmployee,
        removeEmployee
    }
}

export default useEmployees
