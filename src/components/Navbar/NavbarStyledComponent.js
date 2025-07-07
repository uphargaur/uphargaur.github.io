import { Link as LinkR } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// 3D Animation Keyframes
const float3D = keyframes`
  0%, 100% { 
    transform: translateY(0px) rotateX(0deg) rotateY(0deg);
  }
  50% { 
    transform: translateY(-10px) rotateX(5deg) rotateY(2deg);
  }
`;

const rotate3D = keyframes`
  0% { 
    transform: rotateY(0deg) rotateX(0deg);
  }
  100% { 
    transform: rotateY(360deg) rotateX(360deg);
  }
`;

const shimmer3D = keyframes`
  0% {
    background-position: -200% center;
    box-shadow: 0 0 0 rgba(212, 175, 55, 0);
  }
  50% {
    background-position: 0% center;
    box-shadow: 0 0 30px rgba(212, 175, 55, 0.6);
  }
  100% {
    background-position: 200% center;
    box-shadow: 0 0 0 rgba(212, 175, 55, 0);
  }
`;

const pulse3D = keyframes`
  0%, 100% { 
    transform: scale(1) translateZ(0px);
    box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7);
  }
  50% { 
    transform: scale(1.05) translateZ(10px);
    box-shadow: 0 0 20px 10px rgba(212, 175, 55, 0.3);
  }
`;

const hologram = keyframes`
  0%, 100% { 
    opacity: 0.8;
    filter: hue-rotate(0deg) brightness(1);
  }
  25% { 
    opacity: 1;
    filter: hue-rotate(10deg) brightness(1.2);
  }
  75% { 
    opacity: 0.9;
    filter: hue-rotate(-10deg) brightness(1.1);
  }
`;

// Main 3D Navigation Container
export const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(135deg, 
    rgba(10, 15, 10, 0.95) 0%,
    rgba(26, 46, 26, 0.9) 50%,
    rgba(42, 74, 42, 0.85) 100%
  );
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 2px solid;
  border-image: linear-gradient(90deg, #d4af37, #32cd32, #228b22, #d4af37) 1;
  z-index: 1000;
  perspective: 1000px;
  transform-style: preserve-3d;
  
  /* 3D Glow Effect */
  box-shadow: 
    0 8px 32px rgba(212, 175, 55, 0.2),
    0 0 0 1px rgba(212, 175, 55, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  
  /* Holographic Animation */
  animation: ${hologram} 4s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent 0%,
      rgba(212, 175, 55, 0.1) 50%,
      transparent 100%
    );
    animation: ${shimmer3D} 3s ease-in-out infinite;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, 
      #d4af37 0%,
      #32cd32 25%,
      #228b22 50%,
      #32cd32 75%,
      #d4af37 100%
    );
    background-size: 200% 100%;
    animation: ${shimmer3D} 2s linear infinite;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 2;
  transform-style: preserve-3d;
`;

// 3D Logo/Brand Section
export const NavBrand = styled.div`
  display: flex;
  align-items: center;
  perspective: 500px;
  transform-style: preserve-3d;
  
  .brand-3d {
    font-size: 28px;
    font-weight: 800;
    font-family: 'Orbitron', monospace;
    background: linear-gradient(135deg, 
      #d4af37 0%,
      #ffd700 25%,
      #32cd32 50%,
      #228b22 75%,
      #d4af37 100%
    );
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer3D} 3s ease-in-out infinite;
    
    transform: rotateX(15deg) rotateY(-5deg) translateZ(20px);
    text-shadow: 
      0 0 10px rgba(212, 175, 55, 0.8),
      0 0 20px rgba(50, 205, 50, 0.6),
      0 0 30px rgba(34, 139, 34, 0.4);
    
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    &:hover {
      transform: rotateX(0deg) rotateY(0deg) translateZ(30px) scale(1.1);
      text-shadow: 
        0 0 20px rgba(212, 175, 55, 1),
        0 0 40px rgba(50, 205, 50, 0.8),
        0 0 60px rgba(34, 139, 34, 0.6);
    }
  }
  
  .brand-subtitle {
    font-size: 10px;
    color: rgba(212, 175, 55, 0.8);
    margin-left: 10px;
    transform: translateZ(10px);
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

// 3D Navigation Items
export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
  perspective: 800px;
  transform-style: preserve-3d;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  position: relative;
  transform-style: preserve-3d;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    background: linear-gradient(135deg, 
      rgba(212, 175, 55, 0.1), 
      rgba(50, 205, 50, 0.1)
    );
    border-radius: 12px;
    opacity: 0;
    transform: translateZ(-10px) scale(0.8);
    transition: all 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    opacity: 1;
    transform: translateZ(-10px) scale(1);
  }
