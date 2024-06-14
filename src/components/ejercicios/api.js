export const fetchExercises = async () => {
  const response = await fetch(
    "https://6661452a63e6a0189fe91108.mockapi.io/api/Gym/categoria"
  );
  const data = await response.json();
  return data;
};

export const fetchNotis = async () => {
  const resnotis = await fetch(
    "https://66684a7bf53957909ff76063.mockapi.io/noti/notification"
  );
  const datanot = await resnotis.json();
  return datanot;
};

export const fetchUsers = async () => {
  const resuser = await fetch(
    "https://66684a7bf53957909ff76063.mockapi.io/noti/users"
  );
  const dataUser = await resuser.json();
  return dataUser;
};
