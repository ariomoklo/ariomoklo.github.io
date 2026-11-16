import{A as e,B as t,D as n,F as r,I as i,L as a,M as o,P as s,V as c,W as l,a as u,c as d,i as f,j as p,m,n as h,p as g,r as _,u as v,x as y,y as b}from"../chunks/CYZ5UZkw.js";import{t as x}from"../chunks/D4SXeBx6.js";import"../chunks/YTSM617x.js";var S=`#ifdef GL_FRAGMENT_PRECISION_HIGH
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
`,w=y(`<div class="relative h-full w-full overflow-hidden bg-linear-to-b from-[#000d05] via-[#333833] to-[#b8c4bc]"><canvas class="absolute inset-0 h-full w-full" aria-hidden="true"></canvas> <div class="pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay" aria-hidden="true"></div></div>`);function T(o,d){c(d,!1);let f=r();function m(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null)):null}g(()=>{let e=n(f).getContext(`webgl`,{antialias:!1,depth:!1,alpha:!1});if(!e)return;let t=m(e,e.VERTEX_SHADER,C),r=m(e,e.FRAGMENT_SHADER,S),a=e.createProgram();if(!t||!r||!a||(e.attachShader(a,t),e.attachShader(a,r),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)))return;e.useProgram(a);let o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);let s=e.getAttribLocation(a,`a_pos`);e.enableVertexAttribArray(s),e.vertexAttribPointer(s,2,e.FLOAT,!1,0,0);let c=e.getUniformLocation(a,`u_res`),l=e.getUniformLocation(a,`u_time`),u=performance.now(),d=0,p=()=>{e.uniform1f(l,(performance.now()-u)/1e3),e.drawArrays(e.TRIANGLES,0,3)},h=()=>{p(),d=requestAnimationFrame(h)},g=()=>{let t=Math.max(1,Math.round(n(f).clientWidth*1)),r=Math.max(1,Math.round(n(f).clientHeight*1));(n(f).width!==t||n(f).height!==r)&&(i(f,n(f).width=t),i(f,n(f).height=r),e.viewport(0,0,t,r),e.uniform2f(c,t,r))},_=new ResizeObserver(g);return _.observe(n(f)),g(),d=requestAnimationFrame(h),()=>{cancelAnimationFrame(d),_.disconnect(),e.deleteBuffer(o),e.deleteProgram(a),e.deleteShader(t),e.deleteShader(r)}}),h();var v=w(),y=p(v);_(y,e=>a(f,e),()=>n(f));var T=s(y,2);let E;l(v),e(e=>E=u(T,``,E,{"background-image":e,"background-size":`256px 256px`}),[()=>`url('${x(`assets/noise-gradient-grain.png`)??``}')`]),b(o,v),t()}var E=y(`<div class="fixed top-0 left-0 w-full h-full -z-40 bg-black/50" aria-hidden="true"></div> <figure class="pointer-events-none fixed top-0 left-0 -z-50 h-full w-full overflow-hidden" aria-hidden="true"><!></figure>`,1);function D(e){var t=E(),n=s(o(t),2);T(p(n),{}),l(n),b(e,t)}var O=y(`<link rel="shortcut icon" id="emojicon"/> <!>`,1),k=y(`<!> <div data-sveltekit-preload-data="hover" style="display: contents"><!></div>`,1);function A(n,r){c(r,!0);var i=k();d(`1br2sqw`,t=>{var n=O(),r=o(n),i=s(r,2);v(i,()=>`<script src="https://platform.linkedin.com/badges/js/profile.js" async defer><\/script><script src="https://unpkg.com/emojicon"><\/script><script>emojicon.set("👻")<\/script>`),e(e=>f(r,`href`,e),[()=>x(`favicon.png`)]),b(t,n)});var a=o(i);D(a,{});var u=s(a,2),h=p(u);m(h,()=>r.children),l(u),b(n,i),t()}export{A as component};