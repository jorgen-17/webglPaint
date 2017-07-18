import { WebGLRenderer, RGBColor, ShapeMode } from "webgl-renderer";

export interface IMouseHandler
{
    mouseDownHandler: (event: MouseEvent, canvas: HTMLCanvasElement,
        renderer: WebGLRenderer, shapeMode: ShapeMode, color: RGBColor) => void;
    mouseMoveHandler: (mouseIsDown: boolean, event: MouseEvent,
        canvas: HTMLCanvasElement, renderer: WebGLRenderer, shape: ShapeMode,
        color: RGBColor) => void;
    mouseUpHandler: (event: MouseEvent, canvas: HTMLCanvasElement,
        renderer: WebGLRenderer, shape: ShapeMode, color: RGBColor) => void;
}