import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000' // Replace with your actual base URL

class RegisterService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: BASE_URL,
      headers: {
        // Add headers if required (e.g., authorization tokens)
        'Content-Type': 'application/json'
      }
    })
  }

  async registerUser(userData) {
    try {
      const response = await this.apiClient.post('/register', userData)
      return response.data // Modify based on your API response structure
    } catch (error) {
      // Handle errors (e.g., show a message or log the error)
      throw new Error('Failed to register user')
    }
  }

  // Other registration-related methods (e.g., registerCompany, verifyEmail, etc.)
}

export default new RegisterService()
