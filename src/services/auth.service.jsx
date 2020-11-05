export const removeStorageLogin = () =>{
  localStorage.removeItem('id');
  localStorage.removeItem('userType');
  localStorage.removeItem('token');
}

export const getStorageLogin = () => {
  const userId = localStorage.getItem('id');
  const userType = localStorage.getItem('userType');
  const token = localStorage.getItem('token');
  return {userId, userType, token}
}

export const setStorageLogin = (userData) => {
  localStorage.setItem('id', userData.idUsuario);
  localStorage.setItem('userType', userData.tipoUsuario);
  localStorage.setItem('token', userData.token);
}

export const auth = () => {
  return {
    auth: {
      username: 'guymelhorquenaruto',
      password: 'avlisoxielanimdamta'
    }
  }
}
