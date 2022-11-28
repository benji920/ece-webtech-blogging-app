export const profile = {
    username: 'ben',
    email: 'ben@gmail.com',
    
  }
  
  export default function handler(req, res) {
    res.status(200).json(profile)
  }
  
