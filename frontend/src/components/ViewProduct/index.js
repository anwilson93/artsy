import {useParams} from "react-router-dom";

const ViewProduct = ({}) => {
    const {id} = useParams();
    return (
        <div>
            
            <h1>{id}</h1>
        </div>
       
    )
}

export default ViewProduct;