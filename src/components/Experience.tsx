import {
  Html,
  useGLTF,
  Environment,
  Float,
  PresentationControls,
  ContactShadows,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Loader from "./Loader"; // Import the loader

const Experience = (props: { isChecked: boolean }) => {
  const [loading, setLoading] = useState(true); // Track loading state
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  useEffect(() => {
    if (computer) {
      setLoading(false); // Set loading to false once the GLTF is loaded
    }
  }, [computer]);

  // Local state to trigger CSS animation
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    if (props.isChecked == false) {
      setShowIframe(true);
    } else {
      const timeoutId = setTimeout(() => setShowIframe(false), 300);
      return () => clearTimeout(timeoutId);
    }
  }, [props.isChecked == false]);

  return (
    <>
      {loading ? (
        <Loader /> // Show loader while loading
      ) : (
        <Canvas style={{ height: "100vh", width: "100vw" }}>
          <Environment preset="city" />
          <color args={["#695b5b"]} attach="background" />
          <PresentationControls
            global
            rotation={[0.13, 0.7, 0]}
            polar={[-0.1, 0.2]}
            azimuth={[-1, 0.75]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 2, tension: 400 }}
          >
            <Float rotationIntensity={0.4}>
              <rectAreaLight
                width={2.5}
                height={1.65}
                color={"#efc9ef"}
                intensity={65}
                rotation={[0.1, Math.PI, 0]}
                position={[0, 0.55, -1.15]}
              />

              <primitive object={computer.scene} position-y={-1.2} scale={1.1}>
                <Html
                  transform
                  wrapperClass="htmlScreen"
                  distanceFactor={1.17}
                  position={[0, 1.56, -1.4]}
                  rotation-x={-0.256}
                >
                  {showIframe ? (
                    <iframe
                      src="https://poppatheduke.github.io/CV-/"
                      className={`iframe ${
                        props.isChecked == false
                          ? "iframe--visible"
                          : "iframe--hidden"
                      }`}
                    ></iframe>
                  ) : null}
                </Html>
              </primitive>
              <Text
                position={[3, 0.75, 0.75]}
                fontSize={1}
                rotation-y={-1.25}
                maxWidth={2}
                textAlign="center"
              >
                DUKE KONGO
              </Text>
            </Float>
          </PresentationControls>
          <ContactShadows
            position-y={-1.2}
            opacity={0.6}
            scale={5}
            blur={2.4}
          />
        </Canvas>
      )}
    </>
  );
};

export default Experience;
