// click off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPtopagation();
});

// Add new todo from inpout
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grapping new todo text from inpout
        let todoText = $(this).val();
        $(this).val("");
        // Create new li and add to ul
        $("ul").append("<li><span id='clickable'><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});