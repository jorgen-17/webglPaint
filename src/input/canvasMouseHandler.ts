import { WebGLRenderer, ShapeMode, RGBColor } from "webgl-renderer";
import { IMouseHandler } from "./iMouseHandler";

export class CanvasMouseHandler
{
    public currentShapeMode: ShapeMode;
    public currentColor: RGBColor;
    public mouseHandler: IMouseHandler;
    private mouseIsDown: boolean;
    private canvas: HTMLCanvasElement;
    private renderer: WebGLRenderer;

    constructor(canvas: HTMLCanvasElement, renderer: WebGLRenderer,
        mouseHandler: IMouseHandler, shapeMode: ShapeMode, color: RGBColor)
    {
        this.mouseIsDown = false;
        this.canvas = canvas;
        this.renderer = renderer;
        this.mouseHandler = mouseHandler;
        this.currentShapeMode = shapeMode;
        this.currentColor = color;
    }

    public mouseDown (event: MouseEvent): void
    {
        this.mouseIsDown = true;
        this.mouseHandler.mouseDownHandler(event, this.canvas, this.renderer,
            this.currentShapeMode, this.currentColor);
    }

    public mouseMove (event: MouseEvent): void
    {
        this.mouseHandler.mouseMoveHandler(this.mouseIsDown, event,
            this.canvas, this.renderer, this.currentShapeMode, this.currentColor);
    }

    public mouseUp (event: MouseEvent): void
    {
        this.mouseIsDown = false;
        this.mouseHandler.mouseUpHandler(event, this.canvas, this.renderer,
            this.currentShapeMode, this.currentColor);
    }
}