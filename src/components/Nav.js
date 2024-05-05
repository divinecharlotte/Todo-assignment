import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Nav = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language); 

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  const todos = useSelector((state) => state.todos.todos);
  const totalTodos = todos.length;
  const totalToDo = todos.filter((todo) => todo.status === "To do").length;
  const totalInProgress = todos.filter(
    (todo) => todo.status === "In Progress"
  ).length;
  const totalCompleted = todos.filter(
    (todo) => todo.status === "Completed"
  ).length;

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); 
  };

  return (
    <div className="flex gap-2 p-2 lg:p-4 bg-white rounded text-xs font-medium lg:font-medium text-gray-500  lg:text-sm lg:flex lg:justify-between">
      <Link to="/">{t('All Tasks')}: <span className="rounded bg-gray-100 px-1 lg:px-2">{totalTodos}</span></Link>
      <Link to="/todo">{t('To do')}: <span className="rounded bg-gray-100 px-1 lg:px-2">{totalToDo}</span></Link>
      <Link to="/in-progress">{t('In Progress')}: <span className="rounded bg-gray-100 px-1 lg:px-2">{totalInProgress}</span></Link>
      <Link to="/completed">{t('Completed')}: <span className="rounded bg-gray-100 px-1 lg:px-2">{totalCompleted}</span></Link>
      <Link to="/add-todo">{t('+ New Task')}</Link>
      <button onClick={() => changeLanguage(currentLanguage === 'en' ? 'fr' : 'en')} className="ml-2 px-3">
        {currentLanguage === 'en' ? 'FR' : 'EN'}
      </button>
    </div>
  );
};

export default Nav;
