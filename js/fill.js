let signup1 = [];
    // example {id:1592304983049, title: 'Deadpool', year: 2015}
    const addsignup = (ev)=>{
        ev.preventDefault();  //to stop the form submitting
        let signup = {
            id: Date.now(),
            name: document.getElementById('name').value,
            email: document.getElementById('name1').value,
            number:document.getElementById('number').value
        }
        signup1.push(signup);
        document.forms[0].reset(); // to clear the form for the next entries
        //document.querySelector('form').reset();

        //for display purposes only
        //console.warn('added' , {signup} );
       // let pre = document.querySelector('#msg pre');
       // pre.textContent = '\n' + JSON.stringify(signup1, '\t', 2);

        //saving to localStorage
        localStorage.setItem('MysignupList', JSON.stringify(signup1) );
    }
    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('sign').addEventListener('click', addsignup);
    });
