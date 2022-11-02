const Application = PIXI.Application;

const app = new Application({
    width: 500,
    height: 500,
    transparent: true,
    antilias: true
});

app.renderer.backgroundColor = 0 

document.body.appendChild(app.view);