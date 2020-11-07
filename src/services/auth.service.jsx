export const removeStorageLogin = () =>{
  localStorage.removeItem('id');
  localStorage.removeItem('userType');
  localStorage.removeItem('token');
  localStorage.removeItem('name');
}

export const getStorageLogin = () => {
  const userId = localStorage.getItem('id');
  const userType = localStorage.getItem('userType');
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  return {userId, userType, token, name}
}

export const setStorageLogin = (userData) => {
  localStorage.setItem('id', userData.idUsuario);
  localStorage.setItem('userType', userData.tipoUsuario);
  localStorage.setItem('token', userData.token);
  localStorage.setItem('name', userData.nome);
}

export const auth = () => {
  return {
    auth: {
      username: 'guymelhorquenaruto',
      password: 'avlisoxielanimdamta'
    }
  }
}
