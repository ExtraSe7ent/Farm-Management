function inputCrop(){
    const totalCrop = parseInt(document.getElementById('totalCrop').value);
    let html = '';
    for(let i = 0; i<totalCrop;i++){
        html += `
        <div>
            <h2>Crop ${i+1}:</h2>
            <label for="nameCrop${i}">Tên Cây Trồng:</label><br>
            <select id="nameCrop${i}">
                <option value="Corn">Corn</option>
                <option value="Tomato">Tomato</optin>
                <option value="Wheat">Wheat</option>
            </select>
            <br>
            <label for="plantingDate${i}">Planting Date:</label><br>
            <input type="date" id="plantingDate${i}" required><br>
            <label for="harvestDate${i}">Harvest Date:</label><br>
            <input type="date" id="harvestDate${i}" required><br>
            <label for="quantity${i}">Quantity:</label><br>
            <input type="text" id="quantity${i}" required><br>
            <label for="area${i}">Area:</label><br>
            <input type="text" id="area${i}" required><br>
        </div>
        `;
    }
    html += `<button type="button" onclick="CropInfo()">Hiển thị thông tin cây trồng</button>`;
    document.getElementById('crop-details').innerHTML = html;
}

function CropInfo(){
    const totalCrop = parseInt(document.getElementById('totalCrop').value);
    let html = '';
    for(let i = 0; i<totalCrop;i++){
        const name = document.getElementById(`nameCrop${i}`).value;
        const plantingDate = document.getElementById(`plantingDate${i}`).value;
        const harvestDate = document.getElementById(`harvestDate${i}`).value;
        const quantity = document.getElementById(`quantity${i}`).value;
        const area = document.getElementById(`area${i}`).value;

        html += `
        <div>
            <h3 style="text-align: center;">Thông tin</h3>
            <p><strong>Tên cây :</strong>${name}</p>
            <p><strong>Ngày trồng:</strong>${plantingDate}</p>
            <p><strong>Ngày thu hoạch dự kiến:</strong>${harvestDate}</p>
            <p><strong>Số lượng cây:</strong>${quantity} cây</p>
            <p><strong>Diện tích đất cây trồng(hecta):</strong>${area} hecta</p>
        </div>
        `;         
    }
    document.getElementById('crop-details').innerHTML = html;
}

function saveData(){
    const totalCrop = parseInt(document.getElementById('totalCrop').value);
    const crops = []

    for(let i=0; i<totalCrop;i++){
        const name = document.getElementById(`nameCrop${i}`).value;
        const plantingDate = document.getElementById(`plantingDate${i}`).value;
        const harvestDate = document.getElementById(`harvestDate${i}`).value;
        const quantity = document.getElementById(`quantity${i}`).value;
        const area = document.getElementById(`area${i}`).value;

        crops.push({
            name: name,
            plantingDate:plantingDate,
            harvestDate:harvestDate,
            quantity:quantity,
            area:area
        });
        const jsonData = JSON.stringify(crops);
        const blob = new Blob([jsonData], {type:'application/json'});
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'crop_data.json';
        document.body.appendChild(a)
        a.click();
        document.body.removeChild(a);
    }
}