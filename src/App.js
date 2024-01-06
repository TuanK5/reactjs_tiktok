
import './App.css';
import { useState } from 'react';


const cars = [
    {
        id: 1,
        name: 'Bugatti',
    },
    {
        id: 2,
        name: 'Lamborghini',
    },
    {
        id: 3,
        name: 'Maybach',
    },
]

function App() {
    const [checked, setChecked] = useState(); //dùng biến checked để lưu id tùng thẻ radio
        function handlsubmit(){
            //call API
            //checked đã chứa giá trị id của radio được checked
            console.log({id: checked})    
        }
    return (
        <div className="App">
            {cars.map(car => (
                <div key={car.id}>
                    <input type="radio"
                    //trạng thái check hay không check của radio
                    checked = {checked === car.id} //nếu giá trị checked(id) === id của car thì true(checked)
                    //set lại checked(set lại giá trị id) khi radio thay đổi
                    onChange={() => setChecked(car.id)} /> 
                    {car.name}
                </div>
            ))}
            <button onClick={handlsubmit}>Submit</button>
        </div>
    )
}


export default App;
