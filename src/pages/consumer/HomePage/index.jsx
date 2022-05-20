import { IoIosRestaurant } from 'react-icons/io'
import Button from "../../../components/Button"
import { Container, Form } from "./style"
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../../providers/user/user'
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'

const HomePage = () => {
    const history = useHistory()
    const { table, setTable, currentTable, setCurrentTable, userInfos } = useAuth()
    const [countTables, setCountTables] = useState([])

    const {
        register,
        handleSubmit
      } = useForm();

    const handleRedirect = (data) => {
        console.log(data)
        setCurrentTable(data.table)
        history.push("/menu")
        console.log(currentTable)

    }

    const showTableCount = () => {
        let count = []
        for (let i = 1; i < table + 1; i++) {
            count.push(i)
        }
        setCountTables(count)
        return countTables

    }

    useEffect(() => {
        showTableCount()
    }, [userInfos])

    return (
        <Container>
            <div className='title'>
                <h1>Cardápio Digital</h1>
                <IoIosRestaurant color='var(--secondary-color-50)' size={50} />
            </div>
            <p>Ágil | Sustentável | Objetivo</p>
            <Form onSubmit={handleSubmit(handleRedirect)}>

                <div>
                    <Button type="submit" bgYellow>Abrir</Button>
                </div>
                <div>
                    <h3>Escolha o tablet</h3>
                    <select {...register("table")}>
                        {countTables.length >= 1 && (
                            <>
                                {countTables.map((table, index) => {
                                    return (
                                        <>
                                            <option 
                                            value={table}
                                            key={index}
                                            >{table}</option>
                                        </>
                                    )
                                })}
                            </>
                        )}
                    </select>
                </div>
            </Form>
        </Container>
    )
}
export default HomePage