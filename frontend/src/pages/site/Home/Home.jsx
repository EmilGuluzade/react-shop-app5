import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet-async'
    import MainContext from '../../../context/context'
    import Welcome from './../../../components/Sections/Welcome/Welcome';
import Carousel from '../../../components/Sections/Carousel.jsx/Carousel';
import Cards from '../../../components/Sections/Cards/Cards';

    const Home = () => {
        const {data,setData} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <>
                 <Carousel></Carousel>
                <Welcome></Welcome>
                <Cards></Cards>
                </>
        </>
        )
    }
    
    export default Home
        