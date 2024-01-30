let eyeicon = document.getElementById('eyeicon');
let pwd = document.getElementById('pwd');

eyeicon.onclick = function(){
    if(pwd.type  == 'password'){
        pwd.type = 'text';
        eyeicon.src = 'eye-open.png'
    }else{
        pwd.type='password';
        eyeicon.src = 'eye-close.png'
    }
}