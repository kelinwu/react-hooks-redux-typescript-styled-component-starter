import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from "../reducers";
import { Button, Input } from '../styled'

export interface AppProps {
    todos: Todo[];
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;
}

interface AppState {
    fetching: boolean
}

const StyledDiv = styled.div`
    padding: 2rem;
    margin: 1rem;
    background: yellow;
    width: 500px;
`

const App: React.FC<AppProps> = ({ todos, fetchTodos, deleteTodo }) => {
    useEffect(() => {
        fetchTodos()
    }, [])

    const handleDelete = (id: number) => {
        deleteTodo(id)
    }
    return <StyledDiv>
        <div>
            <Input
                label="search"
                type="text"
                name="search"
                placeholder="keyword"
            />
        </div>

        {todos.map(todo => (
            <div key={todo.id}
                onClick={() => handleDelete(todo.id)}>
                {todo.id} - {todo.title}
                <Button onClick={() => handleDelete(todo.id)}>x</Button>
                {/* <Checkbox checked={checkboxState} onChange={handleCheckboxChange}>Check me!</Checkbox> */}
            </div>
        ))}
    </StyledDiv>
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos }
}

export default connect(
    mapStateToProps,
    { fetchTodos, deleteTodo }
)(App)