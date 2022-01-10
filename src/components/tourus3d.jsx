import React, {  useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { softShadows, MeshWobbleMaterial } from '@react-three/drei'




export default function Tourus(props){
    const ref=useRef(null)
     useFrame(() => (ref.current.rotation.x=ref.current.rotation.y += 0.01))
  
    return(

      <mesh visible position={[0, 0, 0]} castShadow ref={ref}>
          <ambientLight intensity={0.3} />
      <directionalLight
      castShadow
      position={[0, 10, 0]}
      intensity={1.5}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, -0]} intensity={1.5} />

      <ambientLight/>
      <torusGeometry args={[10, 2, 16, 200 ]}/>
      <MeshWobbleMaterial attach='material' color={'pink'} speed={3} factor={0.6} />


    </mesh>
    )
  }
  
  