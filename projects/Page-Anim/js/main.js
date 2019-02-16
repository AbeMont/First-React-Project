
// optional: Add this script if you want the effect when navigating to a different page

let anchors; 

(document.querySelectorAll('[data-switch-page]')) ? 
 anchors = (Array.from(document.querySelectorAll('[data-switch-page]'))) 
: retrun;


if(anchors){
    anchors.forEach((anchor)=>{
        anchor.addEventListener('click', (e)=>{
            e.preventDefault();
            let linkLocation = anchor.href;
            document.querySelector('.initial-page').classList.add('leave');
            setTimeout(()=>{
                window.location.href = linkLocation;
            },500);
        });
    });
}