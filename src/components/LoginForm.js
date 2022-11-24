import React, { useCallback, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/user';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading, logInError } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch(
      login({
        email,
        password,
      }),
    );
  }, [email, password]);

  return (
    <Form className="p-2" onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-email" type="email">
          이메일
        </label>
        <br />
        <Input name="user-email" value={email} onChange={onChangeEmail} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
      </div>
      <div className="mt-2">
        <Button htmlType="submit" loading={logInLoading}>
          로그인
        </Button>
        <Link href="/signup">
          <Button>회원가입</Button>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
