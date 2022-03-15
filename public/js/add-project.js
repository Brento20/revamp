async function newProjectHandler(event) {
    event.preventDefault();

    const issue = document.querySelector('#project-issue').value;
    console.log(issue);
    const instructions = document.querySelector('#project-instructions').value;
    console.log(instructions);
    //const imgURL = document.querySelector('#').value;
    const img_URL = "";
    const difficulty = document.querySelector('[name="flexRadioDefault"]:checked').value;
    //const difficulty = document.querySelector('#diff-radio-btn input:radio:checked').value;
    //console.log(difficulty);
    // const difficulty = "Easy";
    //const category = document.querySelector('#category-radio-btn input:radio:checked').value;
    //const category = "Plumbing";
    const category = document.querySelector('[name="btnradio"]:checked').value;
    console.log(category);

    const response = await fetch(`/add_tip`, {
        method: 'POST',
        body: JSON.stringify({
            issue,
            instructions,
            img_URL,
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

document.getElementById('submit-btn').addEventListener('click', newProjectHandler);