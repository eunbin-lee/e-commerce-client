import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './UserInfoPage.css';
import '../../utils/sns.css';
import { Button, Input, Modal } from 'antd';

function UserInfoPage() {
  //example user
  const [user, setUser] = useState({
    role: 'general',
    name: '홍길동',
    userID: 'user123',
    email: 'abc@example.com',
    password: 'password123',
    modify: false,
  });

  const [sns, setSNS] = useState([
    { corp: 'kakao', title: '카카오 로그인', connect: false },
    { corp: 'naver', title: '네이버 로그인', connect: true },
    { corp: 'google', title: '구글 로그인', connect: false },
    { corp: 'facebook', title: '페이스북 로그인', connect: false },
  ]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onChangeInfo = () => {
    setUser({ ...user, modify: !user.modify });
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Formik
      initialValues={{
        role: user.role,
        email: user.role,
        lastName: user.role,
        name: user.role,
        password: user.role,
        confirmPassword: user.role,
      }}
    >
      <div style={{ width: '75%', margin: '3rem auto' }}>
        <h2 style={{ fontWeight: 'bold' }}>회원 정보</h2>

        <div className="info_container">
          <h3 className="info_title">로그인 정보</h3>
          <div className="info">
            <p style={{ marginTop: '20px' }}>
              연결된 SNS 계정으로 로그인할 수 있습니다.
            </p>
            <div className="sns">
              {sns.map((sns) =>
                sns.connect ? (
                  <button className={sns.corp}>{sns.title}</button>
                ) : (
                  <button
                    className={sns.corp}
                    style={{ filter: 'grayscale(100%)' }}
                  >
                    {sns.title}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="info_container">
          <h3 className="info_title">회원 정보</h3>
          {user.modify ? (
            <div className="info">
              <div className="info_detail">
                <span>성명</span> {user.name}
              </div>
              <div className="info_detail">
                <span>아이디</span> {user.userID}
              </div>
              <div className="info_detail">
                <span>이메일</span>{' '}
                <Input
                  type="text"
                  name="email"
                  value={user.email}
                  style={{ width: '200px' }}
                  onChange={onChange}
                />
              </div>
            </div>
          ) : (
            <div className="info">
              <div className="info_detail">
                <span>성명</span> {user.name}
              </div>
              <div className="info_detail">
                <span>아이디</span> {user.userID}
              </div>
              <div className="info_detail">
                <span>이메일</span> {user.email}
              </div>
            </div>
          )}
        </div>

        {user.modify ? (
          <>
            <Button
              type="primary"
              style={{ marginTop: '5px', fontSize: '0.85rem' }}
              onClick={() => alert('이메일을 확인해 주세요.')}
            >
              인증메일 발송
            </Button>
            <Button
              style={{
                marginTop: '5px',
                marginLeft: '4px',
                fontSize: '0.85rem',
              }}
              onClick={onChangeInfo}
            >
              취소
            </Button>
          </>
        ) : (
          <>
            <Button
              type="primary"
              style={{
                marginTop: '5px',
                marginRight: '4px',
                fontSize: '0.85rem',
              }}
              onClick={showModal}
            >
              비밀번호 변경
            </Button>
            <Button
              style={{ marginTop: '5px', fontSize: '0.85rem' }}
              onClick={onChangeInfo}
            >
              회원정보 수정하기
            </Button>
          </>
        )}

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '20px',
          }}
        >
          <Button type="link">회원탈퇴하기</Button>
        </div>

        <Modal
          title="비밀번호를 변경하시겠습니까?"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="확인"
          cancelText="취소"
        >
          <div>비밀번호 </div>
          <Input
            type="password"
            placeholder="비밀번호를 6자리 이상 입력해 주세요."
          />
          <div style={{ marginTop: '15px' }}>비밀번호 확인</div>
          <Input type="password" placeholder="비밀번호를 다시 입력해 주세요." />
        </Modal>
      </div>
    </Formik>
  );
}

export default UserInfoPage;
