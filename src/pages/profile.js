import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import axios from 'axios';
import useSWR from 'swr';

import Loading from '../components/Loading';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import { loadMyInfo } from '../actions/user';
import wrapper from '../store/configureStore';

const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);

const Profile = () => {
  const [followingsLimit, setFollowingsLimit] = useState(3);
  const [followersLimit, setFollowersLimit] = useState(3);
  const { data: followingsData, error: followingError } = useSWR(
    `http://localhost:3065/user/followings?limit=${followingsLimit}`,
    fetcher,
  );
  const { data: followersData, error: followerError } = useSWR(
    `http://localhost:3065/user/followers?limit=${followersLimit}`,
    fetcher,
  );
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);

  const loadMoreFollowers = useCallback(() => {
    setFollowersLimit((prev) => prev + 3);
  }, []);

  const loadMoreFollowings = useCallback(() => {
    setFollowingsLimit((prev) => prev + 3);
  }, []);

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return '팔로잉/팔로워 로딩 중 에러가 발생했습니다.';
  }

  if (!me) {
    return <Loading />;
  }
  return (
    <>
      <AppLayout>
        <NicknameEditForm />
        <FollowList
          header="팔로잉"
          data={followingsData}
          onClickMore={loadMoreFollowings}
          loading={!followingError && !followingsData}
        />
        <FollowList
          header="팔로워"
          data={followersData}
          onClickMore={loadMoreFollowers}
          loading={!followerError && !followersData}
        />
      </AppLayout>
    </>
  );
};

// SSR (프론트 서버에서 실행)
export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  // 쿠키가 브라우저에 있는경우만 넣어서 실행
  // (주의, 아래 조건이 없다면 다른 사람으로 로그인 될 수도 있음)
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  await store.dispatch(loadMyInfo());

  // return {
  //   props: {},
  // };
});

export default Profile;
