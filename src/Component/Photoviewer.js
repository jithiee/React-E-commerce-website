import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';

const PhotoViewer = ({ imageUrl }) => {
  const textureRef = useRef();

  useFrame(() => {
    // Update the texture for continuous rendering
    textureRef.current.needsUpdate = true;
  });

  return (
    <Canvas>
      <sphereBufferGeometry args={[5, 32, 32]} attach="geometry" />
      <meshBasicMaterial>
        <texture
          ref={textureRef}
          url={imageUrl}
          wrapS={THREE.RepeatWrapping}
          wrapT={THREE.RepeatWrapping}
        />
      </meshBasicMaterial>
    </Canvas>
  );
};

export default PhotoViewer;