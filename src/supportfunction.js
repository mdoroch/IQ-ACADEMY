import React from "react";

export const saveToken = (data) => {
    localStorage.setItem('token', data)
}

export const giveToken = () => {
    return (
        localStorage.getItem('token')
    )
}

export const saveName = (data) => {
    localStorage.setItem('name', data)
}
export const giveName = (data) => {
    localStorage.getItem('name')
}