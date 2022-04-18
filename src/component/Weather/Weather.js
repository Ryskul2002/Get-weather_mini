import React from 'react';

const Weather = ({weather}) => {

    const getZero = (num) => {
        if (num < 10){
            return `0${num}`
        }
        return num
    }

    const getTime = (times) =>{
            let time = new Date(times)
            let hours = time.getHours()
            let minute = time.getMinutes()
            let second = time.getSeconds()
            return `${getZero(hours)}:${getZero(minute)}:${getZero(second)}`
    }



    //setVel()
    // const setTimer = () => {
    //     let timer = setInterval(()=>{
    //             setVel()
    //     },1000)
    //     console.log(timer)
    // }
    // function setVel (){
    //     let celebration = new Date('2022-03-08')
    //     let now = new Date()
    //     let difference = Date.parse(celebration) - Date.parse(now)
    //     second.textContent = `${getZero(Math.floor(difference / 1000) % 60)}`
    //     minute.textContent = `${getZero(Math.floor(difference / 1000 / 60) % 60)}`
    //     hour.textContent = `${getZero(Math.floor(difference / 1000 / 60 / 60) % 24 - 6)}`
    //     day.textContent = `${getZero(Math.floor(difference / 1000 / 60 / 60 / 24))}`
    // }
    // setTimer()

    return (
        <div>
            <div className="weather__top">
                <p className="weather__time">{getTime(new Date())}</p>
                <p className="weather__desc">{weather.weather[0].description}</p>
            </div>
            <h2 className="weather__city">Город : {weather.name}</h2>
            <p className="weather__temp">Температура : {Math.round( weather.main.temp - 273.15)}<span>°C</span></p>
            <p className="weather__prog">Влажность : {weather.main.humidity} % </p>
            <p className="weather__prog">Ветер : {weather.wind.speed} м/с</p>
            <span><img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt=""/></span>
            <p className="weather__prog">Расвет : {getTime(weather.sys.sunrise * 1000)}</p>
            <p className="weather__prog">Закат : {getTime(weather.sys.sunset * 1000)}</p>
        </div>
    );
};

export default Weather;