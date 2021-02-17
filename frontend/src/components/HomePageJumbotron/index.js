import {Link} from 'react-router-dom';
import canvas from './z-s-pCFw8nlNS9c-unsplash.jpg';
import painting from './steve-johnson-5MTf9XyVVgM-unsplash.jpg';
import pottery from './oshin-khandelwal-EQpXnijYejQ-unsplash.jpg';
import photography from './nathan-dumlao-p4TKmK4Egvg-unsplash.jpg';
function HomePageJumbotron () {
    return (
        <div>
            <div id="jumbotron">
                <Link to={`/search/canvas`} id='link'>
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                key='canvas'
                src={canvas} alt='' /> 
                <div className='jumbotron-titles'>Canvas</div>
                </Link>

                <Link to={`/search/painting`} id='link'>
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                key='painting'
                src={painting} alt='' /> 
                <div className='jumbotron-titles'>Painting</div>
                </Link>
                
                <Link to={`search/pottery`} id='link'>
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                key='pottery'
                src={pottery} alt='' /> 
                <div className='jumbotron-titles'>Pottery</div>
                </Link>

                <Link to={`/search/photography`} id='link'>
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                key='photography'
                src={photography} alt=''/> 
                <div className='jumbotron-titles'>Photography</div>
                </Link>
            </div>
        </div>
    )
}


export default HomePageJumbotron;