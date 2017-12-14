var data = [
    {
      "imageID" : "1",
      "imageLoc": "assets/image1.jpg",
      "imageCaption": "Wonder Women!"
    },
    {
      "imageID" : "2",
      "imageLoc": "assets/image2.jpg",
      "imageCaption": "Constalitions!"
    },
    {
      "imageID" : "3",
      "imageLoc": "assets/image3.jpg",
      "imageCaption": "Princess!"
    },
    {
      "imageID" : "4",
      "imageLoc": "assets/image4.jpg",
      "imageCaption": "Electric Girl!"
    },
    {
      "imageID" : "5",
      "imageLoc": "assets/image5.jpg",
      "imageCaption": "Sailor Girl!"
    },
    {
      "imageID" : "6",
      "imageLoc": "assets/image6.jpg",
      "imageCaption": "Blues"
    },
    {
      "imageID" : "7",
      "imageLoc": "assets/image7.jpg",
      "imageCaption": "Pink"
    },
    {
      "imageID" : "8",
      "imageLoc": "assets/image8.jpg",
      "imageCaption": "Roses"
    }

];

var mydata = data;

var rowOpen = ' <div class="row">';
var rowClose = '</div>';
var cardsHtml = '';

function AddImage(imageLoct,imageCap) {
  var Html = '';
  html = '<div class="col-lg-3 col-md-6 col-sm-12 card-padding">\
    <a class="card-link" href="#">\
      <div class="card">\
        <img class="card-img-top" src=" '+ imageLoct +' " alt="Card image cap">\
        <div class="card-body">\
          <h4 class="card-title">' + imageCap + '</h4>\
        </div>\
      </div>\
    </a>\
  </div>';

  return html;
}

function OnStart(){
  var tempHtml = '';
  var j=0;
  for (var i = 0; i < mydata.length; i++){
      tempHtml += AddImage(mydata[i].imageLoc,mydata[i].imageCaption);
  }
  cardsHtml = rowOpen + tempHtml + rowClose;
   document.getElementById("CardContainer").innerHTML = cardsHtml;
}
