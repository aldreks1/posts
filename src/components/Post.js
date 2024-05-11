// Post.js
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  editPost,
  deletePost,
  addComment,
  deleteComment,
} from "../actions/actions";
import Modal from "./Modal";
import ResizableTextarea from "./ResizableTextarea";

const Post = ({ post, editPost, deletePost, addComment, deleteComment }) => {
  const [newText, setNewText] = useState(post.title);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  // const [isControrlsVisible, setIsControlsVisible] = useState(true);
  const [newCommentText, setNewCommentText] = useState("");

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleSave = () => {
    editPost(post.id, newText);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleComment = () => {
    if (newCommentText.trim() !== "") {
      addComment(post.id, { id: Date.now(), text: newCommentText });
      setNewCommentText("");
    }
  };

  const handleToggleComments = () => {
    setIsCommentsVisible(!isCommentsVisible);
  };

  return (
    <div className="post primary-wrapper">
      <div className="primary-text post__title">{post.title}</div>
      {!isCommentsVisible && (
        <div className="post__controls">
          <div className="post__controls-comments">
            <button className="primary-btn" onClick={handleToggleComments}>
              {isCommentsVisible ? "Спрятать" : "Комментарии"}
            </button>
            <p>Количество комментарий - {post.comments.length}</p>
          </div>
          <div className="post__controls-edit">
            <button className="primary-btn" onClick={handleEdit}>
              Изменить
            </button>
            <button
              className="secondary-btn"
              onClick={() => deletePost(post.id)}
            >
              Удалить
            </button>
          </div>
        </div>
      )}
      {/* Модальное окно для редактирования поста */}
      <Modal isOpen={isModalOpen}>
        <ResizableTextarea
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="modal-textarea"
        />
        <div className="modal-buttons">
          <button className="primary-btn" onClick={handleSave}>
            Подтвердить
          </button>
          <button className="secondary-btn" onClick={handleCloseModal}>
            Закрыть
          </button>
        </div>
      </Modal>

      {/* Комментарии */}
      {isCommentsVisible && (
        <div className="comments">
          <div className="comment">
            <ResizableTextarea
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              placeholder="Новый комментарий ..."
              className="comment-textarea"
            />
            <button className="primary-btn" onClick={handleComment}>
              Добавить
            </button>
          </div>
          {post.comments.map((comment) => (
            <div key={comment.id} className="comment">
              <div className="primary-wrapper comment-text">{comment.text}</div>
              <button
                className="secondary-btn"
                onClick={() => deleteComment(post.id, comment.id)}
              >
                Удалить
              </button>
            </div>
          ))}
          <button className="primary-btn" onClick={handleToggleComments}>
            {isCommentsVisible ? "Спрятать" : "Комментарии"}
          </button>
        </div>
      )}
    </div>
  );
};

export default connect(null, {
  editPost,
  deletePost,
  addComment,
  deleteComment,
})(Post);
