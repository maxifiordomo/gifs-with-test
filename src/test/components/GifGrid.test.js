import { GifGrid } from "../../components/GifGrid"
import React from 'react';
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el componente GifGrid', () => {

    const category = 'Hola XD';

    test('Debe de hacer match con el snapShot', () => {

        //mockReturnValue devuelve todo lo que este dentro de si
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();

    })
    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        //este gifs se crea para pasarle informacion parecida a la que se le manda directamente en el componente
        const gifs = [{
            id: 'abc',
            url: 'https://localhost//cualquier/cosa.jpg',
            title: 'cualquier cosa',
        }];

        //data recibe a gifs y loading se cambia de true a false ya que no se muestra mas el loading(debido a que ya data contiene info)
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);


        expect(wrapper).toMatchSnapshot();
        //Se encarga de revisar en todo el render si existe lo que el wrapper busca
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    })

})
