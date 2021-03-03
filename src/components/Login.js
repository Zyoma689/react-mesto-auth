import React from 'react';

export default function Login() {
    return (
        <section className="auth page__auth">
            <h2 className="auth__title">Вход</h2>
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
                    type="submit">Войти</button>
            </form>
        </section>
    );
}