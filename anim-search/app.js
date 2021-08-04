$(".btn-group").mouseenter(()=>{
    console.log("active")
    const input=$("#input")
    $(".active").addClass("active-btn");
    input.addClass("active-in")
})
$(".btn-group").mouseleave(()=>{
    if($("#input").val() ===""){
    console.log("not")
    const input=$("#input")
    $(".active").removeClass("active-btn");
    input.removeClass("active-in")
    }
    else{

    }
})