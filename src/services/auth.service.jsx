export const removeStorageLogin = () =>{
  localStorage.removeItem('id');
  localStorage.removeItem('userType');
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  localStorage.removeItem('businessId');
}

export const getStorageLogin = () => {
  const userId = localStorage.getItem('id');
  const userType = localStorage.getItem('userType');
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  const businessId = localStorage.getItem('businessId');

  return {userId, userType, token, name, businessId}
}

export const setStorageLogin = (userData) => {
  localStorage.setItem('id', userData.idUsuario);
  localStorage.setItem('userType', userData.tipoUsuario);
  localStorage.setItem('businessId', userData.empresa);
  localStorage.setItem('token', userData.token);
  localStorage.setItem('name', userData.nome);
}

export const setUserLogin = (userName) => {
  localStorage.setItem('name', userName);
}

export const auth = () => {
  return {
    auth: {
      username: 'guymelhorquenaruto',
      password: 'avlisoxielanimdamta'
    }
  }
}
