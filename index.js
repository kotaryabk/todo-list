let task = document.getElementById('task')
let addBtn = document.querySelector('#addTaskbtn');
let getTbody = document.getElementById('tbody');

let todoList = []

  
addBtn.addEventListener('click',
    () => {
       
        let id = Math.floor(Math.random() * 9999);
        let taskObj = {
            Id: id,
            Task: task.value,
            Status: 'Created'
        }
        todoList.push(taskObj)
        localStorage.setItem('todoListData', JSON.stringify(todoList));
        task.value = '';
        createTable();
    })


let createTable = () => {
    let getLocalData = JSON.parse(localStorage.getItem('todoListData'));
   

    getTbody.innerHTML = '';

    getLocalData.map((ele, index) => {
        let cRow = document.createElement('tr');
        let cell1 = document.createElement('td');
        let cell2 = document.createElement('td');
        let cell3 = document.createElement('td');
        let cell4 = document.createElement('td');
        let cell5 = document.createElement('td');
        let cancledtBtn = document.createElement('button');
        let compBtn = document.createElement('button');
        cell1.innerHTML = ele.Id;
        cell2.innerHTML = ele.Task;
        cell3.innerHTML = ele.Status;
        cancledtBtn.innerHTML = "Cancel";
        cancledtBtn.setAttribute('class', "btn btn-danger");
        cancledtBtn.setAttribute('id', `${ele.Id}`);
        compBtn.innerHTML = "Done";
        compBtn.setAttribute('class', "btn btn-success");
        compBtn.setAttribute('id', index);
        cell4.appendChild(cancledtBtn);
        cell5.appendChild(compBtn);
        cRow.appendChild(cell1)
        cRow.appendChild(cell2)
        cRow.appendChild(cell3)
        cRow.appendChild(cell4)
        cRow.appendChild(cell5)
        
        getTbody.appendChild(cRow);

        let cancelbtn = document.getElementById(ele.Id);
        let completedbtn = document.getElementById(`${index}`);

        cancelbtn.addEventListener("click", (e) => {

            //  e.preventDefault()
            //     ele.Status = 'Cancled';
            //   todoList[index] = ele;
            //   localStorage.setItem('todoListData', JSON.stringify(todoList));
            //   createTable(); 

            if (cancelbtn.innerText == "Cancel") {
                cell2.style.textDecoration = "line-through";
                cRow.style.color="red";
                completedbtn.style.display = "none";
                cancelbtn.innerText = " Restore";
              } else {
                  cancelbtn.innerText = " Cancel";
                cell2.style.textDecoration = "none";
                cRow.style.color="black";
                completedbtn.style.display = "block";
              }   
            });

          completedbtn.addEventListener("click", (e) => {
            // e.preventDefault()
                ele.Status = 'Completed'
                todoList[index] = ele;
                localStorage.setItem('todoListData', JSON.stringify(todoList));
                createTable();

            if (completedbtn.innerText = "Restore") {
                cancelbtn.style.visibility = "hidden";   
                cRow.style.color="green";
                completedbtn.innerText = "Restore";
              } else {
                completedbtn.innerText = "Done";
                cancelbtn.style.textDecoration = "none";
                cancelbtn.style.visibility = "visible";
              }  
          });

        // cancelbtn.addEventListener('click', (e) => {
        //     e.preventDefault()
        //     ele.Status = 'Cancled';
        //     todoList[index] = ele;
        //     localStorage.setItem('todoListData', JSON.stringify(todoList));
        //     createTable();
        
        // })
        // completedbtn.addEventListener('click', () => {
        //     ele.Status = 'Completed'
            
        //     todoList[index] = ele;
        //     localStorage.setItem('todoListData', JSON.stringify(todoList));
        //     createTable();
            
        // })

    })
}
if (localStorage != null) {
    let getLocalData = JSON.parse(localStorage.getItem('todoListData'));
if (getLocalData) {
    createTable();
    todoList=[...getLocalData]   
}
}