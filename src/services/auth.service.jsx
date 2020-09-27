export const removeStorageLogin = () =>{
  localStorage.removeItem('id');
  localStorage.removeItem('email');
  localStorage.removeItem('userType');
}

export const getStorageLogin = () => {
  const userId = localStorage.getItem('id');
  const userEmail = localStorage.getItem('email');
  const userType = localStorage.getItem('userType');
  return {userId, userEmail, userType}
}

export const setStorageLogin = (userData) => {
  localStorage.setItem('id', userData.data.id);
  localStorage.setItem('email', userData.data.email);
  localStorage.setItem('userType', userData.data.userType);
}
