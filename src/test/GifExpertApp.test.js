//Hacer match con el snapshot
import React from 'react';
import { shallow } from "enzyme"
import { GifExpertApp } from "../GifExpertApp"


describe('test sobre el componente <GifExpertApp/>', () => {
    test('Debe de coincidir con el snapshot', () => {
        const wrapper = shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot();
    })
    test('debe de mostrar una lista de categorias', () => {
        const categories = ['One punch', 'DBZ'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)

        //En este test literalmente estoy dibujando una lista de categorias aleatoria que logra comprobarme si el componente <GifGrid/> recibe correctamente las categorias mandadas
    })


})
