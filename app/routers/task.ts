// Router
import {Router} from 'express';
const TaskRouter: Router = Router();

// Controller
import TaskController from '../controllers/task';
const taskController = new TaskController();

// Routes
TaskRouter.get('/screenshot', taskController.screenshot.bind(taskController));

// Export
export default TaskRouter;