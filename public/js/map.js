<script type="text/javascript">
    function hovIn() {
 var areaID = $(this).attr('id');
 //alert('['+areaID+']');
  if (areaID == 'gaya') {
   $('#gayadiv').show();
   $('#roohdiv').hide();
    $('#aarohadiv').hide();
	 $('#bhopaldiv').hide();
	 $('#sikkimdiv').hide();
	 $('#rotaractdiv').hide();
	 $('#ffidiv').hide();
	 $('#iiitdmdiv').hide();

	 $('#samvedhnadiv').hide();
  }
  if (areaID == 'samvedhna') {
   $('#samvedhnadiv').show();
     $('#gayadiv').hide();
   $('#roohdiv').hide();
    $('#aarohadiv').hide();
	 $('#bhopaldiv').hide();
	 $('#sikkimdiv').hide();
	 $('#rotaractdiv').hide();
	 $('#ffidiv').hide();
	 $('#iiitdmdiv').hide();


  }
  if (areaID == 'iiitdm') {
   $('#iiitdmdiv').show();
     $('#gayadiv').hide();
   $('#roohdiv').hide();
    $('#aarohadiv').hide();
	 $('#bhopaldiv').hide();
	 $('#sikkimdiv').hide();
	 $('#rotaractdiv').hide();
	 $('#ffidiv').hide();

	 $('#samvedhnadiv').hide();
  }
  if (areaID == 'rooh') {
   $('#roohdiv').show();
     $('#gayadiv').hide();
    $('#aarohadiv').hide();
	 $('#bhopaldiv').hide();
	 $('#sikkimdiv').hide();
	 $('#rotaractdiv').hide();
	 $('#ffidiv').hide();
	 $('#iiitdmdiv').hide();

	 $('#samvedhnadiv').hide();
  }
  if (areaID == 'bhopal') {
   $('#bhopaldiv').show();
     $('#gayadiv').hide();
   $('#roohdiv').hide();
    $('#aarohadiv').hide();

	 $('#sikkimdiv').hide();
	 $('#rotaractdiv').hide();
	 $('#ffidiv').hide();
	 $('#iiitdmdiv').hide();

	 $('#samvedhnadiv').hide();

  }
  if (areaID == 'aaroha') {
   $('#aarohadiv').show();
     $('#gayadiv').hide();
   $('#roohdiv').hide();

	 $('#bhopaldiv').hide();
	 $('#sikkimdiv').hide();
	 $('#rotaractdiv').hide();
	 $('#ffidiv').hide();
	 $('#iiitdmdiv').hide();

	 $('#samvedhnadiv').hide();
  }
  if (areaID == 'sikkim') {
   $('#sikkimdiv').show();
     $('#gayadiv').hide();
   $('#roohdiv').hide();
    $('#aarohadiv').hide();
	 $('#bhopaldiv').hide();
	 
	 $('#rotaractdiv').hide();
	 $('#ffidiv').hide();
	 $('#iiitdmdiv').hide();

	 $('#samvedhnadiv').hide();
  }
  if (areaID == 'rotaract') {
   $('#rotaractdiv').show();
     $('#gayadiv').hide();
   $('#roohdiv').hide();
    $('#aarohadiv').hide();
	 $('#bhopaldiv').hide();
	 $('#sikkimdiv').hide();
	 
	 $('#ffidiv').hide();
	 $('#iiitdmdiv').hide();

	 $('#samvedhnadiv').hide();
  }
  if (areaID == 'ffi') {
   $('#ffidiv').show();
     $('#gayadiv').hide();
   $('#roohdiv').hide();
    $('#aarohadiv').hide();
	 $('#bhopaldiv').hide();
	 $('#sikkimdiv').hide();
	 $('#rotaractdiv').hide();

	 $('#iiitdmdiv').hide();

	 $('#samvedhnadiv').hide();
  }
}

$('map area').hover(hovIn);


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("seeMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "see more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "see less";
    moreText.style.display = "inline";
  }
}

</script>
