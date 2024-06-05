import React, { useState, useEffect, useRef } from 'react';
import SimplePeer from 'simple-peer';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';

const StreamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #202020;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  margin: auto;
  margin-top: 20px;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
  border-radius: 10px;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Timer = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 20px;
  cursor: pointer;
  font-size: 24px;
  z-index: 10;
`;

const StreamUser = () => {
  const [peer, setPeer] = useState(null);
  const [time, setTime] = useState(0);
  const [user, setUser] = useState({
    login: '',
    name: '',
    age: '',
    email: '',
    phone: '',
    profilePicture: '',
  });
  const [isStreaming, setIsStreaming] = useState(false);
  const videoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const intervalRef = useRef(null);
  const wsRef = useRef(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Нет токена');
        return;
      }

      const response = await fetch('http://192.168.0.118:3000/profile', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        console.error('Ошибка отправки fetch');
      }
    };

    fetchUser();

    const ws = new WebSocket('ws://192.168.0.118:8081');
    wsRef.current = ws;

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = event => {
      const message = JSON.parse(event.data);
      if (message.type === 'signal') {
        peer.signal(message.data);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      if (ws) ws.close();
    };
  }, []);

  const startStreaming = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current.srcObject = stream;

      const p = new SimplePeer({
        initiator: true,
        trickle: false,
        stream
      });

      p.on('signal', data => {
        console.log('Sending signal data:', data);
        wsRef.current.send(JSON.stringify({ type: 'signal', data }));
        wsRef.current.send(JSON.stringify({ type: 'user-info', data: user })); // Send user info
      });

      p.on('stream', remoteStream => {
        remoteVideoRef.current.srcObject = remoteStream;
      });

      setPeer(p);
      setIsStreaming(true);

      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } catch (err) {
      console.error("Не удалось получить доступ к камере: ", err);
      alert("Не удалось получить доступ к камере: " + err.message);
    }
  };

  const connectToPeer = signal => {
    peer.signal(JSON.parse(signal));
  };

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <>
      <Header />
      <StreamContainer>
        <VideoWrapper>
          <Video ref={videoRef} autoPlay muted />
          {!isStreaming && (
            <PlayButton onClick={startStreaming}>▶</PlayButton>
          )}
        </VideoWrapper>
        <InfoContainer>
          <UserInfo>
            <UserImage src={user.profilePicture ? `http://192.168.0.118:3000${user.profilePicture}` : 'default-avatar.png'} alt="User" />
            <div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </UserInfo>
          {isStreaming && (
            <Timer>
              <h3>{formatTime(time)}</h3>
            </Timer>
          )}
        </InfoContainer>
        {isStreaming && <Video ref={remoteVideoRef} autoPlay />}
      </StreamContainer>
      <Footer />
    </>
  );
};

export default StreamUser;
