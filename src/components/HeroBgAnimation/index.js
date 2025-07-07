import React from 'react'
import { Div } from './HeroBgAnimationStyle'

const HeroBgAnimation = () => {
  return (
  <Div>
      {/* Golden & Green Floating particles */}
      <div className="particles">
        {[...Array(60)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Floating geometric shapes */}
      <div className="floating-shapes">
        {/* Golden Cubes */}
        <div 
          className="shape cube"
          style={{
            top: `${15 + Math.random() * 20}%`,
            right: `${10 + Math.random() * 20}%`,
            animationDelay: '0s'
          }}
        />
        <div 
          className="shape cube"
          style={{
            top: `${60 + Math.random() * 20}%`,
            left: `${20 + Math.random() * 20}%`,
            animationDelay: '3s'
          }}
        />
        
        {/* Green Spheres */}
        <div 
          className="shape sphere"
          style={{
            top: `${30 + Math.random() * 20}%`,
            left: `${70 + Math.random() * 20}%`,
            animationDelay: '1s'
          }}
        />
        <div 
          className="shape sphere"
          style={{
            top: `${70 + Math.random() * 20}%`,
            right: `${15 + Math.random() * 20}%`,
            animationDelay: '4s'
          }}
        />
        
        {/* Lime Triangles */}
        <div 
          className="shape triangle"
          style={{
            top: `${25 + Math.random() * 15}%`,
            left: `${15 + Math.random() * 15}%`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="shape triangle"
          style={{
            top: `${55 + Math.random() * 15}%`,
            right: `${25 + Math.random() * 15}%`,
            animationDelay: '5s'
          }}
        />
        
        {/* Forest Green Hexagons */}
        <div 
          className="shape hexagon"
          style={{
            top: `${40 + Math.random() * 20}%`,
            right: `${30 + Math.random() * 20}%`,
            animationDelay: '1.5s'
          }}
        />
        <div 
          className="shape hexagon"
          style={{
            top: `${80 + Math.random() * 15}%`,
            left: `${40 + Math.random() * 20}%`,
            animationDelay: '6s'
          }}
        />
      </div>
      
      {/* Gradient orbs for depth */}
      <div className="gradient-orbs">
        <div 
          className="orb gold"
          style={{
            width: '200px',
            height: '200px',
            top: '10%',
            left: '20%',
            animationDelay: '0s'
          }}
        />
        <div 
          className="orb green"
          style={{
            width: '150px',
            height: '150px',
            top: '50%',
            right: '20%',
            animationDelay: '2s'
          }}
        />
        <div 
          className="orb lime"
          style={{
            width: '120px',
            height: '120px',
            bottom: '20%',
            left: '60%',
            animationDelay: '4s'
          }}
        />
        <div 
          className="orb gold"
          style={{
            width: '100px',
            height: '100px',
            top: '30%',
            right: '50%',
            animationDelay: '1s'
          }}
        />
        <div 
          className="orb green"
          style={{
            width: '80px',
            height: '80px',
            bottom: '40%',
            right: '10%',
            animationDelay: '3s'
          }}
        />
      </div>
      
      {/* Nature-inspired decorative elements */}
      <div className="nature-elements">
        {/* Floating leaves */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={`leaf-${i}`}
            className="leaf"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          />
        ))}
        
        {/* Sparkles */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={`sparkle-${i}`}
            className="sparkle"
            style={{
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 95}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
  </Div>
  )
}

export default HeroBgAnimation