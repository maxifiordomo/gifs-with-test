import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import React from 'react';
import '@testing-library/jest-dom'

describe('Pruebas en el componente <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value: value } });

        expect(wrapper.find('p').text('').trim()).toBe(value)
    })

    test('No debe de postear la informacion onSubmit', () => {
        //esto basicamente dice:
        //Busca en el form y simula que estas ejecutando submit y realizando lo que la funcion handleSubmit ejecuta (que es preventDefault)
        wrapper.find('form').simulate('submit', { preventDefault() { } })

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        //1.Simular el inputChange
        const value = 'Hola mundo';
        wrapper.find('input').simulate('change', {
            target: { value: value }
        });

        //2.Simular el submit
        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        });

        //3.Llamar el setCategories
        expect(setCategories).toHaveBeenCalled();

        //4.el valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');

    })


})
