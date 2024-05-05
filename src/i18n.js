import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
        "All Tasks": "All Tasks",
       " To do": "To do",
       "In Progress": "In Progress",
       "Completed": "Completed",
       "+ New Taskk": "+ New Task",
       "Add a todo...":"Add a todo...",
       "Add":"Add"
    }
  },
  fr: {
    translation: {
      "All Tasks": "Toutes les tâches",
     "To do": "À faire",
     "In Progress": "En cours",
     "Completed": "Terminé",
     "+ New Task": "+ Ajouter une nouvelle tâche",
     "Add a todo...":"Ajouter une tâche...",
     "Add":"Ajouter"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
