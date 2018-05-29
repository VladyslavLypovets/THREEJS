window.onload = function () {
  var width = window.innerWidth, height = window.innerHeight;
  var canvas = document.getElementById('canvas');

  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);

  var move = {
    forward: 0,
    backward: 0,
    left: 0,
    right: 0,
    speed: 1,
    toTop: 0,
    bottom: 0
  };

  document.addEventListener('keydown', function(event){
    event.preventDefault();
    switch(event.keyCode) {
      case 87: forward(move);
      break;
      case 65: left(move);
      break;
      case 68: right(move);
      break;
      case 83: backward(move);
      break;
      case 16: turbo(move);
      break;
      case 32: moveTop(move);
      break;
      case 17: moveBottom(move);
      break;
    };
  });
  document.addEventListener('keyup', function(event) {
    switch(event.keyCode) {
      case 87: forwardStop(move);
      break;
      case 65: leftStop(move);
      break;
      case 68: rightStop(move);
      break;
      case 83: backwardStop(move);
      break;
      case 16: turboStop(move);
      break;
      case 32: moveTopStop(move);
      break;
      case 17: moveBottomStop(move);
      break;
    }
  });


  var renderer = new THREE.WebGLRenderer({canvas: canvas});
  renderer.setClearColor(0x000000);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
  camera.position.set(0, -50, 700); 

  var container = document.getElementById('container');
  var stats = new Stats();
  container.appendChild( stats.dom );



  // Cube
  var cube_geom = new THREE.CubeGeometry(50,50,50,25,25,25);
  var cube_mat = new THREE.MeshStandardMaterial({color: 0x42aaff});
  var cube = new THREE.Mesh(cube_geom, cube_mat);
    cube.position.y = -60;
    cube.position.x = 400,
    cube.position.z = 330;
    cube.castShadow = true;
    cube.receiveShadow = false;
    scene.add(cube);

  
  
  // light
  var spotLight = new THREE.SpotLight( 0xffffff );
  spotLight.position.set( 400, 400, 400 );

  spotLight.castShadow = true;

  spotLight.shadow.mapSize.width = 2024;
  spotLight.shadow.mapSize.height = 2024;
  spotLight.intensity = 2;
  spotLight.angle = 2;

  scene.add( spotLight );
  // sphere
  var sphere_geom = new THREE.SphereGeometry(50, 6, 2);
  var sphere_mat = new THREE.MeshStandardMaterial({color: 0x00ff00});
  var sphere = new THREE.Mesh(sphere_geom, sphere_mat);
  sphere.position.set(350, -35, 500); 
  sphere.castShadow = true;
  sphere.receiveShadow = false;
  scene.add(sphere);


  //plane
  var plane_geom = new THREE.PlaneBufferGeometry(2000,2000,50,50); 
  var plane_mat = new THREE.MeshStandardMaterial({color: 0x008cf0});
  var plane = new THREE.Mesh(plane_geom, plane_mat);
    plane.position.y = -85;
    plane.receiveShadow = true;
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);
    camera.lookAt(cube.position);

  animate();
      function animate () {
        
        requestAnimationFrame(animate);
        cube.rotation.y += 0.1;
        camera.position.x += move.right - move.left;
        camera.position.z += move.backward - move.forward;
        camera.position.y += move.toTop - move.bottom;
        sphere.rotation.y += 0.15;
        renderer.render(scene, camera);
        stats.update();
        
      }

}