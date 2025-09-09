import { memo, useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import nodejs from "../../public/assets/images/nodejs.png";
const image = [
  {
    src: "/assets/images/csharp.png",
    height: 80,
    width: 80,
  },
  {
    src: "/assets/images/api.png",
    height: 80,
    width: 80,
  },
  {
    src: "/assets/images/game-dev.png",
    height: 80,
    width: 80,
  },
  {
    src: "/assets/images/photon.svg",
    height: 80,
    width: 250,
  },
  {
    src: "/assets/images/unity.png",
    height: 80,
    width: 80,
  },
];
function ParticlesHeroSec() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Particles
      style={{
        zIndex: -1,
      }}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {},
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
          move: {
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: false,
              area: 800,
            },
            value: 15,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "images",
            options: {
              image,
            },
          },
          size: {
            value: { min: 15, max: 30 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
export default memo(ParticlesHeroSec);
