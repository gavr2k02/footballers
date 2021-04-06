import { useState, useEffect } from "react";
import axios from "axios";

const AddFootballer = () => {
    const pathApiCountries = "api/country";
    const pathApiTeam = "api/team";
    const pathApiFootballer = "api/footballer";

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [sex, setSex] = useState("Мужской");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [countries, setCountries] = useState([]);
    const [teams, setTeams] = useState([]);

    const [selectedTeam, setSelectedTeam] = useState();
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        fetch(pathApiCountries)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCountries(result);
                    setSelectedCountry(result[0].name);
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
                    setIsLoaded(true);
                    setTeams(result);
                    setSelectedTeam(result[0].name);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    const handleSubmmit = (event) => {
        event.preventDefault();

        var countryId =
            countries.findIndex((country) => country.name === selectedCountry) +
            1;

        var teamId = teams.findIndex((team) => team.name === selectedTeam) + 1;

        const footballer = {
            name: name,
            surname: surname,
            sex: sex,
            dateOfBirth: dateOfBirth,
            countryId: countryId,
            teamId: teamId,
        };
        console.log(footballer);
        axios.post(pathApiFootballer, footballer);
    };

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
            <div className='container'>
                <h2 className='mt-3'>Пожалуйста заполните данные футболиста</h2>
                <form onSubmit={handleSubmmit}>
                    <div className='mb-3'>
                        <label className='form-label'>Имя:</label>
                        <input
                            type='text'
                            className='form-control'
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Фамилия:</label>
                        <input
                            type='text'
                            className='form-control'
                            value={surname}
                            onChange={(event) => {
                                setSurname(event.target.value);
                            }}
                        />
                    </div>

                    <label className='form-check-label'>Пол:</label>
                    <div className='form-check'>
                        <input
                            className='form-check-input'
                            name='sex'
                            type='radio'
                            value='Мужской'
                            onClick={(event) => setSex(event.target.value)}
                            onChange={(event) => setSex(event.target.value)}
                            checked
                        />
                        <label className='form-check-label'>Мужской</label>
                    </div>

                    <div className='form-check mb-3'>
                        <input
                            className='form-check-input'
                            name='sex'
                            type='radio'
                            value='Женский'
                            onClick={(event) => setSex(event.target.value)}
                            onChange={(event) => setSex(event.target.value)}
                        />
                        <label className='form-check-label'>Женский</label>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Дата рождения:</label>
                        <input
                            type='date'
                            className='form-control'
                            value={dateOfBirth}
                            onChange={(event) => {
                                setDateOfBirth(event.target.value);
                            }}
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Страна:</label>
                        <select
                            className='form-select'
                            onChange={(event) =>
                                setSelectedCountry(event.target.value)
                            }>
                            {countries.map((country) => (
                                <option key={country.id}>{country.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Команда:</label>
                        <input
                            type='text'
                            className='form-control'
                            value={selectedTeam}
                            onChange={(event) => {
                                setSelectedTeam(event.target.value);
                            }}
                            list='teams'
                        />
                        <datalist id='teams'>
                            {teams.map((team) => (
                                <option key={team.id}>{team.name}</option>
                            ))}
                        </datalist>
                    </div>

                    <button type='submit' className='btn btn-primary'>
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
};

export default AddFootballer;
