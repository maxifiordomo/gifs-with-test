import { GifGridItem } from "../../components/GifGridItem";
import { shallow } from 'enzyme';
import React from 'react';


describe('Pruebas del componente GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    /*
    wrapper al ser una constante que se utiliza en dos test diferentes pasa a ser global en el componente contenedor
    */


    test('GifGridItem debe de mostrar el componente correctamente', () => {



        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar en un parrafo el valor de title', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title)
    })

    test('debe de mostrar una imagen igual al url de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.props().src)
        expect(img.prop('src')).toBe(url)
    })

    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        //console.log(div.prop('className'))
        const className = div.prop('className')

        expect(className.includes('animate__fadeIn')).toBe(true)
    })

})
