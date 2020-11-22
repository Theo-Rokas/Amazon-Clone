import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className='home'>
            <img 
                className='home__image'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' //"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/BlackFriday/Fuji_TallHero_BFWeek_v1_en_US_1x._CB415746974_.jpg"
                alt=""/>
            
            <div className="home__row">
                <Product 
                    id='1'
                    title='Tyranids Battleforce'
                    price={130}
                    rating={5}
                    image='https://www.warhammer-community.com/wp-content/uploads/2020/11/MC8oSjEYMeE79i5b.jpg'/>

                <Product 
                    id='2'
                    title='Tyranids Battleforce'
                    price={130}
                    rating={4}
                    image='https://spikeybits.com/wp-content/uploads/2019/10/battleforce-tyranids.jpg'/>
            </div>

            <div className="home__row">
                <Product 
                    id='3'
                    title='Tyranids Apocalypse'
                    price={150}
                    rating={5}
                    image='https://i.ebayimg.com/images/g/VJAAAOSwGEFd5PgD/s-l400.jpg'/>

                <Product 
                    id='4'
                    title='Tyranids Battleforce'
                    price={130}
                    rating={4}
                    image='https://3.bp.blogspot.com/-LklGmr02FOw/UtXMmsqexrI/AAAAAAAABX0/tGxx9Pjilj0/s1600/51-05_tyranid_swarm-426611389080385d.jpg'/>

                <Product 
                    id='5'
                    title='Tyranids Start Collecting'
                    price={60}
                    rating={3}
                    image='https://d1rw89lz12ur5s.cloudfront.net/photo/gerardsgaming/file/0296d3f0c86511e6a44285d35423fe4a/large/99120106039_StartCollectingTyranids03.jpg'/>
            </div>             
        </div>
    )
}

export default Home
