import React from 'react';
import Layout from '../../layout/Layout';
import Carousel from './carousel/Carousel';
import Content from './Content'
import Details from './Details';
import Soldier from './Soldier'

const Home = () => {
return (
<Layout>
    <Content/>
    <Carousel/>
    <Soldier/>
    <Details/>
</Layout>
)
}
export default Home