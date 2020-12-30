import {fetch} from '../../store/csrf';
const AddProduct = () => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            
        }}>
            <input type='file' onChange={async (event) => {
                const input = event.target
                const imageToUpload = input.files[0]
                const formData = new FormData();

                formData.append('image', imageToUpload)
                await fetch('/temp', {
                    method:'POST', 
                    body: formData})
            }} />
            <button type='submit'>Upload!</button>
        </form>
    )
};

export default AddProduct;