const  btn = document.getElementsByClassName('btn')
for(var i = 0; i < btn.length ;i++){
  btn[i].addEventListener('click', function(e){console.log(e.target.classlist)
  e.target.classlist.toggle('active');
  });
}
