const btnGenerator = document.querySelector("#btnGenerator");
const btnDownload = document.querySelector("#btnDownload");
const btnShare = document.querySelector("#btnShare");


/* Generate QR Code */

btnGenerator.addEventListener('click', function(e){
    
    e.preventDefault();

    const inputUrl = document.querySelector("#qrText").value;

    if(inputUrl === ""){
        alert("Enter an url");
    }else{
        document.body.classList.add('qr__result');

        qrCodeDisplay(inputUrl);
    }

}, false);

const qrCodeDisplay = function(url){
    new QRCode(document.querySelector("#qrCode"),{
        text: url,
        width: 180,
        height: 180,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    })
}


/* Download QR Code Image */

btnDownload.addEventListener('click', function(){

    let img = document.querySelector("#qrCode img");
    
    if(img !== null){
        let imgAttr = img.getAttribute("src");
        btnDownload.setAttribute("href", imgAttr); 

    }else{
        btnDownload.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`); 
    }


    console.log(img);

});


/* Copy QR Code Url / Share */

btnShare.addEventListener('click', async (e) => {

    e.preventDefault();

    let text = document.querySelector("#qrText").value;

    try { 
        var contenido = await navigator.clipboard.writeText(`${text}`); 
        alert(`${text} copied to clipboard!`);
    }
    catch(ex) { 
        alert('Unable to copy to clipboard.');
    }
    
}, false);


