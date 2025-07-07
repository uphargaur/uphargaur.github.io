import styled from "styled-components";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.bg};
  background-image: radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(50, 205, 50, 0.12) 0%, transparent 50%),
                    radial-gradient(circle at 40% 80%, rgba(34, 139, 34, 0.1) 0%, transparent 50%);
  display: flex;
  justify-content: center;
  position: relative;
  padding: 120px 30px;
  min-height: 100vh;
  overflow: hidden;
  
  @media (max-width: 960px) {
    padding: 100px 16px;
    min-height: 90vh;
  }
  @media (max-width: 640px) {
    padding: 80px 16px;
    min-height: 80vh;
  }
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${({ theme }) => theme.background1} 0%, ${({ theme }) => theme.background2} 100%);
    z-index: -1;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.primary};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(212, 175, 55, 0.4);
  object-fit: cover;
  aspect-ratio: 1;

  @media (max-width: 768px) {
    max-width: 350px;
    max-height: 350px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 960px) {
    text-align: center;
    font-size: 40px;
    line-height: 48px;
  }

  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  
  @media (max-width: 960px) {
    text-align: center;
    font-size: 24px;
    line-height: 48px;
    gap: 8px;
  }

  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 40px;
    gap: 8px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-weight: 600;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.accent} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 32px;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
  }
`;

export const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.background1};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
  border: none;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.5), 0 0 30px rgba(50, 205, 50, 0.3);
    filter: brightness(1.1);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
    width: 100%;
  }
`;
