// Three.js concepts:
let scene, camera, renderer;
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

// Variables(planets) that are used in the project:
let sun, mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune, pluto;

// Because each planet rotates at different speed, they will need individual center points of rotation:
let mercuryCenterPoint, venusCenterPoint, earthCenterPoint, moonCenterPoint, marsCenterPoint, jupiterCenterPoint, saturnCenterPoint, uranusCenterPoint, neptuneCenterPoint, plutoCenterPoint;

// Functions to create each planet and added their center point of rotation:
let createSun = function () {
    let geometry = new THREE.SphereGeometry(12, 50, 50);
    let texture = new THREE.TextureLoader().load("./pictures/sun.jpg");
    let material = new THREE.MeshBasicMaterial({ map: texture });
    sun = new THREE.Mesh(geometry, material);

    sun.add(mercuryCenterPoint = new THREE.Object3D());
    sun.add(venusCenterPoint = new THREE.Object3D());
    sun.add(earthCenterPoint = new THREE.Object3D());
    sun.add(marsCenterPoint = new THREE.Object3D());
    sun.add(jupiterCenterPoint = new THREE.Object3D());
    sun.add(saturnCenterPoint = new THREE.Object3D());
    sun.add(uranusCenterPoint = new THREE.Object3D());
    sun.add(neptuneCenterPoint = new THREE.Object3D());
    sun.add(plutoCenterPoint = new THREE.Object3D());

    scene.add(sun);
};

let createMercury = function () {
    let geometry = new THREE.SphereGeometry(2, 40, 40);
    let texture = new THREE.TextureLoader().load("./pictures/mercury.jpg");
    let material = new THREE.MeshBasicMaterial({ map: texture });
    mercury = new THREE.Mesh(geometry, material);
    mercury.position.set(20, 0, 0);
    scene.add(mercury);
    mercuryCenterPoint.add(mercury);
}

let createVenus = function () {
    let geometry = new THREE.SphereGeometry(5, 40, 40);
    let texture = new THREE.TextureLoader().load("./pictures/venus.jpg");
    let material = new THREE.MeshBasicMaterial({ map: texture });
    venus = new THREE.Mesh(geometry, material);
    venus.position.set(35, 0, 0);
    scene.add(venus);
    venusCenterPoint.add(venus);
}

let createEarth = function () {
    let geometry = new THREE.SphereGeometry(5, 40, 40);
    let texture = new THREE.TextureLoader().load("./pictures/earth.jpg");
    let material = new THREE.MeshBasicMaterial({ map: texture });
    earth = new THREE.Mesh(geometry, material);
    moonCenterPoint = new THREE.Object3D();
    earth.position.set(0, 0, 55);
    scene.add(earth);
    earthCenterPoint.add(earth);
    earth.add(moonCenterPoint);
}

let createMoon = function () {
    let geometry = new THREE.SphereGeometry(1, 40, 40);
    let texture = new THREE.TextureLoader().load("./pictures/moon.jpg");
    let material = new THREE.MeshBasicMaterial({ map: texture });
    moon = new THREE.Mesh(geometry, material);
    moon.position.set(10, 3, 0);
    scene.add(moon);
    moonCenterPoint.add(moon);
}

let createMars = function () {
    let geometry = new THREE.SphereGeometry(3.5, 40, 40);
    let texture = new THREE.TextureLoader().load("./pictures/mars.jpg");
    let material = new THREE.MeshBasicMaterial({ map: texture });
    mars = new THREE.Mesh(geometry, material);
    mars.position.set(80, 0, 0);
    scene.add(mars);
    marsCenterPoint.add(mars);
}

let createJupiter = function () {
    let geometry = new THREE.SphereGeometry(9, 40, 40);
    let texture = new THREE.TextureLoader().load("./pictures/jupiter.jpg");
    let material = new THREE.MeshBasicMaterial({ map: texture });
    jupiter = new THREE.Mesh(geometry, material);
    jupiter.position.set(90, 2, -50);
    scene.add(jupiter);
    jupiterCenterPoint.add(jupiter);
}

