import React from 'react';
import {Link} from "react-router-dom";

export default function Register(props) {
    return (
        <section className="auth page__auth">
            <h2 className="auth__title">Регистрация</h2>
            <form className="auth__form">
                <input
                    className="auth__input auth__input_type_email"
                    type="email"
                    name="emailInput"
                    placeholder="Email"
                    required
                />
                <input
                    className="auth__input auth__input_type_password"
                    type="password"
                    name="passwordInput"
                    placeholder="Пароль"
                    required
                />
                <button
                    className="auth__submit-button"
                    type="submit">Зарегистрироваться</button>
            </form>
            <Link
                className="auth__link"
                to="/sign-in" >Уже зарегистрированы? Войти</Link>
        </section>
    )
}