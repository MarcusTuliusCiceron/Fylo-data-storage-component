const progressBar = document.querySelector('.progress')
const input = document.querySelector('.input')
const remainingStorage = document.querySelector('.remaining_storage')
const usedStorage = document.querySelector('.used_storage')


input.addEventListener('input', ()=>{
    console.log(input.value)
    usedStorage.innerText = `${input.value} GB`
    remainingStorage.innerText = `${1000-input.value}`
    document.documentElement.style.setProperty('--progress', `${Math.floor(input.value/1000*100)}%` )
})

usedStorage.innerText = `${input.value} GB`
remainingStorage.innerText = `${1000-input.value}`
document.documentElement.style.setProperty('--progress', `${Math.floor(input.value/1000*100)}%`)