import { WebGL2dRenderer, RGBColor, ShapeMode } from "webgl-renderer";

export interface IMouseHandler
{
    mouseDownHandler: (event: MouseEvent, canvas: HTMLCanvasElement,
        renderer: WebGL2dRenderer, shapeMode: ShapeMode, color: RGBColor) => void;
    mouseMoveHandler: (mouseIsDown: boolean, event: MouseEvent,
        canvas: HTMLCanvasElement, renderer: WebGL2dRenderer, shape: ShapeMode,
        color: RGBColor) => void;
    mouseUpHandler: (event: MouseEvent, canvas: HTMLCanvasElement,
        renderer: WebGL2dRenderer, shape: ShapeMode, color: RGBColor) => void;
}