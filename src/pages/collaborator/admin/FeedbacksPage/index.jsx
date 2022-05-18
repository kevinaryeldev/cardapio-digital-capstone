import { useAuth } from "../../../../providers/user/user";
import { useFeedbacks } from "../../../../providers/feedbacks/feedbacks";

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
  const { feedbacksList } = useFeedbacks();

  if (!token) {
    <Redirect to="/" />;
  }

  return (
    <Container>
      <Menu />
      <BoxContent>
        <Title>Feedbacks</Title>
        {feedbacksList.map((comment, index) => (
          <Feedback key={index}>
            <CommentHeader>
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
