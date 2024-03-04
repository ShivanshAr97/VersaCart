import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import Apple from '../public/Apple'

function Three() {
  return (
      <Canvas className=''>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false}/>
          <ambientLight/>
          <Apple scale={5}/>
        </Suspense>
        <Environment preset='sunset'/>
      </Canvas>
  )
}

export default Three