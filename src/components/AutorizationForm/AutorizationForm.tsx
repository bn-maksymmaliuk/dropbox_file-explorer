import { 
  Alert,
  AlertIcon,
  AlertTitle,
  Box, 
  Button, 
  Center, 
  FormControl, 
  FormErrorMessage, 
  FormHelperText, 
  FormLabel, 
  Input, 
  Stack
} from "@chakra-ui/react";
import { Dropbox } from "dropbox";
import { 
  FC, 
  useEffect, 
  useState 
} from "react";

interface Props {
  onLogin: (token: string) => void;
}

export const AutorizationForm: FC<Props> = ({ onLogin }) => {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tokenError, setTokenError] = useState('')
  const [lengthError, setLengthError] = useState(false);

  const userToken = window.sessionStorage.getItem('token');

  useEffect(() => {
    if (userToken) {
      onLogin(userToken);
    }
  }, [onLogin, userToken])

  const dbx = new Dropbox({ accessToken: token });

  const handleChangeToken = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value)
    setLengthError(false);
    setTokenError('');
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!token.length) {
      setLengthError(true)
      setIsLoading(false)
      return
    }
    
    setIsLoading(true);

    try {
      await dbx.filesListFolder({ path: '' });

      onLogin(token);
      window.sessionStorage.setItem('token', token);
    } catch (error) {
      setTokenError('Token is not valid, try again');

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Center paddingTop='50px'>
      <Box maxW='600px'>
        <form onSubmit={handleSubmit}>
          <FormControl
            isInvalid={lengthError}
            w='440px'
          >
            <FormLabel fontSize='28px' textAlign='center'>
              Please enter your API token
            </FormLabel>

            <Input
              type="text" 
              name="token" 
              placeholder="Enter your token here..."
              onChange={handleChangeToken}
              mb='5px'
            />

            {lengthError && (
              <FormErrorMessage>Token is requiered</FormErrorMessage>
            )}

            {tokenError && (
              <Alert status='error'>
                <AlertIcon />
                <AlertTitle>{tokenError}</AlertTitle>
              </Alert>
            )}

            <FormHelperText
              mb='20px' 
              fontSize='18px' 
              fontWeight='400'
              textAlign='center'
            >
              In order to access the files of your Dropbox account, go to{" "}

              <a style={{textDecoration: 'underline', color: '#1976d2'}}
                href="https://dropbox.github.io/dropbox-api-v2-explorer/#files_list_folder"
              >
                API Explorer
              </a>

              {" "}you can click "Get token" after which you can enter it in the field above
            </FormHelperText>

            <Stack 
              direction='row' 
              spacing={4}
              justifyContent="center"
            >
              <Button
                isLoading={isLoading}
                type="submit" 
                colorScheme='blue'
                width='300px'
                size={'lg'}
              >
                Submit
              </Button>
            </Stack>
          </FormControl>
        </form>
      </Box>
    </Center>
  );
}