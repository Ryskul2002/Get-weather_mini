import React from 'react';
import axios from "axios";

const Form = ({setWeather, city, setCity}) => {

    const getWeather = (e) => {
        e.preventDefault()
            axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c3ca235f299a5ac03a9b15b27ae3fee0`)
                .then(({data}) => setWeather(data))
                .catch(() => alert('Введите корректый город!'))
    }


    const inputGet = (e) => {
        setCity(e.target.value)
    }

    return (
        <div>
            <form className="get" action="">
                <input className="get__input" type="text" onChange={inputGet} value={city}
                       placeholder="Введите имя города"/>
                <button className="get__btn" type="submit" onClick={getWeather}>Получить</button>
            </form>
        </div>
    );
};

export default Form;