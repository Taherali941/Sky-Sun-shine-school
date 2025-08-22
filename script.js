const navSelect = document.getElementById('addmissions');

window.addEventListener('pageshow', function(){
    navSelect.selectedIndex = 0;
});

navSelect.addEventListener('change',function(){
    if(this.value){
        window.location.href = this.value;
    }
});

const ham = document.getElementById('ham');
const hamli  = document.getElementById('ham-li');

ham.addEventListener('click',function(){
    hamli.classList.toggle("show");
})
