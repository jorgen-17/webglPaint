import { IWebGLRenderer } from "webgl-renderer";

export interface IMouseHandler
{
    mouseDownHandler: (event: MouseEvent, canvas: HTMLCanvasElement, renderer: IWebGLRenderer) => void;
    mouseMoveHandler: (mouseIsDown: boolean, event: MouseEvent, canvas: HTMLCanvasElement, renderer: IWebGLRenderer) => void;
    mouseUpHandler: (event: MouseEvent, canvas: HTMLCanvasElement, renderer: IWebGLRenderer) => void;
}