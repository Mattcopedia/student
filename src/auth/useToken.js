import { useState } from 'react';

export const useToken = () => {
    const [token, setTokenInternal] = useState(() => {
        return localStorage.getItem('customtoken');
    });

    const setToken = newToken => {
        localStorage.setItem('customtoken', JSON.stringify(newToken.data.token))
        setTokenInternal(newToken);
    }
  
    return [token, setToken]; 
}