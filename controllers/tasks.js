const getAllTasks = (req, res) => {
  res.send("all items get all tasks");
};

const createTask = (req, res) => {
    let body = req.body
  res.json(body)
};

const getTask = (req, res) => {
    let id = req.params.id
  res.json(id)
};

const updateTask = (req, res) => {
    let id = req.params.id
  res.json(id)
};

const deleteTask = (req, res) => {
    let id = req.params.id
  res.json(id)
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
