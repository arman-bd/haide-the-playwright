import { Request, Response } from "express";
import TaskService from "../services/task";

export default class TaskController {

    public async screenshot(req: Request, res: Response) {
        // Get URL from request
        const url = req.query.url ? req.query.url.toString() : null;
        const wait_second = req.query.wait_second ? parseInt(req.query.wait_second.toString()) : 5;
        const screenshot: string | Buffer = await new TaskService().screenshot(url, wait_second) ?? null;

        // Set Header: Image Type
        res.setHeader('Content-Type', 'image/png');

        // Send Screenshot
        res.send(screenshot);
    }

}