import {useDispatch } from 'react-redux';
import {search} from '../../store/search.js';
import canvas from './canvas-compressed.jpg';
import painting from './knitting-compressed.jpg';
import pottery from './pottery-compressed.jpg';
import photography from './photography-compressed.jpg';
function HomePageJumbotron () {

    const dispatch = useDispatch();

    const linkSearch = (searchTerm) => {
        return dispatch(search({searchTerm}))
    }

    return (
        <div>
            <div id="jumbotron">
                <div onClick={() => linkSearch('canvas')} className='picture-search'>
                    <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                        key='canvas'
                        src={canvas} alt='' /> 
                    <div className='jumbotron-titles'>Canvas</div>
                </div>

                <div onClick={() => linkSearch('painting')} className='picture-search'>
                    <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                        key='painting'
                        src={painting} alt='' /> 
                    <div className='jumbotron-titles'>Painting</div>
                </div>
                
                <div onClick={() => linkSearch('pottery')} className='picture-search'>
                    <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                        key='pottery'
                        src={pottery} alt='' /> 
                    <div className='jumbotron-titles'>Pottery</div>
                </div>

                <div onClick={() => linkSearch('photography')} className='picture-search'>
                    <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                        key='photography'
                        src={photography} alt=''/> 
                    <div className='jumbotron-titles'>Photography</div>
                </div>
            </div>
        </div>
    )
}


export default HomePageJumbotron;