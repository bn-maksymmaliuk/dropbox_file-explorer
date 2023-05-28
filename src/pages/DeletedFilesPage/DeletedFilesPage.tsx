import { Container, Heading } from "@chakra-ui/react";
import underDevelopment from '../../assets/underDevelopment.png'

export const DeletedFilesPage = () => (
  <Container w='100%' h='100%'>
    <img src={underDevelopment} />
    <Heading>Page is under development</Heading>
  </Container>
)