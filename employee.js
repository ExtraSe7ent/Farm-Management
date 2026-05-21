function empInfo(){
    const totalEmp = parseInt(document.getElementById('totalEmp').value);
    let emp ='';
    for(let i = 0;i<totalEmp;i++){
        emp += `
        <div>
            <h2>Employee ${i+1}:</h2>
            <label for="empname${i}">Tên nhân viên :</label><br>
            <input type="text" id="empname${i}" required><br>
            <label for="department${i}">Bộ phận quản lý công việc:</label><br>
            <select id="department${i}">
                <option value="Farmer">Farmer</option>
                <option value="Manager">Manager</option>
                <option value="PoultryCaretaker">Poultry Caretaker</option>
            </select>
            <br>
            <label for="salary${i}">Salary:</label><br>
            <input type="text" id="salary${i}" required><br>
        </div>
        `;
    } 
    emp += '<button type="button" onclick="displayEmp()">Display Employee</button>';
    document.getElementById('emp-details').innerHTML = emp;
}

function displayEmp(){
    const totalEmp = parseInt(document.getElementById('totalEmp').value);
    let html = '';
    for(let i = 0 ; i<totalEmp ; i++){
        const name = document.getElementById(`empname${i}`).value;
        const department = document.getElementById(`department${i}`).value;
        const salary = document.getElementById(`salary${i}`).value;
    
        html += `
        <div>
            <h3 style="text-align: center;">Thông tin nhân viên</h3> 
            <p><strong>Họ và tên nhân viên :</strong> ${name}</p>
            <p><strong>Bộ phận quản lý:</strong>${department}</p>
            <p><strong>Lương 1 tháng(VNĐ):</strong>${salary}VNĐ</p>
        </div>
        `;
    }
    document.getElementById('emp-details').innerHTML = html;
}

function saveData(){
    const totalEmp = parseInt(document.getElementById('totalEmp').value);
    const employees = [];

    for(let i=0;i<totalEmp;i++){
        const name = document.getElementById(`empname${i}`).value;
        const department = document.getElementById(`department${i}`).value;
        const salary = document.getElementById(`salary${i}`).value;

        employees.push({
            name:name,
            department:department,
            salary:salary
        });

        const jsonData = JSON.stringify(employees);
        const blob = new Blob([jsonData], {type:'application/json'});
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.style.display = 'none'
        a.href = url;
        a.download = 'employee_data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a)
    }
}