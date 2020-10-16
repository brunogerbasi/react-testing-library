import React from 'react'

import { fireEvent, render, waitForElement } from '@testing-library/react'

import Todo from './Todo'

describe('Tests for Todo component', () => {
    it('Should add new task when form has been submitted', async () => {
        // renderizar o componente
        const {getByTestId, getByText} = render (<Todo />)

        //buscar o input
        const fieldNode = await waitForElement(
            () => getByTestId('form-field')
        )
        
        //digitar no input
        const newTask = 'testing'
        fireEvent.change(
            fieldNode, 
            { target: { value: newTask}}
        )       
        expect(fieldNode.value).toEqual(newTask)        
        
        //buscar no botão
        const btnNode = await waitForElement(
            () => getByTestId('form-btn')
        )
        //clicar no botão
        fireEvent.click(btnNode)
        
        //buscar td
        const tdNode = await waitForElement(
            () => getByText(newTask)
        )
        expect(tdNode).toBeDefined()

    })
})