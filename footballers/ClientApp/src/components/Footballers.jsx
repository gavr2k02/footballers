import { useState, useEffect } from "react";

import { Card } from "./index";

const Footballers = () => {
    const pathApiCountries = "api/country";
    const pathApiTeam = "api/team";
    const pathApiFootballer = "api/footballer";

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [foootballers, setFootballers] = useState([]);
    const [countries, setCountries] = useState([]);
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch(pathApiFootballer)
            .then((res) => res.json())
            .then(
                (result) => {
                    setFootballers(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );

        fetch(pathApiCountries)
            .then((res) => res.json())
            .then(
                (result) => {
                    setCountries(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );

        fetch(pathApiTeam)
            .then((res) => res.json())
            .then(
                (result) => {
                    setTeams(result);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return (
            <div className='container'>
                <h3>Ошибка</h3>
            </div>
        );
    } else if (!isLoaded) {
        return (
            <div className='container'>
                <h3>Загрузка...</h3>
            </div>
        );
    } else {
        return (
            <div className='row'>
                {foootballers.map((footballer) => (
                    <Card
                        key={footballer.id}
                        footballer={footballer}
                        teams={teams}
                        countries={countries}
                    />
                ))}
            </div>
        );
    }
};

export default Footballers;
