import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  formNewCourse;

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.formNewCourse =  this.fb.group({
      name: ['', Validators.required],
      contact: this.fb.group({
        email: ['', Validators.required], 
        phone: ['']
      }),
      topic: this.fb.array([])
    })
  }

  get getTopics()
  {
   
    return this.formNewCourse.get('topics') as FormArray;
  }


  addTopic(topic: HTMLInputElement)
  {
    //push vào trong topics ở trên
    this.getTopics.push(new FormControl(topic.value));
    topic.value = "";
  }

  removeTopic(topic: FormControl)
  {
    //this.getTopics.controls là một mảng các FormControl
    //topic: là một control nào đó
    let index = this.getTopics.controls.indexOf(topic);
    this.getTopics.removeAt(index);
  }
}
