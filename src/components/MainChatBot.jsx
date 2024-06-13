import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import WikiComponent from './WikiComponent';

const DiseñoChat = {
  background: '#f5f8fb',
  fontFamily: 'Arial, sans-serif',
  headerBgColor: '#00bcd4',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#00bcd4',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const MainChatBot = () => {
  const validarNombre = (value) => {
    if (value.length > 15) {
      return 'El nombre debe tener máximo 15 caracteres.';
    }

    if (/\d/.test(value)) {
      return 'El nombre no puede contener números.';
    }

    if (value.charAt(0) !== value.charAt(0).toUpperCase()) {
      return 'El nombre debe comenzar con mayúscula.';
    }

    return true;
  };

  return (
    <div>
      <h1>MainChatBot</h1>

      <ThemeProvider theme={DiseñoChat}>
        <ChatBot
          steps={[
            { id: 'intro', message: 'Bienvenido a mi ChatBot. ¿Cómo te llamas?', trigger: '1' },
            { id: '1', user: true, validator: validarNombre, trigger: '2' },
            { id: '2', message: 'Encantado de conocerte {previousValue}', trigger: '3' },
            { id: '3', message: '¿Qué necesitas?', trigger: 'select' },
            { 
              id: 'select', 
              options: [
                { value: 'y', label: 'Ayuda con React', trigger: 'ayudareact' },
                { value: 'n', label: 'Aprender qué es programación', trigger: 'programacion' },
                { value: 't', label: 'Nada más', trigger: 'finCHAT' },
              ],
            },
            { id: 'ayudareact', message: "¿Qué tipo de ayuda?", trigger: 'selectReact' },
            { 
              id: 'selectReact', 
              options: [
                { value: 'Inicio', label: '¿Qué es?', trigger: 'inicioreact' },
                { value: 'Características', label: 'Características: JSX, ciclos de vida...', trigger: 'caracteristicasreact' },
                { value: 'Hooks', label: 'Hooks', trigger: 'hookreact' },
              ],
            },
            { id: 'inicioreact', message: 'Aquí tienes información sobre ¿Qué es React?', trigger: '7' },
            { id: 'caracteristicasreact', message: 'Aquí tienes información sobre las características de React', trigger: '7' },
            { id: 'hookreact', message: 'Aquí tienes información sobre los Hooks de React', trigger: '7' },
            { id: 'programacion', message: '¡Claro, aquí tienes un enlace donde ver qué es la programación!', trigger: '7' },
            { id: '7', component: <WikiComponent />, asMessage: true, trigger: 'preguntaVuelta' },
            { id: 'preguntaVuelta', message: '¿Necesitas algo más?', trigger: '8' },
            { 
              id: '8', 
              options: [
                { value: 'yes', label: 'Sí, necesito más ayuda', trigger: '3' },
                { value: 'no', label: 'No, gracias', trigger: 'finCHAT' },
              ],
            },
            { id: 'finCHAT', message: 'Estupendo, ¡ten un buen día!', end: true },
          ]}
        />
      </ThemeProvider>
    </div>
  );
}

export default MainChatBot;
