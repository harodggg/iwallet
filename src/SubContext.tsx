import React from 'react';



const initialState = {
    keyring: null,

}

interface state {

}
interface action {

}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "connecting":
            return { ...state }
        default:
            console.log("ll");

    }

}

const connect = (state: any, dispatch: any) => {

}


export { }