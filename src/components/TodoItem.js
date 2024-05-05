import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const TodoItem = ({ todo, onRemove, onEdit, onChangeStatus }) => {
  const { t, i18n } = useTranslation();
  
  const [, setCurrentLanguage] = useState(i18n.language); 
  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);
  let statusColorClass;
  let statusTextColorClass;
  
  switch (todo.status) {
    case 'To do':
      statusColorClass = 'bg-orange-100';
      statusTextColorClass = 'text-orange-600';
      break;
    case 'In Progress':
      statusColorClass = 'bg-blue-100';
      statusTextColorClass = 'text-blue-600';
      break;
    case 'Completed':
      statusColorClass = 'bg-green-100';
      statusTextColorClass = 'text-green-600';
      break;
    default:
      statusColorClass = 'bg-gray-600';
      statusTextColorClass = 'text-white';
  }

  return (
    <li className="bg-white flex flex-col gap-4 p-2 rounded-lg " key={todo.id}>
      <p className={`px-2 py-1 rounded-lg w-1/3 ${statusColorClass} ${statusTextColorClass}`}>{t(todo.status)}</p>
      <h4 className=" font-semibold">{t(todo.text)}</h4>
      <hr className="bg-slate-300 h-0.5 w-auto" />
      <div className="flex gap-2">
        <button className="rounded-full text-red-600 bg-red-100 px-1 " onClick={() => onRemove(todo.id)}> <FontAwesomeIcon icon={faTrash} /></button>
        <button className="rounded-full text-orange-600 bg-orange-100  px-1" onClick={() => onEdit(todo.id, todo.text)}><FontAwesomeIcon icon={faPenToSquare} /></button>
        <button className="rounded-full text-green-600 bg-green-100 px-1" onClick={() => onChangeStatus(todo.id, todo.status)}><FontAwesomeIcon icon={faClosedCaptioning} /></button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
};

export default TodoItem;
