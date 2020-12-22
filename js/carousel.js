{
    const images = [
        "img/orangeready.jpg",
        "img/nutsready.jpg",
        "img/bertineready.jpg",
        "img/profitrolready.jpg"
    ]
            /*<a href="#rye"><img src="img/orangeready.jpg" alt="с апельсиновыми цукатами"></a>
            <a href="#wheat"><img src="img/nutsready.jpg" alt="ореховый"></a>
            <a href="#yeast"><img src="img/bertineready.jpg" alt="тостовый хлеб Бертине"></a>
            <a href="#sweet"><img src="img/profitrolready.jpg" alt="профитроль"></a>*/

    let currentIdx = 0;
    function showCurrent() {
        const imgElement1 = document.querySelector(".carousel .img1");
        const imgElement2 = document.querySelector(".carousel .img2");
        const imgElement3 = document.querySelector(".carousel .img3");
        const idx2 = currentIdx + 1 >= images.length ? 0 : currentIdx + 1;
        const idx3 = idx2 + 1 >= images.length ? 0 : idx2 + 1;
        console.log(currentIdx, idx2, idx3);
        imgElement1.src = images[currentIdx];
        imgElement2.src = images[idx2];
        imgElement3.src = images[idx3];
    }

    function showNext() {
        currentIdx++;
        if (currentIdx >= images.length) currentIdx = 0;
        showCurrent();
    }

    function showPrev() {
        currentIdx--;
        if (currentIdx < 0) currentIdx = images.length - 1;
        showCurrent();
    }

    setInterval(showNext, 3000);
    document.querySelector(".carousel .next").addEventListener("click", showNext);
    document.querySelector(".carousel .prev").addEventListener("click", showPrev);
    showCurrent();
}