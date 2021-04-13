function main(){
  var scene = new THREE.Scene();
  var box = generateBox(1, 1, 1);
  box.translateZ(-5);
  scene.add(box);

  var camera  = new.Three.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    1,
    1000
  );

  var renderer = new THREE.webGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("webGL").appendChild(renderer.domElement);
  renderer.render(scene, camera);
}

function generateBox(w, h, d){
  var geometry = new THREE.BoxGeometry(w, h, d);
  var material = new THREE.MeshBasicMaterial({
    color: 0xffffff
  })
  var mesh = new THREE.Mesh(geometry, mat);
  return mesh;
}