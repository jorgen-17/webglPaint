import * as React from "react";
import * as ReactDOM from "react-dom";
import { WebGL2dRenderer, RenderingOptions, Color, ColorMapper, RGBColor } from "webgl-renderer";

import { CanvasMouseHandler } from "./input/canvasMouseHandler";
import { BasicShapeModeMouseHandler } from "./input/basicShapeModeMouseHandler";
import { LineMouseHandler } from "./input/lineMouseHandler";
import { PointMouseHandler } from "./input/pointMouseHandlers";
import { Menu } from "./ui/reactComponents/menu";
import { Dispatcher } from "./simpledux";
import * as Events from "./events";

class App extends React.Component<{}, {}>
{
    private canvas:  HTMLCanvasElement;
    private renderer: WebGL2dRenderer;
    private canvasMouseHandler: CanvasMouseHandler;
    private currentColor: Color;
    private basicShapeModeMouseHandler: BasicShapeModeMouseHandler;
    private lineMouseHandler: LineMouseHandler;
    private pointMouseHandler: PointMouseHandler;

    constructor()
    {
        super();

        this.basicShapeModeMouseHandler = new BasicShapeModeMouseHandler();
        this.lineMouseHandler = new LineMouseHandler();
        this.pointMouseHandler = new PointMouseHandler();

        this.setupEventDispatchers();

        this.canvas = document.getElementById("mycanvas") as HTMLCanvasElement;

        const backgroundColor: RGBColor = new RGBColor(0.1, 0.1, 0.1);
        let renderingOptions: RenderingOptions =
        {
            backgroundColor: backgroundColor,
            fullscreen: true
        };
        this.renderer = new WebGL2dRenderer(this.canvas, renderingOptions);

        this.currentColor = "white";
        const defaultShapeMode = "triangles";

        this.canvasMouseHandler = new CanvasMouseHandler(this.canvas, this.renderer,
            this.pointMouseHandler, defaultShapeMode, ColorMapper.colorToRGBColor(this.currentColor));

        this.canvas.addEventListener("mousedown", (event: MouseEvent) => { this.canvasMouseHandler.mouseDown(event); } , false);
        this.canvas.addEventListener("mousemove", (event: MouseEvent) => { this.canvasMouseHandler.mouseMove(event); }, false);
        this.canvas.addEventListener("mouseup", (event: MouseEvent) => { this.canvasMouseHandler.mouseUp(event); }, false);

        this.renderer.start();
    }

    public render()
    {
        return (
            <Menu currentColor={this.currentColor}/>
        );
    }

    private setupEventDispatchers(): void
    {
        Dispatcher.addCallback("colorChanged", (colorPayload: Events.ColorChangeEvent) => {
            this.currentColor = colorPayload.newColor;
            this.canvasMouseHandler.currentColor = ColorMapper.colorToRGBColor(colorPayload.newColor);
            this.setState({});
        });

        Dispatcher.addCallback("shapeChanged", (shapePayload: Events.ShapeChangeEvent) => {
            this.canvasMouseHandler.currentShapeMode = shapePayload.newShape;
            this.canvasMouseHandler.mouseHandler = this.basicShapeModeMouseHandler;
        });

        Dispatcher.addCallback("drawingLines", () => {
            this.canvasMouseHandler.mouseHandler = this.lineMouseHandler;
        });

        Dispatcher.addCallback("drawingPoints", () => {
            this.canvasMouseHandler.mouseHandler = this.pointMouseHandler;
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<App/>, document.getElementById("main"));
}, false);