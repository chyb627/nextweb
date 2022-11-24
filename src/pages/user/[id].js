import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Card } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';

import axios from 'axios';
import { loadUserPosts } from '../../actions/post';
import { loadMyInfo, loadUser } from '../../actions/user';
import PostCard from '../../components/PostCard';
import wrapper from '../../store/configureStore';
import AppLayout from '../../components/AppLayout';

const User = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);
  const { userInfo, me } = useSelector((state) => state.user);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch(
            loadUserPosts({
              lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
              userId: id,
            }),
          );
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts.length, hasMorePosts, id, loadPostsLoading]);

  return (
    <AppLayout>
      {userInfo && (
        <Head>
          <title>
            {userInfo.nickname}
            님의 글
          </title>
          <meta name="description" content={`${userInfo.nickname}님의 게시글`} />
          <meta property="og:title" content={`${userInfo.nickname}님의 게시글`} />
          <meta property="og:description" content={`${userInfo.nickname}님의 게시글`} />
          <meta property="og:image" content="https://youngbinweb.com/favicon.ico" />
          <meta property="og:url" content={`https://youngbinweb.com/user/${id}`} />
        </Head>
      )}
      {userInfo && userInfo.id !== me?.id ? (
        <Card
          style={{ marginBottom: 20 }}
          actions={[
            <div key="twit">
              게시물
              <br />
              {userInfo.Posts}
            </div>,
            <div key="following">
              팔로잉
              <br />
              {userInfo.Followings}
            </div>,
            <div key="follower">
              팔로워
              <br />
              {userInfo.Followers}
            </div>,
          ]}
        >
          <Card.Meta avatar={<Avatar>{userInfo.nickname[0]}</Avatar>} title={userInfo.nickname} />
        </Card>
      ) : null}
      {mainPosts.map((c) => (
        <PostCard key={c.id} post={c} />
      ))}
    </AppLayout>
  );
};

// SSR (프론트 서버에서 실행)
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  // 쿠키가 브라우저에 있는경우만 넣어서 실행
  // (주의, 아래 조건이 없다면 다른 사람으로 로그인 될 수도 있음)
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  await context.store.dispatch(loadUserPosts({ userId: context.params.id }));
  await context.store.dispatch(loadUser({ userId: context.params.id }));
  await context.store.dispatch(loadMyInfo());

  // return {
  //   props: {},
  // };
});

export default User;
