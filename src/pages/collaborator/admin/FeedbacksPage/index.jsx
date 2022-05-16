import { useAuth } from "../../../../providers/user/user";

import Menu from "../../../../components/Menu";
import {
  BoxContent,
  CommentHeader,
  Container,
  Details,
  Feedback,
  Subtitle,
  Text,
  Title,
} from "./styles";

import { Redirect } from "react-router-dom";

const FeedbacksPage = () => {
  const { token } = useAuth();

  //Exemplo de feedbacks
  const feedbacks = [
    {
      author: "Lorem Ipsum",
      createdAt: new Date().toLocaleString("pt-BR"),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis turpis, consectetur a ultrices pharetra, tristique tristique sem. Vestibulum facilisis facilisis est at tempor. Morbi lobortis hendrerit tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis turpis, consectetur a ultrices pharetra, tristique tristique sem. Vestibulum facilisis facilisis est at tempor. Morbi lobortis hendrerit tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis turpis, consectetur a ultrices pharetra, tristique tristique sem. Vestibulum facilisis facilisis est at tempor. Morbi lobortis hendrerit tempus. ",
    },
    {
      author: "Lorem Ipsum",
      createdAt: new Date().toLocaleString("pt-BR"),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis turpis, consectetur a ultrices pharetra, tristique tristique sem. Vestibulum facilisis facilisis est at tempor. Morbi lobortis hendrerit tempus. ",
    },
    {
      author: "Lorem Ipsum",
      createdAt: new Date().toLocaleString("pt-BR"),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis turpis, consectetur a ultrices pharetra, tristique tristique sem. Vestibulum facilisis facilisis est at tempor. Morbi lobortis hendrerit tempus. ",
    },
    {
      author: "Lorem Ipsum",
      createdAt: new Date().toLocaleString("pt-BR"),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis turpis, consectetur a ultrices pharetra, tristique tristique sem. Vestibulum facilisis facilisis est at tempor. Morbi lobortis hendrerit tempus. ",
    },
  ];

  if (!token) {
    <Redirect to="/" />;
  }

  return (
    <Container>
      <Menu />
      <BoxContent>
        <Title>Feedbacks</Title>
        {feedbacks.map((comment, index) => (
          <Feedback key={index}>
            <CommentHeader>
              <Subtitle>{comment.author}</Subtitle>
              <Details>{comment.createdAt}</Details>
            </CommentHeader>
            <Text>{comment.content}</Text>
          </Feedback>
        ))}
      </BoxContent>
    </Container>
  );
};
export default FeedbacksPage;
