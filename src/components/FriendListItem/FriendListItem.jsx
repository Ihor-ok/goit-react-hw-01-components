import PropTypes from 'prop-types';
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name,  isOnline }) {

    return (
        <li className={css.item}>
            <span className={isOnline ? css.status_online : css.status_ofline}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )

 }

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,

}