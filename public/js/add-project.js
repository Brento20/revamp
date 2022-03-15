async function newProjectHandler(event) {
    event.preventDefault();

    const issue = document.querySelector('#project-issue').value;
    console.log(issue);
    const instructions = document.querySelector('#project-instructions').value;
    console.log(instructions);
    //const imgURL = document.querySelector('#').value;
    const imgURL = "";
    const difficulty = document.querySelector('#diff-radio-btn input:radio:checked').value;
    console.log(difficulty);
    // const difficulty = "Easy";
    const category = document.querySelector('#category-radio-btn input:radio:checked').value;
    console.log(category);

    const response = await fetch(`/add_tip`, {
        method: 'POST',
        body: JSON.stringify({
            issue,
            instructions,
            imgURL,
            difficulty,
            category,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log("request sent");
    if (response.ok) {
        //maybe update a span with "Your tip has been added successfully"
        //document.location.replace('/');
        document.getElementById("results").textContent = "Project added Successfully!";
    } else {
        alert('Failed to add project');
    }
}

document
    .querySelector('#submit-btn')
    .addEventListener('submit', newProjectHandler);