import { WebGLRenderer, Line, ShapeMode, Vec3, RGBColor } from "webgl-renderer";
import { IMouseHandler } from "./iMouseHandler";
import { MouseHelper } from "./mouseHelper";

export class LineMouseHandler implements IMouseHandler
{
    private line: Line;

    public mouseDownHandler(event: MouseEvent, canvas: HTMLCanvasElement, renderer: WebGLRenderer,
        shapeMode: ShapeMode, color: RGBColor): void
    {
        let point: Vec3 = MouseHelper.clicksToPoints(event, canvas);
        this.line = new Line(point, renderer.gl, color);
    }

    public mouseMoveHandler(mouseIsDown: boolean, event: MouseEvent, canvas: HTMLCanvasElement, renderer: WebGLRenderer): void
    {
        if (mouseIsDown)
        {
            let point: Vec3 = MouseHelper.clicksToPoints(event, canvas);
            this.line.addVertex(point);
        }
    }

    public mouseUpHandler(event: MouseEvent, canvas: HTMLCanvasElement, renderer: WebGLRenderer,
        shapeMode: ShapeMode, color: RGBColor): void
    {
        let point = MouseHelper.clicksToPoints(event, canvas);
        this.line.addVertex(point);
        renderer.addShapeToScene(this.line);
    }
}