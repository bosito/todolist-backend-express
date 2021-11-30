const { Router } = require('express');
const {
  getTaskCtrlId,
  getTaskCtrl,
  postTaskCtrl,
  putTaskCtrl,
  deleteTaskCtrl,
} = require('../controllers/task.controller');

const router = Router();

router.get('/task', getTaskCtrl); // Obtener la lista de tareas
router.get('/task/:id', getTaskCtrlId); // Obtener una tarea por su id
router.post('/task', postTaskCtrl); // completar la lógica -> actividad
router.put('/task/:id', putTaskCtrl); // completar la lógica -> actividad
router.delete('/task/:id', deleteTaskCtrl); // completar la lógica -> actividad

// post -> controlador -> servicio
// put -> controlador -> servicio
// delete -> controlador -> servicio

module.exports = router;
