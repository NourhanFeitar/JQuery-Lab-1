let add= $("#btnAdd");


add.click(function()
{
    let row=document.createElement('div');
    let task=document.createElement('p')
    let doneBtn=document.createElement('button');
    let deleteBtn=document.createElement('button');
    let wholeList=$("#container")
    

    // ADDING TASKS TO TABLE
    $(task).css("display","inline-block");
    task.innerText=$("input").val();
    $(task).css("marginRight","20px")
    row.append(task);
    wholeList.append(row);

    //ADDING DONE BUTTON
    $(doneBtn).css("display","inline-block");
    doneBtn.innerText="Done";
    row.append(doneBtn);

    //ADDING DELETE BUTTON

    deleteBtn.innerText="Delete";
    $(deleteBtn).css("display","inline-block");
    row.append(deleteBtn);

    //EVENTS ON DELTE BUTTON
    $(deleteBtn).click(function(){
        $(row).remove()
    })


    //EVENTS ON ADD BUTTON
    $(doneBtn).click(function()
    {
        $(row).css("backgroundColor","green")
    })







})
