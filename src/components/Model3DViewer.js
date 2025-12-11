import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import '../styles/Model3DViewer.css';

function Model({ url, onLoad }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();

  // Auto-rotate the model slowly
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  React.useEffect(() => {
    if (scene && onLoad) {
      onLoad();
    }
  }, [scene, onLoad]);

  return <primitive ref={modelRef} object={scene} scale={1.5} />;
}

function LoadingSpinner() {
  return (
    <div className="model-loading">
      <motion.div
        className="loading-spinner"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <div className="spinner-ring"></div>
      </motion.div>
      <p>Loading 3D Model...</p>
    </div>
  );
}

function Model3DViewer({ modelUrl, projectName }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="model-viewer-container">
      {isLoading && <LoadingSpinner />}
      <Canvas style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s' }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} />
        <pointLight position={[0, 5, 0]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <Model url={modelUrl} onLoad={() => setIsLoading(false)} />
          <Environment preset="studio" />
        </Suspense>
        
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate={false}
          minDistance={2}
          maxDistance={10}
        />
      </Canvas>
      <div className="viewer-controls">
        <p>🖱️ Drag to rotate • Scroll to zoom • Right-click to pan</p>
      </div>
    </div>
  );
}

export default Model3DViewer;
