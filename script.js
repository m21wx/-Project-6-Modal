

	let btn1 = document.querySelector('.btn1')	
	let btn2 = document.querySelector('.btn2')

	document.querySelector('.btn1 button').addEventListener('click',()=>{
			btn1.classList.remove('active')
			btn2.classList.add('active')
		})
	document.querySelector('.btn2 .icon').addEventListener('click',()=>{
			btn2.classList.remove('active')
			btn1.classList.add('active')
	})