import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'customer';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'farmer' | 'customer') => Promise<boolean>;
  register: (name: string, email: string, password: string, role: 'farmer' | 'customer') => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role: 'farmer' | 'customer'): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful login
    setUser({
      id: '1',
      name: email.split('@')[0],
      email,
      role
    });
    return true;
  };

  const register = async (name: string, email: string, password: string, role: 'farmer' | 'customer'): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful registration
    setUser({
      id: '1',
      name,
      email,
      role
    });
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};