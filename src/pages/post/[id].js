import React from 'react';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}번 게시글</div>;

  // 다이나믹 라우팅 사용방법.
  // http://localhost:3060/post/1  --> 1번 게시글
  // http://localhost:3060/post/2  ---> 2번 게시글
  // http://localhost:3060/post/300  ---> 300번 게시글
};

export default Post;
