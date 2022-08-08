import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { GLTFLoader, GLTLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const {
    BoxBufferGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
  } = require('three');
  
  // Get a reference to the container element that will hold our scene
  const container = document.querySelector('#scene-container');
  
  // Set the background color
  scene.background = new Color('skyblue');
  
  // Create a camera
  const fov = 35; // AKA Field of View
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1; // the near clipping plane
  const far = 100; // the far clipping plane
  
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  
  // every object is initially created at ( 0, 0, 0 )
  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);
  
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);
  
  // create a default (white) Basic material
  const material = new MeshBasicMaterial();
  
  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);