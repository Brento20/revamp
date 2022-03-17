async function newProjectHandler(event) {
    event.preventDefault();

    const issue = document.querySelector('#project-issue').value;
    if (issue == "") {
        document.getElementById("title-error").textContent = "Please provide a title for the project";
    } else {
        const instructions = document.querySelector('#project-instructions').value;
        if (instructions == "") {
            document.getElementById("steps-error").textContent = "Please provide instructions for the project";
        } else {
            const img_URL = document.getElementById("project-img").value;
            if (img_URL == "") {
                document.getElementById("img-error").textContent = "Please provide a URL for the project image";
            } else {
                const difficulty = document.querySelector('[name="levelRadio"]:checked').value;
                const category = document.querySelector('[name="categoryRadio"]:checked').value;

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
                //console.log("request sent");
                if (response.ok) {
                    document.getElementById("results").classList.remove('text-danger');
                    document.getElementById("results").classList.add('text-info');
                    document.getElementById("results").textContent = "Project added Successfully!";
                    document.getElementById("title-error").textContent = "";
                    document.getElementById("steps-error").textContent = "";
                    document.getElementById("img-error").textContent = "";
                    document.getElementById("add-project-form").reset();
                } else {
                    document.getElementById("results").classList.remove('text-info');
                    document.getElementById("results").classList.add('text-danger');
                    document.getElementById("results").textContent = "Server Error! Please try again later!";
                }
            }
        }
    }
}

document.getElementById('submit-btn').addEventListener('click', newProjectHandler);