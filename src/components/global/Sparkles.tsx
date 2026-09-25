'use client'

import React from 'react'
import Particles, {
  ParticlesProvider,
} from '@tsparticles/react'

import type { Container, Engine } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

import { motion, useAnimation } from 'framer-motion'
import { cn } from '@/lib/utils'

type SparklesProps = {
  id?: string
  className?: string
  background?: string
  particleSize?: number
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}

export const SparklesCore = ({
  id,
  className,
  background = 'transparent',
  minSize = 1,
  maxSize = 3,
  speed = 4,
  particleColor = '#ffffff',
  particleDensity = 120,
}: SparklesProps) => {
  const controls = useAnimation()

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine)
  }

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      })
    }
  }

  return (
    <ParticlesProvider init={particlesInit}>
      <motion.div
        animate={controls}
        className={cn(
          'h-full w-full opacity-0',
          className
        )}
      >
        <Particles
          id={id || 'tsparticles'}
          className="h-full w-full"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background,
              },
            },

            fullScreen: {
              enable: false,
              zIndex: 1,
            },

            fpsLimit: 120,

            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },

                onHover: {
                  enable: false,
                  mode: 'repulse',
                },
              },

              modes: {
                push: {
                  quantity: 4,
                },

                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },

            particles: {
              color: {
                value: particleColor,
              },

              number: {
                density: {
                  enable: true,
                  width: 400,
                  height: 400,
                },

                value: particleDensity,
              },

              opacity: {
                value: {
                  min: 0.1,
                  max: 1,
                },

                animation: {
                  enable: true,
                  speed,
                  startValue: 'random',
                  destroy: 'none',
                },
              },

              size: {
                value: {
                  min: minSize,
                  max: maxSize,
                },
              },

              move: {
                enable: true,
                direction: 'none',

                outModes: {
                  default: 'out',
                },

                random: false,

                speed: {
                  min: 0.1,
                  max: 1,
                },

                straight: false,
              },

              shape: {
                type: 'circle',
              },

              links: {
                enable: false,
              },
            },

            detectRetina: true,
          }}
        />
      </motion.div>
    </ParticlesProvider>
  )
}