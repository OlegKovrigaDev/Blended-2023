import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { useUpdateCommentMutation } from "../../redux/commentApi";
import styles from "./Button.module.css";

export const Button = ({ children, counter, role = "thumbsUp", id }) => {
  const variants = {
    [styles.thumbsUp]: role === "thumbsUp",
    [styles.thumbsDown]: role === "thumbsDown",
  };

  const [fetchUpdateComment, { isLoading, isError }] =
    useUpdateCommentMutation();

  const onBtnHandleClick = () => {
    fetchUpdateComment({ id, [role]: counter + 1 });
  };

  return (
    <button
      className={classNames(styles.button, variants)}
      type="button"
      counter={counter}
      onClick={onBtnHandleClick}
      id={id}
    >
      {children}

      <span className={styles.counter}>
        <span className={classNames({ [styles.ping]: isLoading })}></span>
        {counter}
      </span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  counter: PropTypes.number.isRequired,
  role: PropTypes.string,
  id: PropTypes.string.isRequired,
};
