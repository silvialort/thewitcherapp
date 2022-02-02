window.onload = function() {

    const selector = document.getElementById('selector');
    const form = document.getElementById('form');
    let input = document.getElementById('price');
    let secondContainer = document.getElementsByClassName('talk');
    let image = document.getElementsByTagName('img')[0];
    let video = document.getElementById('video');
    
    selector.addEventListener('change', function(){      
        
        let selectedOption = this.value;
        
        secondContainer[0].classList.remove('active');
        secondContainer[1].classList.add('active');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let eightyPercent = (selectedOption * 80) / 100;
            if (isNaN(input.value)) {
                alert('Introduce números.');
            }else{
                if (input.value < eightyPercent) {
                    image.src = './assets/geraltangry.jpg';
                    secondContainer[1].classList.remove('active');
                    secondContainer[2].classList.add('active');
                }else{
                    image.src = './assets/geralthappy.jpg';
                    secondContainer[1].classList.remove('active');
                    secondContainer[3].classList.add('active');
                    document.addEventListener('keydown', (event) => {
                        if (event.code == 'KeyW') {
                            secondContainer[3].classList.remove('active');
                            video.style.display = 'flex';
                            image.style.display ='none';
                        }
                    })
                
                } 
            }
            
            
        })

    });
    
    



}