export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const TOGGLE = 'TOGGLE';

export const add = text => {
    return { type: ADD, payload: text }
}

export const remove = id => {
    return { type: REMOVE, payload: id }
}

export const toggle = id => {
    return { type: TOGGLE, payload: id }
}