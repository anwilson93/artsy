import './HomePage.css';
import canvas from './z-s-pCFw8nlNS9c-unsplash.jpg';
import painting from './steve-johnson-5MTf9XyVVgM-unsplash.jpg';
import pottery from './oshin-khandelwal-EQpXnijYejQ-unsplash.jpg';
import photography from './nathan-dumlao-p4TKmK4Egvg-unsplash.jpg'
function HomePage () {
    return (
        <div id="jumbotron">
            <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
            src={canvas} />
            <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
            src={painting} />
            <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
            src={pottery} />
            <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
            src={photography} />
        </div>
    )
}

export default HomePage;