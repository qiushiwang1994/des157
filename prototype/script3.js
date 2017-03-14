// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    var camera, controls;
    var renderer;
    var scene;

    var text = "The  Seven Kingdom",

        height = 0.0070,
        size = 0.03,
        hover = 0.30,

        curveSegments = 8,

        bevelThickness = 0.007,
        bevelSize = 0.0020,
        bevelSegments = 0.003,
        bevelEnabled = true,

        font = undefined,

        fontName = "optimer", // helvetiker, optimer, gentilis, droid sans, droid serif
        fontWeight = "bold"; // normal bold

    init();
    animate();

    function init() {


        var container = document.getElementById('container');

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x000000, 250, 1400);


        // CAMERA
        camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1500);
        // camera.position.set( 0, 0, 0 );
        camera.position.z = 0.1;

        // camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 100 );
        // camera.position.z = 0.01;

        controls = new THREE.OrbitControls(camera);
        controls.enableZoom = false;
        controls.enablePan = false;


        // LIGHTS
        var dirLight = new THREE.DirectionalLight(0xffffff, 0.125);
        dirLight.position.set(0, 0, 1).normalize();
        scene.add(dirLight);
        var pointLight = new THREE.PointLight(0xffffff, 1.5);
        pointLight.position.set(0, 100, 90);
        scene.add(pointLight);

        var textures = getTexturesFromAtlasFile("image/cube-1.jpg", 6);

        var materials = [];

        for (var i = 0; i < 6; i++) {

            materials.push(new THREE.MeshBasicMaterial({
                map: textures[i]
            }));

        }

        fontMaterial = new THREE.MultiMaterial([
            new THREE.MeshPhongMaterial({
                color: 0xffffff,
                shading: THREE.FlatShading
            }), // front
            new THREE.MeshPhongMaterial({
                color: 0xffffff,
                shading: THREE.SmoothShading
            }) // side
        ]);

        group = new THREE.Group();
        group.position.z = -0.4;
        group.position.y = -0.2;
        scene.add(group);

        loadFont();

        var skyBox = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), new THREE.MultiMaterial(materials));
        skyBox.applyMatrix(new THREE.Matrix4().makeScale(1, 1, -1));
        skyBox.add(sound1);
        scene.add(skyBox);

        window.addEventListener('resize', onWindowResize, false);

    }

    function getTexturesFromAtlasFile(atlasImgUrl, tilesNum) {

        var textures = [];

        for (var i = 0; i < tilesNum; i++) {

            textures[i] = new THREE.Texture();

        }

        var imageObj = new Image();

        imageObj.onload = function() {

            var canvas, context;
            var tileWidth = imageObj.height / 2;

            for (var i = 0; i < textures.length; i++) {

                canvas = document.createElement('canvas');
                context = canvas.getContext('2d');
                canvas.height = tileWidth;
                canvas.width = tileWidth;
                if (i < 3) {
                    context.drawImage(imageObj, tileWidth * i, 0, tileWidth, tileWidth, 0, 0, tileWidth, tileWidth);
                } else {
                    context.drawImage(imageObj, tileWidth * (i - 3), tileWidth, tileWidth, tileWidth, 0, 0, tileWidth, tileWidth);
                }
                textures[i].image = canvas
                textures[i].needsUpdate = true;

            }

        };

        imageObj.src = atlasImgUrl;

        return textures;

    }
    var listener = new THREE.AudioListener();
    camera.add(listener);
    var audioLoader = new THREE.AudioLoader();
    var sound1 = new THREE.PositionalAudio(listener);
    audioLoader.load('mainTitle.m4a', function(buffer) {
        sound1.setBuffer(buffer);
        sound1.setRefDistance(20);
        sound1.play();
    });
    var sound4 = new THREE.Audio(listener);
    audioLoader.load('mainTitle.m4a', function(buffer) {
        sound4.setBuffer(buffer);
        sound4.setLoop(true);
        sound4.setVolume(0.5);
        sound4.play();
    });

    function loadFont() {

        var loader = new THREE.FontLoader();
        loader.load('fonts/gameOf.json', function(response) {

            font = response;
            createText();

        });


    }

    function createText() {

        textGeo = new THREE.TextGeometry(text, {

            font: font,

            size: size,
            height: height,
            curveSegments: curveSegments,

            bevelThickness: bevelThickness,
            bevelSize: bevelSize,
            bevelEnabled: bevelEnabled,

            material: 0,
            extrudeMaterial: 1

        });

        textGeo.computeBoundingBox();
        textGeo.computeVertexNormals();

        // "fix" side normals by removing z-component of normals for side faces
        // (this doesn't work well for beveled geometry as then we lose nice curvature around z-axis)

        var centerOffset = -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);

        textMesh1 = new THREE.Mesh(textGeo, fontMaterial);

        textMesh1.position.x = centerOffset;
        textMesh1.position.y = hover;
        textMesh1.position.z = 0;

        textMesh1.rotation.x = 0;
        textMesh1.rotation.y = Math.PI * 2;

        group.add(textMesh1);

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function animate() {

        controls.update();

        renderer.render(scene, camera);

        requestAnimationFrame(animate);

    }

});
