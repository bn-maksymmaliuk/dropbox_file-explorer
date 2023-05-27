import { 
  FC, 
  createContext, 
  useState 
} from 'react';
import { AutorizationForm } from '../components/AutorizationForm/AutorizationForm';

export const AuthContext = createContext('');

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [authToken, setAuthToken] = useState('');

  if (!authToken) {
    return <AutorizationForm onLogin={setAuthToken} />
  }

  return (
    <AuthContext.Provider value={authToken}>
      {children}
    </AuthContext.Provider>
  );
};