import axios from 'axios'

const BASE_URL = 'http://192.168.88.14:8000/api/' 

class RegisterService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json'
    
      }
    })
    console.log('Base_URL:',BASE_URL);
  }

  async registerUser(userData) {
    try {
      const response = await this.apiClient.post('/register', userData)
      return response.data 
    } catch (error) {
        console.error('Error during registration:', error);
  throw new Error('Failed to register user');
    }
  }

}

export default new RegisterService()
