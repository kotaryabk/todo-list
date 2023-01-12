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
    document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=Lax";
   

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
        let restoreBtn = document.createElement('button');

        cell1.innerHTML = ele.Id;
        cell2.innerHTML = ele.Task;
        cell3.innerHTML = ele.Status;

        cRow.appendChild(cell1)
        cRow.appendChild(cell2)
        cRow.appendChild(cell3)
        cRow.appendChild(cell4)
        cRow.appendChild(cell5)

        getTbody.appendChild(cRow);
        if (ele.Status == 'Created') {
           
            let cancelbtn = document.getElementById(`${ele.Id}`);
            let completedbtn = document.getElementById(`${index}`);

            cancledtBtn.innerHTML = "Cancel";
            cancledtBtn.setAttribute('class', "btn btn-danger");
            cancledtBtn.setAttribute('id', `${ele.Id}`);
            compBtn.innerHTML = "Done";
            compBtn.setAttribute('class', "btn btn-success");
            compBtn.setAttribute('id', index);
            compBtn.setAttribute('onClick', cancelfun(ele,index));

            cell4.appendChild(cancledtBtn);
            cell5.appendChild(compBtn);
           

            // cancelbtn.addEventListener("click", () => {
            //     // e.preventDefault()
            //     ele.Status = 'Cancled';
            //     todoList[index] = ele;
            //     localStorage.setItem('todoListData', JSON.stringify(todoList));
           
            // });

            // completedbtn.addEventListener("click", (e) => {
            //     // e.preventDefault()
            //     ele.Status = 'Completed'
            //     todoList[index] = ele;
            //     localStorage.setItem('todoListData', JSON.stringify(todoList));
            //     createTable();

            //     // if (ele.Status == "Completed") {
            //     //     cancelbtn.style.display = "none";
            //     //     cRow.style.color = "green";
            //     //     completedbtn.innerText = "Restore";
            //     // } else {
            //     //     completedbtn.innerText = "Done";
            //     //     cancelbtn.style.display = "block";
            //     // }
            // });

            // createTable();

        } else {
            // let cell4 = document.createElement('td');
        
          
            let rebtn = document.getElementById(`${ele.Id}`);
            restoreBtn.innerHTML = "Done";
            restoreBtn.setAttribute('class', "btn btn-danger");
            restoreBtn.setAttribute('id', `${ele.Id}`);
           
            cell4.appendChild(restoreBtn);
            cell5.appendChild(restoreBtn);
           
           
           
            // rebtn.addEventListener("click", (e) => {
            //     e.preventDefault()
            //     ele.Status = 'Created';
            //         todoList[index] = ele;
            //         localStorage.setItem('todoListData', JSON.stringify(todoList));
             
            //   });  
     
        }

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
        todoList = [...getLocalData]
    }
}

function cancelfun(ele , index){
    ele.Status = 'Cancled';
    todoList[index] = ele;
    localStorage.setItem('todoListData', JSON.stringify(todoList));

}