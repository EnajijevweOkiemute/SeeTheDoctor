
      // Script for Index page only
    function loadDashBoard() {
      alert(`\n \n Welcome \n \r  You are Logged In`)
      location.href = 'dashboard.html';
    }

    //  Script for Dashboard Page only
    let cursor = 60;
    let move = document.querySelector('.cursor');
    function animate() {
      if(cursor < move.offsetLeft || cursor > move.offsetTop){
        console.log('yes');
        move.style.position = 'absolute';
        move.style.left = '100px';
        move.style.top = '5px';
        move.style.transition ='all.5s ease-in-out'
      }
      console.log(move.offsetTop);
      console.log(move.offsetLeft);
    }
  
    animate();