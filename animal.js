function inputAnimal(){
    const totalAnimal =  parseInt(document.getElementById('totalAnimal').value);
    let anmFarm='';
for(let i = 0; i<totalAnimal;i++){
    anmFarm+= `
    <div style="margin-top: 20px;">
    <h2>Animal ${i+1}: <h2>
    <label for="species${i}">Loài :</label><br>
    <select id="species${i}">
        <option value="Chicken">Chicken</option>
        <option value="Cow">Cow</option>
        <option value="Sheep">Sheep</option>
    </select>
    <br>

    <label for="food${i}">Thức ăn:</label><br>
    <input type="text" id="food${i}" required><br>
    <label for="age${i}">Tuổi :</label><br>
    <input type="text" id="age${i}" required><br>
    <label for="gender${i}">Giới tính:</label><br>
    <input type="text" id="gender${i}" required><br>
    <label for="sound${i}">Sound:</label><br>
    <select id="sound${i}">
        <option value="Cluck"> Cluck Cluck Cluck</option>
        <option value="Moo">Moo Moo Moo</option>
        <option value="Bleat">Bleat Bleat Bleat</option>
    </select>
    <br>
    <label for="dacDiem${i}">Đặc điểm riêng:</label><br>
        <select id="dacDiem${i}">
            <option value="đẻ trứng">Đẻ trứng(Số lượng-quả):</option>
            <option value="sản xuất sữa">Lượng sữa(lít):</option> 
            <option value="sản xuất lông">Lượng lông sản xuất(kg):</option>
        </select>   
    <br> 
    <label for="sanPham${i}">Sản phẩm sản xuất:</label><br>
    <input type="text" id="sanPham${i}" required><br>
    </div>
    `;
}
anmFarm += '<button type="button" onclick="displayAnimal()">Display Animals</button>';
document.getElementById('anm-details').innerHTML = anmFarm;
}
function displayAnimal(){
    const totalAnimal =  parseInt(document.getElementById('totalAnimal').value);
    let html='';
    for(let i = 0; i<totalAnimal;i++){
        const species = document.getElementById(`species${i}`).value;
        const food = document.getElementById(`food${i}`).value;
        const age = document.getElementById(`age${i}`).value;
        const gender = document.getElementById(`gender${i}`).value;
        const sound = document.getElementById(`sound${i}`).value;
        const dacDiem = document.getElementById(`dacDiem${i}`).value;
        const sanPham = document.getElementById(`sanPham${i}`).value;
        html += `
            <br>
            <p><strong>Species:</strong>${species}</p>
            <p><strong>Food:</strong>${food}</p>
            <p><strong>Age:</strong>${age}</p>
            <p><strong>Gender:</strong>${gender}</p>
            <p><strong>Sound:</strong>${sound}</p>
            <p><strong>Đặc điểm riêng là</strong> ${dacDiem}</p>
            <p><strong>Sản phẩm : </strong>${sanPham}</p>
    `;
    }
document.getElementById('anm-details').innerHTML = html;
}

function SaveData() {
    const totalAnimal = parseInt(document.getElementById('totalAnimal').value);
    const animals = [];

    for (let i = 0; i < totalAnimal; i++) {
        const species = document.getElementById(`species${i}`).value;
        const food = document.getElementById(`food${i}`).value;
        const age = document.getElementById(`age${i}`).value;
        const gender = document.getElementById(`gender${i}`).value;
        const sound = document.getElementById(`sound${i}`).value;
        const dacDiem = document.getElementById(`dacDiem${i}`).value;
        const sanPham = document.getElementById(`sanPham${i}`).value;

        animals.push({
            species: species,
            food: food,
            age: age,
            gender: gender,
            sound: sound,
            dacDiem: dacDiem,
            sanPham: sanPham
        });
    }

    const jsonData = JSON.stringify(animals);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'animal_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}