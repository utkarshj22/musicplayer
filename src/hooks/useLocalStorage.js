const useLocalStorage = (key, value) => {
  function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }

  function getLocalStorage(key) {
    return localStorage.getItem(key);
  }

  return { setLocalStorage, getLocalStorage };
};

export default useLocalStorage;
