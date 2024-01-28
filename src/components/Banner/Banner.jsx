import React, { Suspense, useMemo  } from 'react';
import './Banner.css'
import circlepik from './circle.png'
import { Canvas, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const Banner = () => {
    function Points(){
        const imgTex = useLoader(THREE.TextureLoader, circlepik)
      const count = 100
      const sep =3

        let positions = useMemo(() => {
          let positions = [];
           for (let xi = 0; xi < count; xi++) {
             for (let zi = 0; zi < count; zi++) {
               let x = sep * (xi - count / 2);
               let z = sep * (zi - count / 2);
               let y = 0;
               positions.push(x, y , z)
             }
           }
          return new Float32Array(positions);
        }, [count, sep]);
        return (
          <points>
            <bufferGeometry attach="geometry">
              <bufferAttribute
              attachObject={["attributes", "position"]}
                array={positions}
                count={positions.length / 3}
                itemSize={3}
              />
            </bufferGeometry>

            <pointsMaterial
              attach="material"
              map={imgTex}
              color={0x00aaff}
              size={0.5}
              sizAttenuation
              transparent={false}
              alphaTest={0.5}
              opacity={1.0}
            ></pointsMaterial>
          </points>
        );
    }
    function AnimationCanvas() {
        return (
          <Canvas
            colorManagement={false}
            camera={{ position: [100, 10, 8], fov: 75 }}
          >
            <Suspense fallback={null}>
              <Points/>
            </Suspense>
          </Canvas>
        );
    }
    return (
        <div className=' rafi'>
            <Suspense fallback={<div> Loading...</div>}>
            <AnimationCanvas/>
            </Suspense>
        </div>
    );
};

export default Banner;