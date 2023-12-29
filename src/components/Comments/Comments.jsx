import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { Grid } from '../Grid/Grid';
// import { comments } from '../../helpers/comments';
import { useGetCommentsQuery } from '../../redux/commentApi';
import { Loader } from '../Loader/Loader';

export const Comments = () => {
  const { data: comments, isFetching, isError } = useGetCommentsQuery();
  console.log(comments);

  return (
    <Grid>
      {isFetching && <Loader />}
      {comments &&
        comments.map(comment => <Comment key={comment.id} {...comment} />)}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
