import React, {useState} from "react"
import {
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Form,
    
} from "reactstrap";

import {v4} from "uuid"

const TodoForm = ({addTodos}) => {
    const [todoString, setTodoString] = useState("");

    const handleSubmit = e => {
        e.preventDefault()
        if (todoString === "") {
            return alert("Please fill some value")
        }

        const todo = {
            todoString,
            id: v4()
        }
        //TODO:
        addTodos(todo)

        setTodoString("")
    }

    return(
        
            <Form onSubmit={handleSubmit}>
            
                <InputGroup>
                <Input
                type="text"
                name="todo"
                id="todo"
                placeholder="Enter a todo string"
                value={todoString}
                onChange={e => setTodoString(e.target.value)}
                />
                <span>
                <InputGroup>
                    <div className="input-group-append">
                    <Button
                    color="success"

                    >Add Todo</Button>
                   </div>
                </InputGroup>
                </span>
                
                </InputGroup>
                
            
        </Form>
        
       
    )
    
}

export default TodoForm;