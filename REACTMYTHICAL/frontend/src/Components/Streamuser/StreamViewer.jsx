import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SimplePeer from 'simple-peer';
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

const StreamViewer = () => {
  const [user, setUser] = useState({
    name: 'Streamer Name',
    email: 'streamer@example.com',
    profilePicture: 'default-avatar.png',
  });
  const remoteVideoRef = useRef(null);
  const wsRef = useRef(null);
  const peerRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket('ws://192.168.0.118:8081');
    wsRef.current = ws;

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = event => {
      const message = JSON.parse(event.data);
      console.log('Received message:', message);
      if (message.type === 'signal') {
        if (!peerRef.current) {
          const p = new SimplePeer({
            initiator: false,
            trickle: false,
          });

          p.on('signal', data => {
            ws.send(JSON.stringify({ type: 'signal', data }));
          });

          p.on('stream', remoteStream => {
            remoteVideoRef.current.srcObject = remoteStream;
          });

          peerRef.current = p;
        }

        peerRef.current.signal(message.data);
      } else if (message.type === 'user-info') {
        setUser(message.data);
      }
    };

    ws.onerror = error => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      if (ws) ws.close();
    };
  }, []);

  return (
    <>
      <Header />
      <StreamContainer>
        <VideoWrapper>
          <Video ref={remoteVideoRef} autoPlay />
        </VideoWrapper>
        <InfoContainer>
          <UserInfo>
            <UserImage src={user.profilePicture} alt="User" />
            <div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </UserInfo>
        </InfoContainer>
      </StreamContainer>
      <Footer />
    </>
  );
};

export default StreamViewer;
