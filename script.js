function formValidation(event) {
    event
    .preventDefault();
        
       let totalCreds= event.target.totalCreds.value;
        console.log("hi");
       let Duration= event.target.years.value;
       let course=  event.target.course.value;
        let creds=  event.target.courseCred.value;

        etcs = creds*(60*Duration)/totalCreds;
        console.log(etcs);

        //document.getElementById("result").innerHTML = etcs;

        const body=document.querySelector('#info');
        const tab = document.querySelector('table');
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const td1 = document.createElement('td');
        td1.innerHTML=course;
        td.innerHTML=etcs;
        tr.appendChild(td1);
        tr.appendChild(td);
        tbody.appendChild(tr);
        tab.appendChild(tbody);
        body.appendChild(tab);
           
         elm = document.getElementById('info');
         elm.scrollIntoView();
        
}