
const boldIcon = document.getElementById('bold-btn');
const italicIcon = document.getElementById('italic-btn');
const textLeftIcon = document.getElementById('text-left');
const textCenterIcon = document.getElementById('text-center');
const textRightIcon = document.getElementById('text-right');
const textFontSize = document.getElementById('font-size');
const upperText = document.getElementById('upper-text');
const fontColor = document.getElementById('font-color');
const textArea = document.getElementById('textarea');


const setBoldStyle = document.getElementById('bold-btn').addEventListener('click', function(){
    // const textAreaValue = textArea.value;
    textArea.style.fontWeight = 'bold';
})

const setItalicStyle = document.getElementById('italic-btn').addEventListener('click', function(){
    textArea.style.fontStyle = 'italic';
})

const setUnderlineStyle = document.getElementById('underline-btn').addEventListener('click', function(){
    textArea.style.textDecoration = 'underline';
})

const setTextLeftStyle = document.getElementById('text-left').addEventListener('click', function(){
    textArea.style.textAlign = 'left';
})

const setTextCenterStyle = document.getElementById('text-center').addEventListener('click', function(){
    textArea.style.textAlign = 'center'
})


const setTextRightStyle = document.getElementById('text-right').addEventListener('click', function(){
    textArea.style.textAlign = 'right';
})

// const setFontSizeStyle = document.getElementById('font-size').addEventListener('click', function(){
//     const fontSizeValue = setFontSizeStyle.value;
//     // textArea.value = fontSizeValue;
//     textArea.style.fontSize = fontSizeValue

// })


const setUpperCaseStyle = document.getElementById('upper-text').addEventListener('click', function(){
    const textAreavalue = textArea.value;
    const result = textAreavalue.toUpperCase();
    textArea.value = result;
})


const setColorStyle = document.getElementById('font-color').addEventListener('click', function(){
    textArea.value = setColorStyle.value
})