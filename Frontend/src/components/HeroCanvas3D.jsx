import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroCanvas3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Respect accessibility prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = mountRef.current;
    if (!container) return;

    let renderer, scene, camera, points, outerPoints, animationFrameId;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    try {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

      // 1. Scene & Camera
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
      camera.position.z = 42;

      // 2. WebGL Renderer with Alpha & mobile-optimized pixel ratio
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
      renderer.setSize(width, height);
      const isMobile = window.innerWidth < 768;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.2 : 1.5));
      container.appendChild(renderer.domElement);

      // Create a smooth radial particle texture on the fly (soft glowing circles)
      const createParticleTexture = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.35, 'rgba(255, 255, 255, 0.85)');
        gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.25)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(32, 32, 30, 0, Math.PI * 2);
        ctx.fill();
        const texture = new THREE.CanvasTexture(canvas);
        return texture;
      };

      const particleTexture = createParticleTexture();

      // 3. Healthcare Light Palette Particle Geometry
      const particleCount = isMobile ? 420 : 1100;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const colorTeal = new THREE.Color('#2A9D8F');
      const colorAqua = new THREE.Color('#48B5A3');
      const colorCoral = new THREE.Color('#E76F51');
      const colorPeach = new THREE.Color('#F4A261');
      const colorSky = new THREE.Color('#3A86C8');

      for (let i = 0; i < particleCount; i++) {
        // Spherical organic constellation
        const radius = 17 + Math.random() * 9;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        // Warm healthcare color distribution: 40% Teal/Aqua, 30% Coral/Peach, 30% Sky
        const rand = Math.random();
        let pColor;
        if (rand < 0.25) pColor = colorTeal;
        else if (rand < 0.5) pColor = colorAqua;
        else if (rand < 0.72) pColor = colorCoral;
        else if (rand < 0.88) pColor = colorPeach;
        else pColor = colorSky;

        colors[i * 3] = pColor.r;
        colors[i * 3 + 1] = pColor.g;
        colors[i * 3 + 2] = pColor.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      // 4. Material configured for light canvas
      const material = new THREE.PointsMaterial({
        size: isMobile ? 0.8 : 0.65,
        map: particleTexture,
        vertexColors: true,
        transparent: true,
        opacity: 0.75,
        blending: THREE.NormalBlending,
        depthWrite: false,
      });

      points = new THREE.Points(geometry, material);
      scene.add(points);

      // 5. Outer subtle ambient orbital ring of soft peach/coral floating dots (optimized for mobile)
      const outerCount = isMobile ? 50 : 180;
      const outerGeo = new THREE.BufferGeometry();
      const outerPos = new Float32Array(outerCount * 3);
      for (let i = 0; i < outerCount; i++) {
        const rad = 26 + Math.random() * 12;
        const angle = Math.random() * Math.PI * 2;
        outerPos[i * 3] = Math.cos(angle) * rad;
        outerPos[i * 3 + 1] = (Math.random() - 0.5) * 16;
        outerPos[i * 3 + 2] = Math.sin(angle) * rad;
      }
      outerGeo.setAttribute('position', new THREE.BufferAttribute(outerPos, 3));
      const outerMat = new THREE.PointsMaterial({
        size: isMobile ? 0.5 : 0.4,
        map: particleTexture,
        color: new THREE.Color('#E76F51'),
        transparent: true,
        opacity: 0.4,
        blending: THREE.NormalBlending,
        depthWrite: false,
      });
      outerPoints = new THREE.Points(outerGeo, outerMat);
      scene.add(outerPoints);

      // 6. Mouse tracking handler (desktop only)
      const handleMouseMove = (e) => {
        if (window.innerWidth < 768) return;
        targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      };

      // 7. Resize handler
      const handleResize = () => {
        if (!container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      if (!isMobile) {
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
      }
      window.addEventListener('resize', handleResize);

      // 8. Animation Loop
      let clock = new THREE.Clock();
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        // Smooth mouse damping
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;

        // Subtle continuous rotation
        points.rotation.y = elapsedTime * 0.07 + mouseX * 0.4;
        points.rotation.x = elapsedTime * 0.03 + mouseY * 0.25;

        outerPoints.rotation.y = -elapsedTime * 0.03 + mouseX * 0.2;
        outerPoints.rotation.z = elapsedTime * 0.02;

        renderer.render(scene, camera);
      };

      animate();

      // Cleanup
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        if (renderer && renderer.domElement) {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        }
        if (geometry) geometry.dispose();
        if (material) material.dispose();
        if (outerGeo) outerGeo.dispose();
        if (outerMat) outerMat.dispose();
        if (particleTexture) particleTexture.dispose();
      };
    } catch (err) {
      console.warn('WebGL particle initialization fallback triggered:', err);
    }
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none opacity-85"
      aria-hidden="true"
    />
  );
};

export default HeroCanvas3D;
