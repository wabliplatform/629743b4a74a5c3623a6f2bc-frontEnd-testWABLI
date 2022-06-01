let apiArticleApi = new TempApi.ArticleApi();import TempApi from '../src/index';let article = new TempApi.Article();document.getElementById('i80a').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/HomePage' ;}};
 function calculateSize(img, maxWidth, maxHeight) {
      let width = img.width;
      let height = img.height;
    
      // calculate the width and height, constraining the proportions
      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }
      return [width, height];
    }const convertBase64 = (file) => {
          return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
          });
        };
document.getElementById('formFile').addEventListener("change", async(e) => {
            
      const MAX_WIDTH = 300;
      const MAX_HEIGHT = 300;
      const MIME_TYPE = "image/jpeg";
      const QUALITY = 0.9;
      const file = e.target.files[0]; // get the file
      const blobURL = URL.createObjectURL(file);
      const img = new Image();
      img.src = blobURL;
      img.onerror = function () {
        URL.revokeObjectURL(this.src);
        console.log("Cannot load image");
      };
      img.onload = function () {
        URL.revokeObjectURL(this.src);
        const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
        const canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        canvas.toBlob(
          async (blob) => {
            const base64 = await convertBase64(blob);
    
            document
              .getElementById('formFile')
              .setAttribute("data-image-base64", base64);
            document
              .getElementById('formFile')
              .setAttribute("name", e.target.files[0].name);
          },
          MIME_TYPE,
          QUALITY
        );
      };});
$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );$(
      function () { $("#datepicker-2").datepicker({format: 'dd-mm-yyyy'}); }
    );document.getElementById('ip7gb').onclick = (event) => {
    event.preventDefault();
    article['articleImage'] = {
        data: document.querySelector("[annotationname = 'articleImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'articleImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'articleImage']").src,
        name: document.querySelector("[annotationname = 'articleImage']").getAttribute("name")
      };
      article['articleTitle'] = document.querySelector("[annotationname = 'articleTitle']").value;article['articleDate'] = document.querySelector("[annotationname = 'articleDate']").value;article['articlePost'] = document.querySelector("[annotationname = 'articlePost']").value;apiArticleApi.createarticle( article, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {  location.href= '/HomePage/'+response.body.query._id+'' ;}}});};window.onload = () => {};