
import {Suspense,useRef,useState} from 'react'
import {Canvas} from'@react-three/fiber'
import {OrbitControls,PositionPoint,useGLTF} from '@react-three/drei'


import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'

  
const product = {
  name: 'Customize Cake',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Main', href: '#' },
    { id: 2, name: 'Cakes', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
   
    { name: '6"', inStock: true },
    { name: '7"', inStock: true },
    { name: '8"', inStock: true },
    { name: '9"', inStock: true },
    { name: '10"', inStock: true },
    { name: '11"', inStock: true },
    { name: '12"', inStock: true },
    { name: '14"', inStock: false },
  ],
  layers: [
    { name: '1', inStock: true },
    { name: '2', inStock: true },
    { name: '3', inStock: false },
    
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Model({ ...props }) {
  const group = useRef()

  const { nodes, materials } = useGLTF('/Cake1(frosting).gltf')
  return (
    <group {...props} dispose={null}>
    
    <mesh
      
      geometry={nodes.pSphere550.geometry}
      material={materials["1001"]}
      position={[-0.6, 1.22, -0.58]}
      rotation={[1.57, 0, -2.42]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
      
    />
    <mesh
      
      geometry={nodes.pSphere551.geometry}
      material={materials["1001"]}
      position={[-0.76, 1.22, -0.34]}
      rotation={[1.57, 0, -2.77]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
    />
    <mesh
      
      geometry={nodes.pSphere546.geometry}
      material={materials["1001"]}
      position={[0.46, 1.21, -0.68]}
      rotation={[1.57, 0, -1.03]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
    />
    <mesh
      
      geometry={nodes.pSphere547.geometry}
      material={materials["1001"]}
      position={[0.2, 1.21, -0.8]}
      rotation={[1.57, 0, -1.38]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
    />
    <mesh
      
      geometry={nodes.pSphere545.geometry}
      material={materials["1001"]}
      position={[0.66, 1.21, -0.48]}
      rotation={[1.57, 0, -0.68]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
    />
    <mesh
    
      geometry={nodes.pSphere544.geometry}
      material={materials["1001"]}
      position={[0.79, 1.21, -0.22]}
      rotation={[1.57, 0, -0.33]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
    />
    <mesh
      
      geometry={nodes.Base.geometry}
      material={materials.Base}
      position={[0, 0.01, 0.02]}
      rotation={[1.57, 0, 0.02]}
      scale={0.98}
      material-color={props.customColors.mesh1}
      visible = {props.customLeg.legs === 1}
    >
      <mesh
        
        geometry={nodes.Base001.geometry}
        material={materials}
        material-color={props.customColors.mesh1}
        visible = {props.customLeg.legs === 1}
      />
    </mesh>
    <mesh
      
      geometry={nodes.Frosting.geometry}
      material={materials.Frosting}
      position={[0, 0.01, 0.02]}
      rotation={[1.57, 0, 0.02]}
      scale={0.98}
      material-color={props.customColors.soul1}
      visible = {props.customLeg.legs === 1}
    >
      <mesh
        
        geometry={nodes.pCylinder3001.geometry}
        material={materials["1001"]}
        material-color={props.customColors.stripes1}
        visible = {props.customLeg.legs === 1}
      />
    </mesh>
    <mesh
      
      geometry={nodes.pCylinder29.geometry}
      material={materials["1004"]}
      position={[0.01, 3.8, 0.01]}
      rotation={[1.57, 0, 0.02]}
      scale={1.21}
      material-color={0xffffff}
      visible = {props.customLeg.legs === 1}
    />
    <mesh
     
      geometry={nodes.pSphere561.geometry}
      material={materials["1001"]}
      position={[0.82, 1.21, 0.07]}
      rotation={[1.57, 0, 0.02]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
    />
    <mesh
     
      geometry={nodes.pSphere560.geometry}
      material={materials["1001"]}
      position={[0.75, 1.21, 0.35]}
      rotation={[1.57, 0, 0.37]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
    />
    <mesh
      
      geometry={nodes.pSphere558.geometry}
      material={materials["1001"]}
      position={[0.35, 1.22, 0.75]}
      rotation={[1.57, 0, 1.07]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.pSphere559.geometry}
      material={materials["1001"]}
      position={[0.58, 1.21, 0.59]}
      rotation={[1.57, 0, 0.72]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
    />
    <mesh
      
      geometry={nodes.pSphere557.geometry}
      material={materials["1001"]}
      position={[0.07, 1.22, 0.83]}
      rotation={[1.57, 0, 1.41]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
    />
    <mesh
      
      geometry={nodes.pSphere556.geometry}
      material={materials["1001"]}
      position={[-0.22, 1.22, 0.81]}
      rotation={[1.57, 0, 1.76]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
    />
    <mesh
      
      geometry={nodes.pSphere555.geometry}
      material={materials["1001"]}
      position={[-0.48, 1.22, 0.69]}
      rotation={[1.57, 0, 2.11]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
    />
    <mesh
      
      geometry={nodes.Candle.geometry}
      material={materials["1005"]}
      position={[0, -0.01, 0.02]}
      rotation={[1.57, 0, 0.02]}
      material-color={props.customColors.stripes1}
      visible = {false}
      
    >
      <mesh
        
        geometry={nodes.Candle001.geometry}
        material={materials["1006"]}
        material-color={props.customColors.stripes1}
        visible = {false}
      />
      <mesh
        
        geometry={nodes.Candle002.geometry}
        material={materials["1007"]}
        material-color={props.customColors.stripes1}
        visible = {false}
      />
    </mesh>
    <mesh
      
      geometry={nodes.pSphere548.geometry}
      material={materials["1001"]}
      position={[-0.09, 1.21, -0.82]}
      rotation={[1.57, 0, -1.73]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
    />
    <mesh
      
      geometry={nodes.pSphere549.geometry}
      material={materials["1001"]}
      position={[-0.37, 1.22, -0.74]}
      rotation={[1.57, 0, -2.08]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
    />
    <mesh
      
      geometry={nodes.pSphere553.geometry}
      material={materials["1001"]}
      position={[-0.81, 1.22, 0.23]}
      rotation={[1.57, 0, 2.81]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
    />
    <mesh
      
      geometry={nodes.pSphere554.geometry}
      material={materials["1001"]}
      position={[-0.68, 1.22, 0.49]}
      rotation={[1.57, 0, 2.46]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
    />
    <mesh
      geometry={nodes.pSphere552.geometry}
      material={materials["1001"]}
      position={[-0.84, 1.22, -0.06]}
      rotation={[1.57, 0, -3.12]}
      scale={0.09}
      material-color={props.customColors.stripes1}
      visible = {props.customLeg.legs === 1}
    />

<mesh
        castShadow
        receiveShadow
        geometry={nodes.Frosting2L1.geometry}
        material={materials["Frosting.001"]}
        position={[0.01, -0.68, 0.02]}
        rotation={[1.57, 0, 0.02]}
        scale={0.98}
        material-color={props.customColors.soul1}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frosting2L2.geometry}
        material={materials["Frosting.002"]}
        position={[0.01, 0.39, 0.02]}
        rotation={[1.57, 0, 0.02]}
        scale={0.78}
        material-color={props.customColors.soul2}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base2L1.geometry}
        material={materials["Base.004"]}
        position={[0.01, -0.68, 0.02]}
        rotation={[1.57, 0, 0.02]}
        scale={0.98}
        material-color={props.customColors.mesh1}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base2L2.geometry}
        material={materials["Base.005"]}
        position={[0.01, 0.39, 0.02]}
        rotation={[1.57, 0, 0.02]}
        scale={0.78}
        material-color={props.customColors.mesh2}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plate.geometry}
        material={materials["1004.001"]}
        position={[0.02, 3.11, 0.01]}
        rotation={[1.57, 0, 0.02]}
        scale={1.21}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L017.geometry}
        material={materials["1001.003"]}
        position={[0.71, 1.36, 0.03]}
        rotation={[1.57, 0, 0.02]}
        scale={0.07}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L016.geometry}
        material={materials["1001.003"]}
        position={[0.65, 1.36, 0.27]}
        rotation={[1.57, 0, 0.37]}
        scale={0.07}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L015.geometry}
        material={materials["1001.003"]}
        position={[0.52, 1.36, 0.47]}
        rotation={[1.57, 0, 0.72]}
        scale={0.07}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L014.geometry}
        material={materials["1001.003"]}
        position={[0.32, 1.37, 0.61]}
        rotation={[1.57, 0, 1.07]}
        scale={0.07}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L013.geometry}
        material={materials["1001.003"]}
        position={[0.09, 1.37, 0.67]}
        rotation={[1.57, 0, 1.41]}
        scale={0.07}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L012.geometry}
        material={materials["1001.003"]}
        position={[-0.15, 1.37, 0.65]}
        rotation={[1.57, 0, 1.76]}
        scale={0.07}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L011.geometry}
        material={materials["1001.003"]}
        position={[-0.37, 1.37, 0.55]}
        rotation={[1.57, 0, 2.11]}
        scale={0.07}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L010.geometry}
        material={materials["1001.003"]}
        position={[-0.54, 1.37, 0.39]}
        rotation={[1.57, 0, 2.46]}
        scale={0.07}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L009.geometry}
        material={materials["1001.003"]}
        position={[-0.65, 1.37, 0.17]}
        rotation={[1.57, 0, 2.81]}
        scale={0.07}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L008.geometry}
        material={materials["1001.003"]}
        position={[-0.67, 1.37, -0.07]}
        rotation={[1.57, 0, -3.12]}
        scale={0.07}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L007.geometry}
        material={materials["1001.003"]}
        position={[-0.61, 1.37, -0.3]}
        rotation={[1.57, 0, -2.77]}
        scale={0.07}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L006.geometry}
        material={materials["1001.003"]}
        position={[-0.47, 1.37, -0.5]}
        rotation={[1.57, 0, -2.42]}
        scale={0.07}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L005.geometry}
        material={materials["1001.003"]}
        position={[-0.28, 1.37, -0.64]}
        rotation={[1.57, 0, -2.08]}
        scale={0.07}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L004.geometry}
        material={materials["1001.003"]}
        position={[-0.05, 1.36, -0.71]}
        rotation={[1.57, 0, -1.73]}
        scale={0.07}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L003.geometry}
        material={materials["1001.003"]}
        position={[0.19, 1.36, -0.69]}
        rotation={[1.57, 0, -1.38]}
        scale={0.07}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L002.geometry}
        material={materials["1001.003"]}
        position={[0.41, 1.36, -0.59]}
        rotation={[1.57, 0, -1.03]}
        scale={0.07}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L001.geometry}
        material={materials["1001.003"]}
        position={[0.59, 1.36, -0.42]}
        rotation={[1.57, 0, -0.68]}
        scale={0.07}
        material-color={props.customColors.stripes2x}
        visible = {props.customLeg.legs === 2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2L.geometry}
        material={materials["1001.003"]}
        position={[0.69, 1.36, -0.2]}
        rotation={[1.57, 0, -0.33]}
        scale={0.07}
        material-color={props.customColors.stripes2}
        visible = {props.customLeg.legs === 2}
      />
  </group>
  )
}
function App() {
  
  const handleClick = () => {
    const element = document.getElementById('list')
    if (element.style.display = "none"){
      element.style.display = "flex";
      
    } else{
      element.style.display = "none";
    }
  }
  const deleteClick = () => {
    const element = document.getElementById('list')
    if (element.style.display = "none"){
      element.style.display = "none";
      
    } else{
      element.style.display = "none";
    }
  }
  
    

  
 
  const [mesh1,setMesh1] = useState("#ffffff")
  const [stripes1,setStripes1] = useState("#ffffff")
  const [soul1,setSoul1] = useState("#ffffff")
  const [mesh2,setMesh2] = useState("#ffffff")
  const [stripes2,setStripes2] = useState(stripes1)
  const [soul2,setSoul2] = useState(soul1)
  const [legs,setLeg] = useState(1)
  
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>
           
            
            

            <form className="mt-10">

              {/* Layerss */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Layer</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Layer guide
                  </a>
                </div>
                <div id="btn"
                  className={`item ${legs === 1 ? "item--active" : ""}`}
                  onClick={() => setLeg(1)+deleteClick()}
                 
                  >
                    <div className="item__label">1</div>
                </div>
                
                <div
                  className={`item ${legs === 2 ? "item--active" : ""}`}
                  onClick= {() => setLeg(2)+handleClick()}
                  >
                    <div className="item__label">2</div>
                </div>
                
                

              

                
              </div>
              <div>-----------------------------------------------------</div>
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                  <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                  
                
                        
                    
                  </div>
                </RadioGroup>
              </div>
              <div className='colors'> Layer1
                    <div>
                        <input type="color" id="mesh" name="mesh" className ="cselector"
                              value={mesh1} 
                              onChange={(e) => setMesh1(e.target.value)+ setMesh2(e.target.value)}/>
                        <label for="mesh">Base(1)</label>
                        
                      </div>

                    <div>
                        <input type="color" id="stripes" name="stripes" className ="cselector"
                                value={stripes1}
                                onChange={(e) => setStripes1(e.target.value)+ setStripes2(e.target.value)}/>
                        <label for="stripes">Tops(1)</label>
                        
                    </div>
                    <div>
                        <input type="color" id="soul" name="soul" className ="cselector"
                                value={soul1} 
                                onChange={(e) => setSoul1(e.target.value)+ setSoul2(e.target.value)}/>
                        <label for="soul">Frosting(1)</label>
                    </div>
                </div>
                
              <div  id='list'>  Layer2
                    <div>
                        <input type="color" id="mesh" name="mesh" className ="cselector"
                              value={mesh2} 
                              onChange={(e) => setMesh2(e.target.value)}/>
                        <label for="mesh">Base(2)</label>
                      </div>

                    <div>
                        <input type="color" id="stripes" name="stripes" className ="cselector"
                                value= {stripes2}
                                onChange={(e) => setStripes2(e.target.value)}/>

                        <label for="stripes">Tops(2)</label>
                    </div>
                    <div>
                        <input type="color" id="soul" name="soul" className ="cselector"
                                value={soul2} 
                                onChange={(e) => setSoul2(e.target.value)}/>
                        <label for="soul">Frosting(2)</label>
                    </div>
                </div>
              

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div className="card">
            <div className="product-canvas">
                   <Canvas>
                      <Suspense fallback={null}>
                          <ambientLight/>
                          <pointLight position={[10, 10, 10]} />
                          <pointLight position={[10, 10, 10]} />
                        
                          <spotLight intensity={0.9} 
                                     angle={0.1} 
                                     penumbra={1} 
                                     position={[10,15,10]}
                                     //castShadow  
                                     />
                          <Model customColors={{mesh1:mesh1, stripes1:stripes1 , soul1:soul1, mesh2:mesh2, stripes2:stripes2 , soul2:soul2}} customLeg={{legs:legs}}/>
                          <OrbitControls enablePan={true}
                                         enableZoom={true}
                                         enableRotate={true}/>
                      </Suspense>
                   </Canvas>
                </div>    
                </div> 
            
          </div>
        </div>
      </div>
    </div>
    
    /*<div className="App">
        <div className="wrapper">
            <div className="card">
                <div className="product-canvas">
                   <Canvas>
                      <Suspense fallback={null}>
                          <ambientLight/>
                          <spotLight intensity={0.9} 
                                     angle={0.1} 
                                     penumbra={1} 
                                     position={[10,15,10]}
                                     //castShadow  
                                     />
                          <Model customColors={{mesh:mesh, stripes:stripes , soul:soul }}/>
                          <OrbitControls enablePan={true}
                                         enableZoom={true}
                                         enableRotate={true}/>
                      </Suspense>
                   </Canvas>
                </div>
                <h2>Color chooser</h2>
                <div className='colors'>
                    <div>
                        <input type="color" id="mesh" name="mesh"
                              value={mesh} 
                              onChange={(e) => setMesh(e.target.value)}/>
                        <label for="mesh">Base</label>
                      </div>

                    <div>
                        <input type="color" id="stripes" name="stripes"
                                value= {stripes}
                                onChange={(e) => setStripes(e.target.value)}/>
                        <label for="stripes">Tops</label>
                    </div>
                    <div>
                        <input type="color" id="soul" name="soul"
                                value={soul} 
                                onChange={(e) => setSoul(e.target.value)}/>
                        <label for="soul">Frosting</label>
                    </div>
                </div>
            </div>
        </div>
    </div> */
  );
}

export default App;