import {API} from '../Backend'
import React from 'react';

export const SearchUser = (text)=> {
    console.log(text);
    return fetch(`${API}/users?count=6&q=${text}`, {
        method: "GET",
    }).then(response => response.json())
    .catch(err=> console.log(err))
}

export const GetUser = (userid)=> {
    console.log(userid);
    return fetch(`${API}/posts?count=6&userid=${userid}`, {
        method: "GET",
    }).then(response => response.json())
    .catch(err=> console.log(err))
}
export const GetHashTags = (text)=> {
    console.log(text.substring(1));
    return fetch(`${API}/hashtags?q=${text.substring(1)}`, {
        method: 'GET'
    }).then(response => response.json())
    .catch(err=> console.log(err))
}