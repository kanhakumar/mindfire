import {useState} from 'react';

const Home = () => {
    const [name, setName] = useState('Hi');

    const handleClick = () => {
        setName('Bye');
    }

    return (
        <div className="home">
            <p>{name}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default Home;