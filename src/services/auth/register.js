import axios from 'axios';

const BASE_URL = 'http://192.168.88.14:8000/api/';

class RegisterService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Base_URL:', BASE_URL);
  }

  async registerUser(userData) {
    try {
      const response = await this.apiClient.post('/register', userData);
      return response.data;
    } catch (error) {
      console.error('Error during registration:', error);
      throw new Error('Failed to register user');
    }
  }

  async loginUser(loginData) {
    try {
      const response = await this.apiClient.post('/login', loginData);
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw new Error('Failed to login user');
    }
  }
}

export default new RegisterService();
