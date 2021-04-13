function main(){
  var scene = new THREE.Scene();
  var box = generateBox(1, 1, 1);
  box.translateZ(-5);
  scene.add(box);

  var floor = generateFloor(10, 10);
  floor.rotation.x = Math.PI/2;

  var camera  = new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    1,
    1000
  );
  camera.position.x = 1;
  camera.posoition.y = 5;
  camera.position.z = 5;
  camera.lookAt(new THREE.Vector3(0, 0, -5));

  var renderer = new THREE.webGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("webGL").appendChild(renderer.domElement);
  renderer.render(scene, camera);
}

function generateBox(w, h, d){
  var geometry = new THREE.BoxGeometry(w, h, d);
  var material = new THREE.MeshBasicMaterial({
    color: 0xffffff
  });
  var mesh = new THREE.Mesh(geometry, material);
  return mesh;
}

main()