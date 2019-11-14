const controller = {}


const Task = require('../model/task.js')

//controladores
controller.add = async (req,res)=> {
    const tasks = await Task.find()
    console.log(tasks)
    res.render('index', {data:tasks} )
}


controller.save = async(req, res)=> {
     const task =  new Task(req.body)
     await task.save()
     res.redirect('/')
}


controller.update = async (req,res) => {

    const id = req.params.id
    await Task.findByIdAndUpdate(id, req.body)

    res.redirect('/')
}

controller.done = async(req, res)=> {
     const id = req.params.id;
     const taskId =  await Task.findById(id)
     taskId.status = !taskId.status
     const task =  await taskId.save()
    res.redirect('/')
}


controller.edit = async(req, res)=> {
    const id  =  req.params.id;
    const task = await Task.findById(id)
    res.render('task_edit', {
        datos : task
    })
}


controller.delete = async(req, res)=> {
     const id = await req.params.id
     await Task.findByIdAndDelete(id)
      res.redirect('/')
}


module.exports = controller