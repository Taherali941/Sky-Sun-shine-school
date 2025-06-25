const navSelect = document.getElementById('addmissions');

window.addEventListener('pageshow', function(){
    navSelect.selectedIndex = 0;
});

navSelect.addEventListener('change',function(){
    if(this.value){
        window.location.href = this.value;
    }
});