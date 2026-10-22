"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ArchitectureCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;
    containerEl.dataset.canvasState = "starting";

    let frame = 0;
    let renderer: THREE.WebGLRenderer | null = null;
    let observer: ResizeObserver | null = null;
    let stopped = false;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = containerEl.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 1.2;
      targetY = -(y / rect.height) * 1.2;
    };

    const boot = () => {
      if (stopped) return;

      try {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
        camera.position.set(0, 0, 24);

        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        renderer.domElement.style.display = "block";
        containerEl.appendChild(renderer.domElement);

        const systemGroup = new THREE.Group();
        scene.add(systemGroup);
        scene.add(new THREE.AmbientLight(0x090d15, 2.5));

        const blueLight = new THREE.PointLight(0x2563eb, 4, 50);
        blueLight.position.set(-10, 8, 12);
        scene.add(blueLight);

        const cyanLight = new THREE.PointLight(0x22d3ee, 5, 50);
        cyanLight.position.set(10, -6, 10);
        scene.add(cyanLight);

        const nodeCount = 38;
        const clusterCenters = [
          new THREE.Vector3(-4.5, 2.2, 0),
          new THREE.Vector3(4.0, -1.5, 1.5),
          new THREE.Vector3(0.5, 4.0, -2),
          new THREE.Vector3(-1.0, -3.5, -1),
          new THREE.Vector3(0, 0, 3),
        ];

        const sphereGeo = new THREE.SphereGeometry(0.22, 16, 16);
        const coreNodeGeo = new THREE.SphereGeometry(0.55, 24, 24);
        const octaGeo = new THREE.OctahedronGeometry(0.35);
        const boxGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);

        const cyanMat = new THREE.MeshPhongMaterial({
          color: 0x22d3ee,
          emissive: 0x0891b2,
          specular: 0xffffff,
          shininess: 90,
        });
        const blueMat = new THREE.MeshPhongMaterial({
          color: 0x2563eb,
          emissive: 0x1d4ed8,
          specular: 0x93c5fd,
          shininess: 80,
        });
        const accentMat = new THREE.MeshPhongMaterial({
          color: 0xf4f7fb,
          emissive: 0x22d3ee,
          specular: 0xffffff,
          shininess: 100,
        });

        const nodes: THREE.Mesh[] = [];
        const nodePositions: THREE.Vector3[] = [];

        for (let i = 0; i < nodeCount; i++) {
          const cluster = clusterCenters[i % clusterCenters.length];
          const pos = cluster.clone().add(
            new THREE.Vector3(
              (Math.random() - 0.5) * 5.8,
              (Math.random() - 0.5) * 5.2,
              (Math.random() - 0.5) * 4.8,
            ),
          );
          nodePositions.push(pos);

          let mesh: THREE.Mesh;
          if (i < 4) mesh = new THREE.Mesh(coreNodeGeo, accentMat);
          else if (i % 3 === 0) mesh = new THREE.Mesh(octaGeo, cyanMat);
          else if (i % 3 === 1) mesh = new THREE.Mesh(boxGeo, blueMat);
          else mesh = new THREE.Mesh(sphereGeo, cyanMat);

          mesh.position.copy(pos);
          mesh.userData = {
            origin: pos.clone(),
            floatSpeed: 0.6 + Math.random() * 1.4,
            floatOffset: Math.random() * Math.PI * 2,
            rotSpeedX: (Math.random() - 0.5) * 0.02,
            rotSpeedY: (Math.random() - 0.5) * 0.02,
          };
          systemGroup.add(mesh);
          nodes.push(mesh);
        }

        const lineMat = new THREE.LineBasicMaterial({
          color: 0x22d3ee,
          transparent: true,
          opacity: 0.28,
        });
        const activeLineMat = new THREE.LineBasicMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0.65,
        });
        const connections: {
          line: THREE.Line;
          nodeA: THREE.Mesh;
          nodeB: THREE.Mesh;
        }[] = [];
        const linesGroup = new THREE.Group();
        systemGroup.add(linesGroup);

        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dist = nodePositions[i].distanceTo(nodePositions[j]);
            if (dist < 4.2) {
              const geometry = new THREE.BufferGeometry().setFromPoints([
                nodes[i].position.clone(),
                nodes[j].position.clone(),
              ]);
              const line = new THREE.Line(
                geometry,
                dist < 2.5 ? activeLineMat : lineMat,
              );
              linesGroup.add(line);
              connections.push({ line, nodeA: nodes[i], nodeB: nodes[j] });
            }
          }
        }

        const ring1 = new THREE.Mesh(
          new THREE.RingGeometry(6.2, 6.26, 64),
          new THREE.MeshBasicMaterial({
            color: 0x1e3a8a,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.35,
          }),
        );
        ring1.rotation.x = Math.PI / 3;
        systemGroup.add(ring1);

        const ring2 = new THREE.Mesh(
          new THREE.RingGeometry(8.5, 8.54, 64),
          new THREE.MeshBasicMaterial({
            color: 0x0e7490,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.22,
          }),
        );
        ring2.rotation.y = -Math.PI / 4;
        ring2.rotation.x = Math.PI / 5;
        systemGroup.add(ring2);

        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        const resize = () => {
          if (!renderer) return;
          const width = containerEl.clientWidth || 600;
          const height = containerEl.clientHeight || 540;
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height, false);
        };

        resize();
        observer = new ResizeObserver(resize);
        observer.observe(containerEl);
        containerEl.addEventListener("mousemove", onMouseMove);

        const startedAt = performance.now();
        const animate = () => {
          frame = requestAnimationFrame(animate);
          if (!renderer) return;
          const elapsedTime = reducedMotion
            ? 0.4
            : (performance.now() - startedAt) / 1000;

          if (!reducedMotion) {
            mouseX += (targetX - mouseX) * 0.05;
            mouseY += (targetY - mouseY) * 0.05;
            systemGroup.rotation.y = elapsedTime * 0.08 + mouseX * 0.6;
            systemGroup.rotation.x =
              Math.sin(elapsedTime * 0.06) * 0.12 + mouseY * 0.6;
            ring1.rotation.z = elapsedTime * 0.05;
            ring2.rotation.z = -elapsedTime * 0.03;

            for (const node of nodes) {
              const data = node.userData as {
                origin: THREE.Vector3;
                floatSpeed: number;
                floatOffset: number;
                rotSpeedX: number;
                rotSpeedY: number;
              };
              node.position.y =
                data.origin.y +
                Math.sin(elapsedTime * data.floatSpeed + data.floatOffset) *
                  0.25;
              node.position.x =
                data.origin.x +
                Math.cos(
                  elapsedTime * (data.floatSpeed * 0.7) + data.floatOffset,
                ) *
                  0.18;
              node.rotation.x += data.rotSpeedX;
              node.rotation.y += data.rotSpeedY;
            }

            for (const connection of connections) {
              const positions = connection.line.geometry.attributes.position
                .array as Float32Array;
              positions[0] = connection.nodeA.position.x;
              positions[1] = connection.nodeA.position.y;
              positions[2] = connection.nodeA.position.z;
              positions[3] = connection.nodeB.position.x;
              positions[4] = connection.nodeB.position.y;
              positions[5] = connection.nodeB.position.z;
              connection.line.geometry.attributes.position.needsUpdate = true;
            }
          }

          renderer.render(scene, camera);
        };
        animate();
        containerEl.dataset.canvasState = "live";
      } catch (error) {
        containerEl.dataset.canvasState = "failed";
        containerEl.dataset.canvasError =
          error instanceof Error ? error.message : "unknown";
        console.error(error);
      }
    };

    boot();

    return () => {
      stopped = true;
      cancelAnimationFrame(frame);
      observer?.disconnect();
      containerEl.removeEventListener("mousemove", onMouseMove);
      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" />;
}
