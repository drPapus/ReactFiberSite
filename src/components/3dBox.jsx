import React, {  useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { softShadows, MeshWobbleMaterial } from '@react-three/drei'



const SpinningMesh = ( {position, args, color} ) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return(
    <mesh position={position} ref={mesh}>
    <boxBufferGeometry attach='geometry' args={args} />
    <MeshWobbleMaterial attach='material' color={color} speed={3} factor={0.6} />
  </mesh>
  )
}

export default function Box(props) {
    const mesh = useRef()
    useFrame(() => (mesh.current.rotation.x=mesh.current.rotation.y += 0.01))


    return (
      <mesh
        {...props}
        ref={mesh}
    >

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


    <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color={'lightblue'}/>
    
        </mesh>
    )
  }