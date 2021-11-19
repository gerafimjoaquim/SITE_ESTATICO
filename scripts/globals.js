
function show_level(level){
	document.getElementById("label_level").innerText=`Nível: ${level}%`
}

//Apresentando a Janela modal do formulário de Login
const login_form=document.querySelector(".login_form")
const loginFields=document.querySelectorAll(".loginField")
document.querySelectorAll(".bt_login").forEach(bt=>{
	bt.onclick=showLogin
})

document.querySelectorAll(".bt_close").forEach(el=>{
	el.onclick=closeLogin
})

document.getElementsByTagName("form")[2].onsubmit=function(bt){
	bt.preventDefault()
	validateLogin()
}

function showLogin(a){
	a.preventDefault()
	login_form.classList.add("show_login")
	cleanLoginFields()
}
function closeLogin(){
	login_form.classList.remove("show_login")
}

function validateLogin(){
	if(loginFields[0].value!="gjoaqim@gmail.com" && loginFields[1].value!="12345"){
		alert("Credenciais incorrectas!")
		cleanLoginFields()
	}else{window.location.assign("restrita.html")}
	
}

function cleanLoginFields(){
	for(let i=0;i<loginFields.length;i++){
		loginFields[i].value=""
	}
	loginFields[0].focus()
}
//Apresentando Menu Fixo e Botão de voltar ao Topo
const hidden=document.querySelectorAll(".hidden")

window.addEventListener("scroll",showHiddenElements)

function showHiddenElements(){
	let top=window.pageYOffset
	if(top>500){
		showElements()
	}else{
		hideElements()
	}
}

function showElements(){
	hidden.forEach(el=>{
		el.classList.add("show_elements")
	})
}

function hideElements(){
	hidden.forEach(el=>{
		el.classList.remove("show_elements")
	})
}
// Chamando a Página inicial
document.querySelectorAll(".home").forEach(el=>{
	el.onclick=function(){
		window.location.assign("index.html")
	}
})

//Chamando a Página de Tecnologias
document.querySelectorAll(".tecnologias").forEach(el=>{
	el.onclick=function(){
		window.location.assign("tech.html")
	}
})
