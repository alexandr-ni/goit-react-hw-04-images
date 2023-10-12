import { ButtonOnLoadMore } from './Button.styled';

export const Button = ({ loadMore }) => {
  return <ButtonOnLoadMore onClick={loadMore}>Load More</ButtonOnLoadMore>;
};
