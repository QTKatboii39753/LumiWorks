import { Lightbulb, Zap } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface LightBulbProps {
  size?: number;
  className?: string;
  initialOn?: boolean;
  isOn?: boolean;
  showSpark?: boolean;
  style?: React.CSSProperties;
}

export function LightBulb({ 
  size = 80, 
  className = '', 
  initialOn = false,
  isOn: controlledIsOn,
  showSpark: controlledShowSpark,
  style = {} 
}: LightBulbProps) {
  const [internalIsOn, setInternalIsOn] = useState(initialOn);
  const [internalShowSpark, setInternalShowSpark] = useState(false);
  const sparkTimeoutRef = useRef<NodeJS.Timeout>();

  // Use controlled state if provided, otherwise use internal state
  const isOn = controlledIsOn !== undefined ? controlledIsOn : internalIsOn;
  const showSpark = controlledShowSpark !== undefined ? controlledShowSpark : internalShowSpark;

  // Handle spark effect
  const triggerSpark = () => {
    if (controlledShowSpark === undefined) {
      setInternalShowSpark(true);
      if (sparkTimeoutRef.current) clearTimeout(sparkTimeoutRef.current);
      sparkTimeoutRef.current = setTimeout(() => setInternalShowSpark(false), 500);
    }
  };

  // Initial animation
  useEffect(() => {
    if (initialOn && controlledIsOn === undefined) {
      const timer = setTimeout(() => {
        setInternalIsOn(true);
        triggerSpark();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [initialOn, controlledIsOn]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (sparkTimeoutRef.current) clearTimeout(sparkTimeoutRef.current);
    };
  }, []);

  const handleClick = () => {
    if (controlledIsOn === undefined) {
      setInternalIsOn(prev => !prev);
    }
    triggerSpark();
  };

  // Calculate the exact position to prevent subpixel rendering issues
  const containerSize = size * 1.5;
  
  return (
    <div 
      onClick={handleClick}
      style={{
        position: 'absolute',
        width: containerSize,
        height: containerSize,
        transform: 'translateZ(0)',
        transformOrigin: 'center',
        backfaceVisibility: 'hidden',
        overflow: 'visible',
        pointerEvents: 'auto',
        ...style
      }}
      className={className}
    >
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translateZ(0)'
      }}>
        <div style={{
          position: 'relative',
          color: isOn ? '#facc15' : '#9ca3af',
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Lightbulb 
            size={size}
            fill={isOn ? '#ffff00' : 'transparent'}
            strokeWidth={isOn ? 2.5 : 1}
            style={{
              position: 'relative',
              zIndex: 1,
              filter: isOn ? 'drop-shadow(0 0 35px rgba(255, 255, 0, 0.95))' : 'none',
              opacity: isOn ? 1 : 0.7,
              transition: 'all 300ms ease'
            }}
          />
          
          {isOn && (
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,0,0.9) 50%, rgba(255,200,0,0.8) 100%)',
              borderRadius: '50%',
              filter: 'blur(30px)',
              opacity: 0.6,
              zIndex: 0,
              animation: 'pulse 2s infinite',
              transformOrigin: 'center'
            }} />
          )}
          
          {showSpark && (
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2
            }}>
              <Zap 
                size={size * 0.6} 
                style={{ 
                  color: '#fde047',
                  position: 'absolute',
                  animation: 'ping 0.5s cubic-bezier(0, 0, 0.2, 1)',
                  opacity: 0.7
                }}
              />
            </div>
          )}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse {
            0% { opacity: 0.3; transform: translate(-50%, -50%) scale(0.95); }
            50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.2); }
            100% { opacity: 0.3; transform: translate(-50%, -50%) scale(0.95); }
          }
          @keyframes ping {
            75%, 100% { transform: scale(2); opacity: 0; }
          }
        `
      }} />
    </div>
  );
}
