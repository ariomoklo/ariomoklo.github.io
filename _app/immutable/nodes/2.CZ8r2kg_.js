import{A as e,E as t,F as n,O as r,P as i,R as a,T as o,_ as s,a as c,c as l,d as u,f as d,i as f,j as p,k as m,n as h,o as g,r as _,w as v,x as y,y as b}from"../chunks/2ipifeNr.js";import{t as x}from"../chunks/Dams4V9V.js";import"../chunks/lm6iWfwH.js";import"../chunks/YK5vPTRd.js";var S=`#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 u_res;
uniform float u_time;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

// Rounded cartoon puff: stacked circles sitting on the bank floor.
float puff(vec2 p, float cell, float seed, float base, float t) {
  float h1 = hash(vec2(cell, seed));
  float h2 = hash(vec2(seed, cell));
  float h3 = hash(vec2(cell + 11.0, seed + 5.0));
  float bob = sin(t * 0.55 + h2 * 6.283) * 0.035;

  float cx = cell + 0.5 + (h2 - 0.5) * 0.1;
  float cy = base + bob;

  // Big round body — the look from the earlier first-row clouds.
  float r = 0.55 + h1 * 0.18;
  float d = length(p - vec2(cx, cy + r * 0.35)) - r;

  // Side rounds so neighboring cells stay merged (no open arcs).
  d = smin(d, length(p - vec2(cx - 0.4, cy + r * 0.25)) - (r * 0.72), 0.12);
  d = smin(d, length(p - vec2(cx + 0.4, cy + r * 0.25)) - (r * 0.72), 0.12);

  // Crown round for a fuller cumulus top.
  d = smin(d, length(p - vec2(cx + (h3 - 0.5) * 0.2, cy + r * 0.85)) - (r * 0.55), 0.1);

  return d;
}

float cloud(vec2 p, float base, float seed, float t) {
  // Solid floor closes the bank underneath every row.
  float d = p.y - base;
  float cell = floor(p.x);

  for (int i = -2; i <= 2; i++) {
    d = smin(d, puff(p, cell + float(i), seed, base, t), 0.14);
  }

  return d;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float aspect = u_res.x / u_res.y;
  float aa = 1.5 / u_res.y;

  vec3 col = mix(vec3(0.0, 0.05, 0.02), vec3(0.06, 0.1, 0.08), smoothstep(1.0, 0.3, uv.y));

  for (int i = 0; i < 4; i++) {
    float fi = float(i);
    float k = fi / 3.0;
    // Match the denser, rounder first-row scale from before.
    float scale = 6.0 - fi * 1.1;
    float base = 0.72 - fi * 0.18;
    float speed = 0.015 + fi * 0.012;

    vec2 q = vec2(uv.x * aspect, uv.y) * scale;
    q.x += u_time * speed * scale + fi * 17.3;
    float d = cloud(q, base * scale, fi + 1.0, u_time) / scale;

    col *= 1.0 - 0.28 * smoothstep(0.05, 0.0, d);

    vec3 body = mix(vec3(0.13, 0.19, 0.15), vec3(0.6, 0.67, 0.62), k);
    vec3 rim = mix(vec3(0.27, 0.34, 0.29), vec3(0.86, 0.9, 0.87), k);
    // Soft cel rim on the rounded silhouette.
    vec3 layer = mix(rim, body, smoothstep(0.015, 0.04, -d));

    col = mix(col, layer, smoothstep(aa, -aa, d));
  }

  gl_FragColor = vec4(col, 1.0);
}
`,C=`attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`,w=b(`<div class="relative h-full w-full overflow-hidden bg-linear-to-b from-[#000d05] via-[#333833] to-[#b8c4bc]"><canvas class="absolute inset-0 h-full w-full" aria-hidden="true"></canvas> <div class="pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay" aria-hidden="true"></div></div>`);function T(t,l){n(l,!1);let d=m();function f(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null)):null}u(()=>{let t=y(d).getContext(`webgl`,{antialias:!1,depth:!1,alpha:!1});if(!t)return;let n=f(t,t.VERTEX_SHADER,C),r=f(t,t.FRAGMENT_SHADER,S),i=t.createProgram();if(!n||!r||!i||(t.attachShader(i,n),t.attachShader(i,r),t.linkProgram(i),!t.getProgramParameter(i,t.LINK_STATUS)))return;t.useProgram(i);let a=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);let o=t.getAttribLocation(i,`a_pos`);t.enableVertexAttribArray(o),t.vertexAttribPointer(o,2,t.FLOAT,!1,0,0);let s=t.getUniformLocation(i,`u_res`),c=t.getUniformLocation(i,`u_time`),l=performance.now(),u=0,p=()=>{t.uniform1f(c,(performance.now()-l)/1e3),t.drawArrays(t.TRIANGLES,0,3)},m=()=>{p(),u=requestAnimationFrame(m)},h=()=>{let n=Math.max(1,Math.round(y(d).clientWidth*1)),r=Math.max(1,Math.round(y(d).clientHeight*1));(y(d).width!==n||y(d).height!==r)&&(e(d,y(d).width=n),e(d,y(d).height=r),t.viewport(0,0,n,r),t.uniform2f(s,n,r))},g=new ResizeObserver(h);return g.observe(y(d)),h(),u=requestAnimationFrame(m),()=>{cancelAnimationFrame(u),g.disconnect(),t.deleteBuffer(a),t.deleteProgram(i),t.deleteShader(n),t.deleteShader(r)}}),h();var g=w(),b=o(g);_(b,e=>p(d,e),()=>y(d));var T=r(b,2);let E;a(g),v(e=>E=c(T,``,E,{"background-image":e,"background-size":`256px 256px`}),[()=>`url('${x(`assets/noise-gradient-grain.png`)??``}')`]),s(t,g),i()}var E=b(`<div class="fixed top-0 left-0 w-full h-full -z-40 bg-black/50" aria-hidden="true"></div> <figure class="pointer-events-none fixed top-0 left-0 -z-50 h-full w-full overflow-hidden" aria-hidden="true"><!></figure>`,1);function D(e){var n=E(),i=r(t(n),2);T(o(i),{}),a(i),s(e,n)}var O=b(`<link rel="shortcut icon" id="emojicon"/> <!>`,1),k=b(`<!> <div data-sveltekit-preload-data="hover" style="display: contents"><!></div>`,1);function A(e,c){n(c,!0);var u=k();g(`1br2sqw`,e=>{var n=O(),i=t(n),a=r(i,2);l(a,()=>`<script src="https://platform.linkedin.com/badges/js/profile.js" async defer><\/script><script src="https://unpkg.com/emojicon"><\/script><script>emojicon.set("👻")<\/script>`),v(e=>f(i,`href`,e),[()=>x(`favicon.png`)]),s(e,n)});var p=t(u);D(p,{});var m=r(p,2),h=o(m);d(h,()=>c.children),a(m),s(e,u),i()}export{A as component};