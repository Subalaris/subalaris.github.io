//update fields

$('#name-field').text($('#name').val());
$("#name").on('input', function () {
  var value = $(this).val();
  $("#name-field").text(value);
});

$('#date-field').text($('#date').val());
$("#date").on('input', function () {
  var value = $(this).val();
  $("#date-field").text(value);
});

$('#number-field').text($('#number').val());
$("#number").on('input', function () {
  var value = $(this).val();
  $("#number-field").text(value);
});

$('#status-field').text($('#status').val());
$("#status").on('input', function () {
  var value = $(this).val();
  $("#status-field").text(value);
});


//upload image

var $uploadCrop,
  tempFilename,
  rawImg,
  imageId;

function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.upload-demo').addClass('ready');
      $('#cropImagePop').modal('show');
      rawImg = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
  } else {
    swal("Sorry - you're browser doesn't support the FileReader API");
  }
}

$uploadCrop = $('#upload-demo').croppie({
  viewport: {
    width: 200,
    height: 200,
  },
  enableOrientation: true,
  enforceBoundary: false,
  enableExif: true
});
$('#cropImagePop').on('shown.bs.modal', function () {
  // alert('Shown pop');
  $uploadCrop.croppie('bind', {
    url: rawImg
  }).then(function () {
    console.log('jQuery bind complete');
  });
});

$('.item-img').on('change', function () {
  imageId = $(this).data('id');
  tempFilename = $(this).val();
  $('#cancelCropBtn').data('id', imageId);
  readFile(this);
});
$('#cropImageBtn').on('click', function (ev) {
  $uploadCrop.croppie('result', {
    type: 'base64',
    format: 'png',
    backgroundColor: 'transparent',
    size: {
      width: 1000,
      height: 1000
    }
  }).then(function (resp) {
    $('#item-img-output').attr('src', resp);
    $('#cropImagePop').modal('hide');
  });
});


$("#rotateLeft").click(function () {
  $uploadCrop.croppie('rotate', parseInt($(this).data('rotate')));
});

$("#rotateRight").click(function () {
  $uploadCrop.croppie('rotate', parseInt($(this).data('rotate')));
});



// Clear image
const imgFile = $("#profile-img"),
  imgClear = $("#clear");


imgClear.on("click", function () {
  imgFile.val('');
});

imgFile.on("click", function () {
  imgClear.toggleClass('hide-x');
});

imgClear.on("click", function () {
  $(this).toggleClass('hide-x');
});




//canvas2image



var canvas,
  $preview,
  $card,
  $download;

function init() {
  canvas = '';
  $card = document.getElementById('card');

  $preview = document.getElementById('preview');
  $download = document.getElementById('download');

  bind();


}

function bind() {
  //    $preview.onclick = function (e) {
  //        html2canvas($($card), {
  //            onrendered: function (canvas) {
  //                document.body.appendChild(canvas);
  //            }
  //        });
  //    }

  $preview.onclick = function (e) {
    html2canvas($($card), {
      useCORS: true,
      allowTaint: true,
      dpi: 600,
      onrendered: function (canvas) {
        var img = canvas.toDataURL("image/png");
        var nameVal = document.getElementById("name").value;
        var numVal = document.getElementById("number").value;

        $('#output-link').attr({
          href: img,
          download: numVal + '_' + nameVal
        });

        $("#output-img").attr("src", img);



        //        $('#img-output').append('<a href="' + img + '" download="' + numVal + '_' + nameVal + '"><img crossorigin="anonymous" src="' + img + '"/></a>');
      }
    });
  }


  //    $download.onclick = function (e) {
  //        html2canvas($($card), {
  //            useCORS: true,
  //            allowTaint: true,
  //            dpi: 600,
  //            onrendered: function (canvas) {
  //                // document.body.appendChild(canvas);
  //                return Canvas2Image.saveAsPNG(canvas);
  //            }
  //
  //        });
  //
  //
  //    }


}






onload = init;
