import React from 'react';
import {
    Wrapper,
    UserDataDescription,
    UserDataApproved,
    Icon1,
    Icon2,
    UserName,
    ApprovedDescription,
} from './UserData.style';
import { BsPerson, BsCheckCircle } from 'react-icons/bs';
import capitalizeFirstLetter from 'helpers/capitalizeFirstLetter';
import { CommentInterface } from 'interfaces/Comments.interfaces';

interface UserDataProps {
    comment: CommentInterface;
}

// const initCommentValues = {
//     likes: {
//         up: 0,
//         down: 0,
//     },
//     content: {
//         rating: 0,
//         description: 'string',
//     },
//     image: {
//         added: false,
//         images: [''],
//     },
//     userId: '', // there could be error
//     userName: '',
//     date: '',
//     confirmed: false,
//     _id: '',
//     usersWhoLiked: [],
// };

const UserData = ({ comment }: UserDataProps) => {
    return (
        <Wrapper>
            <UserDataDescription>
                <Icon1>
                    <BsPerson />
                </Icon1>
                <UserName>{capitalizeFirstLetter(comment.userName)}</UserName>
            </UserDataDescription>
            <UserDataApproved>
                {comment.confirmed && (
                    <>
                        <Icon2>
                            <BsCheckCircle />
                        </Icon2>
                        <ApprovedDescription>Potwierdzony zakup</ApprovedDescription>
                    </>
                )}
            </UserDataApproved>
        </Wrapper>
    );
};

export default UserData;
