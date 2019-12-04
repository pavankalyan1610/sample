import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import domtoimage from 'dom-to-image';
declare var $: any;
declare var Draggable: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'images';
  images = ['./assets/images/1.jpeg', './assets/images/2.jpeg', './assets/images/3.jpeg',
    //  './assets/images/4.jpeg', './assets/images/5.jpeg', './assets/images/6.jpeg', 
    //  './assets/images/7.jpg', './assets/images/8.jpg', './assets/images/9.jpeg',
    //   './assets/images/9.jpg'
  ]
  constructor(private http: HttpClient) { }
  converted_image: any;
  ngOnInit() {
    this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(data => {
      console.log(data);
    })
    // $('#draggable').style.color = "red"
    // console.log($("#draggable"))
    // let element = document.querySelector("#capture");
    // html2canvas(document).then(function (canvas) {
    //   // Convert the canvas to blob
    //   canvas.toBlob(function (blob) {
    //     // To download directly on browser default 'downloads' location
    //     let link = document.createElement("a");
    //     link.download = "image.png";
    //     link.href = URL.createObjectURL(blob);
    //     link.click();

    //     // To save manually somewhere in file explorer
    //     window.saveAs(blob, 'image.png');

    //   }, 'image/png');
    // });


    var node = document.getElementById('element');
    // $(node).draggable();
    console.log(node)
    domtoimage.toJpeg(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        console.log(img.src);
        document.body.appendChild(img);
        // this.converted_image = img.src
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
    // $('#image').draggable().resizable();
    // $('.card-img-top').resizable({ containment: "parent" });


    // $(".resizeable").resizable({
    //   containment: "#background"
    // });

    $("#drag").draggable({
      // cursor: "move",
      // containment: "parent",
    }).resizable()
    // $("#drag").resizable()


    // the ui-resizable-handles are added here
    // $('.resizable').resizable();

    // makes GSAP Draggable avoid clicks on the resize handles
    // $('.ui-resizable-handle').attr('data-clickable', true);
    // make the element draggable
    // Draggable.create('.draggable');
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  selectImage(i) {
    console.log(i);
  }


}
