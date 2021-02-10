/* eslint-disable prettier/prettier */
import React, { useContext } from 'react'
import styles from '../Style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { ActionContext } from "./ActionContext"

// const handleCancel = useContext(ActionContext)
const CommentStructure = ({ i, reply }) => {
    const actions = useContext(ActionContext)
    console.log(actions.handleReply)
    return (
        <div className={styles.userInfo} style={reply && { marginLeft: 15 }} >
            <div>{i.text}</div>
            <div className={styles.commentsTwo}>
                <div>
                    <img
                        src={i.avatarUrl}
                        style={{ width: 20, height: 20, borderRadius: 20 / 2 }}
                        alt='userIcon'
                    />
                </div>
                <div className={styles.fullName}>{i.fullName} </div>
                <div>
                    <button className={styles.replyBtn} onClick={actions.handleReply}>
                        {' '}
                        <FontAwesomeIcon icon={faReply} size='1x' color='gray' /> Reply
                     </button>
                </div>
            </div>
        </div>
    )
}

const DisplayComments = ({ comments }) => {
    return (
        <div >
            {comments.map((i, index) => (
                <div key={i.userId} >
                    <CommentStructure i={i} />
                    <div className={styles.replySection}>
                        {i.replies && i.replies.map((i, index) => <CommentStructure i={i} key={i.userId} reply />)}
                    </div>
                </div>
            ))}
        </div>
    )
}


export default DisplayComments
