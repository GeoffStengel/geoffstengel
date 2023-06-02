function e() {
  (r.aspect = window.innerWidth / window.innerHeight),
    r.updateProjectionMatrix(),
    a.setSize(window.innerWidth, window.innerHeight);
}

function t() {
  const e = ((-performance.now() / 1e3) * Math.PI) / 20;
  let t = e - c.rotation.z;
  n(c, m, e, t), n(w, g, -e, -t), n(h, R, -e, -t), s.update(), a.render(o, r);
}

function n(e, t, n, i) {
  var a, o;
  e.rotation.z = n;
  const r = t.shadow.camera;
  (a = new THREE.Vector3(0, 0, 1)),
    (o = i),
    F.setFromAxisAngle(a, o),
    r.up.applyQuaternion(F);
}

import * as THREE from "three";

import { OrbitControls as i } from "three/addons/controls/OrbitControls.js";

let a,
  o,
  r,
  s,
  d,
  E,
  p,
  l,
  c,
  w,
  h,
  m,
  g,
  R,
  H,
  T,
  u,
  M,
  S,
  f,
  L,
  P,
  x = 20;

(d = new THREE.CubeTextureLoader()).setCrossOrigin(""),
  d.setPath("https://threejs.org/examples/textures/cube/pisa/"),
  d.load(
    ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
    function (n) {
      (S = n),
        (d = new THREE.TextureLoader()).setCrossOrigin(""),
        d.setPath("https://happy358.github.io/Images/textures/stainedglass/"),
        d.load("seamless3.jpg", function (n) {
          (n.minFilter = THREE.LinearFilter),
            (n.magFilter = THREE.LinearFilter),
            (n.encoding = THREE.sRGBEncoding),
            n.center.set(0.5, 0.5),
            (f = n),
            d.load("seamless1.jpg", function (n) {
              (n.minFilter = THREE.LinearFilter),
                (n.magFilter = THREE.LinearFilter),
                (n.encoding = THREE.sRGBEncoding),
                n.center.set(0.5, 0.5),
                (L = n),
                d.load("seamless4.jpg", function (n) {
                  (n.minFilter = THREE.LinearFilter),
                    (n.magFilter = THREE.LinearFilter),
                    (n.encoding = THREE.sRGBEncoding),
                    n.center.set(0.5, 0.5),
                    (P = n),
                    (function () {
                      (a = new THREE.WebGLRenderer({
                        antialias: !0
                      })).setPixelRatio(window.devicePixelRatio),
                        a.setSize(window.innerWidth, window.innerHeight),
                        document.body.appendChild(a.domElement),
                        (a.shadowMap.enabled = !0),
                        (a.shadowMap.type = THREE.PCFSoftShadowMap),
                        (a.outputEncoding = THREE.sRGBEncoding),
                        (a.toneMapping = THREE.ACESFilmicToneMapping),
                        (a.toneMappingExposure = 1),
                        a.setAnimationLoop(t),
                        (o = new THREE.Scene()),
                        (r = new THREE.PerspectiveCamera(
                          40,
                          window.innerWidth / window.innerHeight,
                          1,
                          1e3
                        )).position.set(0, 1.5 * x, 5 * x),
                        ((s = new i(r, a.domElement)).autoRotate = !0),
                        (s.autoRotateSpeed = 2),
                        (s.minDistance = 5),
                        (s.maxDistance = 100),
                        (s.maxPolarAngle = Math.PI / 2 - 0.1),
                        (s.enableDamping = !0),
                        (s.enablePan = !1),
                        s.target.set(0, 0, x),
                        s.update();
                      const n = new THREE.HemisphereLight(
                        16777215,
                        2236962,
                        0.05
                      );
                      o.add(n);
                      let d = f.clone();
                      (d.flipY = !1),
                        (d.rotation = Math.PI),
                        (E = new THREE.CircleGeometry(x / 2, 30)),
                        (p = new THREE.MeshBasicMaterial({
                          color: 16777215,
                          map: d,
                          side: THREE.DoubleSide
                        })),
                        (c = new THREE.Mesh(E, p)).position.set(0, x / 2, 0),
                        o.add(c),
                        (E = new THREE.TorusGeometry(x / 2, 0.5, 3, 50)),
                        (p = new THREE.MeshStandardMaterial({
                          color: "darkgray",
                          metalness: 1,
                          roughness: 0,
                          envMap: S
                        })),
                        ((M = new THREE.Mesh(E, p)).receiveShadow = !0),
                        c.add(M),
                        (m = new THREE.SpotLight(16777215, 5)).position.set(
                          0,
                          x,
                          0
                        ),
                        m.target.position.set(0, 0, 0.9 * x),
                        (m.angle = Math.PI / 4),
                        (m.penumbra = 1),
                        (m.decay = 2),
                        (m.distance = 100),
                        (m.map = f),
                        (m.castShadow = !0),
                        (m.shadow.mapSize.width = 1024),
                        (m.shadow.mapSize.height = 1024),
                        (m.shadow.camera.near = 10),
                        (m.shadow.camera.far = 200),
                        (m.shadow.focus = 1),
                        o.add(m),
                        (H = new THREE.SpotLightHelper(m)),
                        ((d = L.clone()).flipY = !1),
                        (d.rotation = Math.PI),
                        (w = c.clone()),
                        ((p = c.material.clone()).map = d),
                        (w.material = p),
                        w.position.set(2 * x, x / 2, 0),
                        o.add(w),
                        ((g = m.clone()).map = L),
                        g.position.set(2 * x, x, 0),
                        g.target.position.set(2 * x, 0, 0.9 * x),
                        o.add(g),
                        (T = new THREE.SpotLightHelper(g)),
                        ((d = P.clone()).flipY = !1),
                        (d.rotation = Math.PI),
                        (h = c.clone()),
                        ((p = c.material.clone()).map = d),
                        (h.material = p),
                        h.position.set(2 * -x, x / 2, 0),
                        o.add(h),
                        ((R = m.clone()).map = P),
                        R.position.set(2 * -x, x, 0),
                        R.target.position.set(2 * -x, 0, 0.9 * x),
                        o.add(R),
                        (u = new THREE.SpotLightHelper(R)),
                        (E = new THREE.BoxGeometry(7, 7, 7)),
                        (p = new THREE.MeshLambertMaterial({
                          color: "lemonchiffon"
                        })),
                        (l = new THREE.Mesh(E, p)).position.set(5, 3.5, 30),
                        l.rotation.set(0, 2 * Math.PI * Math.random(), 0),
                        (l.receiveShadow = !0),
                        (l.castShadow = !0),
                        o.add(l),
                        (E = new THREE.PlaneGeometry(1e3, 1e3)),
                        (p = new THREE.MeshLambertMaterial({
                          color: 8421504
                        })),
                        (l = new THREE.Mesh(E, p)).position.set(0, 0, 0),
                        (l.rotation.x = -Math.PI / 2),
                        (l.receiveShadow = !0),
                        o.add(l),
                        window.addEventListener("resize", e);
                    })();
                });
            });
        });
    }
  );

var F = new THREE.Quaternion();
