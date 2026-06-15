'use client'
import { useEffect, useRef } from 'react'
import './Grainient.css'

interface GrainientProps {
  timeSpeed?: number
  colorBalance?: number
  warpStrength?: number
  warpFrequency?: number
  warpSpeed?: number
  warpAmplitude?: number
  blendAngle?: number
  blendSoftness?: number
  rotationAmount?: number
  noiseScale?: number
  grainAmount?: number
  grainScale?: number
  grainAnimated?: boolean
  contrast?: number
  gamma?: number
  saturation?: number
  centerX?: number
  centerY?: number
  zoom?: number
  color1?: string
  color2?: string
  color3?: string
  className?: string
}

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return [1, 1, 1]
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
  ]
}

const VERT = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const FRAG = `
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
#define S(a,b,t) smoothstep(a,b,t)
mat2 Rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);}
vec2 hash(vec2 p){p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));return fract(sin(p)*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);float n=mix(mix(dot(-1.0+2.0*hash(i+vec2(0.0,0.0)),f-vec2(0.0,0.0)),dot(-1.0+2.0*hash(i+vec2(1.0,0.0)),f-vec2(1.0,0.0)),u.x),mix(dot(-1.0+2.0*hash(i+vec2(0.0,1.0)),f-vec2(0.0,1.0)),dot(-1.0+2.0*hash(i+vec2(1.0,1.0)),f-vec2(1.0,1.0)),u.x),u.y);return 0.5+0.5*n;}
void mainImage(out vec4 o, vec2 C){
  float t=iTime*uTimeSpeed;
  vec2 uv=C/iResolution.xy;
  float ratio=iResolution.x/iResolution.y;
  vec2 tuv=uv-0.5+uCenterOffset;
  tuv/=max(uZoom,0.001);
  float degree=noise(vec2(t*0.1,tuv.x*tuv.y)*uNoiseScale);
  tuv.y*=1.0/ratio;
  tuv*=Rot(radians((degree-0.5)*uRotationAmount+180.0));
  tuv.y*=ratio;
  float frequency=uWarpFrequency;
  float ws=max(uWarpStrength,0.001);
  float amplitude=uWarpAmplitude/ws;
  float warpTime=t*uWarpSpeed;
  tuv.x+=sin(tuv.y*frequency+warpTime)/amplitude;
  tuv.y+=sin(tuv.x*(frequency*1.5)+warpTime)/(amplitude*0.5);
  vec3 colLav=uColor1;
  vec3 colOrg=uColor2;
  vec3 colDark=uColor3;
  float b=uColorBalance;
  float s=max(uBlendSoftness,0.0);
  mat2 blendRot=Rot(radians(uBlendAngle));
  float blendX=(tuv*blendRot).x;
  float edge0=-0.3-b-s;
  float edge1=0.2-b+s;
  float v0=0.5-b+s;
  float v1=-0.3-b-s;
  vec3 layer1=mix(colDark,colOrg,S(edge0,edge1,blendX));
  vec3 layer2=mix(colOrg,colLav,S(edge0,edge1,blendX));
  vec3 col=mix(layer1,layer2,S(v0,v1,tuv.y));
  vec2 grainUv=uv*max(uGrainScale,0.001);
  if(uGrainAnimated>0.5){grainUv+=vec2(iTime*0.05);}
  float grain=fract(sin(dot(grainUv,vec2(12.9898,78.233)))*43758.5453);
  col+=(grain-0.5)*uGrainAmount;
  col=(col-0.5)*uContrast+0.5;
  float luma=dot(col,vec3(0.2126,0.7152,0.0722));
  col=mix(vec3(luma),col,uSaturation);
  col=pow(max(col,0.0),vec3(1.0/max(uGamma,0.001)));
  col=clamp(col,0.0,1.0);
  o=vec4(col,1.0);
}
void main(){
  vec4 o=vec4(0.0);
  mainImage(o,gl_FragCoord.xy);
  gl_FragColor=o;
}
`

function compileShader(gl: WebGLRenderingContext, type: number, src: string): WebGLShader | null {
  const sh = gl.createShader(type)
  if (!sh) return null
  gl.shaderSource(sh, src)
  gl.compileShader(sh)
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error('Grainient shader error:', gl.getShaderInfoLog(sh))
    gl.deleteShader(sh)
    return null
  }
  return sh
}

