export const fetchExercises = async () => {
    const response = await fetch('https://6661452a63e6a0189fe91108.mockapi.io/api/Gym/categoria');
    const data = await response.json();
    return data;
  };
  