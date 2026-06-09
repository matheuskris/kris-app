'use client';

import { useEffect } from 'react';

const settings = {
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98,
};

class Oscillator {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;

  constructor(params: { phase?: number; offset?: number; frequency?: number; amplitude?: number } = {}) {
    this.phase = params.phase ?? Math.random() * Math.PI * 2;
    this.offset = params.offset ?? 0;
    this.frequency = params.frequency ?? 0.001;
    this.amplitude = params.amplitude ?? 1;
  }

  update() {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }
}

class TrailNode {
  x = 0;
  y = 0;
  vx = 0;
  vy = 0;
}

class TrailLine {
  spring: number;
  friction: number;
  nodes: TrailNode[];

  constructor(spring: number, initX: number, initY: number) {
    this.spring = spring + 0.1 * Math.random() - 0.02;
    this.friction = settings.friction + 0.01 * Math.random() - 0.002;
    this.nodes = Array.from({ length: settings.size }, () => {
      const n = new TrailNode();
      n.x = initX;
      n.y = initY;
      return n;
    });
  }

  update(cursorX: number, cursorY: number) {
    let spring = this.spring;
    const head = this.nodes[0];

    head.vx += (cursorX - head.x) * spring;
    head.vy += (cursorY - head.y) * spring;

    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      if (i > 0) {
        const prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * settings.dampening;
        node.vy += prev.vy * settings.dampening;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= settings.tension;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.nodes[0].x, this.nodes[0].y);

    let i: number;
    for (i = 1; i < this.nodes.length - 2; i++) {
      const xc = 0.5 * (this.nodes[i].x + this.nodes[i + 1].x);
      const yc = 0.5 * (this.nodes[i].y + this.nodes[i + 1].y);
      ctx.quadraticCurveTo(this.nodes[i].x, this.nodes[i].y, xc, yc);
    }

    ctx.quadraticCurveTo(
      this.nodes[i].x,
      this.nodes[i].y,
      this.nodes[i + 1].x,
      this.nodes[i + 1].y
    );
    ctx.stroke();
    ctx.closePath();
  }
}

export default function useCanvasCursor() {
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let running = true;
    let rafId: number;
    let lines: TrailLine[] = [];
    const pos = { x: 0, y: 0 };

    const wave = new Oscillator({
      phase: Math.random() * Math.PI * 2,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function initLines() {
      lines = Array.from({ length: settings.trails }, (_, i) =>
        new TrailLine(0.4 + (i / settings.trails) * 0.025, pos.x, pos.y)
      );
    }

    function onMove(e: MouseEvent | TouchEvent) {
      if ('touches' in e) {
        pos.x = e.touches[0].clientX;
        pos.y = e.touches[0].clientY;
      } else {
        pos.x = (e as MouseEvent).clientX;
        pos.y = (e as MouseEvent).clientY;
      }

      if (lines.length === 0) initLines();
    }

    function render() {
      if (!running) return;

      ctx!.globalCompositeOperation = 'source-over';
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.globalCompositeOperation = 'lighter';
      ctx!.strokeStyle = `hsla(${Math.round(wave.update())},50%,50%,0.2)`;
      ctx!.lineWidth = 1;

      for (const line of lines) {
        line.update(pos.x, pos.y);
        line.draw(ctx!);
      }

      rafId = requestAnimationFrame(render);
    }

    resize();
    render();

    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchstart', onMove);
    document.addEventListener('touchmove', onMove);
    window.addEventListener('resize', resize);
    window.addEventListener('blur', () => { running = false; });
    window.addEventListener('focus', () => {
      if (!running) {
        running = true;
        render();
      }
    });

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('touchstart', onMove);
      document.removeEventListener('touchmove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, []);
}