`;

export const NavLink = styled.a`
  position: relative;
  color: rgba(245, 245, 220, 0.9);
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  
  /* 3D Transform */
  transform: translateZ(0px) rotateX(0deg);
  
  /* Glowing border */
  border: 1px solid transparent;
  background: linear-gradient(135deg, 
    rgba(212, 175, 55, 0.1), 
    rgba(50, 205, 50, 0.1)
  );
  
  /* Hover Effects */
  &:hover {
    color: #d4af37;
    transform: translateZ(15px) rotateX(-5deg) scale(1.05);
    background: linear-gradient(135deg, 
      rgba(212, 175, 55, 0.2), 
      rgba(50, 205, 50, 0.2)
    );
    border-color: rgba(212, 175, 55, 0.5);
    box-shadow: 
      0 10px 20px rgba(212, 175, 55, 0.3),
      0 0 30px rgba(50, 205, 50, 0.2);
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.8);
  }
  
  /* Active State */
  &.active {
    color: #d4af37;
    background: linear-gradient(135deg, 
      rgba(212, 175, 55, 0.3), 
      rgba(50, 205, 50, 0.3)
    );
    border-color: rgba(212, 175, 55, 0.7);
    transform: translateZ(10px);
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4);
  }
`;

// 3D CTA Button
export const CTAButton = styled.a`
  position: relative;
  padding: 14px 28px;
  background: linear-gradient(135deg, 
    #d4af37 0%,
    #ffd700 50%,
    #32cd32 100%
  );
  color: #0a0f0a;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
  overflow: hidden;
  transform-style: preserve-3d;
  transform: translateZ(0px) perspective(500px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  /* 3D Border */
  border: 2px solid transparent;
  
  /* Glowing Effect */
  box-shadow: 
    0 0 20px rgba(212, 175, 55, 0.4),
    0 5px 15px rgba(212, 175, 55, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  
  /* Shimmer Effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.4), 
      transparent
    );
    transition: all 0.5s;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
      rgba(212, 175, 55, 0.1) 0%,
      rgba(50, 205, 50, 0.1) 100%
    );
    opacity: 0;
    transition: all 0.3s;
  }
  
  &:hover {
    transform: translateZ(20px) rotateX(-5deg) scale(1.05);
    box-shadow: 
      0 0 30px rgba(212, 175, 55, 0.6),
      0 15px 30px rgba(212, 175, 55, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateZ(10px) rotateX(0deg) scale(0.98);
  }
`;

// Mobile Menu Toggle
export const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  .hamburger {
    width: 25px;
    height: 3px;
    background: linear-gradient(135deg, #d4af37, #32cd32);
    margin: 5px 0;
    transition: all 0.3s ease;
    border-radius: 2px;
    box-shadow: 0 0 5px rgba(212, 175, 55, 0.5);
  }
  
  &:hover .hamburger {
    background: linear-gradient(135deg, #ffd700, #32cd32);
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.8);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

// 3D Mobile Menu
export const MobileMenu = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  background: linear-gradient(135deg, 
    rgba(10, 15, 10, 0.98) 0%,
    rgba(26, 46, 26, 0.95) 50%,
    rgba(42, 74, 42, 0.92) 100%
  );
  backdrop-filter: blur(20px) saturate(180%);
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  z-index: 999;
  perspective: 1000px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  
  /* 3D Grid Background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: -1;
    opacity: 0.3;
  }
`;

export const MobileNavLink = styled.a`
  color: rgba(245, 245, 220, 0.9);
  font-weight: 600;
  font-size: 24px;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  transform: translateZ(0px) rotateX(0deg);
  
  background: linear-gradient(135deg, 
    rgba(212, 175, 55, 0.1), 
    rgba(50, 205, 50, 0.1)
  );
  border: 1px solid transparent;
  
  &:hover {
    color: #d4af37;
    transform: translateZ(15px) rotateX(-5deg) scale(1.05);
    background: linear-gradient(135deg, 
      rgba(212, 175, 55, 0.2), 
      rgba(50, 205, 50, 0.2)
    );
    border-color: rgba(212, 175, 55, 0.5);
    box-shadow: 
      0 10px 20px rgba(212, 175, 55, 0.3),
      0 0 30px rgba(50, 205, 50, 0.2);
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.8);
  }
`;

export const MobileCTAButton = styled.a`
  padding: 16px 32px;
  background: linear-gradient(135deg, 
    #d4af37 0%,
    #ffd700 50%,
    #32cd32 100%
  );
  color: #0a0f0a;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  border-radius: 25px;
  cursor: pointer;
  transform-style: preserve-3d;
  transform: translateZ(0px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  box-shadow: 
    0 0 20px rgba(212, 175, 55, 0.4),
    0 5px 15px rgba(212, 175, 55, 0.3);
  
  &:hover {
    transform: translateZ(20px) scale(1.05);
    box-shadow: 
      0 0 30px rgba(212, 175, 55, 0.6),
      0 15px 30px rgba(212, 175, 55, 0.4);
  }
`;