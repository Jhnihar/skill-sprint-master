export interface User {
  id: string;
  name: string;
  email: string;
}

export const login = (email: string, password: string): User | null => {
  // Fake login - accept any credentials
  if (email && password) {
    const user: User = {
      id: `user_${Date.now()}`,
      name: email.split('@')[0],
      email,
    };
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }
  return null;
};

export const signup = (name: string, email: string, password: string): User | null => {
  if (name && email && password) {
    const user: User = {
      id: `user_${Date.now()}`,
      name,
      email,
    };
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }
  return null;
};

export const logout = (): void => {
  localStorage.removeItem('user');
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }
  return null;
};
