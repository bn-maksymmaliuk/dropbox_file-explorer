import { Container } from "@chakra-ui/react";
import { FC } from "react";
import notFoundPicture from '../../assets/404.png'

export const NotFoundPage: FC = () => (
  <Container w='100%' h='100%'>
    <img src={notFoundPicture} />
  </Container>
)