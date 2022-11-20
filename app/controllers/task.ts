import { Request, Response } from "express";
import TaskService from "../services/task";

export default class TaskController {

    public async screenshot(req: Request, res: Response) {
        // Get URL from request
        const url = req.query.url ? req.query.url.toString() : null;
        const wait = req.query.wait ? parseInt(req.query.wait.toString()) : 0;
        try {
            // Take Screenshot
            const screenshot: string | Buffer = await new TaskService().screenshot(url, wait) ?? null;

            // Set Header: Image Type
            res.setHeader('Content-Type', 'image/png');

            // Send Screenshot
            res.send(screenshot);
        } catch (error) {
            // Send Error
            res.status(500).send(error.message);
        }
    }

}