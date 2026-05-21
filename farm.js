function displayFarm(){
    var name = document.getElementById('name').value;
    var dienTich = document.getElementById('dienTich').value;
    var address = document.getElementById('Address').value;

var farmInfo = `
    <h2>Information</h2>
    <p><strong>Farm: </strong> ${name} </p>
    <p><strong>Diện tích(ha): </strong> ${dienTich}hecta</p>
    <p><strong>Address: </strong> ${address}</p>
`;
document.getElementById('farm-form').innerHTML = farmInfo;
}

function saveData(){
    const farm =[];
    const name = document.getElementById('name').value;
    const dienTich = document.getElementById('dienTich').value;
    const address = document.getElementById('Address').value;
    farm.push({
        name:name,
        dienTich:dienTich,
        address:address
    });
    const jsonData = JSON.stringify(farm);
    const blob = new Blob([jsonData],{type:'application/json'});
    const url = URL.createObjectURL(blob);

    const  a = document.createElement('a');
    a.style.display ='none';
    a.href = url;
    a.download = 'farm_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function next(){
    var name = document.getElementById('name').value;
    var dienTich = document.getElementById('dienTich').value;
    var address = document.getElementById('Address').value;

    if(name === '' || dienTich ==='' || address === ''){
        alert("Bạn phải nhập đầy đủ thông tin liên quan đến trang trại của bạn!!!!!!!")
        
    }
    else{
        window.location.href = 'trangchu.html';
    }
}