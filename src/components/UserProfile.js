import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Avatar, Button } from 'antd';
import Link from 'next/link';
import { logout } from '../actions/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logout());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          <Link href={`/user/${me.id}`}>
            게시물
            <br />
            {me.Posts.length}
          </Link>
        </div>,
        <div key="followings">
          <Link href="/profile">
            팔로잉
            <br />
            {me.Followings.length}
          </Link>
        </div>,
        <div key="followings">
          <Link href="/profile">
            팔로워
            <br />
            {me.Followers.length}
          </Link>
        </div>,
      ]}
    >
      <Card.Meta
        avatar={
          <Link href={`/user/${me.id}`} prefetch={false}>
            <Avatar>{me.nickname[0]}</Avatar>
          </Link>
        }
        title={me.nickname}
      />
      <Button className="mt-4" onClick={onLogOut} loading={logOutLoading}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