let createSaturn = function () {
    let geometry = new THREE.SphereGeometry(4, 30, 30);
    let texture = new THREE.TextureLoader().load("./pictures/saturn.jpg");
    let material = new THREE.MeshBasicMaterial({ map: texture });
    saturn = new THREE.Mesh(geometry, material);
    saturn.position.set(110, 0, 70);
    scene.add(saturn);

    geometry = new THREE.TorusGeometry(6, 0.7, 2, 50);
    material = new THREE.MeshBasicMaterial({ color: 0xd3bfae });
    let ring = new THREE.Mesh(geometry, material);
    ring.rotation.x = 1.7;
    saturn.add(ring);

    geometry = new THREE.TorusGeometry(7.5, 0.7, 2, 50);
    material = new THREE.MeshBasicMaterial({ color: 0xc9b29e });
    ring = new THREE.Mesh(geometry, material);
    ring.rotation.x = 1.7;
    saturn.add(ring);
    saturnCenterPoint.add(saturn);
}

let createUranus = function () {
    let geometry = new THREE.SphereGeometry(3.5, 40, 40);
    let material = new THREE.MeshBasicMaterial({ color: 0xac8f3f3 });
    uranus = new THREE.Mesh(geometry, material);
    uranus.position.set(160, 0, 0);
    scene.add(uranus);

    geometry = new THREE.TorusGeometry(6, 0.2, 2, 50);
    material = new THREE.MeshBasicMaterial({ color: 0xa6cef3 });
    let ring = new THREE.Mesh(geometry, material);
    ring.rotation.x = 1.3;
    uranus.add(ring);
    uranusCenterPoint.add(uranus);
}

let createNeptune = function () {
    let geometry = new THREE.SphereGeometry(3.5, 40, 40);
    let texture = new THREE.TextureLoader().load("./pictures/neptune.jpg");
    let material = new THREE.MeshBasicMaterial({ map: texture });
    neptune = new THREE.Mesh(geometry, material);
    neptune.position.set(180, 0, 30);
    scene.add(neptune);
    neptuneCenterPoint.add(neptune);
}

let createPluto = function () {
    let geometry = new THREE.SphereGeometry(1.5, 40, 40);
    let texture = new THREE.TextureLoader().load("./pictures/pluto.jpg");
    let material = new THREE.MeshBasicMaterial({ map: texture });
    pluto = new THREE.Mesh(geometry, material);
    pluto.position.set(175, 0, 70);
    scene.add(pluto);
    plutoCenterPoint.add(pluto);
}

// Building the scene:
let init = function () {
    scene = new THREE.Scene();

    // Background: 
    const loader = new THREE.TextureLoader();
    const bgTexture = loader.load('./pictures/background.jpg');
    scene.background = bgTexture;

    // Starting camera position: 
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 150;
    camera.position.y = 30;
    camera.position.x = -50;

    // Adding the created variables(planets):
    createSun();
    createMercury();
    createVenus();
    createEarth();
    createMoon();
    createMars();
    createJupiter();
    createSaturn();
    createUranus();
    createNeptune();
    createPluto();

    // Render:
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Camera control: 
    controls = new THREE.OrbitControls(camera, renderer.domElement);
};


// Rotation speed for each planet around their center of rotation and around their own axis: 
function allRotations() {
    sun.rotation.y += 0.001;

    mercuryCenterPoint.rotation.y += 0.01;
    mercury.rotation.y += 0.02;

    venusCenterPoint.rotation.y += 0.008;
    venus.rotation.y += 0.035;

    earthCenterPoint.rotation.y += 0.005;
    earth.rotation.y += 0.02;

    moonCenterPoint.rotation.y += 0.0001;
    moon.rotation.y += 0.001;

    marsCenterPoint.rotation.y += 0.0055;
    mars.rotation.y += 0.01;

    jupiterCenterPoint.rotation.y += 0.003;
    jupiter.rotation.y += 0.007;

    saturnCenterPoint.rotation.y += 0.001;
    saturn.rotation.y += 0.009;

    uranusCenterPoint.rotation.y += 0.003;
    uranus.rotation.y += 0.05;

    neptuneCenterPoint.rotation.y += 0.0002;
    neptune.rotation.y += 0.04;

    pluto.rotation.y += 0.0001;
    plutoCenterPoint.rotation.y += 0.0001;
}

