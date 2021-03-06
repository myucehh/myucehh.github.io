(function() {
  var camera, cube, geometry, material, render, renderer, scene;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  geometry = new THREE.BoxGeometry(1, 1, 1);

  material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
  });

  cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  camera.position.z = 5;

  render = function() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.1;
    return renderer.render(scene, camera);
  };

  render();

}).call(this);
