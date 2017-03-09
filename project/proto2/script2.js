// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here

    if (!Detector.webgl) Detector.addGetWebGLMessage();
    var container;
    var camera, controls, scene, renderer;
    var light, pointLight;
    var mesh;
    var material_sphere1, material_sphere2;
    var analyser1, analyser2, analyser3;
    var clock = new THREE.Clock();
    init();
    animate();

    function init() {
        container = document.getElementById('container');
        camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.set(0, 25, 0);
        var listener = new THREE.AudioListener();
        camera.add(listener);
        scene = new THREE.Scene();

        light = new THREE.DirectionalLight(0xffffff);
        light.position.set(0, 0.5, 1).normalize();
        scene.add(light);
        var sphere = new THREE.SphereGeometry(20, 32, 16);
        material_sphere1 = new THREE.MeshPhongMaterial({
            color: 0xffaa00,
            shading: THREE.FlatShading,
            shininess: 0
        });


        // sound spheres
        var audioLoader = new THREE.AudioLoader();
        var mesh1 = new THREE.Mesh(sphere, material_sphere1);
        mesh1.position.set(300, 30, -70);
        scene.add(mesh1);
        var sound1 = new THREE.PositionalAudio(listener);
        audioLoader.load('mainTitle.m4a', function(buffer) {
            sound1.setBuffer(buffer);
            sound1.setRefDistance(20);
            sound1.play();
        });
        mesh1.add(sound1);
        //

        // analysers
        analyser1 = new THREE.AudioAnalyser(sound1, 32);
        // global ambient audio
        var sound4 = new THREE.Audio(listener);
        audioLoader.load('mainTitle.m4a', function(buffer) {
            sound4.setBuffer(buffer);
            sound4.setLoop(true);
            sound4.setVolume(0.5);
            sound4.play();
        });
        // ground
        var helper = new THREE.GridHelper(800, 10, 0x444444, 0x444444);
        helper.position.y = 0.1;
        scene.add(helper);
        //
        var SoundControls = function() {
            this.master = listener.getMasterVolume();
            this.firstSphere = sound1.getVolume();

            this.Ambient = sound4.getVolume();
        };

        var gui = new dat.GUI();
        var soundControls = new SoundControls();

        var volumeFolder = gui.addFolder('sound volume');

        volumeFolder.add(soundControls, 'master').min(0.0).max(1.0).step(0.01).onChange(function() {
            listener.setMasterVolume(soundControls.master);
        });
        volumeFolder.add(soundControls, 'firstSphere').min(0.0).max(1.0).step(0.01).onChange(function() {
            sound1.setVolume(soundControls.firstSphere);
        });


        volumeFolder.add(soundControls, 'Ambient').min(0.0).max(1.0).step(0.01).onChange(function() {
            sound4.setVolume(soundControls.Ambient);
        });
        volumeFolder.open();

        renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.innerHTML = "";
        container.appendChild(renderer.domElement);
        //
        controls = new THREE.FirstPersonControls(camera, renderer.domElement);
        controls.movementSpeed = 70;
        controls.lookSpeed = 0.05;
        controls.noFly = true;
        controls.lookVertical = false;
        window.addEventListener('resize', onWindowResize, false);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        controls.handleResize();
    }

    function animate() {
        requestAnimationFrame(animate);
        render();
    }

    function render() {
        var delta = clock.getDelta();
        controls.update(delta);
        material_sphere1.emissive.b = analyser1.getAverageFrequency() / 256;

        renderer.render(scene, camera);
    }


});
