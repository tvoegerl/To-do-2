$(document).ready(function(){
    $("#add-new-to-do-button").click(function(){
        var todoBlock=$(this).closest("#new-todo-block")
        var item=todoBlock.find("#added-to-do")
        /*var description=todoBlock.find("#to-do-description")*/
        var pomodoroEstimate=todoBlock.find("#new-pomo-estimate")
        $("ul").append("<li> <input type='checkbox'/> " +item.val() + " <span class='pomodoros'>" + pomodoroEstimate.val() + " pomodoros</span> </li>")
        item.val("")
       // description.val("")
        pomodoroEstimate.val("")
    })
})