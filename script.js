const imageGallery = [
    { url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" },
    { url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e" },
    { url: "https://images.unsplash.com/photo-1501854140801-50d01698950b" },
    { url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d" },
    { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" },
    { url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e" },
    { url: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9" }
];

const bgOverlay = document.getElementById('bg-overlay');
const quoteText = document.getElementById('quote-text');
const vibeBtn = document.getElementById('new-vibe-btn');

async function updateVibe() {
    console.log("1. Function triggered");

    try {
        vibeBtn.innerText = "Finding vibe...";


        const randomIndex = Math.floor(Math.random() * imageGallery.length);
        const selectedImg = imageGallery[randomIndex];
        const imgUrl = `${selectedImg.url}?auto=format&fit=crop&w=1600&q=80`;

        console.log("2. New URL picked:", imgUrl);


        bgOverlay.style.backgroundImage = `url('${imgUrl}')`;
        console.log("3. Background style applied");


        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();

        quoteText.innerText = data.slip.advice;
        vibeBtn.innerText = "New Vibe";
        console.log("4. Quote updated successfully");

    } catch (err) {
        console.error("ERROR CAUGHT:", err);
        vibeBtn.innerText = "Try Again";
    }
}

if (vibeBtn) {
    vibeBtn.addEventListener('click', updateVibe);
    console.log("Event listener attached to button");
} else {
    console.error("COULD NOT FIND THE BUTTON! Check your HTML ID.");
}


updateVibe();