import { useState } from "react";
import axios from "axios";
import avatar from "../assets/img/avatar.png";

const Card = (props) => {
    const pathApiFootballer = "api/footballer";

    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(props.footballer.name);
    const [surname, setSurname] = useState(props.footballer.surname);
    const [sex, setSex] = useState(props.footballer.sex);
    const [dateOfBirth, setDateOfBirth] = useState(
        props.footballer.dateOfBirth
    );
    const [countries, setCountries] = useState(props.countries);
    const [teams, setTeams] = useState(props.teams);

    const [selectedTeam, setSelectedTeam] = useState(
        props.teams.find((team) => team.id === props.footballer.teamId).name
    );
    const [selectedCountry, setSelectedCountry] = useState(
        props.countries.find(
            (country) => country.id === props.footballer.countryId
        ).name
    );

    const handleSubmmit = (event) => {
        event.preventDefault();

        var countryId =
            countries.findIndex((country) => country.name === selectedCountry) +
            1;

        var teamId = teams.findIndex((team) => team.name === selectedTeam) + 1;

        const footballer = {
            id: props.footballer.id,
            name: name,
            surname: surname,
            sex: sex,
            dateOfBirth: dateOfBirth,
            countryId: countryId,
            teamId: teamId,
        };
        console.log(footballer);
        axios.put(pathApiFootballer, footballer);

        setEdit(!edit);
    };
    if (!edit) {
        return (
            <div className='col-sm-4 mt-3'>
                <div className='card'>
                    <img src={avatar} className='card-img-top p-3' alt='...' />

                    <div className='card-body'>
                        <h5 className='card-title'>
                            {props.footballer.name} {props.footballer.surname}
                        </h5>
                    </div>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <b>Дата рождения:</b>{" "}
                            {props.footballer.dateOfBirth.substring(
                                0,
                                props.footballer.dateOfBirth.length - 9
                            )}
                        </li>
                        <li className='list-group-item'>
                            <b>Пол:</b> {props.footballer.sex}
                        </li>
                        <li className='list-group-item'>
                            <b>Страна: </b>
                            {selectedCountry}
                        </li>
                        <li className='list-group-item'>
                            <b>Команда: </b>
                            {selectedTeam}
                        </li>
                    </ul>
                    <div className='card-body'>
                        <button
                            className='btn btn-primary'
                            onClick={() => setEdit(!edit)}>
                            Редактировать
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='col-sm-4 mt-3'>
                <div className='card'>
                    <img src={avatar} className='card-img-top p-3' alt='...' />
                    <div className='container'>
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
                                    onClick={(event) =>
                                        setSex(event.target.value)
                                    }
                                    onChange={(event) =>
                                        setSex(event.target.value)
                                    }
                                    checked
                                />
                                <label className='form-check-label'>
                                    Мужской
                                </label>
                            </div>
                            <div className='form-check mb-3'>
                                <input
                                    className='form-check-input'
                                    name='sex'
                                    type='radio'
                                    value='Женский'
                                    onClick={(event) =>
                                        setSex(event.target.value)
                                    }
                                    onChange={(event) =>
                                        setSex(event.target.value)
                                    }
                                />
                                <label className='form-check-label'>
                                    Женский
                                </label>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>
                                    Дата рождения:
                                </label>
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
                                        <option key={country.id}>
                                            {country.name}
                                        </option>
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
                                        <option key={team.id}>
                                            {team.name}
                                        </option>
                                    ))}
                                </datalist>
                            </div>
                            <button type='submit' className='btn btn-primary'>
                                Сохранить
                            </button>
                            <button
                                type='button'
                                className='btn btn-danger'
                                onClick={() => setEdit(!edit)}>
                                Отмена
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default Card;
