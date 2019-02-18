import React  from 'react';

const CommentDetail = ({img, name, text, date}) => (
    <div className="comment">
        <a href='/' className="avatar">
            <img alt="avatar" src={img} height='100' width='100' />
        </a>
        <div className="content">
            <a href='/' className="author">{name}</a>
            <div className="metadata">
                <span className="date">{date}</span>
            </div>
            <div className="text">{text}</div>
            <div className="actions">
                <a href='/' className="reply">Reply</a>
            </div>
        </div>
    </div>
);

export default CommentDetail;