//get the data 
let users=[
    {
        profilePic:"https://images.unsplash.com/photo-1722865063195-9f221c9b6f6f?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=rodrigo-rodrigues-wolf-r-t-upSq4xj_rJk-unsplash.jpg",
        displayPic: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", pendingMessage: 10, location: "Delhi, India", name:"Harsh", age: 23, interest: ["Music", "foodie", "fitness"],
    Bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  delectus quis enim, quam, aperiam repudiandae doloribus iusto?", 
    isFreind: null
    },
    {   
        profilePic:"https://images.unsplash.com/photo-1722865063195-9f221c9b6f6f?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=rodrigo-rodrigues-wolf-r-t-upSq4xj_rJk-unsplash.jpg",
        displayPic: "https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", pendingMessage: 10, location: "Bengaluru, India", name:"Rahul", age: 26, interest: ["Music", "foodie", "fitness"],
    Bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. nda delectus quis enim, quam, aperiam repudiandae doloribus iusto?", 
    isFreind: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1722865063195-9f221c9b6f6f?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=rodrigo-rodrigues-wolf-r-t-upSq4xj_rJk-unsplash.jpg",
        displayPic: "https://images.unsplash.com/photo-1641893049612-b3c9700b6800?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", pendingMessage: 10, location: "Kolkata, India", name:"kartik", age: 21, interest: ["Music", "foodie", "fitness"],
    Bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. electus quis enim, quam, aperiam repudiandae doloribus iusto?", 
    isFreind: null
    },
    {    
        profilePic:"https://images.unsplash.com/photo-1722865063195-9f221c9b6f6f?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=rodrigo-rodrigues-wolf-r-t-upSq4xj_rJk-unsplash.jpg",
        displayPic: "https://images.unsplash.com/photo-1604690442607-39ad1eda77ba?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=rob-coates-1Z98l5vbm9M-unsplash.jpg", pendingMessage: 10, location: "Mumbai, India", name:"Mahesh", age: 29, interest: ["Music", "foodie", "fitness"],
    Bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. assumenda delectus quis enim, quam, aperiam repudiandae doloribus iusto?", 
    isFreind: null
    },
    {    
        profilePic:"https://images.unsplash.com/photo-1722865063195-9f221c9b6f6f?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=rodrigo-rodrigues-wolf-r-t-upSq4xj_rJk-unsplash.jpg",
        displayPic: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=mubariz-mehdizadeh-Py8F6-hRn5o-unsplash.jpg", pendingMessage: 10, location: "Mumbai, India", name:"Raj", age: 29, interest: ["Music", "foodie", "fitness"],
    Bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias voluptate itaque nisi assumenda delectus quis enim, quam, aperiam repudiandae doloribus iusto?", 
    isFreind: null
    },
];
function select(elem){
    return document.querySelector(elem);
}
// --- 1. SELECT ELEMENTS ---
let mainCard = document.querySelector(".main-card");
let incomingCard = document.querySelector(".incoming-card");

// Text Elements
let profileImg = document.querySelector(".pp-img");
let badgeCount = document.querySelector(".msgs");
let locationText = document.querySelector(".usrAd h4");
let nameText = document.querySelector(".usrNm h2:nth-child(1)");
let ageText = document.querySelector(".usrNm .age");

let curr = 2; // Start counting from 2
let isAnimating = false;

// --- 2. HELPER: Update Text ---
function updateText(index) {
    // Modulo (%) use karke index hamesha range me rakhenge
    let realIndex = index % users.length;
    
    let u = users[realIndex];
    profileImg.src = u.profilePic;
    badgeCount.textContent = u.pendingMessage;
    locationText.textContent = u.location;
    nameText.textContent = u.name; 
    ageText.textContent = u.age;
}

// --- 3. INITIAL SETUP ---
(function setInitial() {
    // Front Card: User 0
    select(".main-card img").src = users[0].displayPic;
    
    // Back Card: User 1
    select(".incoming-card img").src = users[1].displayPic;

    // Text: User 0
    updateText(0);
})();

function imageChange() {
    if(isAnimating) return;
    isAnimating = true;

    // --- STEP 1: DATA UPDATE (Turant yaha karo) ---
    let nextIndex = curr % users.length; 
    
    // Text ko turant update karo
    updateText(nextIndex); 

    // --- STEP 2: TEXT ANIMATION (Button click ke saath hi) ---
    gsap.from(".userData .element", {
        y: 100,
        opacity: 0,
        stagger: 0.06,
        ease: "power4.inOut",
        duration: 1.3
    });

    // --- STEP 3: CARD ANIMATION TIMELINE ---
    let tl = gsap.timeline({
        onComplete: function() {
            // --- MAGIC TRICK (Background Cleanup) ---
            let incomingSrc = select(".incoming-card img").src;
            select(".main-card img").src = incomingSrc;

            gsap.set(mainCard, {
                zIndex: 5,
                // x: 0,
                // y: 0,
                // scale: 1,
                opacity: 1,
                // rotation: 0
            });

            gsap.set(incomingCard, {
                zIndex: 4,
                // scale: 0.9,
                opacity: 1,
                // x: 0,
                // y: 0,
                // rotation: 0
            });

            curr++; 
            let futureIndex = curr % users.length; 
            select(".incoming-card img").src = users[futureIndex].displayPic;

            isAnimating = false;
        }
    });

    // --- STEP 4: VISUAL TRANSITION (Only incoming card animates) ---
    tl.to(incomingCard, {
        scale: 0.9,
        opacity: 1,
        ease: "circ.out",
        duration: .3
    }, "start");
}


// --- BUTTON LISTENER ---
select(".btn1").addEventListener("click", function() {
    imageChange();
    // Note: Maine text animation function ke andar move kar diya hai
    // taaki sync perfect rahe. Yahan se hata sakte hain.
});
// select(".btn2").addEventListener("click", function() {
//     imageChange();
// });

(function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function(element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`,'overflow-hidden');
        div.appendChild(element);
        select(".userData").appendChild(div);
    //     console.log(div);
    })
})();

// gsap.from(".userData .element", {
//     y: "100",
//     opacity: 1,
//     stagger: .06,
//     ease: power4.easeInOut,
//     duration: 1.5
// })