export default function Grainient({
  timeSpeed = 0.25,
  colorBalance = 0.0,
  warpStrength = 1.0,
  warpFrequency = 5.0,
  warpSpeed = 2.0,
  warpAmplitude = 50.0,
  blendAngle = 0.0,
  blendSoftness = 0.05,
  rotationAmount = 500.0,
  noiseScale = 2.0,
  grainAmount = 0.1,
  grainScale = 2.0,
  grainAnimated = false,
  contrast = 1.5,
  gamma = 1.0,
  saturation = 1.0,
  centerX = 0.0,
  centerY = 0.0,
  zoom = 0.9,
  color1 = '#FF9FFC',
  color2 = '#5227FF',
  color3 = '#B19EEF',
  className = '',
}: GrainientProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let raf = 0
    let cancelIdle: (() => void) | null = null
    let glCleanup: (() => void) | null = null

    const init = () => {
      const canvas = document.createElement('canvas')
      // Start invisible — fade in once the first frame is drawn
      canvas.style.cssText =
        'position:absolute;top:0;left:0;width:100%;height:100%;display:block;opacity:0;transition:opacity 0.8s ease;'

      const gl = (
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl' as 'webgl')
      ) as WebGLRenderingContext | null
      if (!gl) return

      const vs = compileShader(gl, gl.VERTEX_SHADER, VERT)
      const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAG)
      if (!vs || !fs) return

      const prog = gl.createProgram()
      if (!prog) return
      gl.attachShader(prog, vs)
      gl.attachShader(prog, fs)
      gl.linkProgram(prog)
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        console.error('Grainient link error:', gl.getProgramInfoLog(prog))
        return
      }
      gl.useProgram(prog)

      const buf = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, buf)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
      const aPos = gl.getAttribLocation(prog, 'position')
      gl.enableVertexAttribArray(aPos)
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

      const uTime   = gl.getUniformLocation(prog, 'iTime')
      const uRes    = gl.getUniformLocation(prog, 'iResolution')
      const uCenter = gl.getUniformLocation(prog, 'uCenterOffset')

      gl.uniform1f(gl.getUniformLocation(prog, 'uTimeSpeed'),      timeSpeed)
      gl.uniform1f(gl.getUniformLocation(prog, 'uColorBalance'),   colorBalance)
      gl.uniform1f(gl.getUniformLocation(prog, 'uWarpStrength'),   warpStrength)
      gl.uniform1f(gl.getUniformLocation(prog, 'uWarpFrequency'),  warpFrequency)
      gl.uniform1f(gl.getUniformLocation(prog, 'uWarpSpeed'),      warpSpeed)
      gl.uniform1f(gl.getUniformLocation(prog, 'uWarpAmplitude'),  warpAmplitude)
      gl.uniform1f(gl.getUniformLocation(prog, 'uBlendAngle'),     blendAngle)
      gl.uniform1f(gl.getUniformLocation(prog, 'uBlendSoftness'),  blendSoftness)
      gl.uniform1f(gl.getUniformLocation(prog, 'uRotationAmount'), rotationAmount)
      gl.uniform1f(gl.getUniformLocation(prog, 'uNoiseScale'),     noiseScale)
      gl.uniform1f(gl.getUniformLocation(prog, 'uGrainAmount'),    grainAmount)
      gl.uniform1f(gl.getUniformLocation(prog, 'uGrainScale'),     grainScale)
      gl.uniform1f(gl.getUniformLocation(prog, 'uGrainAnimated'),  grainAnimated ? 1.0 : 0.0)
      gl.uniform1f(gl.getUniformLocation(prog, 'uContrast'),       contrast)
      gl.uniform1f(gl.getUniformLocation(prog, 'uGamma'),          gamma)
      gl.uniform1f(gl.getUniformLocation(prog, 'uSaturation'),     saturation)
      gl.uniform1f(gl.getUniformLocation(prog, 'uZoom'),           zoom)
      gl.uniform2f(uCenter, centerX, centerY)
      gl.uniform3fv(gl.getUniformLocation(prog, 'uColor1'), hexToRgb(color1))
      gl.uniform3fv(gl.getUniformLocation(prog, 'uColor2'), hexToRgb(color2))
      gl.uniform3fv(gl.getUniformLocation(prog, 'uColor3'), hexToRgb(color3))

      container.appendChild(canvas)

      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      const setSize = () => {
        const { width, height } = container.getBoundingClientRect()
        const w = Math.max(1, Math.round(width * dpr))
        const h = Math.max(1, Math.round(height * dpr))
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
        gl.uniform2f(uRes, w, h)
      }

      const ro = new ResizeObserver(setSize)
      ro.observe(container)
      setSize()

      let firstFrame = true
      const t0 = performance.now()
      const loop = (t: number) => {
        gl.uniform1f(uTime, (t - t0) * 0.001)
        gl.drawArrays(gl.TRIANGLES, 0, 3)
        // Fade in after the first frame is confirmed rendered
        if (firstFrame) {
          firstFrame = false
          canvas.style.opacity = '1'
        }
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)

      glCleanup = () => {
        cancelAnimationFrame(raf)
        ro.disconnect()
        try { container.removeChild(canvas) } catch { /* ignore */ }
        const ext = gl.getExtension('WEBGL_lose_context')
        if (ext) ext.loseContext()
      }
    }

    // Defer WebGL init until the browser is idle so it never blocks
    // the initial paint or LCP. Falls back to a 200ms timeout on
    // browsers that don't support requestIdleCallback (e.g. Safari < 16).
    if ('requestIdleCallback' in window) {
      const id = (window as unknown as { requestIdleCallback: (cb: () => void, o: object) => number })
        .requestIdleCallback(init, { timeout: 2000 })
      cancelIdle = () =>
        (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(id)
    } else {
      const id = window.setTimeout(init, 200)
      cancelIdle = () => window.clearTimeout(id)
    }

    return () => {
      cancelIdle?.()
      glCleanup?.()
    }
  }, [
    timeSpeed, colorBalance, warpStrength, warpFrequency, warpSpeed,
    warpAmplitude, blendAngle, blendSoftness, rotationAmount, noiseScale,
    grainAmount, grainScale, grainAnimated, contrast, gamma, saturation,
    centerX, centerY, zoom, color1, color2, color3,
  ])

  return (
    <div
      ref={containerRef}
      className={`grainient-container ${className}`.trim()}
      style={{
        backgroundImage: 'url(/brand/hero-gradient.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  )
}
