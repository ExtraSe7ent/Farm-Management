function inputEquipment(){
    const totalEqm = parseInt(document.getElementById('totalEqm').value);
    let html = '';

    for(let i=0; i<totalEqm;i++){
        const totalEqm = document.getElementById('totalEqm').value;
        html += `
        <div>
            <h2>Equipment ${i+1}:</h2>
            <label for="eqmname${i}">Nhập tên dụng cụ : </label><br>
            <input type="text" id="eqmname${i}" required><br>
            <label for="eqmquantity${i}">Số lượng dụng cụ có trong trang trại:</label><br>
            <input type="number" id="eqmquantity${i}" required><br>
            <label for="price${i}">Giá(VNĐ-cho 1 dụng cụ) :</label><br>
            <input type="text" id="price${i}" required><br>
        </div>
        `;
    }
    html += `<button type="button" onclick="displayEqm()">Display Equipment</button>`;
    document.getElementById('eqm-details').innerHTML = html;
}

function displayEqm(){
    const totalEqm = parseInt(document.getElementById('totalEqm').value);
    let html = '';

    for(let i = 0;i<totalEqm;i++){
        const name = document.getElementById(`eqmname${i}`).value;
        const quantity = document.getElementById(`eqmquantity${i}`).value;
        const price = document.getElementById(`price${i}`).value;

        html += `
        <div>
            <p><strong>Tên dụng cụ có trong trang trại:</strong>${name}</p>
            <p><strong>Số lượng <span>${name}</span> có trong trang trại là:</strong>${quantity}</p>
            <p><strong>Giá(1 dụng cụ):</strong>${price} VNĐ</p>
        </div>
        `;
    }
    document.getElementById('eqm-details').innerHTML = html;
}   

function saveData(){
    const totalEqm = parseInt(document.getElementById('totalEqm').value);
    const equipments = [];

    for(let i = 0;i<totalEqm;i++){
        const name = document.getElementById(`eqmname${i}`).value;
        const quantity = document.getElementById(`eqmquantity${i}`).value;
        const price = document.getElementById(`price${i}`).value;

        equipments.push({
             name:name,
             quantity:quantity,
             price:price
        });

        const jsonData = JSON.stringify(equipments);
        const blob = new Blob([jsonData], {type: 'application/json'});
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'equipment_data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}