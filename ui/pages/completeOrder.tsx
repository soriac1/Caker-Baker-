import HPcta from "@/components/homepage/cta"
import Layout from "../components/layout"
import {Ref, Suspense,useRef,useState} from 'react'
import {Canvas} from'@react-three/fiber'
import {OrbitControls,useGLTF,PerspectiveCamera} from '@react-three/drei'
import Cart from "../components/cakedesigner/Cart.jsx"
import Productoverview from "../components/cakedesigner/productoverview"

export default function Dashboard() {
  
  return (
    <Layout>
      <Cart/>
    
      
    </Layout>
  )
}