// Main loop function where all the animation starts:
let mainLoop = function () {
    allRotations();
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
}

// Responsive screen:
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", onWindowResize, false);


init();
mainLoop();


let informationPanel = document.getElementById("informationPanel");
let planetName = document.getElementById("planetName");
let planetInfo = document.getElementById("planetInfo");
let infoText = document.getElementById("infoText");


let closeButton = document.getElementById("closeButton");

closeButton.addEventListener("click", closeInfoPanel);

function closeInfoPanel(){
    informationPanel.style.display = "none";
}

function domChanges(){
    informationPanel.style.display = "block";
    infoText.style.display = "none";
}


function rayCasterObj(){
 
    let clickSun = raycaster.intersectObjects([sun]); 
    let clickMercury = raycaster.intersectObjects([mercury]); 
    let clickVenus = raycaster.intersectObjects([venus]);
    let clickEarth = raycaster.intersectObjects([earth]); 
    let clickMars = raycaster.intersectObjects([mars]); 
    let clickJupiter = raycaster.intersectObjects([jupiter]);
    let clickSaturn = raycaster.intersectObjects([saturn]);
    let clickUranus = raycaster.intersectObjects([uranus]);
    let clickNeptune = raycaster.intersectObjects([neptune]);
    let clickPluto = raycaster.intersectObjects([pluto]);

    if (clickSun.length > 0) {
        planetName.innerText = "Sun";
        planetInfo.innerText = "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light and infrared radiation. It is by far the most important source of energy for life on Earth.";
        domChanges();
    }

    if (clickMercury.length > 0) {
        planetName.innerText = "Mercury";
        planetInfo.innerText = "Mercury is the smallest and closest planet to the sun in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System.";
        domChanges();
    }

    if (clickVenus.length > 0) {
        planetName.innerText = "Venus";
        planetInfo.innerText = "Venus is the second planet from the Sun. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.";
        domChanges();
    }
  

    if (clickEarth.length > 0) {
        planetName.innerText = "Earth ";
        planetInfo.innerText = "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water.";
        domChanges();
    }

    if (clickMars.length > 0) {
        planetName.innerText = "Mars";
        planetInfo.innerText = "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet";
        domChanges();
    }

    if (clickJupiter.length > 0) {
        planetName.innerText = "Jupiter";
        planetInfo.innerText = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined";
        domChanges();
    }

    if (clickSaturn.length > 0) {
        planetName.innerText = "Saturn";
        planetInfo.innerText = "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth.";
        domChanges();
    }

    if (clickUranus.length > 0) {
        planetName.innerText = "Uranus";
        planetInfo.innerText = "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn.";
        domChanges();
    }

    if (clickNeptune.length > 0) {
        planetName.innerText = "Neptune";
        planetInfo.innerText = "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.";
        domChanges();
    }

    if (clickPluto.length > 0) {
        planetName.innerText = "Pluto";
        planetInfo.innerText = "Pluto was discovered in 1930 and it was declared to be the ninth planet from the Sun. Beginning in the 1990s, its status as a planet was questioned and led the International Astronomical Union in 2006 to formally define the term `planet`- excluding Pluto and reclassifying it as a dwarf planet.";
        domChanges();
    }    
}

// Raycasting events on clicking objects: 
function onDocumentMouseDown(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    rayCasterObj();
};

window.addEventListener('click', onDocumentMouseDown, false);


function onMobileTouchStart(event) {
    mouse.x = ( event.targetTouches[0].pageX / window.innerWidth) * 2 - 1;
    mouse.y = -( event.targetTouches[0].pageY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
 
    rayCasterObj()
};


document.addEventListener('touchstart', onMobileTouchStart, false);

