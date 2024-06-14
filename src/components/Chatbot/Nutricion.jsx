import { useState, useRef, useEffect } from "react";
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import "./Chat.style.css";

const apiKey = import.meta.env.VITE_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
];

const generationConfig = {
  stopSequences: ["red"],
  maxOutputTokens: 100,
  temperature: 0.5,
  topP: 0.1,
  topK: 16,
};

const Nutricion = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const bottomRef = useRef(null);
  const [message, setMessage] = useState("Ingrese su requerimiento");
  const [isLoading, setLoading] = useState(false);

  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    generationConfig,
    safetySettings,
  });

  const chat = model.startChat({
    history: [],
  });

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const addMessageToHistory = (role, message) => {
    setChatHistory((prevHistory) => [...prevHistory, { role, parts: message }]);
  };

  const fetchData = async () => {
    if (!isNutritionRelated(message)) {
      addMessageToHistory("model", "Lo siento, solo puedo responder preguntas relacionadas con nutrición.");
      return;
    }
    setLoading(true);
    addMessageToHistory("user", message);
    const result = await chat.sendMessage(message);
    const response = await result.response;

    const text = response.text();
    addMessageToHistory(
      "model",
      text
        .replace(/\n/g, "<br />")
        .replace(/"/g, "")
        .replace(/\(([^)]+)\)/g, "<h3>$1</h3>") 
    );
    setMessage("");
    setLoading(false);
  };

  const isNutritionRelated = (message) => {
    const nutritionKeywords = [
      "nutrición", "nutricion", "alimentación", "dietas", "comida", "nutrientes",
      "calorías", "proteínas", "carbohidratos", "grasas", "vitaminas",
      "minerales", "salud", "peso", "alimenticio", "dieta", "comer","Saludo"
    ];
    return nutritionKeywords.some((keyword) =>
      message.toLowerCase().includes(keyword)
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleSetMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="rajdhani-bold">Nutricion</h1>
      <p className="rajdhani-light">
        Hola soy la nutria nutriologa
      </p>

      <div className="chat-container">
        {chatHistory &&
          chatHistory?.map(({ parts, role }, index) => (
            <div key={index} className={`chat-response ${role}`}>
              <div className="role">
                {role === "user" ? <h2>Usuario</h2> : <h2>Nutria:</h2>}
                {}
              </div>
              <div
                className="chat-message"
                dangerouslySetInnerHTML={{ __html: parts }}
              />
            </div>
          ))}
      </div>

      <form className="chat-form" onSubmit={handleSubmit}>
        <textarea
          className="chat-form-text"
          value={message}
          onChange={handleSetMessage}
          placeholder="Ingresa tu requerimiento..."
        />
        <button className="chat-form-button" type="submit" disabled={isLoading}>
          {isLoading ? "Cargando..." : "ENVIAR"}
        </button>
      </form>

      <div ref={bottomRef} />
    </div>
  );
};

export default Nutricion;
