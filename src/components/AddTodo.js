import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const AddTodo = ({ onAddTodo }) => {
    const [text, setText] = useState("");
    const { t, i18n } = useTranslation();
  
    const [, setCurrentLanguage] = useState(i18n.language); 
    
    useEffect(() => {
      setCurrentLanguage(i18n.language);
    }, [i18n.language]);
  
    const handleAddTodoClick = () => {
      if (text.trim()) {
        onAddTodo(text); 
        setText(""); 
      }}

  return (
    <div className="flex justify-center gap-4 ">
      <input className="p-8 my-4 rounded"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={t('Add a todo...')}
      />
      <button className="bg-white px-4 my-4  rounded-lg" onClick={handleAddTodoClick}>{t('Add')}</button>
    </div>
  );
};

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodo;
