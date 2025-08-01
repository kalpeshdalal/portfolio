// This file extends the JSX namespace to support Three.js elements for React Three Fiber
import '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
    }
  }
}
