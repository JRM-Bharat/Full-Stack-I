const svg=document.getElementById("canvas");
const clrPicker=document.getElementById("colorPicker");
const undoBtn=document.getElementById("undoBtn");
const countText=document.getElementById("count");

let circles=[];

svg.addEventListener("click", (e)=>{
    const pt = svg.createSVGPoint();

    pt.x = e.clientX;
    pt.y = e.clientY;

    const svgPoint= pt.matrixTransform(
        svg.getScreenCTM().inverse()
    );

    const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
    );

    circle.setAttribute("cx", svgPoint.x);
    circle.setAttribute("cy", svgPoint.y);
    circle.setAttribute("r", 8);
    circle.setAttribute("fill", clrPicker.value);

    svg.appendChild(circle);
    circles.push(circle);

    countText.textContent= `Circles drawn: ${circles.length}`;
});

undoBtn.addEventListener("click", ()=>{
    if(circles.length>0){
        const lastCircle = circles.pop();
        svg.removeChild(lastCircle);
        countText.textContent= `Circles drawn: ${circles.length}`;
    }
});