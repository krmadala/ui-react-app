import axios from 'axios';
const API_BASE_URL = "http://localhost:3000/api";

export interface UserData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
   
     address: Address;
    isactive: boolean;
    usertype: Number;
  }
export interface Address {
    street: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
  }
  export async function registerUser(userData: UserData) {
    try {
        userData.isactive = true; // Set isactive to true by default
        userData.usertype = 2; // Set usertype to "user" by default
      const response = await axios.post(`${API_BASE_URL}/users`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  export async function loginUser(email: string, password: string) {
    try {
      const response = await axios.post(`${API_BASE_URL}/users/login`, { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

export async function getUserProfile(userId: string) {
        try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
        return response.data;
        } catch (error) {
        throw error;
        }
    }

 export async function getAllUsers() {
        try {
        const response = await axios.get(`${API_BASE_URL}/users`);
        return response.data;
        } catch (error) {
        throw error;
        }
    }