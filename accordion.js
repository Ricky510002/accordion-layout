const accordion = document.getElementsByClassName('question-contentBox');

for(i = 0; i<accordion.length; i++){
  accordion[i].addEventListener('click',function(){
    this.classList.toggle('active')
  })
}

