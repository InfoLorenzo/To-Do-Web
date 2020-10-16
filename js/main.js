'use strict'

var taskTitle;
var taskeConcept;
var taskText;
var linkNota;
var link1Nota;

const task = {
    taskTitle: '',
    taskeConcept: '',
    taskText: ''
};
  
var taskObject = new task(document.getElementById("tasktitle").value,document.getElementById("taskConcept").value,taskObject.taskText = document.getElementById("taskTextArea").value);



function createTask() {
    console.log("test1")

    this.taskObject.taskTitle = document.getElementById("tasktitle").value;
    this.taskObject.taskeConcept = document.getElementById("taskConcept").value
    this.taskObject.taskText = document.getElementById("taskTextArea").value

    console.log(taskObject)


}

document.getElementById("formSubmit").addEventListener("click", createTask);


