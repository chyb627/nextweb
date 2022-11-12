import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col, Input, Menu, Row } from 'antd';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const AppLayout = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user);

  const inputSearchStyle = useMemo(
    () => ({
      verticalAlign: 'middle',
    }),
    [],
  );

  const menuItems = [
    {
      label: <Link href="/">영빈웹</Link>,
      key: 'home',
    },
    {
      label: <Link href="/profile">프로필</Link>,
      key: 'profile',
    },
    {
      label: <Input.Search style={inputSearchStyle} />,
      key: 'mail',
    },
  ];

  return (
    <div>
      <Global />
      <Menu items={menuItems} mode="horizontal" />
      {/* gutter는 컬럼사이의 간격 */}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/chyb627" target="_blank" rel="noreferrer noopener">
            Made by YoungbinCha
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
