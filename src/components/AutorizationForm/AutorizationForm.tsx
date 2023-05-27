import { Spinner } from "@chakra-ui/react";
import { Dropbox } from "dropbox";
import { FC, useEffect, useState } from "react";

interface Props {
  onLogin: (token: string) => void;
}

export const AutorizationForm: FC<Props> = ({ onLogin }) => {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const userToken = window.localStorage.getItem('token');

  useEffect(() => {
    if (userToken) {
      onLogin(userToken);
    }
  }, [onLogin, userToken])

  if (userToken) {
    return null;
  }

  const dbx = new Dropbox({ accessToken: token });

  const handleChangeToken = (event: React.ChangeEvent<HTMLInputElement>) => (
    setToken(event.target.value)
  )

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (!token.length) {
      throw new Error('Token field is empty');
    }

    try {
      await dbx.filesListFolder({ path: '' });

      onLogin(token);
      window.localStorage.setItem('token', token);
    } catch (error) {
      console.log(error);
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    {isLoading 
      ? (
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      ) 
      : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="inputField">Введите текст:</label>
        
          <input 
            type="text" 
            id="inputField" 
            name="inputField" 
            onChange={handleChangeToken}
            value={token}
            required 
          />

          <br/>

          <button type="submit">Submit</button>
        </form>
      )
    } 
    </>
    
  )
}