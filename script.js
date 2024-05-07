const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "OPAY 8146615178 Atairu abdullahi Momoh";
  gif.src =
    "https://www.bing.com/images/search?view=detailV2&ccid=oLJlJ%2bkI&id=D1D4FA1BCC6EDEB88469358D4DFF43775042242B&thid=OIP.oLJlJ-kIPtfnWPx_nl1brwEsDX&mediaurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2fa0b26527e9083ed7e758fc7f9e5d5baf%2ftenor.gif%3fitemid%3d16340527&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a0b26527e9083ed7e758fc7f9e5d5baf%3frik%3dKyRCUHdD%252f02NNQ%26pid%3dImgRaw%26r%3d0&exph=357&expw=498&q=gif+of+saying+thank+you&simid=607994931191809282&FORM=IRPRST&ck=B28204D48196AB97E28A917F54660CAE&selectedIndex=0&itb=0";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
