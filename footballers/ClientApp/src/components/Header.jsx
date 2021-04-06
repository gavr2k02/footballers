import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='p-2 bg-dark'>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link text-white'>
                                Добавить футболиста
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/footballers'
                                className='nav-link text-white'>
                                Список футболистов
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
