import axios from 'axios'
require('dotenv').config()

const baseURL = `${process.env.REACT_APP_BASE_URL}`
const retrieveTokenURL = `${process.env.REACT_APP_RETRIVE_SESSION_TOKEN_URL}`
const resetTokenURL = `${process.env.REACT_APP_RESET_SESSION_TOKEN_URL}`
var token: String | null

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export async function getToken(){
  try {
    const response = await axios.get(`${retrieveTokenURL}`);
    console.log(response);
    localStorage.setItem('token', response.data.token)
    token = localStorage.getItem('token')
  } catch (error) {
    console.error(error);
    return error
  }
}

export async function resetToken(){
  try {
    const response = await axios.get(`${resetTokenURL}${token}`);
    console.log(response);
    localStorage.setItem('token', response.data.token)
    token = localStorage.getItem('token')
  } catch (error) {
    console.error(error);
    return error
  }
}

export async function getQuestions(amount: number){
  try {
    const response = await axios.get(`${baseURL}${amount}&token=${token}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

