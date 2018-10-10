import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './todoActions'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo=> (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone': ''}>{todo.description}</td>
                <td>
                     {/* eslint-disable*/}
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)}></IconButton>
                     {/* eslint-disable*/}
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPending(todo)}></IconButton>
                    {/* eslint-disable*/}
                    <IconButton style='danger'icon='trash-o' hide={!todo.done}
                        onClick={() => props.remove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    return(
        <table className='table'>   
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableAction'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToPropos = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToPropos)(TodoList)