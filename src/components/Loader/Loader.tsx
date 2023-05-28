import { 
  Center, 
  Container, 
  Spinner 
} from "@chakra-ui/react";

export const Loader = () => (
  <Container 
    height='70%' 
    display='flex' 
    justifyContent='center'
    >
    <Center>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Center>
  </Container> 
)