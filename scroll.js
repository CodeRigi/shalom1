// onScroll animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        // console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const animateScroll = document.querySelectorAll('.hidden')

animateScroll.forEach((el)=> observer.observe(el));

// counters

const counters = document.querySelectorAll('.count');
const speed = 1000;

// counters.forEach(counter => {
//     const updateCount = () => {
//         const target = +counter.getAttribute('data-target')

//         const count = +counter.innerHTML;


//         const inc = target / speed;

//         if(count < target){
//             counter.innerHTML = Math.ceil(count + inc);
//             setTimeout(updateCount, 1)
//         }else{
//             count.innerHTML = target
//         }
//     }
    
//     updateCount()
// })

const countObserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        // console.log(entry)
        if(entry.isIntersecting){
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target')
            
                    const count = +counter.innerHTML;
            
            
                    const inc = target / speed;
            
                    if(count < target){
                        counter.innerHTML = Math.ceil(count + inc);
                        setTimeout(updateCount, 1)
                    }else{
                        count.innerHTML = target
                    }
                }
                
                updateCount()
            })
        }
    })
})

counters.forEach((el)=> countObserver.observe(el));



