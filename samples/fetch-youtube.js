let url = https://www.youtube.com/;
let nodeArr2 = ['XmouoW1Gfro','4wQpuJo6RzM'];
Array.from(nodeArr2).forEach( res => {
    fetch(url + 'watch?v=' + res).then(response => response.blob())
    .then(blobres => {
        let urlCreator = window.URL || window.webkitURL;
        let imageUrl = urlCreator.createObjectURL(blobres);    
        console.log(imageUrl);
        var imgDOM = document.createElement("video");
        imgDOM.src = imageUrl;
        document.getElementById("logo").appendChild(imgDOM);
    })
    .catch(e => console.log(e));
});
