import { Link, Route, Routes } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <Routes>
        <Route path="/sign-up" element={<Link to="/sign-in">Войти</Link>} />
        <Route path="/sign-in" element={<Link to="/sign-up">Регистрация</Link>} />
      </Routes>
    </header>
  );
}