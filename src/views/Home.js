import React from 'react';
import '../css/home.css';
import Product from '../components/Product';
import {  useTheme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {products} from '../products'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const tutorialSteps = [
    {
        imgPath: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
    },
    {
        imgPath:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg "
    },
    {
        imgPath: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
    }
]


export default function Home() {
    const [activeStep, setActiveStep] = React.useState(0);
    const theme = useTheme();
      const handleStepChange = (step) => {
        setActiveStep(step);
      };
    return (
        <div className="home">
            <div className="home__container">
             <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                    <div key={index}>
                        {Math.abs(activeStep - index) <= 3 ? (
                       <img
                       className="home__image"
                       src={step.imgPath}
                       alt="alt"
                   />
                        ) : null}
                    </div>
                    ))}
            </AutoPlaySwipeableViews>
            </div>

            <div className="home__row">
                <GridList cellHeight={400}  cols={12}>
                    { products && products.map((product) => (
                    <GridListTile key={product.id} cols={product.cols || 4}>
                        <Product 
                         id={product.id}
                         title={product.title}
                         price={product.price}
                         image={product.image}
                         rating={product.rating}/>
                    </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>
    )
}
