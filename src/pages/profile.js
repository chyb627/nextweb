import React, { useEffect } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';

import NicknameEditForm from '../components/NicknameEditForm';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';

const Profile = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isLoggedIn) {
      Router.replace('/');
    }
  }, [isLoggedIn]);

  const followerList = [{ nickName: '차영빈' }, { nickName: '영빈차' }, { nickName: '빈차' }];
  const followingList = [{ nickName: '차영빈' }, { nickName: '영빈차' }, { nickName: '빈차' }];

  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList header="팔로잉 목록" data={followerList} />
      <FollowList header="팔로워 목록" data={followingList} />
    </AppLayout>
  );
};

export default Profile;
