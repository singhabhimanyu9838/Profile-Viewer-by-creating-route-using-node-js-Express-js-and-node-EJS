const btn = document.getElementById("oldline");
const btn1 = document.getElementById("followerlist");
const underline=document.getElementById("underline1");
const pst =document.getElementById("pst");
const friend =document.getElementById("friend");
const postI =document.getElementById("postI");

btn1.addEventListener("click",()=>{
    if(underline.classList.contains('hidden')){
        console.log("clicked");
        underline.classList.remove('hidden');
        friend.classList.remove('hidden');
        btn.classList.add('hidden');
        pst.classList.add('hidden');
    }
})
postI.addEventListener("click",()=>{
    if(btn.classList.contains('hidden')){
        console.log("clicked too")
        btn.classList.remove('hidden');
        underline.classList.add('hidden');
        friend.classList.add('hidden');
        // btn.classList.add('hidden');
        pst.classList.remove('hidden');
    }
})

function toggleFollow() {
    const button = document.getElementById('follow-button');
    
    if (button.textContent === 'Follow') {
      button.textContent = 'Following';
      button.style.backgroundColor='#0e0e7a';
    } else {  
      button.textContent = 'Follow';
      button.style.backgroundColor = '';
    }
  }
  function Follow(button) {
    if (button.textContent === 'Follow') {
      button.textContent = 'Following';
      button.style.backgroundColor = '#0e0e7a';
    } else {
      button.textContent = 'Follow';
      button.style.backgroundColor = ''; 
    }
  }
  
  