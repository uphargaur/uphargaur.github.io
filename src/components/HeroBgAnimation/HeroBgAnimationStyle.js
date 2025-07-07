import styled, { keyframes } from 'styled-components';

// Golden & Green Theme Keyframes
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(10px) rotate(240deg); }
`;

const floatReverse = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(180deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
`;

const drift = keyframes`
  0% { transform: translateX(-10px) translateY(-10px); }
  25% { transform: translateX(10px) translateY(-15px); }
  50% { transform: translateX(-5px) translateY(10px); }
  75% { transform: translateX(15px) translateY(-5px); }
  100% { transform: translateX(-10px) translateY(-10px); }
`;

const shimmer = keyframes`
  0% { opacity: 0.3; transform: scale(0.8); }
  50% { opacity: 0.7; transform: scale(1.2); }
  100% { opacity: 0.3; transform: scale(0.8); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const goldGlow = keyframes`
  0%, 100% { 
    filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.5));
  }
  50% { 
    filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8));
  }
`;

const greenPulse = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(50, 205, 50, 0.4);
  }
  50% { 
    box-shadow: 0 0 30px rgba(50, 205, 50, 0.8);
  }
`;

export const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background: linear-gradient(135deg, #0a0f0a 0%, #1a2e1a 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(50, 205, 50, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(34, 139, 34, 0.08) 0%, transparent 50%);
    z-index: -1;
  }

  .particles {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: linear-gradient(135deg, #d4af37, #ffd700);
    border-radius: 50%;
    animation: ${float} 6s infinite ease-in-out;
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
    
    &:nth-child(2n) {
      background: linear-gradient(135deg, #228b22, #32cd32);
      animation: ${floatReverse} 8s infinite ease-in-out;
      box-shadow: 0 0 8px rgba(50, 205, 50, 0.6);
    }
    
    &:nth-child(3n) {
      background: linear-gradient(135deg, #90ee90, #32cd32);
      animation: ${pulse} 4s infinite ease-in-out;
      box-shadow: 0 0 6px rgba(144, 238, 144, 0.4);
    }
    
    &:nth-child(4n) {
      background: radial-gradient(circle, #ffd700, #d4af37);
      animation: ${shimmer} 5s infinite ease-in-out;
      box-shadow: 0 0 12px rgba(255, 215, 0, 0.7);
    }
  }

  .floating-shapes {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .shape {
    position: absolute;
    border-radius: 4px;
    opacity: 0.6;
    animation: ${drift} 10s infinite ease-in-out;
  }

  .shape.cube {
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #d4af37, #ffd700);
    border: 1px solid rgba(212, 175, 55, 0.3);
    animation: ${spin} 12s linear infinite, ${drift} 15s infinite ease-in-out;
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
  }

  .shape.sphere {
    width: 16px;
    height: 16px;
    background: radial-gradient(circle, #32cd32, #228b22);
    border-radius: 50%;
    animation: ${pulse} 6s infinite ease-in-out, ${drift} 12s infinite ease-in-out;
    box-shadow: 0 0 12px rgba(50, 205, 50, 0.5);
  }

  .shape.triangle {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid #90ee90;
    animation: ${floatReverse} 8s infinite ease-in-out;
    filter: drop-shadow(0 0 10px rgba(144, 238, 144, 0.4));
  }

  .shape.hexagon {
    width: 18px;
    height: 18px;
    background: linear-gradient(135deg, #228b22, #32cd32);
    clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
    animation: ${float} 10s infinite ease-in-out, ${spin} 20s linear infinite;
    box-shadow: 0 0 10px rgba(34, 139, 34, 0.6);
  }

  .gradient-orbs {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(2px);
    animation: ${pulse} 8s infinite ease-in-out;
    opacity: 0.3;
  }

  .orb.gold {
    background: radial-gradient(circle, rgba(212, 175, 55, 0.4), rgba(255, 215, 0, 0.1));
    animation: ${goldGlow} 6s infinite ease-in-out;
  }

  .orb.green {
    background: radial-gradient(circle, rgba(50, 205, 50, 0.4), rgba(34, 139, 34, 0.1));
    animation: ${greenPulse} 7s infinite ease-in-out;
  }

  .orb.lime {
    background: radial-gradient(circle, rgba(144, 238, 144, 0.3), rgba(50, 205, 50, 0.1));
    animation: ${shimmer} 5s infinite ease-in-out;
  }

  // Nature-inspired decorative elements
  .nature-elements {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }

  .leaf {
    position: absolute;
    font-size: 24px;
    opacity: 0.2;
    animation: ${float} 12s infinite ease-in-out;
    
    &::before {
      content: '🌿';
      filter: hue-rotate(${Math.random() * 60 - 30}deg);
    }
  }

  .sparkle {
    position: absolute;
    font-size: 16px;
    opacity: 0.4;
    animation: ${shimmer} 4s infinite ease-in-out;
    
    &::before {
      content: '✨';
      filter: brightness(1.2);
    }
  }

  @media (max-width: 768px) {
    .shape {
      transform: scale(0.8);
    }
    
    .particle {
      width: 3px;
      height: 3px;
    }
    
    .orb {
      transform: scale(0.7);
    }
    
    .leaf, .sparkle {
      font-size: 18px;
    }
  }
`;