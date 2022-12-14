import { useState, useEffect } from 'react';
import { useToken } from './useToken';

export const useUser = () => {
    const [token] = useToken();

    const getPayloadFromToken = token => {
   
        const encodedPayload = token
        // const encodedPayload = token.split('.')[1];   
        // return JSON.parse(atob(encodedPayload)); 
        return JSON.parse(encodedPayload);     
    }

    const [user, setUser] = useState(() => {
        if (!token) return null;
        return getPayloadFromToken(token);
    });

    useEffect(() => {
        if (!token) {
            setUser(null);
        } else {
            setUser(getPayloadFromToken(token));
        }
    }, [token]);
     console.log(user)
    return user;
}